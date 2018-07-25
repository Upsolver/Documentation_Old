# Upsolver VPC

This option allows you to deploy your cluster servers to Upsolver's fully managed VPC. This will allow you to get up and running very quickly and easily.

If you prefer to manage your own servers you can [use your own VPC instead](private-vpc.md).

## Requirements for Integration
In order to integrate your Upsolver account with AWS you must:
* Have a user in AWS with permissions to
	- Run Cloud Formation scripts
	- Create and manage user roles
	- Create and manage S3 buckets

## Integrating With AWS using Upsolver VPC

In order to get started using Upsolver you must integrate Upsolver into your AWS account in order to provide read and write access to the data Upsolver will be processing. To do this follow these steps:

1. Log into your Upsolver account.
2. You will see a page prompting you to integrate you account with AWS. Click "Perform integration with AWS"
3. In the dialog which comes up you can choose which permissions you want to give Upsolver:
    1. Create Athena Tables - This permission will allow us to create and manage Athena tables for Athena outputs created in Upsolver.
    2. View Kinesis Streams - This will allow us to get a list of your Kinesis Streams so that you can create a Data Source from them.
    3. Create a Dedicated Upsolver User - This is required. Upsolver will create a role in your AWS account which will contain the required permission and the optional permissions you selected.
    4. Create a Dedicated Upsolver Bucket - This will create a new bucket in your account. This will be the default bucket upsolver outputs and intermediate files will be written to.
4. Now you can choose the cluster deployment method. If you want to use Upsolver's managed VPC you must choose: "Upsolver VPC"
5. Select the region you want the integration to run in. In the case of "Upsolver VPC" it will only affect the region your default bucket is created in.
6. Click "Launch Integration", and you will be taken to a new tab to your AWS console to run the Cloud Formation script which will create the necessary resources.
7. Click "Next" in the Choose Template page.
8. Optionaly you can rename the stack and then click "Next".
9. Click "Next" on the Options page.
10. On the "Review" page tick "I acknowledge that AWS CloudFormation might create IAM resources with custom names" at the buttom of the page, then click "Next".
11. Wait for the stack creation status to change from "CREATE\_IN\_PROGRESS" to "CREATE\_COMPLETE".
12. Go back to the open Upsolver tab and wait for the integration window to recognize that the integration is complete (The "Relaunch Integration" button will change to "Done").
13. Click "Done".

You have now successfully integrated your Upsolver account with AWS and can begin enjoying the magic.

## Created Resources

The following resources will be created when you integrate with AWS using the "Upsolver VPC" option:

* One Managed Role
	- UpsolverRole - This role is the one that Upsolver's servers will use in order to connect to your data and process it.
* Default S3 Bucket - This bucket will be used as the default output location for Upsolver outputs

For a detailed description of the permissions given to the roles [see here](role-permissions.md)
