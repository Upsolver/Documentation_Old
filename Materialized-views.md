# What is it

Indexed Views are used to create, store and query aggregations in real-time.

They are:

* Defined as a [continuous query](/continuous-queries.md) over streams with keys and [aggregations](/aggregations.md).![](blob:https://www.gitbook.com/7953a260-a799-48a6-88bc-fce65707e710)Always up-to-date as Upsolver incrementally updates the query result with every new event.
* Query-able via API in less than 5 milliseconds latency \(sub milli-second in the same AWS region\).

# How is it different

Upsolver's Indexed Views are similar to materialized views in OracleDB and to Indexed Views in MS-SQL.  
There are 3 keys differences:

* Real-time vs batch - Upsolver performs incremental changes to the view on every incoming event \(stream processing\) while others update the view every X minutes/hours as part of a batch process.
* Size - Upsolver's Indexed Views reach over 90% compression by creating an optimized compression for aggregations on append only data \(data streams\). Upsolver keeps its Indexed Views in-memory.
  Benchmark: 500 millions users with an average of 30 aggregations per user at less than 16GB of RAM.
* Performance - Upsolver Indexed Views can be scaled to millions of queries per second at milliseconds latency, replacing the need for serving DBs like Redis, Cassandra and MongoDB for storing aggregations.

# How to create

3 steps:

1. Click on "Add Indexed View" from the "Data Sources" page or by clicking on "Add Indexed View" from the Tables page.
2. Choose a data source to run a [continuous query](/continuous-queries.md) on.
3. Define keys using [data source schema](/DataSources/data-source-discovery.md) and [aggregations](/aggregations.md).



# How to change

## How to archive/delete

Click on the blue button on the top right corner and choose "Archive" or "Delete".

# How to query

By using a REST API.![](/assets/Query Indexed Views.png)

If you are interested in a proprietary client, please contact us at [info@upsolver.com](mailto:info@upsolver.com).



