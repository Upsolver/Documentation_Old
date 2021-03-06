# AWS Role Permissions

When integrating with AWS, we will create one or two managed roles in your account to give Upsolver the required access. This page will list what each role is and what permissions it will have.

There are 3 role types depending on which integration you performed. If you perfomed the [My VPC](private-vpc.md) integration then you will have two roles: **UpsolverManagementRole** and **UpsolverServerRole**.
If you performed the [Upsolver VPC](upsolver-vpc.md) integration you will have one role: **UpsolverRole** which will have both the permissions of the UpsolverManagementRole and of the UpsolverServerRole, except when otherwise stated.

## Permissions

### UpsolverServerRole

This is the role that Upsolver's servers running in your VPC will use to access the data in your account. The permissions given to this role are:

#### Data Permissions
* `s3:ListAllMyBuckets` - This lets the servers see what buckets you have so Upsolver's UI can suggest them for your convenience.
* `kinesis:ListStreams` - This lets the servers see what Kinesis Streams you have so Upsolver's UI can suggest them for your convenience.
* Managed Policy: `arn:aws:iam::aws:policy/AmazonAthenaFullAccess` - This allows the servers to manage your Athena tables for you. Notice Athena does not allow partial permissions so we require full access.
* Additinal Data Read permissions - In the future when adding Data Sources to the system you may be promted to add read permissions for the data source. These permissions will be added to this role.

## Policy Documents

The resulting policy documents will look like this:

### Management Role

Managed Policies:

* `AWSCloudFormationReadOnlyAccess` - This permission is required for Upsolver to identify when the initial integration have completed successfully

Custom Policy:

* `ec2:RunInstances`, `ec2:StartInstances`, `ec2:TerminateInstances`, 
  `ec2:RequestSpotInstances`, 
  `ec2:CancelSpotInstanceRequests`, 
  `ec2:CreateVolume`, `ec2:AttachVolume`, `ec2:DeleteVolume`, 
  Allows running and stopping Upsolver EC2 instances
* `ec2:DescribeInstances`, `ec2:DescribeSpotInstanceRequests`, 
  `ec2:DescribeInstanceStatus`, `ec2:CreateTags`, `ec2:DescribeTags` - Allows monitoring Upsolver EC2 clusters
* `ec2:DescribeSecurityGroups`, `ec2:DescribeImages`, 
  `ec2:DescribeImageAttribute` - Required for Spotinst for validation
* `ec2:DescribeSpotPriceHistory` - Required for Spotinst to use spot instances
* `ec2:AssociateAddress`,
  `ec2:DisassociateAddress`,
  `ec2:AllocateAddress`,
  `ec2:ReleaseAddress`,
  `ec2:DescribeAddresses` - Allows Upsolver to use static IPs for discoverability
* `cloudwatch:PutMetricData`,
  `cloudwatch:GetMetricStatistics`,
  `cloudwatch:ListMetrics`,
  `cloudwatch:DescribeAlarmHistory`,
  `cloudwatch:DescribeAlarmsForMetric`,
  `cloudwatch:DescribeAlarms` - Auto Scaling against CloudWatch statistics and alarms
* `iam:ListPolicies`,
  `iam:GetPolicyVersion`,
  `iam:GetPolicy`,
  `iam:ListRoles`,
  `iam:ListInstanceProfiles`,
  `iam:AddRoleToInstanceProfile`,
  `iam:ListInstanceProfilesForRole`,
  `iam:ListAttachedRolePolicies`,
  `iam:ListAccountAliases`,
  `iam:PassRole` - Required for Spotinst for policy validation
* `sts:DecodeAuthorizationMessage` - Used for debugging permission errors from AWS

```json
{
    "Statement": [
        {
            "Action": [
                "ec2:DescribeSpotInstanceRequests",
                "ec2:DescribeAddresses",
                "ec2:DescribeInstances",
                "ec2:DescribeSecurityGroups",
                "ec2:DescribeInstanceStatus",
                "ec2:DescribeTags",
                "ec2:DescribeImages",
                "ec2:DescribeImageAttribute",
	 	        "ec2:DescribeSpotPriceHistory",
                "cloudwatch:PutMetricData",
                "cloudwatch:GetMetricStatistics",
                "cloudwatch:ListMetrics",
                "cloudwatch:DescribeAlarmHistory",
                "cloudwatch:DescribeAlarmsForMetric",
                "cloudwatch:DescribeAlarms",
                "iam:ListPolicies",
                "iam:GetPolicyVersion",
                "iam:GetPolicy",
                "iam:ListRoles",
                "iam:ListInstanceProfiles",
                "iam:AddRoleToInstanceProfile",
                "iam:ListInstanceProfilesForRole",
                "iam:ListAttachedRolePolicies",
                "iam:ListAccountAliases",
                "iam:PassRole",
                "sts:DecodeAuthorizationMessage"
            ],
            "Resource": [
                "*"
            ],
            "Effect": "Allow"
        },
        {
            "Action": [
                "ec2:RequestSpotInstances",
                "ec2:CancelSpotInstanceRequests",
                "ec2:CreateTags",
                "ec2:AssociateAddress",
                "ec2:DisassociateAddress",
                "ec2:AllocateAddress",
                "ec2:ReleaseAddress"
            ],
            "Resource": [
                "*"
            ],
            "Effect": "Allow"
        },
        {
            "Condition": {
                "StringLike": {
                    "aws:RequestTag/Name": "*upsolver*"
                }
            },
            "Action": [
                "ec2:CreateVolume",
                "ec2:RunInstances"
            ],
            "Resource": [
                "*"
            ],
            "Effect": "Allow"
        },
        {
            "Condition": {
                "StringLike": {
                    "ec2:ResourceTag/Name": "*upsolver*"
                }
            },
            "Action": [
                "ec2:TerminateInstances",
                "ec2:StartInstances",
                "ec2:AttachVolume",
                "ec2:DeleteVolume",
                "ec2:RunInstances"
            ],
            "Resource": [
                "*"
            ],
            "Effect": "Allow"
        },
        {
            "Action": [
                "ec2:RunInstances"
            ],
            "Resource": [
                "arn:aws:ec2:*:*:network-interface/*",
                "arn:aws:ec2:*:*:subnet/*",
                "arn:aws:ec2:*::image/*"
            ],
            "Effect": "Allow"
        }
    ]
}
```

#### Server Role

Managed Policies:

* `AmazonAthenaFullAccess` - This allows the servers to manage your Athena tables for you. Notice Athena does not allow partial permissions so we require full access, in order to configure fine grained permissions, use AWS Lake Formation
* `AWSCloudFormationReadOnlyAccess` - This permission is required for Upsolver to identify when potential follow up integrations have completed successfully

Custom Policy:

```json
{
    "Statement": [
        {
            "Sid": "upsolverBucketAccess",
            "Action": [
                "s3:*"
            ],
            "Resource": [
                "arn:aws:s3:::us-east-1-upsolver-UPSOLVER_ORG_ID",
                "arn:aws:s3:::us-east-1-upsolver-UPSOLVER_ORG_ID/*"
            ],
            "Effect": "Allow"
        },
        {
            "Sid": "listStreams",
            "Action": [
                "kinesis:ListStreams"
            ],
            "Resource": [
                "*"
            ],
            "Effect": "Allow"
        },
        {
            "Sid": "upsolverManagedStream",
            "Action": [
                "kinesis:*"
            ],
            "Resource": [
                "arn:aws:kinesis:*:*:stream/upsolver_*"
            ],
            "Effect": "Allow"
        },
        {
            "Sid": "sendScalingMetrics",
            "Action": [
                "cloudwatch:PutMetricData"
            ],
            "Resource": [
                "*"
            ],
            "Effect": "Allow"
        }
    ]
}
```
