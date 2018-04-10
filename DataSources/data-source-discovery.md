# Data Source Discovery

## Schema

Upsolver persists all incoming events to Amazon S3 and auto-generates a schema.

Upsolver's schema:

* Maintains the data's hierarchical format.
* Contains the event's content under "data" and the event's headers under "headers".
* Includes an Upsolver  processing time - "time" field.
* Can be enriched using [Calculated Fields](/Functions/Calculated/README.md) or [Materialized View Lookup](/Functions/materialized-view-lookup.md).

## Determining data types

Fields' data type may vary by file format:

* JSON/AVRO - fields' types are determined according to the data type seen in the event.
* CSV/TSV/x-www-form-urlencoded - the user can choose between 2 options when creating the data source:

  * All fields are treated as STRING \(default\).
  * Auto detect types - Upsolver tries to assign a DOUBLE/LONG data type if possible. If not, the data type is STRING.

  ![Upsolver Schema](/assets/Upsolver Schema.png)

\* Note that a field may appear twice with the same name but with different data types. Upsolver reflects the schema as seen in the data.

## Ingestion Errors

If there were any parsing error during the ingestion process Upsolver will display these errors under the _Parser Errors_ tab. An example of this can be seen in the following image: ![Parse Errors](/assets/Parse Errors.png)  
In the case above the _json_ string is missing the starting `{` and therefore Upsolver is unable to parse the event.

## Samples

The _Samples_ tab allows you to view some sample raw events as _JSON_. You can choose to download one of these samples by clicking the _Export_ button.

## Properties

The _Properties_ tab will show you the definition of the [Data Source](README.md) along with some useful information depending on the Data Source type. For example, the Properties of the [HTTP Data Source](http-input.md) will include the ingest URL to be used to send data to this source.

## Data Source Statistics

At the top of the screen you will be able to see some details and statistics about this data source.

* Cluster - The [Compute Cluster](/Clusters/compute.md) running this Data Source.
* Total Events - How many events this data source has ingested in total.
* Parse Errors - How many parse errors this data source had in total.
* Ingest Rate - The current ingestion rate of data in this data source.
* Ingest Delay - If this data source has a backlog of data to ingest you will see how far behind it is here.

## Field statistics

When you click on a field in the _Schema_ tab you will get some statistics and information about that field.

* Occurrences In Events - How many times this field existed in the ingested events. Next to this number you will see the percentage out of the total ingested events in which this field exists.
* Distinct Values - How many uniquely different values this field contains across all events.
* Value Distribution - This will show the most common values in this field alongside a percentage representing how common this value is across all events.
* Field Content - Here you will see a sample of some of the latest values in this field.

## Archive and Delete

If you would like to stop your [Data Source](README.md) you can select _Archive Data Source_ from the drop down menu in the top right:

<img src="/assets/Archive Data Source.png"/>

Once you do this the input will stop ingesting data. You can later _Un-Archive_ your Data Source which will cause it to start ingesting data once again.

If you would like to completely delete your data source you can click _Delete_ once it's archived. **Be careful this will completely delete the Data Source along with any data it has ingested and will not be recoverable.**
