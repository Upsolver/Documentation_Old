# Changelog

## 2020/03/16

* Data Sources:
  * Split meta-data by Event Type field - you are now able to split and view your data source by the desired field in your data source.
* Outputs:
  * SELECT * is supported for Upsolver and Elasticsearch outputs
  * Added Amazon Kinesis connector
  * Qubole connector now supports using an HTTPs proxy address to override the endpoint used to access Qubole
* IAM:
  * Added support for SAML with provisioning capabilities

## 2020/03/09

* Clusters
  * Compute cluster monitoring: Compute Units Graph was updated and now provides a breakdown of the compute units used by each task (Data Source / Output / Lookup Table)

## 2020/02/24

* Outputs:
  * Elasticsearch:
    * Editing the connection string is now supported - as long as the new nodes belong to the same cluster
    * Added support for setting the event to _doc

## 2020/02/18

* Transform With SQL:
  * Added support for partitioning configuration
  * Casting improvements
* Outputs:
  * Redshift: Addedd support for configuring fail on write error.
    If enabled, any error while copying data to Redshift will cause the entire bulk to be skipped. 
    The skipped manifest will be saved aside for manual re-processing once the copy error has been fixed. 
    If disabled the same behavior will occur after 100K errors (The max allowed by Redshift)
* Monitoring Reporting: 
  * A bug caused false reported delay (in rare cases) was fixed

## 2020/02/10

* Data Sources:
  * JDBC Data Source - add support for PostgreSQL

## 2020/02/05

* Outputs:
  * Added UUID Generator Calculated Function
* Transform With SQL
  * Added support for SQL comments (using --), for example:
  ```sql
  SELECT your_Select_clause -- your comment
  FROM your_table -- another comment
  ```
  * Improved error messages

## 2020/01/30

* Data Sources
  * Parquet reader: support INT96 timestamps and non-canonical field names
  * Added support for LZO decompression
  * Added a JDBC connector
* Outputs:
  * Support correcting a specific time frame in an output
  * Added UpdateSql programmatic API operation for creating outputs

## 2020/01/22

* IAM:
  * Multi-organization support
* Outputs:
  * Support lazy load of lookup tables
  * Support querying lookup table in SQL
  * Support sharding of aggregated outputs
* Data sources:
  * Support S3 data source initial load configuration
  * Support non-lexicographic date patterns in S3
* UI & performance improvements

## 2020/01/13

* Data Sources: 
  * Support XML as content type

## 2020/01/06

* Performance improvements and bug fixes

## 2019/12/22

* Outputs: 
  * Elasticsearch - add option *not* to delete indices from Elasticsearch based on retention
* UpSQL: 
  * Support data source features
* UI: 
  * Outputs - add support for filtering the Preview when in SQL mode
  * Performance improvements
  
## 2019/12/16

* Data Sources: 
  * Support changing the number of shards using increments of one (instead of multiplies of two)
* Outputs: 
  * Athena - add support for excluding partitions from the table
* UpSQL: 
  * Support default field names instead of col_x
  * Generate SQL for running Outputs
  * Refer to fields by index in the GROUP BY statement

## 2019/12/09

* UI improvements and bug fixes
  
## 2019/12/03

* Outputs: 
  * Add support for Redshift Spectrum
  * Update table schema in Qubole is now optional (the default behavior would be to update)

## 2019/11/17

* Outputs: 
  * Allow switching between raw and aggragated modes
  * Added QUERY_STRING_TO_RECORD calculated function for query string extractions
* UpSQL
  * Unify SQL code blocks into a single block

## 2019/11/10

* Athena Upserts: Update and delete existing data in your Data Lake
* UpSQL
  * Support having statement in Aggregated Outputs
  * Support DECIMAL types
  * Support Athena Upserts
* S3 Output: JSON files will end with one "\n" instead of two "\n" (as stated in [jsonlines.org](http://jsonlines.org))

## 2019/10/31

* When deploying an output, "Now" is resolved when submitting the form
* Connections and Clusters can be attached to Workspaces
* IAM: Lists of Data Sources, Outputs, Lookup Tables, Connections and Clusters
  are filtered by the user "list" permission

## 2019/09/23

* UI improvements
* Fixed bug on lookup to COLLECT_SET_EACH column
* Stability improvements

## 2019/09/02

* Allow changing default organization connection
* Added decimal support to Athena Outputs
* Allow turning off/on compactions in Athena Outputs
* Better support for Data Sources with large amounts of fields
* Notebook 📒 (Beta)
  * JOIN
  * GROUP BY
  * HAVING
  * and many more features and bug fixes

## 2019/07/08

* Various Performance Improvements in UI
* Added ZIP Calculated Function to ZIP between multiple arrays
* MySQL Output: Row is replaced if duplicate key is found
* Notebook 📒 (Beta)
    * like / not like syntax (e.g. “name” like ‘a__%’)
    * not in syntax (e.g. “status” not in (“failed”, “canceled”))
    * = as equality operator syntax (e.g. “status” = ‘ok’ instead of “status” == ‘ok’)
    * Better error messages

## 2019/06/24

* Lookup Tables / API Playground
  * Support querying multiple rows
  * Auto complete for keys
  * Querying on specific time range
* Notebook 📒 (Beta): a better way to create enrichments

## 2019/06/17

* Calculated Functions: Added numeric in feature (e.g. `“data.a”:number in (1,2,3)`)
* Parse Avro data using Confluent Schema Registry

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
