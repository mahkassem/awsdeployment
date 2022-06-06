### AWS S3 Bucket Policy 
[![CircleCI](https://circleci.com/gh/mahkassem/awsdeployment/tree/main.svg?style=svg)](https://circleci.com/gh/mahkassem/awsdeployment/tree/main)
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:GetObject"
            ],
            "Resource": [
                "arn:aws:s3:::udacity-mk-ci-cd/*"
            ]
        }
    ]
}
```

### AWS CLI
[AWS CLI DOCS](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)

#### Configure AWS CLI
[DOCS](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html)
```bash
aws configure
```

### EB CLI

####  Installation
  - [EB CLI Windows](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install-windows.html)
  - [Install Pyhthon 3.7.x](https://www.python.org/downloads/windows/)

#### Guide
[EB CLI DOCS](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-getting-started.html)
