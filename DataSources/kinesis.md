# Amazon Kinesis

The _Amazon Kinesis Data Source_ is a streaming data source which will ingest data directly from the provided Amazon Kinesis Stream into Upsolver. For the purposes of this guide we will assume you already have a Kinesis stream up and running. If you don't, please read Amazon's documentation for Kinesis Streams and set one up.

## Creating A New Amazon Kinesis Data Source

1. On the [Data Sources](README.md) page click _Add New Data Source_.
2. Select _Amazon Kinesis_ from the list.
3. Fill in a name for your Data Source.
4. In the _Content Format_ drop down menu select the format of the messages inside the Kinesis stream.
5. Fill in the Name of your Kinesis stream in the _Stream_ field.
6. Create an [IAM user with permission](SetupGuides/kinesis.md) to read from the Kinesis stream you would like to ingest.
   1. Fill in the _Access Key_ and _Secret Key_ fields with the respective values from this IAM user.
7. Select the AWS region in which the Kinesis stream exists in the _Region_ drop down menu.
8. In the _Start Execution From_ time field, select the time you would like Upsolver to start ingesting events in the stream from. Events which were added to the stream before this time will be ignored.
9. Select the _Compute Cluster_ you would like this Data Source to run on. If you have not created a [Compute Cluster](/Clusters/compute.md) yet, you can create one from the drop down menu.
10. You can choose to change where the ingested data from this source will be saved by changing the _Storage_ field in the _Advanced_ section.
11. Click _Create_ to finish creating your data source.

When you are done creating your input you will be taken to the Schema tab of the [Data Source Discovery](data-source-discovery.md) page. Here you are able to inspect the data that was ingested from your Kinesis stream.
