# Modify Data Source


Signature

```
PATCH https://api.upsolver.com/api/v1/data-source/:id
```
##  Update Retention





#### Fields

Field | Name | Type | Description | Optional 
--- | --- | --- | ---
retention | Retention | Int (Minutes) |  | X

#### Example

```bash
curl -X POST -H "content-type: application/json" -H "Authorization: YOUR_TOKEN" \
-d '{
  "clazz" : "UpdateRetention",
  "retention" : 1440
}' "https://api.upsolver.com/api/v1/data-source/:id"
```
 
##  Update End Execution At





#### Fields

Field | Name | Type | Description | Optional 
--- | --- | --- | ---
endExecutionAt | End Execution At | String (ISO-8601) |  | X

#### Example

```bash
curl -X POST -H "content-type: application/json" -H "Authorization: YOUR_TOKEN" \
-d '{
  "clazz" : "UpdateEndExecutionAt",
  "endExecutionAt" : "2018-11-04T08:00:00Z"
}' "https://api.upsolver.com/api/v1/data-source/:id"
```
 
##  Set Compute Environment





#### Fields

Field | Name | Type | Description | Optional 
--- | --- | --- | ---
environment | Environment | String |  | 

#### Example

```bash
curl -X POST -H "content-type: application/json" -H "Authorization: YOUR_TOKEN" \
-d '{
  "clazz" : "SetComputeEnvironment",
  "environment" : "12ba7222-5764-4d37-8581-95ca5be4b3f7"
}' "https://api.upsolver.com/api/v1/data-source/:id"
```
 
##  Rename





#### Fields

Field | Name | Type | Description | Optional 
--- | --- | --- | ---
name | Name | String |  | 

#### Example

```bash
curl -X POST -H "content-type: application/json" -H "Authorization: YOUR_TOKEN" \
-d '{
  "clazz" : "Rename",
  "name" : "Data Source New Name"
}' "https://api.upsolver.com/api/v1/data-source/:id"
```
 
##  Update Parallelism





#### Fields

Field | Name | Type | Description | Optional 
--- | --- | --- | ---
parallelism | Parallelism | Int | The number of independent shards to parse data, to increase parallelism and reduce latency. This should remain 1 in most cases. | 

#### Example

```bash
curl -X POST -H "content-type: application/json" -H "Authorization: YOUR_TOKEN" \
-d '{
  "clazz" : "UpdateParallelism",
  "parallelism" : 1
}' "https://api.upsolver.com/api/v1/data-source/:id"
```
 
##  Update Content Type





#### Fields

Field | Name | Type | Description | Optional 
--- | --- | --- | ---
contentType | Content Type | [ContentType](content-types.md) |  | 

#### Example

```bash
curl -X POST -H "content-type: application/json" -H "Authorization: YOUR_TOKEN" \
-d '{
  "clazz" : "UpdateContentType",
  "contentType" : {
    "type" : "JsonContentType"
  }
}' "https://api.upsolver.com/api/v1/data-source/:id"
```
 
##  Stop






#### Example

```bash
curl -X POST -H "content-type: application/json" -H "Authorization: YOUR_TOKEN" \
-d '{
  "clazz" : "Stop"
}' "https://api.upsolver.com/api/v1/data-source/:id"
```
 