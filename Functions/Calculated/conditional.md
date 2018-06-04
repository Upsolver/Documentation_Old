# COALESCE

Returns the first value that is not null or missing

{% raw %}

|inputs|result|
|------|------|
|`"Foo"`|`"Foo"`|
|`"Foo"`, `"Bar"`|`"Foo"`|
|`null`, `"Foo"`, `null`, `"Bar"`|`"Foo"`|
|`"Foo"`, `null`, `"Bar"`|`"Foo"`|

{% endraw %}


# IF_ELSE

If there is a 'true' boolean value in the 'condition' parameter then return the first value else the second

### Inputs

 * __condition__
 * __true_value__
 * __false_value__

{% raw %}

|condition|true_value|false_value|result|
|---------|----------|-----------|------|
|``true``|`"foo"`|`"bar"`|`"foo"`|
|``false``|`"foo"`|`"bar"`|`"bar"`|
||`"foo"`|`"bar"`|`"bar"`|

{% endraw %}


# NULL_IF

If there is a 'true' boolean value in the 'condition' parameter, then return null. Otherwise, return the value

### Inputs

 * __condition__
 * __value__

{% raw %}

|condition|value|result|
|---------|-----|------|
|``true``|`"foo"`|`null`|
|``false``|`"foo"`|`"foo"`|
||`"foo"`|`"foo"`|

{% endraw %}
