# Real Time Cluster

A Real Time Cluster enables you to update your Materialized Views that are served in
your Query Environments with Real Time data from your streams.

## Data Sources

The Real Time Data Sources that are currently supported in Upsolver are :

* [AWS Kinesis](/DataSources/Connectors/kinesis.md)
* [Azure Event Hub](/DataSources/Connectors/azure-event-hub.md)
* [HTTP](/DataSources/Connectors/http.md)    
* [Kafka](/DataSources/Connectors/kafka.md)

Those Data Sources allow you to check "Real Time Statistics" when you set them up
in Upsolver, this will cause the statistics that are shown in Data Discovery
to be updated with Real Time data from the Stream.


## Materialized Views

Materialized Views that are based on Real Time Data Sources can be also updated in
Real Time. To do so, check the "Real Time" option when you deploy the
Materialized View.

## How It Works

The Real Time Cluster reads the data from your Real Time Data Sources and
complements the batch data that is computed in your Compute Cluster with a
Real Time tip of the last few minutes.

This means that there will be one more reader reading from your Real Time
Data Source, in addition to the existing reader in the Compute Cluster. In total,
Upsolver will read data twice from your stream.

The Real Time Cluster never saves your data anywhere - it sends data directly to
your Query Clusters via TCP connections, and this data remains in the Query Cluster
for up to 5 minutes before being replaced by data computed in a Compute Cluster.
