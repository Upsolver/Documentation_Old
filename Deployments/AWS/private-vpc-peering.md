# VPC Peering

In order to connect to other EC2 resources (Such as: Kafka, Databases) you need
to peer the VPC in which the resources are allocated and the Private VPC
created by the integration.

To do so, please follow the guide below: 

## Rename Upsolver Private VPC

1. Navigate to [AWS VPC Dashboard](https://us-east-1.console.aws.amazon.com/vpc/home)
2. Make sure the right region is selected in the right side of the top bar
3. Click on "your VPCs" in the left side navigation bar
4. Locate the VPC created by Upsolver
  - This can be done by looking on the IPv4 CIDR value 
   (which should be the value you entered in the Integration) or by clicking
   on the "Tags" card in the details pane and looking for VPC which has the tag
   "aws:cloudformation:logical-id" with the value "UpsolverDefaultVPC"
5. Rename the VPC by clicking on the pencil icon while hovering the "Name" cell
   of the selected VPC in the table above 

## Creating VPC Peering

3. Click on "Peering Connections" in the left side navigation bar
4. Click on "Create Peering Connection" and fill the form
    1. Give peering connection name a meaningful name (e.g. "Upsolver to Kafka")
    2. Select the resources VPC as the requester
    3. Select Upsolver Private VPC as the Accepter
    4. Submit the form
5. Click on OK and right click on the new VPC Peering Connection and then click
   on Accept Request, follow the steps to accept the request.
    
## Altering the Route Tables

We'll have to alter the route tables in both VPCs so they will be able to 
access each other.

Make sure to write in a note each of the VPC IPv4 CIDR, this can be done by 
navigating to "Your VPCs".

1. Click on "Route Tables" in the left side navigation bar
2. Locate the Route Table of your VPC and click on it
2. In the details pane, click on "Routes" and then on "Edit Routes"
3. Click on "Add Route", fill the new row with the details below
   - Destination: fill the Upsolver VPC IPv4 CIDR 
   - Target: Choose Peering connection and then choose the peering connection
4. Submit the form and click on "Close" to return to the "Route Tables" page
5. If your VPC contains multiple Route Tables, repeat steps 2-4 for
   each Route Table of your VPC
6. Repeat steps 2-5, only this time locate the Route Tables of Upsolver Private
   VPC and in the destination (in step 3) fill your VPC IPv4 CIDR

## Altering Security Groups

Now that the VPCs are peered, You need to alter the security groups of your
instances to allow inbound and outbound connections from Upsolver Private VPC.

1. Navigate to [AWS EC2 Dashboard](https://us-east-1.console.aws.amazon.com/ec2/home)
2. Make sure the right region is selected in the right side of the top bar
3. Click on "Instances" in the left navigation bar
4. Locate your instances and find a suitable security group or attach a new 
   security group to all of the instances that should be accesible to Upsolver
   Private VPC
5. Navigate to the security group by clicking on its name in the details pane
6. Click on "Inbound" card in the details pane and then on "Edit"
7. Add rule with the details below: 
   - Type: All Traffic
   - Source: Custom, fill Upsolver Private VPC IPv4 CIDR in the text box
   - Description: Upsolver Private VPC
   - If you know the specific ports that should be accessible to Upsolver 
     Private VPC, you can customize the rule
8. If there is no shared security group between all the instances, repeat steps
   5-7 for all the security groups needed. 
