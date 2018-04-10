# Kafka

The _Kafka Data Source_ is a streaming data source which will ingest data directly from the provided Kafka topic into Upsolver. For the purposes of this guide we will assume you already have a running Kafka cluster and a topic you would like to ingest.

## Creating A New Kafka Data Source

1. On the [Data Sources](/DataSources/README.md) page click _Add New Data Source_.
2. Select _Kafka_ from the list.
3. Fill in a name for your Data Source.
4. In the _Version_ drop down menu select the appropriate version for your Kafka cluster.
5. In the _Kafka Hosts_ provide a comma separated list of the public IPs or DNS names of your Kafka servers with the port specified. For example `255.255.255.255:9092,kafka-prod-1.mydomain.com:9092`.
6. In the _Kafka Topic_ field enter the name of the topic you would like to ingest.
7. If you would like to ingest the topic from the beginning check the box _Read From Start_. If this checkbox is left unchecked the ingestion will start from the head (latest data) of the topic.
8. In the _Content Format_ drop down menu select the format of the messages in the Kafka topic.
9. Select the _Compute Cluster_ you would like this Data Source to run on. If you have not created a [Compute Cluster](/Clusters/compute.md) yet, you can create one from the drop down menu.
10. You can choose to change where the ingested data from this source will be saved by changing the _Storage_ field in the _Advanced_ section.
11. If your topic contains large amounts of data you should increase the parallelism value in the _Advanced_ section. A recommended value would be to increase it by 1 for every 50 MB/s sent to your topic. For example, if your topic ingests 360MB/s (equivalent to 30TB per day), then you should set the parallelism to 8. If your process is sensitive to processing delays, it is recommended to set this value according to the peak data rate. Otherwise, it can be set to the average expected daily data rate. This value should be set to accommodate the maximum data rate expected, since it can't be changed later.

## Permissions

In order for Upsolver to read from your Kafka cluster you will need to open the cluster's security settings to allow polling from our servers. To get the list of IP's you will need to allow please contact our support. For more information see [Kafka Permissions](SetupGuides/kafka.md).
