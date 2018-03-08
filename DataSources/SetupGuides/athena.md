# AWS Athena Permissions

This guide is for users who choose to output their data to [Amazon Athena](https://aws.amazon.com/athena/).
In order to enable Upsolver to create your Athena table for you, you will need to create an IAM user with Athena permissions in addition to [S3 Permissions](s3.md) so we can save the data.

## Step 1 - Create Athena Access Policy

1. Navigate to your IAM administration page using.
2. Select “Policies” on the left menu.
3. Select “Create Policy” button on the top of the screen.
4. Select “Create Your Own Policy”.
5. Create a policy for accessing your S3 bucket and validating permissions for the AWS user.
   i. Provide a name for the policy \(for example: "UpsolverAthenaPolicy"\).

   ii. Copy the following to the Policy Document:

      ```
      {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "athena:*"
            ],
            "Resource": [
                "*"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "s3:GetBucketLocation",
                "s3:GetObject",
                "s3:ListBucket",
                "s3:ListBucketMultipartUploads",
                "s3:ListMultipartUploadParts",
                "s3:AbortMultipartUpload",
                "s3:CreateBucket",
                "s3:PutObject"
            ],
            "Resource": [
                "arn:aws:s3:::aws-athena-query-results-*",
                "arn:aws:s3:::YOUR_DATA_BUCKET/*",
                "arn:aws:s3:::YOUR_DATA_BUCKET"
            ]
        }
    ]
}
      ```

6. Replace YOUR_DATA_BUCKET with your S3 bucket name that is dedicated for Upsolver data.
7. Select “Validate Policy” on the bottom right and assuming the policy is valid, select “Create Policy”.

## Step 2 - Create New User

1. Select “Users” on the left menu.
2. Select “Add User” button on the top of the screen.
3. Define the new user’s details:
   i. Provide a name for the user (for example: "UpsolverUser")
   ii. Select Programmatic Access for AWS access type
4. Proceed to the next step - Permissions.
5. Select “Attach existing policies directly”:  
6. For Athena Permissions, search for the policy you created in the previous steps and check the checkbox to its left.
8. Proceed to next step and review that you’ve created the user with the correct settings.
9. Complete user creation and press "Download .csv" - This file will contain the access key and secret key for the user.

**When creating your [Athena Output](/Outputs/athena-output.md), you should use the access key and secret key in your downloaded csv file.**
