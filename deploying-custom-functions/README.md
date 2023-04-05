# Deploying Custom Functions

Example showing how to deploy HarperDB Custom Functions via a CI/CD action.

Uses a GitHub Action you can find more information on here:

* [Deploy HarperDB Custom Functions GitHub Action](https://github.com/makvoid/deploy-harperdb-cf-action)
* [Sample project using the GitHub Action](https://github.com/makvoid/deploy-harperdb-cf-action-sample)

## Steps
1. Configure the repository secrets as described in the [GitHub Action Project Sample](https://github.com/makvoid/deploy-harperdb-cf-action-sample#adding-secrets)
2. Change the default values provided in the deployment file if needed to point it to your Custom Functions
3. Add the deployment action to your repository

* [deployment.yml](deployment.yml)