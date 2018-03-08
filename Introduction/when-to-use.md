# When to Use

## Data is too big for the data warehouse

Many companies choose to analyze all their data in a data warehouse. They enable data scientists, data analysts and developers to query the data, as they see fit, using SQL.

When dealing with big data streams, this approach doesn't work. Data warehouses like Amazon Redshift aren't built to handle so much data. They become big, expensive, slow to query and hard to maintain.

Upsolver solves this problem by [continuously querying](/continuous-queries.md) the data streams and [incrementally storing the result in the data warehouse](/outputs.md). As a result, the data warehouse is smaller, cheaper, faster and easier to maintain.

![](/assets/Accelerate Data Warehouse.png)

## Big data engineering bottleneck

For storing big data, companies prefer to use [data lakes](https://www.gitbook.com/book/orir/upsolver-documentation/edit#) like [Amazon S3](https://aws.amazon.com/s3/). Data lakes are designed for low cost storage but using them requires expert coding skills. That's why companies employ big data engineers who support data scientists, data analysts and developers. Big data engineers quickly become a bottleneck for data projects.

Upsolver Streams is offered as a [self-service platform for data scientists, data analysts and developers](/who-should-use.md). It replaces ETL code and data engineering projects with [continuous queries](/continuous-queries.md), defined in a few minutes over streams of raw data like JSON and CSV files.

![](/assets/Replace Data Engineer.png)

## Real-time is required

ETLs and databases are part of almost every architecture but they usually work on large batches of data, so real-time isn't possible. Real-time is usually implemented as a completely different system, causing the significant overhead of writing, testing and maintaining 2 code paths.

For Upsolver, everything is a stream. Even batch inputs are processed as a stream of events, so there is only one code path - a real-time code path.

Upsolver's end to end latency can be milliseconds for real-time use cases, while supporting any size stream of data.

Upsolver also offers [Indexed Views](/indexed-views.md) for storing aggregations. These views replace both ETL code and serving DBs like Cassandra, MongoDB, Redis, DynamoDB or DocumentDB. They can be queried millions of time per second at milliseconds latency.

![](/assets/Real-time Analytics.png)

## Machine learning on streams

Running machine learning on a stream requires a completely different architecture compared to running the same algorithms on batches of data.

Data scientists train models using datasets they created in a batch process, using scripts and queries to create their dataset. To run the model, developers need to implement real-time code that must work exactly like the batch code, which is usually written in a completely different language and takes advantage of batch processes that arent' applicable to the real-time code path. Any inconsistencies lead to poor model performance, and maintaining two synchronized code paths is extremely expensive and frustrating.

Upsolver Streams enables data scientists to build their dataset directly from the stream, eliminating the overhead of 2 code paths and improving production model performance.

![](/assets/Streaming Machine Learning8.png)

