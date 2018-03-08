# How is it Different

## **What does Upsolver Streams replace?**

For data analysts and data scientists, Upsolver Streams replaces ETL code and database queries that are part of the ETL process.

For developers, Upsolver replaces ETL code and the serving DB \(Redis, Cassandra, etc.\) for retrieving aggregations by one or several keys.

## How is** Upsolver Streams different from AWS kinesis Analytics?**

Unlike [Kinesis Analytics](https://aws.amazon.com/kinesis/analytics/), Upsolver Streams:

* Does not require coding, scripting or devops.

* Combines recent and historical data - Kinesis Analytics is limited to recent data as it runs SQL statements on data that can reside in-memory. Upsolver combines both recent data and historical data using [Materialized Views](/indexed-views.md) over S3, [long window aggregations](/aggregations/sliding-time-windows.md), [retroactive queries from S3](/continuous-queries.md) and [join between streams](/calculated-fields/index-lookup.md).

* Use S3 for cheap events storage.

* Is streaming first - [Kinesis Analytics](https://aws.amazon.com/kinesis/analytics/) is actually a batch engine with in-memory SQL statements. Upsolver is a streaming engine, incrementally updating query results with every new event.

* Supports any size of stream, while [Kinesis Analytics](https://aws.amazon.com/kinesis/analytics/) can have trouble with streams greater than several thousand events per second.

* Allows replaying historical data, so you don't have to do tricky data migrations or throw away old data every time your code changes.

## How is** Upsolver Streams different from Spark Streaming?**

Unlike [Spark Streaming](https://spark.apache.org/streaming/), Upsolver Streams:

* Does not require coding or devops. Spark Streaming offers low level APIs for data engineers. Creating a DB integration is usually critical for keeping state.

* Combines recent and historical data - Spark Streaming is limited to recent data as it runs on data that can reside in-memory. Upsolver combines both recent data and historical data using [Materialized Views](/indexed-views.md) over S3, [long window aggregations](/aggregations/sliding-time-windows.md), [retroactive queries from S3](/continuous-queries.md) and [join between streams](/calculated-fields/index-lookup.md).

* Use S3 for cheap events storage.

* Is streaming first - [Spark Streaming](https://spark.apache.org/streaming/) is actually a batch engine with in-memory SQL while Upsolver is a streaming engine, incrementally updating query results with every new event.

## How is** Upsolver Streams different from legacy ETL systems?**

Legacy ETL systems load raw level data into a database and use it for aggregations.

For big data, legacy ETL leads to big and expensive databases which are slow to query and hard to maintain.

Unlike legacy ETL systems, Upsolver:

* Does not require coding, scripting or devops.

* Uses S3 for cheap events storage.

* Is streaming first - ETL processes almost always run as batch processes.

* Has integrations to non database outputs like [S3](https://aws.amazon.com/s3/), [Kinesis](https://aws.amazon.com/kinesis/streams/), [Kafka](https://kafka.apache.org/) and HTTP.



