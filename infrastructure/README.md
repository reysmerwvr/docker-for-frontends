# Infrastructure

## GitHub

- GitHub for source code storage

## AWS

- AWS CodeBuild for building the application
- AWS CodePipeline for CI/CD
- Deployment:
  - Option 1: Github Actions for deploying the application to AWS Elastic Beanstalk
  - Option 2: AWS CodeDeploy for deploying the application to AWS Elastic Beanstalk

- Hosting: 
    - AWS Elastic Beanstalk for hosting the application


### Secret Manager

```bash
# To create the stack:

aws cloudformation create-stack \
    --stack-name DffSmStack \
    --template-body file://infrastructure/cloudformation/secrets-manager.yml \
    --capabilities CAPABILITY_NAMED_IAM \
    --profile iamadmin-general

# To check the status of your stack creation:

aws cloudformation describe-stacks \
    --stack-name DffSmStack \
    --profile iamadmin-general

# To update the stack:

aws cloudformation update-stack \
    --stack-name DffSmStack \
    --template-body file://infrastructure/cloudformation/secrets-manager.yml \
    --capabilities CAPABILITY_NAMED_IAM \
    --profile iamadmin-general

# To delete the stack:

aws cloudformation delete-stack \
    --stack-name DffSmStack \
    --profile iamadmin-general
```

### Storage

```bash
# To create the stack:

aws cloudformation create-stack \
    --stack-name DffS3Stack \
    --template-body file://infrastructure/cloudformation/s3-buckets.yml \
    --capabilities CAPABILITY_NAMED_IAM \
    --profile iamadmin-general

# To check the status of your stack creation:

aws cloudformation describe-stacks \
    --stack-name DffS3Stack \
    --profile iamadmin-general

# To update the stack:

aws cloudformation update-stack \
    --stack-name DffS3Stack \
    --template-body file://infrastructure/cloudformation/s3-buckets.yml \
    --capabilities CAPABILITY_NAMED_IAM \
    --profile iamadmin-general

# To get the output values of the stack:

aws cloudformation describe-stacks \
    --stack-name DffS3Stack \
    --query "Stacks[0].Outputs" \
    --profile iamadmin-general

# To delete the stack:

aws cloudformation delete-stack \
    --stack-name DffS3Stack \
    --profile iamadmin-general
```

### Identity Manager

- AWS Identity and Access Management (IAM) for managing user identities and permissions
- AWS IAM Roles and Policies for managing access to AWS resources
- AWS IAM Instance Profiles for managing access to EC2 instances

```bash
# To create the stack:

aws cloudformation create-stack \
    --stack-name DffIamStack \
    --template-body file://infrastructure/cloudformation/iam-roles.yml \
    --capabilities CAPABILITY_NAMED_IAM \
    --profile iamadmin-general

# To check the status of your stack creation:

aws cloudformation describe-stacks \
    --stack-name DffIamStack \
    --profile iamadmin-general

# To update the stack:

aws cloudformation update-stack \
    --stack-name DffIamStack \
    --template-body file://infrastructure/cloudformation/iam-roles.yml \
    --capabilities CAPABILITY_NAMED_IAM \
    --profile iamadmin-general

# To get the output values of the stack:

aws cloudformation describe-stacks \
    --stack-name DffIamStack \
    --query "Stacks[0].Outputs" \
    --profile iamadmin-general

# To delete the stack:

aws cloudformation delete-stack \
    --stack-name DffIamStack \
    --profile iamadmin-general
```

### Build

```bash
# To create the stack:

aws cloudformation create-stack \
    --stack-name DffCbStack \
    --template-body file://infrastructure/cloudformation/codebuild.yml \
    --capabilities CAPABILITY_NAMED_IAM \
    --profile iamadmin-general

# To check the status of your stack creation:

aws cloudformation describe-stacks \
    --stack-name DffCbStack \
    --profile iamadmin-general

# To update the stack:

aws cloudformation update-stack \
    --stack-name DffCbStack \
    --template-body file://infrastructure/cloudformation/codebuild.yml \
    --capabilities CAPABILITY_NAMED_IAM \
    --profile iamadmin-general

# To get the output values of the stack:

aws cloudformation describe-stacks \
    --stack-name DffCbStack \
    --query "Stacks[0].Outputs" \
    --profile iamadmin-general

# To delete the stack:

aws cloudformation delete-stack \
    --stack-name DffCbStack \
    --profile iamadmin-general
```

### Elastic Beanstalk

```bash
# To create the stack:

aws cloudformation create-stack \
    --stack-name DffEbStack \
    --template-body file://infrastructure/cloudformation/elastic-beanstalk.yml \
    --profile iamadmin-general

# To check the status of your stack creation:

aws cloudformation describe-stacks \
    --stack-name DffEbStack \
    --profile iamadmin-general

# To update the stack:

aws cloudformation update-stack \
    --stack-name DffEbStack \
    --template-body file://infrastructure/cloudformation/elastic-beanstalk.yml \
    --profile iamadmin-general

# To get the output values of the stack:

aws cloudformation describe-stacks \
    --stack-name DffEbStack \
    --query "Stacks[0].Outputs" \
    --profile iamadmin-general

# To delete the stack:

aws cloudformation delete-stack \
    --stack-name DffEbStack \
    --profile iamadmin-general

```

### Pipeline

```bash
# To create the stack:

aws cloudformation create-stack \
    --stack-name DffCpStack \
    --template-body file://infrastructure/cloudformation/codepipeline.yml \
    --capabilities CAPABILITY_NAMED_IAM \
    --profile iamadmin-general

# To check the status of your stack creation:

aws cloudformation describe-stacks \
    --stack-name DffCpStack \
    --profile iamadmin-general

# To update the stack:

aws cloudformation update-stack \
    --stack-name DffCpStack \
    --template-body file://infrastructure/cloudformation/codepipeline.yml \
    --capabilities CAPABILITY_NAMED_IAM \
    --profile iamadmin-general

# To get the output values of the stack:

aws cloudformation describe-stacks \
    --stack-name DffCpStack \
    --query "Stacks[0].Outputs" \
    --profile iamadmin-general

# To delete the stack:

aws cloudformation delete-stack \
    --stack-name DffCpStack \
    --profile iamadmin-general
```

### Cloudformation Stack



```bash

aws s3 cp infrastructure/cloudformation/ s3://cf-templates-1rkt1bxdxoosl-eu-west-1/docker-for-frontends --recursive --profile iamadmin-general

# To create the stack:

aws cloudformation create-stack \
    --stack-name DffMainStack \
    --template-body file://infrastructure/cloudformation/main.yml \
    --capabilities CAPABILITY_NAMED_IAM \
    --profile iamadmin-general

# To update the stack:

aws cloudformation update-stack \
    --stack-name DffMainStack \
    --template-body file://infrastructure/cloudformation/main.yml \
    --capabilities CAPABILITY_NAMED_IAM \
    --profile iamadmin-general

# To delete the stack:

aws cloudformation delete-stack \
    --stack-name DffMainStack \
    --profile iamadmin-general
```
