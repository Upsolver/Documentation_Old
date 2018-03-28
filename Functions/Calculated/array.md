# CONCAT {#CONCAT}

Concatenates all values into a single string, separated by the separator

Properties:

 * Separator - String to use as a separator between elements

{% raw %}|input|Separator|result|
|-----|---------|------|
|```"a"```, ```"b"```, ```"c"```|```", "```|```"a, b, c"```|
|```5.5```|```", "```|```"5.5"```|
|```"a"```, ```"b"```, ```"c"```|```""```|```"abc"```|{% endraw %}


# COUNT {#COUNT}

Returns the amount of items in a given array

{% raw %}|input|result|
|-----|------|
||```0```|
|```"a"```, ```"b"```, ```"c"```|```3```|{% endraw %}


# DISTINCT {#DISTINCT}

Get all the distinct elements in the array

{% raw %}|input|result|
|-----|------|
|```1```, ```2```, ```3```, ```4```, ```4```, ```1```|```1```, ```2```, ```3```, ```4```|{% endraw %}


# ELEMENT_AT {#ELEMENT_AT}

Gets the element at the given index in the array

Properties:

 * Index - The index of the item to return

{% raw %}|input|Index|result|
|-----|-----|------|
|```"a"```, ```"b"```, ```"c"```|```1```|```"b"```|
|```"a"```|```1```|```null```|
|```"a"```, ```"b"```, ```"c"```|```-1```|```null```|{% endraw %}


# FIRST {#FIRST}

Gets the first element in the array

{% raw %}|input|result|
|-----|------|
||```null```|
|```"a"```, ```"b"```, ```"c"```|```"a"```|{% endraw %}


# LAST {#LAST}

Gets the last element in the array

{% raw %}|input|result|
|-----|------|
||```null```|
|```"a"```, ```"b"```, ```"c"```|```"c"```|{% endraw %}


# SUM {#SUM}

Sums all the values in the array

{% raw %}|value|result|
|-----|------|
|```1```, ```0.2```, ```30```|```31.2```|{% endraw %}
