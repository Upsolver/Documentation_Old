# ADD_TIME_ZONE_OFFSET {#ADD_TIME_ZONE_OFFSET}

Add a timezone offset to a date. The timezone offset can be in any of the standard formats accepted by Java's ZoneId.of method (America/New_York, +02:00, etc.)

Inputs:

 * time
 * zone

{% raw %}|time|zone|result|
|----|----|------|
|```"2018-03-10T08:55:12.456Z"```|```"+02:00"```|```"2018-03-10T10:55:12.456Z"```|
|```"2018-03-10T08:55:12.456Z"```|```"America/New_York"```|```"2018-03-10T03:55:12.456Z"```|
|```"2018-03-10T08:55:12.456Z"```|```""```|```null```|
|```"2018-03-10T08:55:12.456Z"```|```"Invalid Zone Id"```|```null```|{% endraw %}


# DATE_FORMAT {#DATE_FORMAT}

Convert date into string

Properties:

 * Format - The date format to output. The format uses the Java DateTimeFormatter format (https://docs.oracle.com/javase/9/docs/api/java/time/format/DateTimeFormatter.html). For example, yyyy-MM-dd HH:mm:ss will output strings in the format 2017-07-23 14:33:54. yyyy-MM-dd'T'HH:mm:ss.SSS'Z' will output strings in the format 2017-07-23T14:33:54.756Z.

{% raw %}|date|Format|result|
|----|------|------|
|```"2018-03-10T08:55:12.456Z"```|```"yyyy/MM/dd HH:mm:ss.SSS"```|```"2018/03/10 08:55:12.456"```|
|```"2018-03-10T08:55:12.456Z"```|```"yyyy/MM/dd"```|```"2018/03/10"```|
|```"2018-03-10T08:55:12.456Z"```|```"HH:mm:ss.SS"```|```"08:55:12.45"```|
|```"2018-03-10T08:55:12.456Z"```|```"E"```|```"Sat"```|{% endraw %}


# PARSE_DATE {#PARSE_DATE}

Convert a date string in the provided format into a date. If the date is missing or not in the correct format, this feature will not return a value.

Properties:

 * Format - The format to use on the date string. The format uses the Java DateTimeFormatter format (https://docs.oracle.com/javase/9/docs/api/java/time/format/DateTimeFormatter.html). For example, yyyy-MM-dd HH:mm:ss will parse strings of the format 2017-07-23 14:33:54. yyyy-MM-dd'T'HH:mm:ss.SSS'Z' will parse strings in the format 2017-07-23T14:33:54.756Z.

{% raw %}|date|Format|result|
|----|------|------|
|```"2017-09-25 22:11:00"```|```"yyyy-MM-dd HH:mm:ss"```|```"2017-09-25T22:11:00Z"```|
|```"2018-03-19"```|```"yyyy-MM-dd"```|```"2018-03-19T00:00:00Z"```|
|```"2018_Mar_21_17:59:05.689"```|```"yyyy_MMM_dd_HH:mm:ss.SSS"```|```"2018-03-21T17:59:05.689Z"```|
|```"2018_Mar_21"```|```"yyyy_MMM_dd"```|```"2018-03-21T00:00:00Z"```|
|```"2018_Mar_21_24:59:05.689 America/Los_Angeles"```|```"yyyy_MMM_dd_kk:mm:ss.SSS VV"```|```"2018-03-21T07:59:05.689Z"```|{% endraw %}


# TO_UNIX_EPOCH_MILLIS {#TO_UNIX_EPOCH_MILLIS}

Convert a date to it's Epoch (unix) milliseconds representation

{% raw %}|date|result|
|----|------|
|```"2018-03-10T08:55:12.456Z"```|```1520672112456```|{% endraw %}


# TO_UNIX_EPOCH_SECONDS {#TO_UNIX_EPOCH_SECONDS}

Convert a date to it's Epoch (unix) seconds representation

{% raw %}|date|result|
|----|------|
|```"2018-03-10T08:55:12.456Z"```|```1520672112```|{% endraw %}


# UNIX_EPOCH_TO_DATE {#UNIX_EPOCH_TO_DATE}

Convert epoch seconds or milliseconds to a date

{% raw %}|epochMillis|result|
|-----------|------|
|```1520672112456```|```"2018-03-10T08:55:12.456Z"```|
|```1520672112```|```"2018-03-10T08:55:12Z"```|{% endraw %}
