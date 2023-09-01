# tf-lambda-ts
Testing terraform with AWS (Lambda and DynamoDB) and TypeScript.

Basic lambda function that store the IP address into DynamoDB.

The main purpose is testing Terraform.
# Requirements
- node
- npm
- terraform
# Build
To transpile .ts code into .js use:
```bash
npm run build
```
`node_modules` folder is copied into dist in order to zip `dist` folder and push it into `S3` (needed by `Lambda`).

To initialize terraform use:
```bash
terraform init
```
and deploy with:
```bash
terraform apply
```
