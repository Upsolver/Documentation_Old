# Amazon Redshift Output

[Amazon Redshift](https://aws.amazon.com/redshift/) is a fully managed Data Warehouse by Amazon which allows one to query their data using standard SQL queries. Upsolver supports exporting your processed data into Redshift for you. Upsolver will export your data in batches to ensure good performance of loads into Redshift, you can select this batch interval when creating your output.

## Creating A New Amazon Redshift Output

First, ensure you have a table ready in Amazon Redshift which you would like to export to, then follow these steps:

1. In the _Outputs_ tab click _Add Output_.
2. Give the output a name in the _Name_ field and optionally provide a description for this output in _Description_ field.
3. If you want to aggregate your data (see [Aggregating Data](/Outputs/aggregating-data.md)) check the _Aggregate Data_ checkbox.
4. In the _Data Source_ drop down menu select the [Data Source](/DataSources/README.md) you would like to create this output from. If you do not yet have a Data Source you can create one from this menu.
5. In the _Output To_ menu select _Amazon Redshift_.
6. In the _Connection_ menu select the connection to the Redshift Cluster you would like to export to. If you have not yet configured a connection you can [create one](/assets/redshift-connection-creation.png) from this menu. Make sure the user provided has **Read and Write permissions for the relevant table**.
7. Click Next.
8. In the _Schema_ field select the schema in your database which contains the table you would like to export to.
9. In the _Table_ field select the table you would like to export data to.
10. In the _S3 Connection_ select the connection to the S3 bucket where you would like Upsolver to store the batch files to load into Redshift.
11. If you would like to have the files written to a certain prefix within the bucket you provided, type that prefix in the _Path_ field.
12. Click Next.
13. You will now see a list of all the columns in that table, you can configure which field gets mapped to each column in the same manner described in [Configuring Schema And Filters](/Outputs/configuring-schema-and-filters.md). Optionally you can also add filters to limit the data exported to Redshift.
14. When ready, [start running your output](/Outputs/running-and-stopping-outputs.md).