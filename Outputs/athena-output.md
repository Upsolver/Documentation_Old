# Amazon Athena Output

[Amazon Athena](https://aws.amazon.com/athena/) is a big data analytics query engine from Amazon which allows SQL queries on raw data stored in S3 buckets. While in theory Athena can read your any data from S3 (as long as the format is supported), in practice there is a lot of setup required and some tricky edge cases. Upsolver _Athena Output_ will save you all this work and will output the data in the right format and folder structure suitable for Amazon Athena consumption. Additionally, Upsolver will create the table in Athena for you with the correct schema configured as well as managed partitioning for you.

## Creating A New Amazon Athena Output

1. In the _Outputs_ tab click _Add Output_.
2. Give the output a name in the _Name_ field and optionally provide a description for this output in _Description_ field.
3. If you want to aggregate your data (see [Aggregating Data](/outputs/aggregating-data.md)) check the _Aggregate Data_ checkbox.
4. In the _Data Source_ drop down menu select the [Data Source](/DataSources.md) you would like to create this output from. If you do not yet have a Data Source you can create one from this menu.
5. In the _Output To_ menu select _Amazon Athena_.
6. In the _Connection_ menu select the connection info to Athena you would like Upsolver to use to create the table. If you have not yet configured a connection you can create one from this menu. Make sure the user you provide for the connection [has the correct Athena permissions](/DataSources/athena.md).
7. Click Next.
8. In the _Database_ field type the name of the Athena database you would like to export the data to.
9. In the _Table_ field type the name of the table you would like Upsolver to export data to.
10. In the _Partition Size_ field select how often you would like Upsolver to create a new partition in your table.
11. In the _S3 Connection_ select the connection to the S3 bucket you would like the exported data to be written to. Your Athena table will read from this location.
12. If you would like to have the files written to a certain prefix within the bucket you provided, type that prefix in the _Path_ field.
13. Click Next.
14. Configure your output schema and filters as described [here](/outputs/configuring-schema-and-filters.md).
15. When ready, [start running your output](/outputs/running-and-stopping-outputs.md).








