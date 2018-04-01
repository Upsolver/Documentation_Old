# BASE64_DECODE

Decode a base 64 string into a string

{% raw %}

|value|result|
|-----|------|
|`"SGVsbG8gV29ybGQ="`|`"Hello World"`|
|`"###"`|`null`|

{% endraw %}


# REGEX

Matches the regular expression on the input string. Returns the escape groups if any exists or the original string if non exists.

Properties:

 * Pattern - Regular Expression Pattern

{% raw %}

|input|Pattern|result|
|-----|-------|------|
|`"abcijefjabc"`|`"abc"`|`"abc"`, `"abc"`|

{% endraw %}


# REGEX_NAMED_GROUPS

Matches the regular expression on the input string. Returns record with field names and group names

Properties:

 * Pattern - Regular Expression Pattern
 * All Matches - Return all the matches of the pattern, and not only the first one
 * Filter Empty - Filter out empty matches

{% raw %}

|input|Pattern|All Matches|Filter Empty|result|
|-----|-------|-----------|------------|------|
|`"https://www.domain.com/page.html"`|`"^(?:(?<scheme>.*?):\/)?\/?(?<domain>[^:\/\s]+)(?::(?<port>\d*))?(?:(\/\w+)*\/)(?<page>[\w\-\.]+[^#?\s]+)(?:.*)?$"`|``false``|``false``|`{"scheme": "https", "domain": "www.domain.com", "page": "page.html"}`|
|`"http://www.domain.com:8080/page.html"`|`"^(?:(?<scheme>.*?):\/)?\/?(?<domain>[^:\/\s]+)(?::(?<port>\d*))?(?:(\/\w+)*\/)(?<page>[\w\-\.]+[^#?\s]+)(?:.*)?$"`|``false``|``false``|`{"scheme": "http", "domain": "www.domain.com", "port": "8080", "page": "page.html"}`|
|`"123"`|`"^(?<digits>\d*)$"`|``false``|``false``|`{"digits": "123"}`|
|`"foo"`|`"^(?<digits>\d*)$"`|``false``|``false``|`null`|
|`""`|`"^(?<digits>\d*)$"`|``false``|``false``|`{"digits": ""}`|
|`""`|`"^(?<digits>\d*)$"`|``false``|``true``|`null`|
|`"www.upsolver.com"`|`"\bwww.(?<domain>[^\.]*).com\b"`|``true``|``false``|`{"domain": "upsolver"}`|
|`"www.a.com www.b.com"`|`"\bwww.(?<domain>[^\.]*).com\b"`|``true``|``false``|`{"domain": "a"}`, `{"domain": "b"}`|
|`"www.a.com www.b.com"`|`"\bwww.(?<domain>[^\.]*).com\b"`|``false``|``false``|`{"domain": "a"}`|

{% endraw %}


# REPLACE

Replace substrings within a string

Properties:

 * Pattern - Pattern to replace (regex)
 * Replacement - Replacement string

{% raw %}

|value|Pattern|Replacement|result|
|-----|-------|-----------|------|
|`"Hello World"`|`"Hello"`|`null`|`" World"`|
|`"Hello World"`|`"Hello"`|`"foo"`|`"foo World"`|
|`"World"`|`"Hello"`|`"foo"`|`"World"`|

{% endraw %}


# SPLIT

Returns the given string split by the provided delimiter.

Properties:

 * Delimiter

{% raw %}

|input|Delimiter|result|
|-----|---------|------|
|`"a,b,c,d"`|`","`|`"a"`, `"b"`, `"c"`, `"d"`|
|`"a,,b"`|`","`|`"a"`, `"b"`|
|`",a,b,"`|`","`|`"a"`, `"b"`|
|`"~~a~~b~~"`|`"~~"`|`"a"`, `"b"`|

{% endraw %}


# STRING_FORMAT

Format any number of strings into a string using the Java MessageFormat syntax (https://docs.oracle.com/javase/9/docs/api/java/text/MessageFormat.html)

Properties:

 * Format String - The format string using the Java MessageFormat syntax (https://docs.oracle.com/javase/9/docs/api/java/text/MessageFormat.html). For example, the pattern '{0}.{0}.{1}' on the inputs 'a' and 'b' will result in the string 'a.a.b'

{% raw %}

|inputs|Format String|result|
|------|-------------|------|
|`"a"`, `"b"`, `"c"`|`"{0} {1} {2}"`|`"a b c"`|
|`0.5`|`"{0,number,percent}"`|`"50%"`|
|`1.23`|`"{0,number,#.###}"`|`"1.235"`|
|`1.2`|`"{0,number,#.###}"`|`"1.2"`|
|`1.23`|`"{0,number,0.000}"`|`"1.235"`|
|`1.2`|`"{0,number,0.000}"`|`"1.200"`|
|`1.23E8`|`"{0,number,###,###.###}"`|`"123,456,789.012"`|
|`1.23E8`|`"{0,number,000,000.000}"`|`"123,456,789.012"`|

{% endraw %}


# STRING_LENGTH

Gets the length of the string

{% raw %}

|input|result|
|-----|------|
|`""`|`0`|
|`"Hello"`|`5`|

{% endraw %}


# STRIP_MARGIN

For each line remove prefix of control or whitespace characters followed by the given margin char

Properties:

 * Margin Char

{% raw %}

|input|Margin Char|result|
|-----|-----------|------|
|`"Hello`<br />`        ∣ World"`|`"∣"`|`"Hello`<br />` World"`|

{% endraw %}


# STRIP_PREFIX

Remove the given prefix string from the beggening of the string

Properties:

 * Prefix

{% raw %}

|input|Prefix|result|
|-----|------|------|
|`"((foo))"`|`"("`|`"(foo))"`|
|`"foo"`|`"("`|`"foo"`|

{% endraw %}


# STRIP_SUFFIX

Remove the given suffix string from the end of the string

Properties:

 * Suffix

{% raw %}

|input|Suffix|result|
|-----|------|------|
|`"((foo))"`|`")"`|`"((foo)"`|
|`"foo"`|`")"`|`"foo"`|

{% endraw %}


# SUBSTRING

Returns a string that is a substring of the given string

Properties:

 * Start Index - The inclusive start index. Negative values count from the end of the string
 * End Index - The exclusive end index. Negative values count inclusively from the end of the string

{% raw %}

|input|Start Index|End Index|result|
|-----|-----------|---------|------|
|`"Hello"`|`0`|`-1`|`"Hello"`|
|`"Hello"`|`1`|`-1`|`"ello"`|
|`"Hello"`|`6`|`-1`|`""`|
|`"Hello"`|`-3`|`-1`|`"llo"`|

{% endraw %}


# TO_LOWER

Converts the string to lowercase letters

{% raw %}

|input|result|
|-----|------|
|`"HELLO world"`|`"hello world"`|

{% endraw %}


# TO_UPPER

Converts the string to uppercase letters

{% raw %}

|input|result|
|-----|------|
|`"HELLO world"`|`"HELLO WORLD"`|

{% endraw %}


# TRANSLATE

Translates the given value using a given dictionary

Properties:

 * Dictionary - Comma separated values with key and optional value in every line
 * Keep Values Without Translation - Whether to keep values that have no translation in the given dictionary

{% raw %}

|input|Dictionary|Keep Values Without Translation|result|
|-----|----------|-------------------------------|------|
|`1`|`"1,foo`<br />`2,bar"`|``false``|`"foo"`|
|`2.0`|`"1,foo`<br />`2,bar"`|``false``|`"bar"`|
|`3`|`"1,foo`<br />`2,bar"`|``false``|`null`|
|`3`|`"1,foo`<br />`2,bar"`|``true``|`"3"`|
|`"a"`|`"a,Antman`<br />`b,Batman"`|``false``|`"Antman"`|
|`"b"`|`"a,Antman`<br />`b,Batman"`|``false``|`"Batman"`|
|`"c"`|`"a,Antman`<br />`b,Batman"`|``false``|`null`|
|`"c"`|`"a,Antman`<br />`b,Batman"`|``true``|`"c"`|

{% endraw %}


# TRIM

Returns the given string without leading or trailing whitespaces

{% raw %}

|input|result|
|-----|------|
|`"foo"`|`"foo"`|
|`"	foo	"`|`"foo"`|
|`" foo "`|`"foo"`|

{% endraw %}


# TRIM_CHARS

Returns the given string without leading or trailing characters

Properties:

 * Characters

{% raw %}

|input|Characters|result|
|-----|----------|------|
|`"-==--Hello World---=---"`|`"-="`|`"Hello World"`|
|`""`|`"-"`|`""`|
|`"-----------"`|`"-"`|`""`|
|`"x-----------"`|`"-"`|`"x"`|
|`"-----------x"`|`"-"`|`"x"`|
|`"------x-----"`|`"-"`|`"x"`|
|`"x-----------x"`|`"-"`|`"x-----------x"`|

{% endraw %}


# URL_DECODE

Decode url encoded text

{% raw %}

|input|result|
|-----|------|
|`"The+quick+brown+fox"`|`"The quick brown fox"`|
|`"Comment+%235"`|`"Comment #5"`|

{% endraw %}


# URL_ENCODE

Encode text to url encoded format

{% raw %}

|input|result|
|-----|------|
|`"The quick brown fox"`|`"The+quick+brown+fox"`|
|`"Comment #5"`|`"Comment+%235"`|

{% endraw %}
