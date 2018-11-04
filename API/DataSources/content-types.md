# Content Formats
Supported content formats


## Avro






#### Example

```json
{
  "clazz" : "AvroContentType"
}
```
 
## Parquet






#### Example

```json
{
  "clazz" : "ParquetContentType"
}
```
 
## ORC






#### Example

```json
{
  "clazz" : "OrcContentType"
}
```
 
## JSON

JSON data. Multiple JSONs can be read from a single file/record by appending them with optional whitespace in between.



#### Fields

Field | Name | Type | Description | Optional 
--- | --- | --- | ---
nestedJsonPaths | Nested Json Paths | [][] | Paths to string fields that contain a 'stringified' JSON that should be parsed into the schema. Each such path is represented as an array of the path parts. | X
splitRootArray | Split Root Array | Boolean | If the root object is an array, it can either be parsed as separate events, or as a single event which contains only an array. | X
keepOriginalNestedJsonString | Keep Original Nested Json String | Boolean | When using the nestedJsonPaths parameter, the original JSON string can optionally be kept in addition to the parsed value. If this is selected, the parsed data will be stored in a record with the suffix '_parsed'. | X

#### Example

```json
{
  "clazz" : "JsonContentType"
}
```
 
## CSV





#### Fields

Field | Name | Type | Description | Optional 
--- | --- | --- | ---
inferTypes | Infer Types | Boolean |  | 
header | Header | String |  | 
delimiter | Delimiter | Char |  | X
nullValue | Null Value | String |  | X

#### Example

```json
{
  "clazz" : "CsvContentType",
  "inferTypes" : true,
  "header" : "header1,header2,header2"
}
```
 
## TSV





#### Fields

Field | Name | Type | Description | Optional 
--- | --- | --- | ---
inferTypes | Infer Types | Boolean |  | 
header | Header | String |  | 

#### Example

```json
{
  "clazz" : "TsvContentType",
  "inferTypes" : true,
  "header" : "header1   header2   header2"
}
```
 
## x-www-form-urlencoded





#### Fields

Field | Name | Type | Description | Optional 
--- | --- | --- | ---
inferTypes | Infer Types | Boolean |  | 

#### Example

```json
{
  "clazz" : "WWWFormUrlEncodedType",
  "inferTypes" : true
}
```
 
## Protobuf





#### Fields

Field | Name | Type | Description | Optional 
--- | --- | --- | ---
schemaFiles | Schema Files | SchemaFile[] |  | 
mainFile | Main File | String |  | 
messageType | Message Type | String |  | 
bytesParsers | Bytes Parsers | BytesParser[] |  | 
bytesParsers.path | Path | String | The path to the field that should use this parser. | 
bytesParsers.parserSchema | Parser Schema | String | The schema that the parser will use. In csv and tsv formats, it should be a comma delimited list of the field names in the csv/tsv rows. In the avro format, it should be the AVRO schema used to decode the bytes of the inner field. | X
bytesParsers.schemaType | Schema Type | String | The type of parser to use. Supported types are json, csv, tsv or avro | X

#### Example

```json
{
  "clazz" : "ProtobufContentType",
  "schemaFiles" : "schemaFiles",
  "mainFile" : "mainFile",
  "messageType" : "messageType",
  "bytesParsers" : "bytesParsers"
}
```
 
## Avro-record

Individual AVRO records without the framing or schema.



#### Fields

Field | Name | Type | Description | Optional 
--- | --- | --- | ---
schema | Schema | String | The AVRO schema used to decode the messages. Note that the behavior is undefined if the schema does not match the data. | 
bytesParsers | Bytes Parsers | BytesParser[] | BytesParsers can be used to define special parsing behavior for 'bytes' fields in the schema. | X
bytesParsers.path | Path | String | The path to the field that should use this parser. | 
bytesParsers.parserSchema | Parser Schema | String | The schema that the parser will use. In csv and tsv formats, it should be a comma delimited list of the field names in the csv/tsv rows. In the avro format, it should be the AVRO schema used to decode the bytes of the inner field. | X
bytesParsers.schemaType | Schema Type | String | The type of parser to use. Supported types are json, csv, tsv or avro | X

#### Example

```json
{
  "clazz" : "AvroRecordContentType",
  "schema" : "{ \"type\": \"record\", \"name\": \"root\", \"fields\": [ {\"name\": \"value\", \"type\": \"string\" } ] }"
}
```
 