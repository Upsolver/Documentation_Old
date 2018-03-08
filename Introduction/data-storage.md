# Data Storage

## Where is the data stored

Upsolver uses blob storage for events curation and retroactive queries.

Data is **only!** stored in a [data lake](https://en.wikipedia.org/wiki/Data_lake).

It's possible to use an existing cloud storage bucket/container within your Amazon account.

## Which data lakes are supported

Currently [Amazon S3](https://aws.amazon.com/s3/).

Coming soon - HDFS and [Azure Blob Storage](https://www.gitbook.com/book/orir/upsolver-documentation/edit#).

## What data is stored

* All incoming events - all events are stored in the **exact** hierarchical format they arrived in for curation and retroactive queries. Data is stored as [Apache Avro](https://avro.apache.org/) compressed with [Snappy](https://github.com/google/snappy) for fast reading and writing.
* [Upsolver Indexed Views](/indexed-views.md) are also stored only on the cloud, in Upsolver's proprietary compressed format.
