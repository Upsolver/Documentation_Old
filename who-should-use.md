# Who Should Use

## **I’m a developer. How can Upsolver help me?**

Real-time aggregations and real-time analytics with no data engineering.

Developers who need aggregations have to wait weeks or even months for data engineers to write code for ingesting streams, preparing aggregations using tools like Spark Streaming and storing the results in serving DBs like Redis.

In Upsolver Streams, you can do it yourself in 5 minutes, since aggregations are defined using a [continuous query](/continuous-queries.md) instead of code. The serving DB is replaced with Upsolver’s [serving API](/indexed-views/query-api.md) that returns the current state of a [continuous query](/continuous-queries.md).

## **I’m a data analyst/BI developer. How can Upsolver help me?**

Accelerate an existing data warehouse and stop waiting for data engineering resources.

Streaming data is usually too big to fit in a data warehouse. The data volume makes the data warehouse too big, expensive, slow to query and hard to maintain. The alternative is waiting for data engineers who have the coding skills to handle streaming data outside the data warehouse.

Upsolver offers a self-service platform for data analysts and BI developers to query streaming data outside the data warehouse, storing the aggregated results in their existing data warehouse.

This use case is very common among AWS Redshift users.

## **I’m a data scientist. How can Upsolver help me?**

Dramatically reduce data engineering overhead:

1. Streaming machine learning - data scientists build their datasets using batch code, but models have to run using streaming code that developers write.  
   Upsolver enables data scientists to build their datasets using streams so training and serving will work using only one code path. Time to market is reduced by 95%.

2. Self-serve analytics - data scientists want an SQL interface to speed up their research but they have to wait for data engineers to write complicated ETL code.  
   Using Upsolver, data scientists can store streaming data in their preferred database without waiting for data engineers.  
   It’s popular to use Upsolver with AWS Athena to create serverless analytics at low cost and without any devops.

## **I’m a data engineer. How can Upsolver help me?**

Eliminate devops by using a cloud service and greatly accelerate your ability to deliver data when and where it's needed.

Stop writing boring ETL code for data scientists, data analysts and developers. Let them do it on their own using a self-service platform.

