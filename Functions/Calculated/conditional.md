# COALESCE {#COALESCE}

Returns the first value that is not null or missing

{% raw %}

|inputs|result|
|------|------|
|`"Foo"`|`"Foo"`|
|`"Foo"`, `"Bar"`|`"Foo"`|
|`null`, `"Foo"`, `null`, `"Bar"`|`"Foo"`|
|`"Foo"`, `null`, `"Bar"`|`"Foo"`|

{% endraw %}


# IF_ELSE {#IF_ELSE}

If there is a 'true' boolean value in the 'condition' parameter then return the first value else the second

Inputs:

 * first
 * second
 * third

{% raw %}

|first|second|third|result|
|-----|------|-----|------|
|`"foo"`|`"bar"`|``true``|`"foo"`|
|`"foo"`|`"bar"`|``false``|`"bar"`|
|`"foo"`|`"bar"`||`"bar"`|

{% endraw %}
