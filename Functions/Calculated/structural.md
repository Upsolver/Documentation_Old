# FROM_KEY_VALUE

Maps a list of key values to a record with fields for each key

### Inputs

 * __key__
 * __value__

### Properties

 * __Keys__

{% raw %}

|key|value|Keys|result|
|---|-----|----|------|
|`"foo"`, `"hello"`|`"bar"`, `"world"`|`"foo, hello"`|`{"foo": "bar", "hello": "world"}`|
|`"foo"`, `"hoo"`|`"bar"`, `"zoo"`|`"foo, hello"`|`{"foo": "bar"}`|
|`"foo"`, `"hello"`|`100`, `500`|`"foo, hello"`|`{"foo": 100, "hello": 500}`|
|`"foo"`, `"hoo"`|`100`, `500`|`"foo, hello"`|`{"foo": 100}`|

{% endraw %}


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
