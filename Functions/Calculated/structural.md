# FROM_KEY_VALUE

Maps a list of key values to a record with fields for each key

### Inputs

 * __key__
 * __value__

### Properties

 * __Keys__

### Example

#### Input 

```json 
{
  "data": [
    { "key": "a", "value": 1 },
    { "key": "b", "value": 2 }
  ]
}
```

#### UpSQL

```sql
SET result = FROM_KEY_VALUE('a,b', data[].key, data[].value)
```

#### Result

```json
{
  "result": {
    "a": 1,
    "b": 2
  }
}
```



# ITEM_INDEX

Gets the index of the item

### Properties

 * __Global Index__ - Use the global index in the event instead of the index in the containing array
 * __Count Nulls__



# JSON_PATH

Extracts data from JSON objects

### Inputs

 * __JSON__ - A String that contains JSON Document

### Properties

 * __Path__ - JSON Path Expression

{% raw %}

|JSON|Path|result|
|----|----|------|
|`"[{`<br />` "name": "The Great Gatsby",`<br />` "author": {`<br />`  "name": "F. Scott Fitzgerald"`<br />` }`<br />`},`<br />`{`<br />` "name": "Nineteen Eighty-Four",`<br />` "author": {`<br />`   "name": "George Orwell"`<br />` }`<br />`}]"`|`"$[*].author.name"`|`"F. Scott Fitzgerald"`, `"George Orwell"`|
|`"{ "net_id": 41 }"`|`"net_id"`|`"41"`|
|`"{ "net_id": [41, 42] }"`|`"net_id"`|`"[41, 42]"`|
|`"{ "net_id": [41, 42] }"`|`"net_id[*]"`|`"41"`, `"42"`|
|`"{ "net_id": [41, 42] }"`|`"net_id.parent"`|`null`|
|`"[1,2,3]"`|`"$[*]"`|`"1"`, `"2"`, `"3"`|

{% endraw %}


# JSON_TO_RECORD

Extracts data from JSON objects

### Properties

 * __Mappings__ - JSON to field mappings
 * __Output Array__ - If the string contains multiple JSON records use this to allow outputing all of them

{% raw %}

|value|Mappings|Output Array|result|
|-----|--------|------------|------|
|`"{ "a": "Hello" }"`|`"a,a,string"`|``true``|`{"a": "Hello"}`|
|`"{ "a": { "value": "Hello" }, "b" : { "value": "World" } }"`|`"a.value,a.value,string`<br />`b.value,b.value,string"`|``true``|`{"a.value": "Hello", "b.value": "World"}`|

{% endraw %}


# MAP_WITH_INDEX

Outputs an index and a value field. Index contains a zero based index, and value contains the value in the input field

### Inputs

 * __value__ - The value to convert to a record

{% raw %}

|value|result|
|-----|------|
|`"a"`, `"b"`, `"c"`|`{"index": 0, "value": "a"}`, `{"index": 1, "value": "b"}`, `{"index": 2, "value": "c"}`|

{% endraw %}


# QUERY_STRING_TO_RECORD

Extracts data from query string

### Properties

 * __Mappings__ - Field names



# TO_ARRAY

Outputs all the values from all the inputs as an array

{% raw %}

|inputs|result|
|------|------|
|`["a", "c"]`, `["b"]`|`"a"`, `"c"`, `"b"`|

{% endraw %}


# ZIP

Combines multiple arrays by index into records

