# Summary

* [Introduction](README.md)
  * [Continuous Queries](Introduction/continuous-queries.md)
  * [When to Use](Introduction/when-to-use.md)
  * [Who Should Use](Introduction/who-should-use.md)
  * [How is it Different](Introduction/how-is-it-different.md)
  * [Data Storage](Introduction/data-storage.md)
  * [Windowing](Introduction/windowing.md)
  * [Devops](Introduction/devops.md)
  * [Data Privacy](Introduction/data-privacy.md)
* [Account Management](AccountManagement/README.md)
  * [Single Sign On](AccountManagement/sso.md)
* [Data Sources](DataSources/README.md)
  * [Data Source Discovery](DataSources/data-source-discovery.md)
  * [Connectors](DataSources/Connectors/README.md)
    * [AWS Kinesis](DataSources/Connectors/kinesis.md)
    * [AWS S3](DataSources/Connectors/s3.md)
    * [Azure Blob Storage](DataSources/Connectors/azure-blob-storage.md)
    * [Azure Event Hub](DataSources/Connectors/azure-event-hub.md)
    * [File upload](DataSources/Connectors/file-upload.md)
    * [Kafka](DataSources/Connectors/kafka.md)
  * [Setup Guides](DataSources/SetupGuides/README.md)
    * [AWS Integration](DataSources/SetupGuides/aws-integration.md)
    * [S3 Permissions](DataSources/SetupGuides/s3.md)
    * [Kinesis Permissions](DataSources/SetupGuides/kinesis.md)
    * [Kafka Permissions](DataSources/SetupGuides/kafka.md)
    * [Athena Permissions](DataSources/SetupGuides/athena.md)
* [Materialized Views](MaterializedViews/README.md)
  * [Create](MaterializedViews/create.md)
  * [Edit](MaterializedViews/edit.md)
  * [Archive and Delete](MaterializedViews/archive-and-delete.md)
  * [Serving API](MaterializedViews/query-api.md)
  * [Inspecting Your Materialized View](MaterializedViews/inspecting-your-materialized-view.md)
* [Outputs](Outputs/README.md)
  * [Batch Outputs](Outputs/batch-outputs.md)
    * [Amazon Athena Output](Outputs/athena-output.md)
    * [Amazon Redshift Output](Outputs/redshift-output.md)
    * [Amazon S3 Output](Outputs/s3.md)
    * [ElasticSearch](Outputs/elasticsearch.md)
    * [Qubole](Outputs/qubole.md)
  * [Supported File Formats](Outputs/supported-file-formats.md)
  * [Supported Compressions](Outputs/supported-compressions.md)
  * [Configuring Schema And Filters](Outputs/configuring-schema-and-filters.md)
  * [Aggregating Data](Outputs/aggregating-data.md)
  * [Running And Stopping Outputs](Outputs/running-and-stopping-outputs.md)
* [UpSQL](UpSQL/README.md)  
  * [Mapping Data To a Desired Schema](UpSQL/mapping-data-to-desired-scheme.md)
  * [Transforming Data](UpSQL/TransformingData/README.md)
    * [Filter a Stream Using The WHERE Clause](UpSQL/TransformingData/filter-a-stream-using-the-where-clause.md)
    * [Join Data From Several Data Sources](UpSQL/TransformingData/join-data-from-several-data-sources.md)
    * [Perform Calculations And Conversions](UpSQL/TransformingData/perform-calculations-and-conversions.md)
  * [Aggregate Streaming Data](UpSQL/aggregate-streaming-data.md)
  * [Query Hierarchical Data](UpSQL/query-hierarchical-data.md)
  * [UpSQL Syntax Reference](UpSQL/upsql-syntax-reference.md)
* [Functions](Functions/README.md)
  * [Aggregations](Functions/aggregations.md)
  * [Calculated](Functions/Calculated/README.md)
    * [Array Functions](Functions/Calculated/array.md)
    * [Conditional Functions](Functions/Calculated/conditional.md)
    * [Date Functions](Functions/Calculated/date.md)
    * [External APIs Functions](Functions/Calculated/external-apis.md)
    * [Filters Functions](Functions/Calculated/filters.md)
    * [Numeric Functions](Functions/Calculated/numeric.md)
    * [String Functions](Functions/Calculated/string.md)
    * [Structural Functions](Functions/Calculated/structural.md)
    * [Type Conversions Functions](Functions/Calculated/type-conversions.md)
  * [Deduplicate](Functions/deduplicate.md)
  * [Materialized View Lookup](Functions/materialized-view-lookup.md)
  * [Reference Data](Functions/reference-data.md)
* [Clusters](Clusters/README.md)
  * [Compute Cluster](Clusters/compute.md)
  * [Query Cluster](Clusters/query.md)
  * [Real Time Cluster](Clusters/realtime.md)
* [Deployment](Deployments/README.md)
  * [AWS](Deployments/AWS/README.md)
    * [Private VPC](Deployments/AWS/private-vpc.md)
    * [Upsolver VPC](Deployments/AWS/upsolver-vpc.md)
    * [Permissions](Deployments/AWS/role-permissions.md)
    * [Redshift Spectrum](Deployments/AWS/redshift-spectrum.md)
    * [VPC Peering](Deployments/AWS/private-vpc-peering.md)
    * [Security & DR](Deployments/AWS/non-functional.md)
    * [Troubleshooting](Deployments/AWS/troubleshooting.md)
  * [GCP](Deployments/GCP/README.md)
  * [Azure](Deployments/Azure/README.md)
  * [On Premises](Deployments/OnPremises/README.md)
* [Connections](Connections/README.md)
  * [Amazon Redshift Connection](Connections/amazon-redshift.md)
* [Integrations](Integrations/README.md)
  * [Git](Integrations/git.md)
* [Users and Permissions](Permissions/Overview.md)
  * [Billing](Permissions/Actions/billing.md)
  * [Clusters](Permissions/Actions/clusters.md)
  * [Connections](Permissions/Actions/connections.md)
  * [Data-Sources](Permissions/Actions/data-source.md)
  * [IAM](Permissions/Actions/iam.md)
  * [Lookup Tables](Permissions/Actions/materialized-view.md)
  * [Notifications](Permissions/Actions/notifications.md)
  * [Organization](Permissions/Actions/organization.md)
  * [Outputs](Permissions/Actions/output.md)
  * [Reference Data](Permissions/Actions/reference-data.md)
  * [User Defined Functions](Permissions/Actions/user-defined-functions.md)
  * [Workspaces](Permissions/Actions/workspace.md)
* [API Reference](API/README.md)
  * [Authentication](API/authentication.md)
  * [Data Sources](API/DataSources/README.md)
    * [Create](API/DataSources/create.md)
    * [Modify](API/DataSources/modify.md)
    * [Content Types Reference](API/DataSources/content-types.md)
* [Changelog](CHANGELOG.md)
