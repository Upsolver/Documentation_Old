# Transforming Data

UpSQL enables the following stream transformations:

1. **Filter a stream using the WHERE clause** - filter your raw data structures such as: user activity, IoT and sensors data, application activity data and online advertisements statistics. Those data sources mostly contain more data than is actually needed for your analysis. Upsolver allows you to filter those data structures so you have only the required data for your analysis.
2. **Join data from several data sources **- combine data from multiple sources to gather deeper insights and create aggregated views. Upsolver allows you to perform this with an SQL statement, similarly to a relational database.
3. **Perform calculations and conversions** - improve the quality of your data and ensure it follows standard conventions (e.g. convert time in Epoch to standard mm/dd/yyyy). Upsolver contains all the functions that exist in SQL, including special enrichment functions (e.g. IP2GEO, user agent parser) and you can add your own UDFs in Python.

Stream transformations are configured when creating an Upsolver Output.

# Topics:
1. [Filter a Stream Using The WHERE Clause](https://docs.upsolver.com/UpSQL/TransformingData/filter-a-stream-using-the-where-clause.html)
2. [Join Data From Several Data Sources](https://docs.upsolver.com/UpSQL/TransformingData/join-data-from-several-data-sources.html)
3. [Perform Calculations And Conversions](https://docs.upsolver.com/UpSQL/TransformingData/perform-calculations-and-conversions.html)
