# Deploying Via Terraform

## Requirements
* [Ametnes Cloud Account](https://cloud.ametnes.com/)
* [Terraform](https://www.terraform.io/)

## Getting Started

To deploy an Ametnes Service via Terraform, first copy the secrets file to a non-example file:

```shell
mv secrets.auto.tfvars.example secrets.auto.tfvars
```

And then edit the configuration so it has your information, such as your admin credentials, token, location, etc.

In `main.tf`, ensure the configuration is as you desire, for example version, name, etc.

If you are using multiple services, ensure the `connections` output has all services within the value.

## Deploying
```shell
# Initialize the dependency lock file (first time runs)
terraform init

# Deploy the changes
terraform apply
```

## Destroying
```shell
# Terminate the service and location
terraform destroy
```