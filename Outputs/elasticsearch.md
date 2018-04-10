# Elasticsearch Output

[Elasticsearch](https://www.elastic.co/products/elasticsearch) is a text indexing and query engine which is useful for data analysis and exploration. Upsolver can export batches of your processed data to Elasticsearch for you.

## Creating A New Elasticsearch Ouptut

1. In the _Outputs_ tab click _Add Output_.
2. Give the output a name in the _Name_ field and optionally provide a description for this output in _Description_ field.
3. If you want to aggregate your data (see [Aggregating Data](/Outputs/aggregating-data.md)) check the _Aggregate Data_ checkbox.
4. In the _Data Source_ drop down menu select the [Data Source](/DataSources/README.md) you would like to create this output from. If you do not yet have a Data Source you can create one from this menu.
5. In the _Output To_ menu select _Elasticsearch_.
6. In the _Connection_ menu select the connection to the _Elasticsearch Cluster_ you would like to export to. If you have not yet configured a connection you can create one from this menu. The connection string must be in the format: `elasticsearch://host:port,host:port` with the hosts of your cluster.
7. Click Next.
8. In the _Index Name Prefix_ field type a prefix for the indices that will be created in your Elasticsearch cluster.
9. If you would like to give the exported events a `Type` you can name it in the _Index Type_ field. Read more about types in Elasticsearch [here](https://www.elastic.co/blog/index-vs-type).
10. In the _Index Partition Size_ select how large you want each index to be.
11. In the _Bulk Max Size In Bytes_ field configure the maximum batch size to output to Elasticsearch.
12. In the _S3 Connection_ select the connection to the S3 bucket where you would like Upsolver to store the batch files to load into Elasticsearch.
13. If you would like to have the files written to a certain prefix within the bucket you provided, type that prefix in the _Path_ field.
14. Click Next.
13. You will now see a list of all the columns in that table, you can configure which field gets mapped to each column in the same manner described in [Configuring Schema And Filters](/Outputs/configuring-schema-and-filters.md). Optionally you can also add filters to limit the data exported to Redshift.
14. When ready, [start running your output](/Outputs/running-and-stopping-outputs.md).