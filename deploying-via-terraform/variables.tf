variable "url" {
  type = string
  default = "https://cloud.ametnes.com/api/c/v1"
  description = "The ametnes cloud endpoint to send your api requests to"
}

variable "token" {
  type = string
  description = "The ametnes cloud api doken to use. You'd need to create one in the ametnes cloud console corresponding to your regsitered email"
  sensitive = true
}

variable "username" {
  type = string
  description = "This is your ametnes cloud registered email address"
}

variable "project" {
  type = string
  description = "The project you'd like to create your resources in"
}

variable "location_name" {
  type = string
  description = "The name of the location where your resources will be provisioned"
}

variable "location_code" {
  type = string
  description = "The unique code of the location where your resources will be created"
}

variable "insecure" {
  type = bool
  default = false
}

variable admin_user {
  type = string
  description = "Username to use for the Admin user"
}
variable admin_password {
  type = string
  description = "Password to use for the Admin user"
  sensitive = true
}
variable cluster_user {
  type = string
  description = "Username to use for the Cluster user"
}
variable cluster_password {
  type = string
  description = "Password to use for the Cluster user"
  sensitive = true
}
