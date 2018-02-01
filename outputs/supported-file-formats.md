# Supported File Output Formats

The following formats are the formats currently supported by Upsolver as exportable formats.

# Avro

[Avro](https://avro.apache.org/) is a binary file format with a schema describing the items within the file. When using this output format the resulting schema will be based on the fields you selected to export.

# JSON

[JSON](http://www.json.org/) is a schema-less text based format which is easily read by Javascript based servers and websites.

# CSV And TSV

[CSV](https://en.wikipedia.org/wiki/Comma-separated_values) files are comma separated text based files which can be easily read an analyzed.

[TSV](https://en.wikipedia.org/wiki/Tab-separated_values) files are very similar except the values are separated by `tab` characters instead of commas.

**Note**: CSV and TSV files are flat and do not support object nesting so when using this format be sure your data is not nested. If you provide nested data Upsolver will try to flatten it which will result in a row duplicate for each array value.

# Parquet

[Parquet](https://parquet.apache.org/) is a columnar file format which supports reading data only from the specified columns. This property makes it a good candidate for analytics tools such as [Amazon Athena](https://aws.amazon.com/athena/) which can therefore scan less data to answer queries.
