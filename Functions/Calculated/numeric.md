# ABS {#ABS}

Returns the absolute value of a number.

{% raw %}|input|result|
|-----|------|
|```5```|```5```|
|```-3```|```3```|
|```0```|```0```|{% endraw %}


# ADD {#ADD}

Adds two numbers together.

Inputs:

 * x
 * y

{% raw %}|x|y|result|
|-|-|------|
|```5.1```|```2.5```|```7.6```|
|```5```|```2.5```|```7.5```|{% endraw %}


# CEILING {#CEILING}

Returns the smallest integer value that is greater than or equal to the value.

{% raw %}|input|result|
|-----|------|
|```5.9```|```6.0```|
|```-5.9```|```-5.0```|{% endraw %}


# COS {#COS}

Returns the cosine of the value in radians.

{% raw %}|input|result|
|-----|------|
|```0.785```|```0.707```|
|```1.05```|```0.5```|
|```1.57```|```6.12E-17```|
|```2.09```|```-0.5```|
|```1.57```|```6.12E-17```|{% endraw %}


# DEGREES_TO_RADIANS {#DEGREES_TO_RADIANS}

Converts the specified degrees to radians

{% raw %}|value|result|
|-----|------|
|```0```|```0.0```|
|```180```|```3.14```|
|```360```|```6.28```|{% endraw %}


# DIVIDE {#DIVIDE}

Divides two numbers.

Inputs:

 * x
 * y

{% raw %}|x|y|result|
|-|-|------|
|```5.1```|```2.5```|```2.04```|
|```5```|```2.5```|```2.0```|
|```5```|```0.0```|```null```|{% endraw %}


# EXP {#EXP}

A mathematical function that returns the exponential value of the specified number (e^x).

{% raw %}|input|result|
|-----|------|
|```1.0```|```2.72```|
|```2.0```|```7.39```|
|```3.0```|```20.1```|
|````NaN````|````NaN````|{% endraw %}


# FLOOR {#FLOOR}

Returns the largest integer value that is equal to or less than the value.

{% raw %}|input|result|
|-----|------|
|```5.9```|```5.0```|
|```-5.9```|```-6.0```|{% endraw %}


# INTEGER_DIVIDE {#INTEGER_DIVIDE}

Divides two numbers and returns the integer part of the result.

Inputs:

 * x
 * y

{% raw %}|x|y|result|
|-|-|------|
|```5.1```|```2.5```|```2.0```|
|```5```|```2.5```|```2.0```|
|```-5.1```|```2.5```|```-2.0```|
|```3.0```|```0.0```|```null```|
|```0.0```|```0.0```|```null```|
|```0.0```|```3.0```|```0.0```|{% endraw %}


# LN {#LN}

Returns the natural logarithm of n, where n is greater than 0 and its base is a number equal to approximately 2.71828183.

{% raw %}|input|result|
|-----|------|
|```0.5```|```-0.693```|
|```1.0```|```0.0```|
|```2.0```|```0.693```|
|```0.0```|`null`|
|```-1.0```|`null`|{% endraw %}


# LOG {#LOG}

Returns the logarithm of n, where n is greater than 0, with the specified base.

Properties:

 * Base - The base to use for the logarithm.

{% raw %}|input|Base|result|
|-----|----|------|
|```2.0```|```2.0```|```1.0```|
|```4.0```|```2.0```|```2.0```|
|```8.0```|```2.0```|```3.0```|
|```1.0```|```10.0```|```0.0```|
|```10.0```|```10.0```|```1.0```|
|```100.0```|```10.0```|```2.0```|
|```-2.0```|```2.0```|`null`|{% endraw %}


# MAX {#MAX}

Returns the maximum value of the two numbers.

Inputs:

 * x
 * y

{% raw %}|x|y|result|
|-|-|------|
|```2.5```|```5.1```|```5.1```|
|```2.5```|```5```|```5.0```|{% endraw %}


# MIN {#MIN}

Returns the minimum value of the two numbers.

Inputs:

 * x
 * y

{% raw %}|x|y|result|
|-|-|------|
|```2.5```|```5.1```|```2.5```|
|```2.5```|```5```|```2.5```|{% endraw %}


# MODULO {#MODULO}

Returns the remainder of the first number divided by the second.

Inputs:

 * x
 * y

{% raw %}|x|y|result|
|-|-|------|
|```5```|```2```|```1```|
|```5.3```|```2.2```|```0.9```|
|```5```|```-2```|```1```|{% endraw %}


# MULTIPLY {#MULTIPLY}

Multiplies two numbers.

Inputs:

 * x
 * y

{% raw %}|x|y|result|
|-|-|------|
|```5.1```|```2.5```|```12.8```|
|```5```|```2.5```|```12.5```|{% endraw %}


# NEGATE {#NEGATE}

Negates the value.

{% raw %}|x|result|
|-|------|
|```1```|```-1```|
|```-1```|```1```|{% endraw %}


# POWER {#POWER}

A mathematical function that raises the first value to the power of the second value.

Inputs:

 * base
 * exponent

{% raw %}|base|exponent|result|
|----|--------|------|
|```2.0```|```0.0```|```1.0```|
|```2.0```|```1.0```|```2.0```|
|```2.0```|```2.0```|```4.0```|
|```2.0```|```3.0```|```8.0```|
|```2.0```|```4.0```|```16.0```|{% endraw %}


# RADIANS_TO_DEGREES {#RADIANS_TO_DEGREES}

Converts the specified radians to degrees

{% raw %}|value|result|
|-----|------|
|```0```|```0.0```|
|```3.14```|```180.0```|
|```6.28```|```360.0```|{% endraw %}


# RECIPROCAL {#RECIPROCAL}

Returns the reciprocal of the value (¹/ₓ).

{% raw %}|x|result|
|-|------|
|```2```|```0.5```|
|```4```|```0.25```|
|```1```|```1.0```|
|```0```|```null```|{% endraw %}


# ROUND {#ROUND}

Returns the value rounded to a certain number of decimal places.

Properties:

 * Digits - The number of decimal places to keep.

{% raw %}|input|Digits|result|
|-----|------|------|
|```2.35```|```1```|```2.3```|
|```2.35```|```4```|```2.35```|{% endraw %}


# SIGN {#SIGN}

Returns a value indicating the sign of the value.

{% raw %}|input|result|
|-----|------|
|```5```|```1```|
|```0```|```0```|
|```-5.5```|```-1```|{% endraw %}


# SIN {#SIN}

Returns the sinus of the value in radians.

{% raw %}|input|result|
|-----|------|
|```0.785```|```0.707```|
|```1.05```|```0.866```|
|```1.57```|```1.0```|
|```2.09```|```0.866```|
|```1.57```|```1.0```|{% endraw %}


# SQRT {#SQRT}

A mathematical function that returns the square root of the value.

{% raw %}|input|result|
|-----|------|
|```4```|```2.0```|
|```-2```|`null`|{% endraw %}


# SQUARE {#SQUARE}

A mathematical function that returns the square of the value.

{% raw %}|input|result|
|-----|------|
|```2```|```4```|
|```-2```|```4```|{% endraw %}


# SUBTRACT {#SUBTRACT}

Subtracts one value from another.

Inputs:

 * x
 * y

{% raw %}|x|y|result|
|-|-|------|
|```5.1```|```2.5```|```2.6```|
|```5```|```2.5```|```2.5```|{% endraw %}


# TAN {#TAN}

Returns the tangent of the value in radians using Java's Math.tan method.

{% raw %}|input|result|
|-----|------|
|```-1.57```|```-1.63E16```|
|```-0.785```|```-1.0```|
|```0.0```|```0.0```|
|```0.785```|```1.0```|
|```1.57```|```1.63E16```|{% endraw %}


# TAN_H {#TAN_H}

Returns the hyperbolic tangent of the value in radians using Java's Math.tanh method.

{% raw %}|input|result|
|-----|------|
|```-1.57```|```-0.917```|
|```-0.785```|```-0.656```|
|```0.0```|```0.0```|
|```0.785```|```0.656```|
|```1.57```|```0.917```|{% endraw %}
