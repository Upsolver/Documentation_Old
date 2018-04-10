# Create Materialized View

1. In the _Materialized Views_ tab click _Add Materialized view_.
2. Name your Materialized View and click _next_.
3. Select the [Data Source](/DataSources/README.md) you would like to create the view from and click _next_.
4. You will now be able to configure your Materialized View [with aggregations as described here](/Outputs/aggregating-data.md).

## Deploying The Materialized View
1. Click _Run_ in the _Meterialized View_ you would like to deploy.
2. Select the [Compute Cluster](/Clusters/compute.md) you would like this materialized view to be deployed to. If you have not created one you can create one here.
3. Select the [Query Cluster](/Clusters/query.md) you would like to use for querying your materialized view. If you have not created one you can create one here.
5. Click _Deploy_ to start running your materialized view, you will then be taken to the [Inspect Materialized View](/MaterializedViews/inspecting-your-materialized-view.md) page.
