# Troubleshooting

This document describes an initial set of troubleshooting steps to take if
you're having problems with Upsolver on AWS.

If you're issue is not addressed below, please contact us via the intercom
widget (in the bottom right corner of this page) or by mail: `support` at
`upsolver.com`.

## My Cloud Formation Stack Failed to Deploy

Most of the problems when deploying cloud formation stacks are caused by AWS 
Service Limits, please read Appendix A for list of prerequisites for AWS 
deployment. You can always contact us for further help.

## My Private API doesn't start, or I can't connect to it

The initial AWS Integration takes time, especially in "My VPC" mode, once the integration is done,
it should take up to 5 minutes until the Local API is up. If you waited this much and the Local API
is still unavailable, there might be one of four problems:

### Elastic IPs Limit Reached

Before deploying a Cluster to your Private VPC, Upsolver allocates Elastic IPs
to make sure that servers are discoverable. For API and Query clusters this is
mandatory,

For Compute Clusters, this is optional and can be edited from the UI by
navigating to the Compute Cluster, clicking on the caret next to the "Stop"
button, clicking on "Edit" and then un-checking the "Elastic IPs" checkbox.
Please note that when the "Elastic IPs" option is off, external resources
(e.g. Redshift or Elasticsearch) will not be able to recognize the Compute
Cluster servers by their IPs.

For Compute or Query Clusters that have Auto Scaling turned on, Upsolver will
allocate Elastic IPs for that cluster according the maximum number of servers.

For Compute clusters that have additional processing units for replay, Upsolver
will allocate Elastic IPs for those processing units as well.

The number of Elastic IPs that an account in AWS can allocate is limited per
region. You can raise the limit of Elastic IPs by sending [a request to Amazon
Web Services via this form](https://console.aws.amazon.com/support/v1#case/create?issueType=service-limit-increase&limitType=service-code-elastic-ips-ec2-classic&serviceLimitIncreaseType=elastic-ips&type=service_limit_increase):
In the Limit Type, select "Elastic IPs" and choose the relevant region.

In case that Upsolver will not be able to allocate Elastic IPs because the
limit is exceeded, a notification will pop up that will link you to this page.

### 2. EC2 Spot Instance not running

There might be a problem starting up EC2 Spot Instance in your account due to AWS Service Limits.
See Appendix A for list of prerequisites for AWS deployment.

To check if Local API is up go to the AWS Console and navigate to the EC2 Service. 
Click on "Instances" (Under "Instances") in the left navigation bar. 
Type "upsolver-api" in the Search bar and press Enter. If you see items in the list, the local-api is up.
Make sure you're in the same region as the one you picked during the integration.

### 3. DNS Cache

There is a probability that the DNS record for your local API
has been cached by your computer, to clear the DNS cache, follow the instructions for your Operating System.

#### MacOS

Open the terminal and paste the command below: 

```
sudo killall -HUP mDNSResponder;sudo killall mDNSResponderHelper;sudo dscacheutil -flushcache
```

#### Microsoft Windows® 8 (Or above)

1. Press Win + X to open the WinX menu
2. Right click on "Command Prompt" and select "Run as Administrator"
3. Type "ipconfig /flushdns" and press "Enter"

#### Microsoft Windows® 7 

1. Click on the Start Menu
2. Type "CMD" in the Search Box
3. Right click on "Command Prompt" and select "Run as Administrator"
3. Type "ipconfig /flushdns" and press "Enter"


#### Microsoft Windows XP®, 2000, Or Vista®

1. Press Win + R to open the "Run..." Dialog
2. Type "ipconfig /flushdns" and press "Enter"


### 4. Security Group

The Security group of the Local-API might not be open to your address, you can look for the Security Group
created by the Cloud Formation Stack and open ports 80 and 443 to your IP address.

Go to the AWS Console and navigate to the EC2 Service. Click on "Security Groups" (Under "Network & Security")
in the left navigation bar. Type "Upsolver VPC Security Group" in the Search bar and press Enter.
The security group created by Upsolver should be displayed in the list below the search bar.
Right click on the security group and choose "Edit Inbound Rules" from the menu.

Add two rules and fill them as the table below: 

| Type | Protocol | Port Range | Source | Description |
| - | - | - | - | - |
| HTTP | TCP | 80 | My IP | HTTP For <Your network location> (e.g. San Francisco Offices) |
| HTTPS | TCP | 443 | My IP | HTTPS For <Your network location> (e.g. San Francisco Offices) |

After clicking save it may take up to a minute for the local API to be reachable by your network.

If none of these applies to your situation, please contact us via the intercom widget or by mail: `support` at `upsolver.com`.

## My Compute Cluster doesn't start

There might be a problem starting up EC2 Spot Instance in your account due to AWS Service Limits.
See Appendix A for list of prerequisites for AWS deployment.

To check if your compute cluster is up go to the AWS Console and navigate to the EC2 Service. 
Click on "Instances" (Under "Instances") in the left navigation bar. 
Type "upsolver-data-updates" in the Search bar and press Enter. 
If you see items in the list, your compute cluster is up.

If you have multiple compute clusters and you wish to know if a specific compute cluster's instances are up,
type "cluster_name" in the search box and click on "cluster_name" under tag keys, then you'll see a menu
with the names of Upsolver Clusters that are running in your AWS Account, click on a specific cluster name
and see if there are items in the list for that specific cluster.

## I can't connect to My Kafka Cluster

In order to connect to your Kafka Cluster which is placed in another VPC, you have to peer your VPC
with the VPC created for Upsolver. [For instructions on how to use VPC peering](private-vpc-peering.md).

If you want to run Upsolver in an existing VPC, please contact us via the intercom widget (In the right bottom corner),
or by mail: `support` at `upsolver.com`.

## I can't create an S3 Data Source

For normal S3 Data Sources (without SQS), your data have to be sorted lexicographically.
Our system should be able to detect the lexicographic date pattern from the list of your files.
If it fails, please try narrowing down the list by entering the path to your files, for example,
If the list of files is : 

```
s3://bucket/input/a/2019/01/01/00/00/file.txt
s3://bucket/input/a/2019/01/01/00/01/file.txt
s3://bucket/input/a/2019/01/01/00/02/file.txt
s3://bucket/input/a/2019/01/01/00/03/file.txt
```

Enter `input/a` in the folder field. You can also try setting the `Start Ingestion From` field to a time when there is data.

If neither of these help, please contact us via the intercom or by mail: `support` at `upsolver.com`.

## Data Doesn't Appear in Athena Table

It takes up to 5 minutes for Upsolver Compute Clusters to get up-to-date with the list of jobs
to run. Please be patient, make your self a cup of coffee, and if data doesn't shows up in about 10 minutes,
please contact us via the intercom or by mail: `support` at `upsolver.com`.

## I get an exception when querying my Athena Table

There can be many reasons that querying Athena Tables will fail.
Most often, the issue is that the user querying doesn't have access to the files in S3. Make sure you have read access to the target location that Upsolver is writing to.
If that doesn't help, please contact us via the intercom or by mail: `support` at `upsolver.com`.

# Appendix A: List of prerequisites for AWS 

Below is a list of prerequisites for AWS deployments

### Upsolver VPC

| Item | Required | Default Limit | Comments |
| ---- | --------- | ------------ | - |
| CloudFormation Stack | 1 per integration (at least one) | 200 | - |
| IAM Role | 1 | 1000 | - |
| S3 Bucket | 1 | 100 | - |

### Private VPC

| Item | Required | Default Limit | Comments |
| ---- | --------- | ------------ | - |
| CloudFormation Stack | 1 per integration (at least one) | 200 | - |
| IAM Role | 1 | 1000 | - |
| IAM Instance Profile | 1 | 1000 | - |
| S3 Bucket | 1 | 100 | - |
| VPC | 1 | 5 | - |
| Internet Gateway | 1 | 5 | - |
| EC2 Elastic IPs | 2 | 5 | - |
| EC2 Spot Instances | 2 | Dynamic | Instance Types : r4.large, m5.2xlarge, m5d.2xlarge, m5a.2xlarge |
| Kinesis Stream Shard | 1 | 200 | Upsolver uses Kinesis Streams to balance workload between servers |
