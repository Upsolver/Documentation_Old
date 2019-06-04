# Changelog

## 2019/06/03

* Various Performance Improvements in UI
* Show connection errors when creating/editing MySQL/Redshift Output
* Fixed intermittent recoverable errors in tasks
* Fixed delay when using the same connection for multiple Redshift/Elasticsearch Outputs

## 2019/05/26

* _Experimental_: updating / deleting rows in output to Athena, you can try it
  out by using the “Upsert Key” and “Is Delete Field” special fields

## 2019/05/19

* Ingestion - Added “index” header to all messages (useful when ingesting multiple events in one message)
* Hive Metastore Outputs now drops duplicate logical partitions
* API - list Output / Materialized Views returns faster
* GDPR - Materialized Views now supports deleting rows
* Physical Deletion runs much faster with fewer operations on the underlying Cloud Storage
* Retention is now set on Materialized Views created by DEDUP features

## 2019/05/14

* Data Source - Simplified creation of Kafka, Kinesis and AWS S3 Data Sources

## 2019/05/13

* Replay Cluster - Fixes some cases where the replay cluster might not shut down

## 2019/05/06

* Qubole Client - set hive.on.master and use database for all queries
* Performance improvements for retention
* Elasticsearch Output - Better retry mechanism

## 2019/04/22

* Athena - Switch to using Glue API for all DDL statements
* Monitoring Tab - fix bug that would display some rows twice
* Outputs page - Correct the range of some of the graphs
* Add timeout to copy/read S3 requests to prevent processing delays
* Data Source - show a preview of data immediately upon creation
* Improve UI performance related to connections page

## 2019/04/08

* Dry run environment support
* Monitoring - added written items and written bytes 
* Monitoring - added original-task-name tag to all metrics  
* Qubole - set hive.on.master=false
* Permissions - added policy editor
* Athena - reduce spam of Athena history
* Athena - drop table when deleting an output if the option is selected
* Kafka - support changing the number of shards in the UI
* Some performance improvements
* UI - Added multi-unmap fields (for Avishai)

## 2019/04/01

* Increase Kafka consumer version to 2.1.1
* Monitor delay in managing partitions
* Bug fix - add connection timeout to ElasticSearch connections
* Remove dependency on Upsolver DynamoDB for servers starting up

## 2018/11/15

* Data Sources / Materialized Views / Outputs: Toggle between card view and table view

## 2018/11/14

* Translate Calculated Function: Show CSV Editor for the dictionary field
* Cluster Details Page: show the elastic IPs of the Cluster
* Outputs: Qubole Output
* Outputs: Usability Improvements in Creation/Deploy flow
* Upsolver Language: `"data.str":string in ('a','b','c')` syntax
* Upsolver Language: supports coalesce operator: 

```sql
"data.str":string? # COALESCE("data.str":string, '')
"data.str":string?'default-value' # COALESCE("data.str":string, 'default-value')
"data.bool":boolean? # COALESCE("data.bool":boolean, false)
"data.bool":boolean?true # COALESCE("data.bool":boolean, true)
"data.number":number? # COALESCE("data.number":number, 0)
"data.number":number?2.5 # COALESCE("data.number":number, 2.5)
```


## 2018/06/26

* Output / Materialized Views: Added ability to edit the Data Sources from
  the properties tab (Only if the object isn't deployed yet)

## 2018/06/18

* Aggregated Output: Added option to add calculated fields over aggregations

## 2018/06/17

* Compute Cluster: Allow to spin up "Replay" Cluster when needed
* Outputs: Edit S3 and Upsolver Outputs
* Filters: Improved UX (Whitelist and Blacklist Filters)
* Materialized Views: Time Series Aggregations are shown as graphs in the Data
  Sample tab

## 2018/03/01

* Materialized Views: Added an API to iterate the MVs
* Added Time Zone Offset Function
* Outputs: Added automatic time field to Athena and Upsolver outputs
* Calculated Fields: Support editing of calculated fields inputs and parameters
* Users can now create readonly S3 Connections
* Athena Output now supports setting of event time which is used for partitioning
* Elasticsearch Output now supports retention
* Various performance improvements to UI
* Support filtering on time range in Data Source inspection page
* Support for editing lookup enrichments
* Monitoring now shows Materialized Views that are used in Lookup enrichments
* Improvements to Auto Scaling
* Support non `string` Key Columns in Materialized Views
* Aggregated output doesn't change the type of the Key Columns to `string` anymore
