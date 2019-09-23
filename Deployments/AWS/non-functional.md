# Security and DR

## Data Encryption

All the data in transit between Upsolver and 3rd party uses SSL unless 
specified. Data between Upsolver and AWS is always encrypted using SSL.

You can configure data encryption at rest using S3 
[Server Side Encryption](https://docs.aws.amazon.com/en_pv/AmazonS3/latest/dev/serv-side-encryption.html).

## Data Replication for Disaster Recovery

All Upsolver data resides in your AWS account S3 buckets, in order to comply
with cross region disaster recovery, you should enable data replication to
a different region S3 bucket.

When a disaster occurs, you should change your Upsolver S3 connection bucket 
names and regions to the replicated bucket names and regions.

[Read more about S3 Replication](https://docs.aws.amazon.com/en_pv/AmazonS3/latest/dev/replication.html).
