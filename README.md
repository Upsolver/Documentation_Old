# Upsolver Introduction

Upsolver is a streaming aggregation engine for [Amazon S3](https://aws.amazon.com/s3/).  
It executes [continuous queries](/continuous-queries.md) over data streams and S3, incrementally storing the results in any [output](/outputs.md).

Upsolver [empowers data scientists, data analysts and developers](/who-should-use.md) to replace ETL code and data engineering projects with [continuous queries](/continuous-queries.md), defined in a few minutes over streams of raw data like JSON and CSV files.

Upsolver enables database functionality for streaming data, including [materialized views](/indexed-views.md), [long window aggregations](/aggregations/sliding-time-windows.md), [multi-value aggregations](/aggregations/multi-value-aggregations.md), [retroactive queries from S3](/continuous-queries.md) and [join between streams](/materialized-view-lookup.md).

## Everything is a stream

Upsolver is a stream processing engine. 

Unlike other data platforms, there is only one streaming code path. Batch inputs are processed one event at a time \(like a stream\). Every incoming event updates the results of a [continuous query](/continuous-queries.md).

