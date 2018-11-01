# API Reference

The API to Upsolver is provided by a HTTP Endpoint that supports JSON requests. Make sure that every request contains the header `Content-Type: application/json`. 

The endpoint for the API depends on your deployment type, if you run on Upsolver Servers (a.k.a Upsolver VPC), you should use the following endpoint : 

```
https://api.upsolver.com
```

If you use your own Private API, please contact us to receive your API endpoint.

* [Authentication](authentication.md)
* [Data Sources](DataSources/README.md)
  * [Create](DataSources/create.md)
  * [Modify](DataSources/modify.md)
  * [Content Types Reference](DataSources/content-types.md)