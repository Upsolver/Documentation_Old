# AWS Role Permissions

When integrating with AWS, we will create one or two managed roles in your account to give Upsolver the required access. This page will list what each role is and what permissions it will have.

There are 3 role types depending on which integration you performed. If you perfomed the [My VPC](private-vpc.md) integration then you will have two roles: **UpsolverManagementRole** and **UpsolverServerRole**.
If you performed the [Upsolver VPC](upsolver-vpc.md) integration you will have one role: **UpsolverRole** which will have both the permissions of the UpsolverManagementRole and of the UpsolverServerRole, except when otherwise stated.

## Permissions

### UpsolverServerRole

This is the role that Upsolver's servers running in your VPC will use to access the data in your account. The permissions given to this role are:

#### Data Permissions
* s3:ListAllMyBuckets - This lets the servers see what buckets you have so Upsolver's UI can suggest them for your convenience.
* kinesis:ListStreams - This lets the servers see what Kinesis Streams you have so Upsolver's UI can suggest them for your convenience.
* Managed Policy: arn:aws:iam::aws:policy/AmazonAthenaFullAccess - This allows the servers to manage your Athena tables for you. Notice Athena does not allow partial permissions so we require full access.
* Additinal Data Read permissions - In the future when adding Data Sources to the system you may be promted to add read permissions for the data source. These permissions will be added to this role.

### Upsolver Management Role

This is the role that Upsolver will use to manage/create/destroy your servers with. The permssions given to this role are:

#### AWS Account Permissions
* ManagedPolicy: arn:aws:iam::aws:policy/AWSCloudFormationReadOnlyAccess - This permission is required for Upsolver to identify when the initial and potential follow up integrations have completed successfully.

#### Elastic IP Permissions

The following permissions are required for upsolver to create Elastic IPs for the API server in your private VPC.

These permissions are **not** taken when using [Upsolver VPC](upsolver-vpc.md).

* ec2:DescribeAddresses
* ec2:AllocateAddress
* ec2:AssociateAddress
* ec2:CreateTags
* ec2:DescribeTags

#### Spotinst Permissions
The following permissions are given in order for Upsolver to use Spotinst to create and manage servers in your VPC. These are the minimal permissions Spotinst requires. 

These permissions are **not** taken when using [Upsolver VPC](upsolver-vpc.md).

* iam:AddRoleToInstanceProfile
* iam:ListInstanceProfiles
* iam:ListInstanceProfilesForRole
* iam:PassRole
* iam:ListRoles
* iam:ListAccountAliases
* iam:GetPolicyVersion
* iam:ListPolicies
* iam:GetPolicy
* iam:ListAttachedRolePolicies
* iam:CreateServiceLinkedRole
* iam:PutRolePolicy
* organizations:ListAccounts
* cloudwatch:DescribeAlarmHistory
* cloudwatch:DescribeAlarms
* cloudwatch:DescribeAlarmsForMetric
* cloudwatch:GetMetricStatistics
* cloudwatch:ListMetrics
* cloudwatch:PutMetricData
