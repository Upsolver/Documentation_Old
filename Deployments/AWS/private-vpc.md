# Private VPC

This option allows you to deploy your cluster and API servers to your own VPC in AWS. This will give you full security control over the data that upsolver handles and will ensure the data being processed never leaves your AWS account.
This mode requires running an API server in the VPC, since Upsolver's global API server will not have access to your data in this deployment mode.

If you prefer Upsolver to manage and host your servers you can [use Upsolver's managed VPC](upsolver-vpc.md).

## Requirments for Integration
In order to integrate your Upsolver account with AWS you must:
* Have a user in AWS with permissions to
	- Run Cloud Formation scripts
	- Create and manage user roles
	- Create and manage S3 buckets
	- Create VPCs and related resources (ACLs, Subnets, ...)

## Integrating With AWS using your own VPC

In order to get started using Upsolver you must integrate Upsolver into your AWS account in order to provide read and write access to the data Upsolver will be processing. To do this follow these steps:

1. Log into your Upsolver account.
2. You will see a page prompting you to integrate you account with AWS. Click "Perform integration with AWS"
3. In the dialog which comes up you can choose which permissions you want to give Upsolver:
    1. Create Athena Tables - This permission will allow us to create and manage Athena tables for Athena outputs created in Upsolver.
    2. View Kinesis Streams - This will allow us to get a list of your Kinesis Streams so that you can create a Data Source from them.
    3. Create a Dedicated Upsolver User - This is required. Upsolver will create a role in your AWS account which will contain the required permission and the optional permissions you selected.
    4. Create a Dedicated Upsolver Bucket - This will create a new bucket in your account. This will be the default bucket Upsolver outputs and intermediate files will be written to.
4. Now you can choose the cluster deployment method. If you want to use your own VPC in your AWS account you must choose: "My VPC"
5. In the "Ingress Traffic CIDR List" text box you can enter a comma seperated list of CIDR ranges you would like your local API server to be accessible from. By default this will contain "0.0.0.0/0" and your current IP.
6. You can uncheck "Allow Upsolver Access" if you do not want Upsolver staff to be able to connect to your local API. Enabling this option will allow us to easily help you if you have an issue or questions.
7. Select the region you want the integration to run in. This is the region where the integration will create a VPC for Upsolver servers to run in you account.
8. Clicking "Launch Integration"  will take you to a new tab in your AWS console, to run the Cloud Formation script which will create the necessary resources.
9. Click "Next" in the Choose Template page.
10. Optionaly you can rename the stack and then click "Next".
11. Click "Next" on the Options page.
12. On the "Review" page tick "I acknowledge that AWS CloudFormation might create IAM resources with custom names" at the bottom of the page, then click "Next".
13. Wait for the stack creation status to change from "CREATE\_IN\_PROGRESS" to "CREATE\_COMPLETE".
14. Go back to the open Upsolver tab and wait for the integration window to recognize that the integartion is complete (The "Relaunch Integartion" button will change to "Done").
15. Click "Done".

You have now successfully integrated your Upsolver account with AWS and can begin enjoying the magic.

## Adding Private VPC support for an already integrated account

If you have already integrated your account with AWS using the "Upsolver VPC" option, you might want to now change your servers over to run on you own VPC. To do this follow the following steps:

1. Click your name in the top right of the window.
2. Click "Connections"
3. Click the arrow next to the "Create Amazon S3" button and choose "Private VPC"
4. Follow the steps from "Integrating With AWS using Upsolver VPC" from step 5.

## Created Resources

The following resources will be created when you integrate with AWS using the "My VPC" option:

* Two Managed Roles
	- UpsolverServerRole - This role is the role that your EC2 servers will use when they start up and will provide them with data access.
	- UpsolverManagementRole - This role is the role that Upsolver will use in order to create and manage our servers in your VPC. This has **no data access** and therefore your data remains inaccessible from outside of your account.
* Default S3 Bucket - This bucket will be used as the default output location for Upsolver outputs

For a detailed description of the permissions given to the roles [see here](role-permissions.md)
