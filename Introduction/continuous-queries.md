# Continuous Queries

Continuous queries are similar to regular database queries with a few key differences as they run on data streams.

## Difference from regular database queries

| Database Queries | Continuous Queries |
| :---: | :---: |
| Invoked manually | Always running |
| Results available on query completion | Results are always available |
| Aggregations for a fixed time interval | Aggregations for [sliding windows](/aggregations/sliding-time-windows.md) and [session windows](/aggregations/session-windows.md) |

## How to define continuous queries

Upsolver's user interface acts as a query builder directly on raw file formats like JSON and CSV.

## How to retrieve the results

There are 2 options:

* [Query API](/indexed-views/query-api.md) to get the most current query results.
* Incrementally sending the query results to an [Output](/outputs.md).

## Retroactive queries with Amazon S3

Upsolver curates all incoming events on [Amazon S3](https://aws.amazon.com/s3/) so continuous queries could start running retroactively, saving the time spent waiting for data to accumulate.

