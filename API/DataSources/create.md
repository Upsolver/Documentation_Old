# Create Data Source
Create a new [Data Source](/DataSources/README.md). All API calls require an [Authentication Token](../authentication.md)

Signature
```
POST https://api.upsolver.com/api/v1/data-source/
```

## Amazon S3

Connect to your AWS S3 Bucket. Files should be partitioned by date and time.

Upsolver can read events directly from your cloud storage, assuming events are partitioned by event date and time (defines the folder structure in the cloud storage).
A prerequisite for defining a cloud storage data source is providing Upsolver with the appropriate credentials for reading from your cloud storage. If you haven't done this yet, please refer to this page.

#### Fields

Field | Name | Type | Description | Optional 
--- | --- | --- | ---
displayData.name | Name | String | Data Source Name | 
displayData.description | Description | String | Data Source Description | 
sourceStorage | S3 Connection | String | Please select the cloud storage which you wish to ingest files from. | 
datePattern | Date Pattern | String | Please specify the date pattern in the file name / folder structure. For example: yyyy/MM/dd/HH/mm. Date format specification should be according to [Java DateTimeFormatter format](https://docs.oracle.com/javase/9/docs/api/java/time/format/DateTimeFormatter.html). | 
fileMatchPattern | File Name Pattern | FileNameMatcher | Please select the file name pattern for the files you'd like to ingest. If all the files in specified folders are relevant, please select All. The pattern given is matched against the file path starting from the FULL PATH field above. | 
contentType | Content Format | [ContentType](content-types.md) | Please select the format of the messages. Supported formats are: JSON, AVRO, CSV, TSV, ORC, Protobuf and x-www-form-urlencoded. For self-describing formats like JSON, the schema will be auto-detected. The body should contain of the message should contain the message itself, which should not be url-encoded. Messages can be compressed, Upsolver will automatically detect the compression type. Supported compression types are: Zip, GZip, Snappy and None. | 
computeEnvironment | Compute Cluster | String |  | 
destinationStorage | Target Storage | String | The data and metadata files for this Data Source will be stored in this storage | 
compression | Compression | Compression |  | 
interval | Interval | Int (Minutes) |  | 
prefix | Folder | String | If the data resides in a sub folder within the defined cloud storage, please specify this folder. | X
startExecutionFrom | Start Ingestion From | String (ISO-8601) | Configure the time which you would like to have data ingested from. Files which are before this time (based on the provided date pattern) will be ignored. If you leave this field empty all files will be ingested. | X
retention | Retention | Int (Minutes) | A retention period for the data. After this amount of time elapsed the data will be deleted forever. | X
dataDumpDate | Data Dump Date | String (ISO-8601) |  | X
maxDelay | Max Delay | Int (Minutes) |  | X

#### Example

```bash
curl -X POST -H "content-type: application/json" -H "Authorization: YOUR_TOKEN" \
-d '{
  "clazz" : "CloudStorageInputRequest",
  "displayData" : {
    "name" : "First Amazon S3 Data Source",
    "description" : "Description of first Amazon S3 data source"
  },
  "sourceStorage" : "7c7c7898-a7e9-40ca-af21-133c4fe3ae4c",
  "datePattern" : "yyyy/MM/dd/HH/mm",
  "fileMatchPattern" : {
    "clazz" : "AllMatcher"
  },
  "contentType" : {
    "type" : "JsonContentType"
  },
  "computeEnvironment" : "4a7e42ff-c540-4383-94fd-cfd250730d14",
  "destinationStorage" : "99919a88-851a-40a2-89c3-d2cb1454b1e8",
  "compression" : {
    "clazz" : "AutoDetectCompression"
  },
  "interval" : 120
}' "https://api.upsolver.com/api/v1/data-source/"
```
 
## S3 Over SQS

Connect to your AWS S3 Bucket using SQS Notifications.

You'll need to configure SQS Notifications from your S3 Bucket and to open permissions to read and delete messages from the SQS Queue to the same access key and secret key you entered to give Upsolver permissions to read from the S3 Bucket

#### Fields

Field | Name | Type | Description | Optional 
--- | --- | --- | ---
displayData.name | Name | String | Data Source Name | 
displayData.description | Description | String | Data Source Description | 
sourceStorage | Source Storage | String | Please select the cloud storage which you wish to ingest files from. | 
contentType | Content Format | [ContentType](content-types.md) | Please select the format of the messages. Supported formats are: JSON, AVRO, CSV, TSV, ORC, Protobuf and x-www-form-urlencoded. For self-describing formats like JSON, the schema will be auto-detected. The body should contain of the message should contain the message itself, which should not be url-encoded. Messages can be compressed, Upsolver will automatically detect the compression type. Supported compression types are: Zip, GZip, Snappy and None. | 
computeEnvironment | Compute Cluster | String |  | 
destinationStorage | Target Storage | String | The data and metadata files for this Data Source will be stored in this storage | 
compression | Compression | Compression |  | 
prefix | Prefix | String | The prefix of the files or directories, if you wish to filter a specific directory - add a trailing / | X
suffix | Suffix | String | The suffix of the files to read | X
startExecutionFrom | Start Ingestion From | String (ISO-8601) | Configure the time which you would like to have data ingested from. Messages which are before this time will be ignored. If you leave this field empty all messages will be ingested. | X
endExecutionAt | End Read At | String (ISO-8601) | If configured stop reading after this date | X

#### Example

```bash
curl -X POST -H "content-type: application/json" -H "Authorization: YOUR_TOKEN" \
-d '{
  "clazz" : "S3OverSQSInputRequest",
  "displayData" : {
    "name" : "First S3 Over SQS Data Source",
    "description" : "Description of first S3 Over SQS data source"
  },
  "sourceStorage" : "b74c10b9-b81a-4d7c-9dc4-ad5978ff5f6d",
  "contentType" : {
    "type" : "JsonContentType"
  },
  "computeEnvironment" : "ef3c4d83-290c-4659-9f26-9a3203ed3d5c",
  "destinationStorage" : "5a7ec5d0-ca38-4579-9972-cd0b5102b38b",
  "compression" : {
    "clazz" : "AutoDetectCompression"
  }
}' "https://api.upsolver.com/api/v1/data-source/"
```
 
## Kafka

Connect to any topic on your Kafka Servers.

Upsolver will read events from your Kafka cluster, from the specified Kafka topic.
A prerequisite for defining a Kafka stream connection is providing Upsolver with the appropriate credentials for reading from your Kafka cluster. If you haven't done this yet, please contact Upsolver Support.

#### Fields

Field | Name | Type | Description | Optional 
--- | --- | --- | ---
displayData.name | Name | String | Data Source Name | 
displayData.description | Description | String | Data Source Description | 
kafkaVersion | Kafka Version | KafkaVersion | The Version of the Kafka Servers. If you're not sure, use 0.10.x.x | 
kafkaHosts | Kafka Hosts | String | Kafka hosts separated with commas. For example: foo:9092,bar:9092 | 
topicName | Kafka Topic | String | The Kafka topic to ingest the data from | 
readFromStart | Read From Start | Boolean | Whether to read the data from the start of the topic or to begin from the end | 
contentType | Content Format | [ContentType](content-types.md) | Please select the format of the messages. Supported formats are: JSON, AVRO, CSV, TSV, ORC, Protobuf and x-www-form-urlencoded. For self-describing formats like JSON, the schema will be auto-detected. The body should contain of the message should contain the message itself, which should not be url-encoded. Messages can be compressed, Upsolver will automatically detect the compression type. Supported compression types are: Zip, GZip, Snappy and None. | 
computeEnvironment | Compute Cluster | String | The compute cluster used to run the data source. | 
connectionPointer | Target Storage | String | The data and metadata files for this Data Source will be stored in this storage | 
shards | Shards | Int | Determines how many readers should be used in parallel to read the stream. A recommended value would be to increase it by 1 for every 70 MB/s in sent to your topic. | 
parallelism | Parallelism | Int | The number of independent shards to parse data, to increase parallelism and reduce latency. This should remain 1 in most cases and be no more than the number of shards used to read the data from the source | 
isOnline | Real Time Statistics | Boolean | Calculate this Data Source's statistics in Real-Time directly from the input stream if a Real-Time Cluster is deployed. [Read more](https://docs.upsolver.com/Clusters/realtime.html) | 
useSsl | Use SSL | Boolean | Set this to true if your connection requires ssl. Please contact us to ensure your ssl certificate is supported. | 
retention | Retention | Int (Minutes) | A retention period for the data. After this amount of time elapsed the data will be deleted forever. | X
endExecutionAt | End Read At | String (ISO-8601) | If configured, the data source will stop reading data after this date. | X

#### Example

```bash
curl -X POST -H "content-type: application/json" -H "Authorization: YOUR_TOKEN" \
-d '{
  "clazz" : "KafkaInputRequest",
  "displayData" : {
    "name" : "First Kafka Data Source",
    "description" : "Description of first Kafka data source"
  },
  "kafkaVersion" : "0.10.x.x",
  "kafkaHosts" : "kafkaHosts",
  "topicName" : "topicName",
  "readFromStart" : true,
  "contentType" : {
    "type" : "JsonContentType"
  },
  "computeEnvironment" : "53423dbb-b1f8-4562-8f1f-58838a21c777",
  "connectionPointer" : "e286392b-fd4d-4238-b6e8-133376bb91c3",
  "shards" : 1,
  "parallelism" : 1,
  "isOnline" : true,
  "useSsl" : true
}' "https://api.upsolver.com/api/v1/data-source/"
```
 
## Amazon Kinesis Stream

Connect to your Amazon Kinesis. The stream will read from the Kinesis stream you define.

Upsolver can read events from your Amazon Kinesis, according to the specified stream.
A prerequisite for defining an Amazon Kinesis stream connection is providing Upsolver with the appropriate credentials for reading from your Amazon Kinesis stream. If you haven't done this yet, please refer here.

#### Fields

Field | Name | Type | Description | Optional 
--- | --- | --- | ---
displayData.name | Name | String | Data Source Name | 
displayData.description | Description | String | Data Source Description | 
contentType | Content Format | [ContentType](content-types.md) | Please select the format of the messages. Supported formats are: JSON, AVRO, CSV, TSV, ORC, Protobuf and x-www-form-urlencoded. For self-describing formats like JSON, the schema will be auto-detected. The body should contain of the message should contain the message itself, which should not be url-encoded. Messages can be compressed, Upsolver will automatically detect the compression type. Supported compression types are: Zip, GZip, Snappy and None. | 
kinesisConnection | Kinesis Connection | String | The AWS credentials to connect to Kinesis | 
streamName | Stream | String | Please enter the name of the relevant Kinesis stream. | 
readFromStart | Read From Start | Boolean | Configure the time which you would like to have data ingested from. Messages which are before this time will be ignored. If you leave this field empty all messages will be ingested. | 
computeEnvironment | Compute Cluster | String |  | 
connectionPointer | Target Storage | String | The data and metadata files for this Data Source will be stored in this storage | 
isOnline | Real Time Statistics | Boolean | Calculate this Data Source's statistics in Real-Time directly from the input stream if a Real-Time Cluster is deployed. [Read more](https://docs.upsolver.com/Clusters/realtime.html) | 
shards | Shards | Int | Determines how many readers should be used in parallel to read the stream. A recommended value would be to increase it by 1 for every 70 MB/s in sent to your topic. | 
parallelism | Parallelism | Int | The number of independent shards to parse data, to increase parallelism and reduce latency. This should remain 1 in most cases and be no more than the number of shards used to read the data from the source | 
compression | Compression | Compression |  | 
retention | Retention | Int (Minutes) | A retention period for the data. After this amount of time elapsed the data will be deleted forever. | X
endExecutionAt | End Read At | String (ISO-8601) | If configured stop reading after this date | X

#### Example

```bash
curl -X POST -H "content-type: application/json" -H "Authorization: YOUR_TOKEN" \
-d '{
  "clazz" : "KinesisInputRequest",
  "displayData" : {
    "name" : "First Amazon Kinesis Stream Data Source",
    "description" : "Description of first Amazon Kinesis Stream data source"
  },
  "contentType" : {
    "type" : "JsonContentType"
  },
  "kinesisConnection" : "2a7ee169-4004-497c-9fa6-bb5522aecdeb",
  "streamName" : "streamName",
  "readFromStart" : true,
  "computeEnvironment" : "a8cba917-9bdf-413f-b14f-274ffbff6733",
  "connectionPointer" : "b3d1ef85-7ef7-47c2-aa75-31e8770ca7e7",
  "isOnline" : true,
  "shards" : 1,
  "parallelism" : 1,
  "compression" : {
    "clazz" : "AutoDetectCompression"
  }
}' "https://api.upsolver.com/api/v1/data-source/"
```
 
## Azure Blob Storage

Connect to your Azure Blob Storage Container. Files should be partitioned by date and time.

Upsolver can read events directly from your cloud storage, assuming events are partitioned by event date and time (defines the folder structure in the cloud storage).
A prerequisite for defining a cloud storage data source is providing Upsolver with the appropriate credentials for reading from your cloud storage. If you haven't done this yet, please refer to this page.

#### Fields

Field | Name | Type | Description | Optional 
--- | --- | --- | ---
displayData.name | Name | String | Data Source Name | 
displayData.description | Description | String | Data Source Description | 
sourceStorage | Azure Blob Storage Connection | String | Please select the cloud storage which you wish to ingest files from. | 
datePattern | Date Pattern | String | Please specify the date pattern in the file name / folder structure. For example: yyyy/MM/dd/HH/mm. Date format specification should be according to [Java DateTimeFormatter format](https://docs.oracle.com/javase/9/docs/api/java/time/format/DateTimeFormatter.html). | 
fileMatchPattern | File Name Pattern | FileNameMatcher | Please select the file name pattern for the files you'd like to ingest. If all the files in specified folders are relevant, please select All. The pattern given is matched against the file path starting from the FULL PATH field above. | 
contentType | Content Format | [ContentType](content-types.md) | Please select the format of the messages. Supported formats are: JSON, AVRO, CSV, TSV, ORC, Protobuf and x-www-form-urlencoded. For self-describing formats like JSON, the schema will be auto-detected. The body should contain of the message should contain the message itself, which should not be url-encoded. Messages can be compressed, Upsolver will automatically detect the compression type. Supported compression types are: Zip, GZip, Snappy and None. | 
computeEnvironment | Compute Cluster | String |  | 
destinationStorage | Target Storage | String | The data and metadata files for this Data Source will be stored in this storage | 
compression | Compression | Compression |  | 
interval | Interval | Int (Minutes) |  | 
prefix | Folder | String | If the data resides in a sub folder within the defined cloud storage, please specify this folder. | X
startExecutionFrom | Start Ingestion From | String (ISO-8601) | Configure the time which you would like to have data ingested from. Files which are before this time (based on the provided date pattern) will be ignored. If you leave this field empty all files will be ingested. | X
retention | Retention | Int (Minutes) | A retention period for the data. After this amount of time elapsed the data will be deleted forever. | X
dataDumpDate | Data Dump Date | String (ISO-8601) |  | X
maxDelay | Max Delay | Int (Minutes) |  | X

#### Example

```bash
curl -X POST -H "content-type: application/json" -H "Authorization: YOUR_TOKEN" \
-d '{
  "clazz" : "AzureBlobStorageInputRequest",
  "displayData" : {
    "name" : "First Azure Blob Storage Data Source",
    "description" : "Description of first Azure Blob Storage data source"
  },
  "sourceStorage" : "02b82e6d-65b7-4c08-9852-60afa54ea41e",
  "datePattern" : "yyyy/MM/dd/HH/mm",
  "fileMatchPattern" : {
    "clazz" : "AllMatcher"
  },
  "contentType" : {
    "type" : "JsonContentType"
  },
  "computeEnvironment" : "1232acc8-2f50-4edb-b987-88711ef8d296",
  "destinationStorage" : "55a98ad8-63a3-496c-851b-dfb937c6feb0",
  "compression" : {
    "clazz" : "AutoDetectCompression"
  },
  "interval" : 120
}' "https://api.upsolver.com/api/v1/data-source/"
```
 
## Google Cloud Storage

Connect to your Google Storage Bucket. Files should be partitioned by date and time.

Upsolver can read events directly from your cloud storage, assuming events are partitioned by event date and time (defines the folder structure in the cloud storage).
A prerequisite for defining a cloud storage data source is providing Upsolver with the appropriate credentials for reading from your cloud storage. If you haven't done this yet, please refer to this page.

#### Fields

Field | Name | Type | Description | Optional 
--- | --- | --- | ---
displayData.name | Name | String | Data Source Name | 
displayData.description | Description | String | Data Source Description | 
sourceStorage | Google Storage Connection | String | Please select the cloud storage which you wish to ingest files from. | 
datePattern | Date Pattern | String | Please specify the date pattern in the file name / folder structure. For example: yyyy/MM/dd/HH/mm. Date format specification should be according to [Java DateTimeFormatter format](https://docs.oracle.com/javase/9/docs/api/java/time/format/DateTimeFormatter.html). | 
fileMatchPattern | File Name Pattern | FileNameMatcher | Please select the file name pattern for the files you'd like to ingest. If all the files in specified folders are relevant, please select All. The pattern given is matched against the file path starting from the FULL PATH field above. | 
contentType | Content Format | [ContentType](content-types.md) | Please select the format of the messages. Supported formats are: JSON, AVRO, CSV, TSV, ORC, Protobuf and x-www-form-urlencoded. For self-describing formats like JSON, the schema will be auto-detected. The body should contain of the message should contain the message itself, which should not be url-encoded. Messages can be compressed, Upsolver will automatically detect the compression type. Supported compression types are: Zip, GZip, Snappy and None. | 
computeEnvironment | Compute Cluster | String |  | 
destinationStorage | Target Storage | String | The data and metadata files for this Data Source will be stored in this storage | 
compression | Compression | Compression |  | 
interval | Interval | Int (Minutes) |  | 
prefix | Folder | String | If the data resides in a sub folder within the defined cloud storage, please specify this folder. | X
startExecutionFrom | Start Ingestion From | String (ISO-8601) | Configure the time which you would like to have data ingested from. Files which are before this time (based on the provided date pattern) will be ignored. If you leave this field empty all files will be ingested. | X
retention | Retention | Int (Minutes) | A retention period for the data. After this amount of time elapsed the data will be deleted forever. | X
dataDumpDate | Data Dump Date | String (ISO-8601) |  | X
maxDelay | Max Delay | Int (Minutes) |  | X

#### Example

```bash
curl -X POST -H "content-type: application/json" -H "Authorization: YOUR_TOKEN" \
-d '{
  "clazz" : "GoogleCloudStorageInputRequest",
  "displayData" : {
    "name" : "First Google Cloud Storage Data Source",
    "description" : "Description of first Google Cloud Storage data source"
  },
  "sourceStorage" : "d43820e5-0b58-4bd6-b075-f1e9227286ee",
  "datePattern" : "yyyy/MM/dd/HH/mm",
  "fileMatchPattern" : {
    "clazz" : "AllMatcher"
  },
  "contentType" : {
    "type" : "JsonContentType"
  },
  "computeEnvironment" : "bc666d9e-4607-4e88-93fd-619a2bf6c14f",
  "destinationStorage" : "c42db6e1-1ba5-4fea-98ad-560c99219358",
  "compression" : {
    "clazz" : "AutoDetectCompression"
  },
  "interval" : 120
}' "https://api.upsolver.com/api/v1/data-source/"
```
 
## HTTP

Connect your stream using HTTP requests from any source.

Upsolver receives the data as POST, with the data in the body.
Headers sent with the request are also ingested as part of the stream, so metadata can be added to the request header.
Once you create the connection, you will be provided with an HTTP endpoint.

#### Fields

Field | Name | Type | Description | Optional 
--- | --- | --- | ---
displayData.name | Name | String | Data Source Name | 
displayData.description | Description | String | Data Source Description | 
contentType | Content Format | [ContentType](content-types.md) | Please select the format of the messages. Supported formats are: JSON, AVRO, CSV, TSV, ORC, Protobuf and x-www-form-urlencoded. For self-describing formats like JSON, the schema will be auto-detected. The body should contain of the message should contain the message itself, which should not be url-encoded. Messages can be compressed, Upsolver will automatically detect the compression type. Supported compression types are: Zip, GZip, Snappy and None. | 
computeEnvironment | Compute Cluster | String |  | 
connectionPointer | Target Storage | String | The data and metadata files for this Data Source will be stored in this storage | 
retention | Retention | Int (Minutes) | A retention period for the data. After this amount of time elapsed the data will be deleted forever. | X
endExecutionAt | End Read At | String (ISO-8601) | If configured stop reading after this date | X

#### Example

```bash
curl -X POST -H "content-type: application/json" -H "Authorization: YOUR_TOKEN" \
-d '{
  "clazz" : "HttpInputRequest",
  "displayData" : {
    "name" : "First HTTP Data Source",
    "description" : "Description of first HTTP data source"
  },
  "contentType" : {
    "type" : "JsonContentType"
  },
  "computeEnvironment" : "1ce87d8f-e3b5-4153-9fcc-94c3d9c8e17c",
  "connectionPointer" : "46c77849-2491-45ce-8402-4ea0dfadbb2c"
}' "https://api.upsolver.com/api/v1/data-source/"
```
 