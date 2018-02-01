# AWS Kinesis Permissions {#setting-up---aws-kinesis-permissions}

In order to enable access to your Kinesis stream, you will need to create a user with the required permissions, using the AWS console.

## Step 1 - Create Kinesis Access Policy {#step-1---create-kinesis-access-policy}

1. Navigate to your IAM administration page using
   [https://console.aws.amazon.com/iam](https://console.aws.amazon.com/iam)
2. Select “Policies” on the left menu:  
   ![](https://docs.upsolver.com/assets/Policies.png)

3. Select “Create Policy” button on the top of the screen.  
   ![](https://docs.upsolver.com/assets/Create Policy.png)

4. Select “Create Your Own Policy”.

5. Create a policy for accessing your S3 bucket and validating permissions for the AWS user.

   1. Provide a name for the policy \(i.e. UpsolverKinesisPolicy\).

   2. Copy the following to the Policy Document:

      ```
        {
            "Version": "2012-10-17",
            "Statement": [
                {
                    "Effect": "Allow",
                    "Action": [
                        "kinesis: Get*"
                    ],
                    "Resource": [
                        "arn:aws:kinesis:REGION:ACCOUNT-ID:stream/STREAM-NAME"
                    ]
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "kinesis:DescribeStream"
                    ],
                    "Resource": [
                        "arn:aws:kinesis:REGION:ACCOUNT-ID:stream/STREAM-NAME"  
                    ]
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "kinesis:ListStreams"
                    ],
                    "Resource": [
                        "*"
                    ]
                }
            ]
        }
      ```

6. Replace REGION with the AWS region.

7. Replace ACCOUNT-ID with your AWS account ID.

8. Replace STREAM-NAME with the relevant Kinesis stream name.

9. Select “Validate Policy” on the bottom right and assuming the policy is valid, select “Create Policy”.

## Step 2 - Create New User {#step-2---create-new-user}

1. Select “Users” on the left menu:  
   ![](https://docs.upsolver.com/assets/Users.png)

2. Select “Add User” button on the top of the screen.  
   ![](https://docs.upsolver.com/assets/Add user.png)

3. Define the new user’s details:

   1. Provide a name for the user \(i.e. UpsolverUser\)

   2. Select Programmatic Access for AWS access type

      ![](https://docs.upsolver.com/assets/User details.png)

4. Proceed to the next step - Permissions.

5. Select “Attach existing policies directly”:  
   ![](https://docs.upsolver.com/assets/User permissions.png)

6. For Kinesis Permissions, search for the policy you created in the previous steps and check the checkbox to its left.

7. Proceed to next step and review the settings for the user you’ve created.

8. Complete user creation and press "Download .csv" - This file will contain the access key and secret key for the user.

**When creating a **[**Kinesis data source**](/DataSources/kinesis-input.md)**, you should use the access key and secret key in the downloaded csv file.**

