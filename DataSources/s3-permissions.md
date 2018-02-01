# AWS S3 Permissions {#setting-up---aws-s3-permissions}

This guide is for users who choose to connect their own S3 bucket to Upsolver Streams instead of using Upsolver's S3 bucket.

In order to enable access to your S3 bucket, you will need to create a user with the required permissions, using the AWS console.

## Step 1 - Create S3 Access Policy {#step-1---create-s3-access-policy}

1. Navigate to your IAM administration page using
   [https://console.aws.amazon.com/iam](https://console.aws.amazon.com/iam)
2. Select “Policies” on the left menu:  
   ![](https://docs.upsolver.com/assets/Policies.png)

3. Select “Create Policy” button on the top of the screen.  
   ![](https://docs.upsolver.com/assets/Create Policy.png)

4. Select “Create Your Own Policy”.

5. Create a policy for accessing your S3 bucket and validating permissions for the AWS user.

   1. Provide a name for the policy \(i.e. UpsolverS3policy\).

   2. Copy the following to the Policy Document \(also provided in the attached text file\):

      ```
      {
        "Version": "2012-10-17",
        "Statement": [{
            "Effect": "Allow",
            "Action": [
              "s3:ListAllMyBuckets"
            ],
            "Resource": [
              "arn:aws:s3:::*"
            ]
          },
          {
              "Effect": "Allow",
              "Action": [
                "s3:*"
              ],
              "Resource": [
                "arn:aws:s3:::OUTPUT_BUCKET_NAME",
                "arn:aws:s3:::OUTPUT_BUCKET_NAME/*"
              ]
          },
          {
            "Effect": "Allow",
            "Action": [
              "s3:ListBucket",
              "s3:ListObject",
              "s3:GetObject"
            ],
            "Resource": [
              "arn:aws:s3:::INPUT_BUCKET_NAME",
              "arn:aws:s3:::INPUT_BUCKET_NAME/*"
            ]
          },
          {
            "Effect": "Allow",
            "Action": [
              "iam:SimulatePrincipalPolicy"
            ],
            "Resource": [
              "arn:aws:iam::ACCOUNT_ID:user/${aws:username}"
            ]
          }
        ]
      }
      ```

6. Replace OUTPUT\_BUCKET\_NAME with your S3 bucket name that is dedicated for upsolver data

7. Replace INPUT\_BUCKET\_NAME with your S3 bucket name that contains the data to ingest, If you're not ingesting data from S3, you can delete the containing statement.

8. Replace ACCOUNT\_ID with your AWS account id which can be found in[AWS My Account](https://console.aws.amazon.com/billing/home?#/account)page

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

6. For S3 Permissions, search for the policy you created in the previous steps and check the checkbox to its left.

7. If you’re interested in using Amazon Athena or Amazon Quicksight, search for policy “AWSQuicksightAthenaAccess” and check it.

8. Proceed to next step and review that you’ve created the user with the correct settings.

9. Complete user creation and press "Download .csv" - This file will contain the access key and secret key for the user.

**When creating your **[**S3 data source**](/DataSources/s3.md)**, you should use the access key and secret key in your downloaded csv file.**

