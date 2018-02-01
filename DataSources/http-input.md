# HTTP

The _HTTP Data Source_ is a fully managed [Data Source](/DataSources.md) provided by Upsolver. With this simple to set up Data Source you can ingest data in real-time into Upsolver from any source or device around the world without any extra processing. All data sent to an _HTTP Data Source_ is stored on Amazon S3, so there is no need to worry about losing any of your data. Once set up data can be ingested simply by making HTTP Post requests to the _HTTP Data Source_'s ingestion URL.

## Creating A New HTTP Data Source

1. On the [Data Sources](/DataSources.md) page click _Add New Data Source._
2. Select HTTP from the list of available Data Sources.
3. Give your Data Source a name in the _Name_ field.
4. In the _Content Type_ drop down menu select the type of events you are going to be sending to this input. This can be JSON or x-www-url-encoded form data.
5. Select the _Compute Cluster_ you would like this Data Source to run on. If you have not created a [Compute Cluster](/clusters/compute-cluster.md) yet, you can create one from the drop down menu.
6. You can choose to change where the ingested data from this source will be saved by changing the _Storage_ field in the _Advanced_ section.
7. Click _Create_ to create your new data source.

## Ingest And Test URLs

Once you create your data source you will be taken to the [Data Source Discovery](/DataSources/data-source-discovery.md) page. Select the _Properties_ tab and you will see the following information:

![](/assets/HTTP Input Properties.png)
There are two URLs listed here, the first is the _Ingest URL_, which is the URL you will use to send data to this input from your sources. The second is the _Test URL_, which is the URL you can use to test that you are sending data correctly and that Upsolver is parsing the data as expected.

## Testing Your HTTP Data Source

Once you create your data source you should test that you are able to send it information correctly and that Upsolver is parsing it as you expect. To do this follow these steps:

1. Copy the _Test URL_ from the _Properties_ tab, as described above.
2. Use curl or any other equivalent tool \(such as Postman\) to send some test data.

For example with curl we would do:

```bash
curl -H "Content-Type: application/json" -X POST -d '{"key1":"value","key2":"value2"}' "YOUR_TEST_URL"
```

Your response should be a json string with the parsed data such as:

```js
{
"results" : [ {
"data" : {

  "key2" : "value2",

  "key1" : "value"

},

"headers" : {

  "head" : {

    "Content-Type" : "application/json",

    "Content-Length" : "32",

    "Host" : "ingestion-service-us-east-1-prod.upsolver.com",

    "X-Forwarded-Proto" : "https",

    "User-Agent" : "curl/7.47.0",

    "Accept" : "\*/\*"

  }

},

"time" : 1504701629989
} ]
}
```

Note: the headers of the HTTP request you made and the time of the request will be added to the parsed message. Your original request data will be inside the "data" key.

## Sending Data To Your HTTP Data Source

Once you have [tested your data source](#testing-your-http-data-source) you can start ingesting data from your actual sources by sending data in the same format you used when testing to the _Ingest URL_ described in [Ingest And Test URLs](#ingest-and-test-urls).  Once you start sending data to the _Ingest URL_ you can go to the [**Schema** tab in the Data Source Discovery](/DataSources/data-source-discovery.md) page for your input to inspect the data being ingested.

