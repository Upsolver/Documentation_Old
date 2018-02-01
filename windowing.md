# Time Windows

In Upsolver, all data is streaming, which means that any aggregation must run on a time window. Upsolver natively supports sliding time window aggregations, which slide every minute. For example, if you want an aggregation of 6 hours, querying an aggregation at 13:15:35 will result in the data in the range 07:15:00 - 13:15:35.

## Multiple aggregations in the same Materialized View

It's easy to add multiple aggregations to the same materialized view in Upsolver. You can use different time windows for each aggregation, and the platform will make sure that all your data is up to date up to the minute.

## Limitations on time window size

In Upsolver, there is no limitation on the size of the time window used, and you can even define a lifetime aggregation. All data stored in the materialized views is compressed, so you don't need to worry about running out of memory. Upsolver supports materialized views with billions of records and more without any need for performance tuning, so you can safely use large time windows with no adverse effects.

