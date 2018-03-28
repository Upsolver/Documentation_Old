# AND {#AND}

Returns true if all operands are true

{% raw %}|inputs|result|
|------|------|
|````false````, ````false````|````false````|
|````false````, ````true````|````false````|
|````true````, ````false````|````false````|
|````true````, ````true````|````true````|{% endraw %}


# CONTAINS {#CONTAINS}

Returns true for instances where the left operand contains the right operand

Inputs:

 * haystack
 * needle

{% raw %}|haystack|needle|result|
|--------|------|------|
|```"abcde"```|```"a"```|````true````|
|```"abcde"```|```"f"```|````false````|{% endraw %}


# EQUAL_TO {#EQUAL_TO}

Returns true for instances where the operands are equal

Inputs:

 * first
 * second

{% raw %}|first|second|result|
|-----|------|------|
|```"a"```|```"a"```|````true````|
|```"a"```|```"b"```|````false````|
|```0```|```0```|````true````|
|```1```|```0```|````false````|
|```0```|```1```|````false````|{% endraw %}


# EXISTS {#EXISTS}

Opt in all the rows that contains the specified field

{% raw %}|input|result|
|-----|------|
|```"a"```|````true````|
||`null`|{% endraw %}


# GREATER_THAN {#GREATER_THAN}

Returns true for instances where the left operand is greater than the right operand

Inputs:

 * first
 * second

{% raw %}|first|second|result|
|-----|------|------|
|```0```|```0```|````false````|
|```1```|```0```|````true````|
|```0```|```1```|````false````|{% endraw %}


# GREATER_THAN_OR_EQUAL_TO {#GREATER_THAN_OR_EQUAL_TO}

Returns true for instances where the left operand is greater than or equal to the right operand

Inputs:

 * first
 * second

{% raw %}|first|second|result|
|-----|------|------|
|```0```|```0```|````true````|
|```1```|```0```|````true````|
|```0```|```1```|````false````|{% endraw %}


# IN_SET {#IN_SET}

Returns true for instance where the value is contained in the given set

Properties:

 * Set - Values separated by line breaks

{% raw %}|value|Set|result|
|-----|---|------|
|```"a"```|```"a```<br />```b"```|````true````|
|```"c"```|```"a```<br />```b"```|````false````|{% endraw %}


# LESS_THAN {#LESS_THAN}

Returns true for instances where the left operand is less than the right operand

Inputs:

 * first
 * second

{% raw %}|first|second|result|
|-----|------|------|
|```0```|```0```|````false````|
|```1```|```0```|````false````|
|```0```|```1```|````true````|{% endraw %}


# LESS_THAN_OR_EQUAL_TO {#LESS_THAN_OR_EQUAL_TO}

Returns true for instances where the left operand is less than or equal to the right operand

Inputs:

 * first
 * second

{% raw %}|first|second|result|
|-----|------|------|
|```0```|```0```|````true````|
|```1```|```0```|````false````|
|```0```|```1```|````true````|{% endraw %}


# NOT {#NOT}

Returns true if the value is false

{% raw %}|input|result|
|-----|------|
|````true````|````false````|
|````false````|````true````|{% endraw %}


# NUMBER_DEDUP {#NUMBER_DEDUP}

Outputs the input value only if it's the first time we see that value in the current minute. Use DISTINCT if you want to DEDUP in the context of an array of items.

Inputs:

 * value - value to deduplicate

{% raw %}|value|result|
|-----|------|
|```5.0```, ```6.4```, ```5.0```, ```5.0```, ```6.0```|```5.0```, ```6.4```, ```6.0```|{% endraw %}


# OR {#OR}

Returns true if at least one of the operands is true

{% raw %}|inputs|result|
|------|------|
|````false````, ````false````|````false````|
|````false````, ````true````|````true````|
|````true````, ````false````|````true````|
|````true````, ````true````|````true````|{% endraw %}


# RANDOM {#RANDOM}

Returns true for a percentage of items equal to the input

Inputs:

 * percent - percent of items to keep

{% raw %}|percent|result|
|-------|------|
|```0.0```|````false````|
|```0.22```|````true````|
|```0.22```|````true````|
|```0.22```|````false````|
|```1.0```|````true````|{% endraw %}


# STRING_DEDUP {#STRING_DEDUP}

Outputs the input value only if it's the first time we see that value in the current minute. Use DISTINCT if you want to DEDUP in the context of an array of items.

Inputs:

 * value - value to deduplicate

{% raw %}|value|result|
|-----|------|
|```"foo"```, ```"bar"```, ```"foo"```|```"foo"```, ```"bar"```|{% endraw %}


# XOR {#XOR}

Returns true if both operands are not equal

Inputs:

 * left
 * right

{% raw %}|left|right|result|
|----|-----|------|
|````false````|````false````|````false````|
|````false````|````true````|````true````|
|````true````|````false````|````true````|
|````true````|````true````|````false````|{% endraw %}
