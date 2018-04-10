# Amazon Redshift Connection

This connection is used to send and/or read data from Amazon Redshift.

## Creating an Amazon Redshift Connection {#create-new-amazon-redshift-connection}

When you click "Create new Redshift connection" from the _Connection_ drop down menu during the [Redshift Output Creation wizard](/Outputs/redshift-output.md). You will see the following page:

![Redshift Connection Creation Page](/assets/redshift-connection-creation.png)

Fill in the fields as follows:  
1. In the _Connection String_ field enter the JDBC connection string to your Redshift cluster. This connection string is available in your AWS console under the properties tab for your cluster. For example:  
![JDBC Example](/assets/redshift-jdbc-example.png)  
2. In the _User Name_ field enter the name of the user in the DB you would like Upsolver to connect with. If you do not yet have such a user follow [Amazon's documentation to create one](http://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_USER.html). Also, please ensure this user has at least SELECT and INSERT permissions for the tables you would like Upsolver to write to. You can follow [this guide to grant permissions](http://docs.aws.amazon.com/redshift/latest/dg/r_GRANT.html).  
3. In the _Password_ field enter the password for the user you entered in step 2.  
4. In the _Name_ field provide a name for this connection.  
5. If you would like you can enter a description for this connection in the _Description_ field.  
6. Once done click _Create_.

## Viewing your existing connections

To view you existing connections select the _Connections_ button from the drop down menu on the top right of the screen:  
![View Connections](/assets/select-connections.png)
