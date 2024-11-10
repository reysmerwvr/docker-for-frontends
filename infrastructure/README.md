# Infrastructure

## GitHub

- GitHub for source code storage

## AWS

- AWS CodeBuild for building the application
- AWS CodePipeline for CI/CD
- Deployment:
  - Option 1:
    - AWS CodeDeploy for deploying the application to AWS Elastic Beanstalk
    - AWS Elastic Beanstalk for hosting the application
  - Option 2:
    - S3 for static website hosting
    - CloudFront for CDN

## Identity Manager

- AWS Identity and Access Management (IAM) for managing user identities and permissions
- AWS IAM Roles and Policies for managing access to AWS resources
- AWS IAM Instance Profiles for managing access to EC2 instances

To create the stack:
```bash
aws cloudformation create-stack \
    --stack-name dff-iam-stack \
    --template-body file://infrastructure/cloudformation/identity-manager/iam-roles.yml \
    --capabilities CAPABILITY_NAMED_IAM \
    --profile iamadmin-general
```

To check the status of your stack creation:

```bash
aws cloudformation describe-stacks \
    --stack-name dff-iam-stack \
    --profile iamadmin-general
```

To update the stack:

```bash
aws cloudformation update-stack \
    --stack-name dff-iam-stack \
    --template-body file://infrastructure/cloudformation/identity-manager/iam-roles.yml \
    --capabilities CAPABILITY_NAMED_IAM \
    --profile iamadmin-general
```

To get the output values of the stack:

```bash
aws cloudformation describe-stacks \
    --stack-name dff-iam-stack \
    --query "Stacks[0].Outputs" \
    --profile iamadmin-general
```

To delete the stack:

```bash
aws cloudformation delete-stack \
    --stack-name dff-iam-stack \
    --profile iamadmin-general
```

## Elastic Beanstalk

To create the stack:
```bash
aws cloudformation create-stack \
    --stack-name dff-eb-stack \
    --template-body file://infrastructure/cloudformation/elastic-beanstalk/eb-application.yml \
    --profile iamadmin-general
```

To check the status of your stack creation:

```bash
aws cloudformation describe-stacks \
    --stack-name dff-eb-stack \
    --profile iamadmin-general
```

To update the stack:

```bash
aws cloudformation update-stack \
    --stack-name dff-eb-stack \
    --template-body file://infrastructure/cloudformation/elastic-beanstalk/eb-application.yml \
    --profile iamadmin-general
```

To get the output values of the stack:

```bash
aws cloudformation describe-stacks \
    --stack-name dff-eb-stack \
    --query "Stacks[0].Outputs" \
    --profile iamadmin-general
```

To delete the stack:

```bash
aws cloudformation delete-stack \
    --stack-name dff-eb-stack \
    --profile iamadmin-general
```

To create the root stack:

```bash
aws cloudformation create-stack \
    --stack-name root-stack \
    --template-body file://infrastructure/cloudformation/main.yml \
    --profile iamadmin-general
```
