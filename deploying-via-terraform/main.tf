terraform {
  required_providers {
    ametnes = {
      source = "ametnes/ametnes"
      version = "0.3.2"
    }
  }
}

provider "ametnes" {
  host = var.url
  token = var.token
  username = var.username
  insecure = var.insecure
}

data "ametnes_project" "project" {
  name = var.project
}

data "ametnes_location" "location" {
  name = var.location_name
  code = var.location_code
}

resource "ametnes_network" "network" {
  name = "NETWORK-EUW10"
  project = data.ametnes_project.project.id
  location = data.ametnes_location.location.id
}

resource "ametnes_service" "harperdb" {
  name = "HarperDB-Demo-Instance-1"
  project = data.ametnes_project.project.id
  location = data.ametnes_location.location.id
  kind = "harperdb:3.3"
  description = "HarperDB Demo Instance"
  network = ametnes_network.network.resource_id
  capacity {
    storage = 100
    memory = 4
    cpu = 2
  }

  config = {
    "admin.user" = var.admin_user
    "admin.password" = var.admin_password
    "clustering.user" = var.cluster_user
    "clustering.password" = var.cluster_password
  }

  nodes = 1
}

output "connections" {
  value = {
    harperdb = concat(
      ametnes_service.harperdb.connections,
    )
  }
}