# Inspecting Your Materialized View

Here you can see the definition of your [Materialized View](/MaterializedViews/README.md), data samples of your view and experience the API query via the _Api Playground_.

## Schema

In the _Schema_ tab you will see your materialized view's definition as you [created it](/MaterializedViews/create.md).

## Data Sample

In the _Data Sample_ tab you will see a small sample of the data available in you r materialized view. 

If you would like a larger sample of the data you can click _Download Sample_ which will download a CSV sample file of the last 10,000 rows in the last hour of your materialized view.

## API Playground

In the _API Playground_ tab you can get the endpoint information to query your materialized view. Additionally, you can execute queries directly from the UI to experience the API and test your data.

To run a query:
1. In the request text-box edit the `value` in the get parameter named `key`. For example, if you would like to query for the row with the key `abc` you would change the text like so: `https://indexer-us-east-1-prod.upsolver.com/query/?apitoken=YOUR_API_TOKEN&key=abc`
2. Click _Send_ and you will see the result of the query in the Response text-box.
3. If you don't have a particular key in mind you can click _I'm Feeling Lucky_ and you will get a random row from your materialized view in the Response text-box.

For more advanced querying please see the [Serving API](/MaterializedViews/query-api.md) documentation.