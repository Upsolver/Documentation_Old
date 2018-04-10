# Materialized Views

## What are materialized views

Materialized view is a database object, built to physically store the results of a query for fast retrieval.

## What are Upsolver materialized views

Upsolver materialized view is similar to a database materialized view except it stores the results of a [Continuous Query](/Introduction/continuous-queries.md) instead of a regular database query.

Upsolver materialized view is:

* Composed of key columns and aggregations on [sliding windows](/aggregations/sliding-time-windows.md) and [session windows](/aggregations/session-windows.md).
* Always up-to-date - every incoming event updates the materialized views' result.
* Query-able via API in milliseconds.

## What is it good for

* Real-time aggregations - an Upsolver materialized view replaces ETL code and a serving DB like Redis or Cassandra.
* Join between streams - by querying a materialized view, it's possible to enrich one stream with data from another stream. You can read more at [Materialized View Lookup](/Functions/materialized-view-lookup.md).

## How does it work

Upsolver Materialized Views are built using map-reduce jobs on S3 and a real-time engine \([Lambda Architecture](https://en.wikipedia.org/wiki/Lambda_architecture)\).

Upsolver implemented proprietary compression for streaming data aggregations, reaching over 90% reduction in RAM use.

For example - Upsolver stores 500M users with 30 key columns in-memory using only 16GB of RAM.
