# Changelog

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
