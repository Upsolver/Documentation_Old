# AND

Returns true if all operands are true

{% raw %}

|inputs|result|
|------|------|
|``false``, ``false``|``false``|
|``false``, ``true``|``false``|
|``true``, ``false``|``false``|
|``true``, ``true``|``true``|

{% endraw %}


# CONTAINS

Returns true for instances where the left operand contains the right operand

### Inputs

 * __haystack__
 * __needle__

{% raw %}

|haystack|needle|result|
|--------|------|------|
|`"abcde"`|`"a"`|``true``|
|`"abcde"`|`"f"`|``false``|

{% endraw %}


# EQUAL_TO

Returns true for instances where the operands are equal

### Inputs

 * __first__
 * __second__

{% raw %}

|first|second|result|
|-----|------|------|
|`"a"`|`"a"`|``true``|
|`"a"`|`"b"`|``false``|
|`0`|`0`|``true``|
|`1`|`0`|``false``|
|`0`|`1`|``false``|

{% endraw %}


# EXISTS

Opt in all the rows that contains the specified field

{% raw %}

|input|result|
|-----|------|
|`"a"`|``true``|
||``false``|

{% endraw %}


# GREATER_THAN

Returns true for instances where the left operand is greater than the right operand

### Inputs

 * __first__
 * __second__

{% raw %}

|first|second|result|
|-----|------|------|
|`0`|`0`|``false``|
|`1`|`0`|``true``|
|`0`|`1`|``false``|

{% endraw %}


# GREATER_THAN_OR_EQUAL_TO

Returns true for instances where the left operand is greater than or equal to the right operand

### Inputs

 * __first__
 * __second__

{% raw %}

|first|second|result|
|-----|------|------|
|`0`|`0`|``true``|
|`1`|`0`|``true``|
|`0`|`1`|``false``|

{% endraw %}


# IN_SET

Returns true for instance where the value is contained in the given set

### Properties

 * __Set__ - Values separated by line breaks

{% raw %}

|value|Set|result|
|-----|---|------|
|`"a"`|`"a`<br />`b"`|``true``|
|`"c"`|`"a`<br />`b"`|``false``|

{% endraw %}


# LESS_THAN

Returns true for instances where the left operand is less than the right operand

### Inputs

 * __first__
 * __second__

{% raw %}

|first|second|result|
|-----|------|------|
|`0`|`0`|``false``|
|`1`|`0`|``false``|
|`0`|`1`|``true``|

{% endraw %}


# LESS_THAN_OR_EQUAL_TO

Returns true for instances where the left operand is less than or equal to the right operand

### Inputs

 * __first__
 * __second__

{% raw %}

|first|second|result|
|-----|------|------|
|`0`|`0`|``true``|
|`1`|`0`|``false``|
|`0`|`1`|``true``|

{% endraw %}


# NOT

Returns true if the value is false

{% raw %}

|input|result|
|-----|------|
|``true``|``false``|
|``false``|``true``|

{% endraw %}


# NUMBER_DEDUP

Outputs the input value only if it's the first time we see that value in the current minute. Use DISTINCT if you want to DEDUP in the context of an array of items.

### Inputs

 * __value__ - value to deduplicate

{% raw %}

|value|result|
|-----|------|
|`5.0`, `6.4`, `5.0`, `5.0`, `6.0`|`5.0`, `6.4`, `6.0`|

{% endraw %}


# OR

Returns true if at least one of the operands is true

{% raw %}

|inputs|result|
|------|------|
|``false``, ``false``|``false``|
|``false``, ``true``|``true``|
|``true``, ``false``|``true``|
|``true``, ``true``|``true``|

{% endraw %}


# RANDOM

Returns true for a percentage of items equal to the input

### Inputs

 * __percent__ - percent of items to keep

{% raw %}

|percent|result|
|-------|------|
|`0.0`|``false``|
|`0.22`|``true``|
|`0.22`|``true``|
|`0.22`|``false``|
|`1.0`|``true``|

{% endraw %}


# STRING_DEDUP

Outputs the input value only if it's the first time we see that value in the current minute. Use DISTINCT if you want to DEDUP in the context of an array of items.

### Inputs

 * __value__ - value to deduplicate

{% raw %}

|value|result|
|-----|------|
|`"foo"`, `"bar"`, `"foo"`|`"foo"`, `"bar"`|

{% endraw %}


# XOR

Returns true if both operands are not equal

### Inputs

 * __left__
 * __right__

{% raw %}

|left|right|result|
|----|-----|------|
|``false``|``false``|``false``|
|``false``|``true``|``true``|
|``true``|``false``|``true``|
|``true``|``true``|``false``|

{% endraw %}
