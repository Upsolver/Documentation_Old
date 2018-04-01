# HEX_TO_DECIMAL {#HEX_TO_DECIMAL}

Converts a hexidecimal string value to it's corresponding decimal number

{% raw %}

|input|result|
|-----|------|
|`"###"`|`null`|
|`"ff"`|`255`|
|`"0xff"`|`255`|

{% endraw %}


# TO_DOUBLE {#TO_DOUBLE}

Convert a 'Number' to a 'Double'.

{% raw %}

|value|result|
|-----|------|
|`3`|`3.0`|
|`3.5`|`3.5`|

{% endraw %}


# TO_LONG {#TO_LONG}

Convert a 'Number' to a 'Long'.

{% raw %}

|value|result|
|-----|------|
|`3`|`3`|
|`3.5`|`3`|
|`-3.5`|`-3`|

{% endraw %}


# TO_NUMBER {#TO_NUMBER}

Convert to a 'Number' type.

{% raw %}

|value|result|
|-----|------|
|`"###"`|`null`|
|`"10"`|`10`|
|`"5.1"`|`5.1`|
|`5.1`|`5.1`|

{% endraw %}


# TO_STRING {#TO_STRING}

Converts any value to string

{% raw %}

|input|result|
|-----|------|
|`1`|`"1"`|
|`1.5`|`"1.5"`|

{% endraw %}
