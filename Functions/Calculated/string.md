# BASE64_DECODE

Decode a base 64 string into a string

{% raw %}

|value|result|
|-----|------|
|`"SGVsbG8gV29ybGQ="`|`"Hello World"`|
|`"###"`|`null`|

{% endraw %}


# BYTES_SUBSTRING

Returns a substring of the input, using the offsets in bytes of the UTF-8 encoded byte representation. Partial characters and invalid UTF-8 code points are removed from the result.

### Inputs

 * __value__ - Value to substring

### Properties

 * __Start Index__ - The inclusive start index in bytes
 * __End Index__ - The exclusive end index in bytes

{% raw %}

|value|Start Index|End Index|result|
|-----|-----------|---------|------|
|`"Hello World"`|`0`|`10`|`"Hello Worl"`|
|`"Hello World"`|`1`|`10`|`"ello Worl"`|
|`"⻤Hello Wor⻤"`|`1`|`10`|`"Hello W"`|
|`"⻤Hello Wor⻤"`|`0`|`10`|`"⻤Hello W"`|
|`"Hello"`|`0`|`10`|`"Hello"`|

{% endraw %}


# MD5

Hashes the input using MD5

{% raw %}

|input|result|
|-----|------|
|`"hello world"`|`"5eb63bbbe01eeed093cb22bb8f5acdc3"`|

{% endraw %}


# REGEX

Matches the regular expression on the input string. Returns the escape groups if any exists or the original string if non exists.

### Properties

 * __Pattern__ - Regular Expression Pattern

{% raw %}

|input|Pattern|result|
|-----|-------|------|
|`"abcijefjabc"`|`"abc"`|`"abc"`, `"abc"`|

{% endraw %}


# REGEX_MATCH_POSITION

Matches the regular expression on the input string, and returns the index of the first match.

### Inputs

 * __value__
 * __startPosition__

### Properties

 * __Pattern__ - Pattern to search for



# REGEX_NAMED_GROUPS

Matches the regular expression on the input string. Returns record with field names and group names

### Properties

 * __Pattern__ - Regular Expression Pattern
 * __All Matches__ - Return all the matches of the pattern, and not only the first one
 * __Filter Empty__ - Filter out empty matches

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

### Properties

 * __Pattern__ - Pattern to replace (regex)
 * __Replacement__ - Replacement string

{% raw %}

|value|Pattern|Replacement|result|
|-----|-------|-----------|------|
|`"Hello World"`|`"Hello"`|`null`|`" World"`|
|`"Hello World"`|`"Hello"`|`"foo"`|`"foo World"`|
|`"World"`|`"Hello"`|`"foo"`|`"World"`|

{% endraw %}


# SHA1

Hashes the input using SHA-1

{% raw %}

|input|result|
|-----|------|
|`"hello world"`|`"2aae6c35c94fcfb415dbe95f408b9ce91ee846ed"`|

{% endraw %}


# SHA256

Hashes the input using SHA-256

{% raw %}

|input|result|
|-----|------|
|`"Hello SHA"`|`"4ea3b17f15346417f4c9b2ff94a1bfe82de99fdb0bbd30dc4dca031ab920d5e4"`|

{% endraw %}


# SPLIT

Returns the given string split by the provided delimiter.

### Properties

 * __Delimiter__

{% raw %}

|input|Delimiter|result|
|-----|---------|------|
|`"a,b,c,d"`|`","`|`"a"`, `"b"`, `"c"`, `"d"`|
|`"a,,b"`|`","`|`"a"`, `"b"`|
|`",a,b,"`|`","`|`"a"`, `"b"`|
|`"~~a~~b~~"`|`"~~"`|`"a"`, `"b"`|

{% endraw %}


# SPLIT_TO_RECORD

Returns the given string split by the provided delimiter.

### Properties

 * __Field Names__
 * __Delimiter__
 * __Filter Empty Values__

{% raw %}

|value|Field Names|Delimiter|Filter Empty Values|result|
|-----|-----------|---------|-------------------|------|
|`"1,2,3,4"`|`"a,b,c"`|`","`|``false``|`{"a": "1", "b": "2", "c": "3"}`|
|`"1,2"`|`"a,b,c"`|`","`|``false``|`{"a": "1", "b": "2", "c": ""}`|
|`"1,,3"`|`"a,b,c"`|`","`|``true``|`{"a": "1", "c": "3"}`|

{% endraw %}


# STRING_FORMAT

Format any number of inputs into a string using the given format

### Properties

 * __Format String__ - The format string where {n} prints the n'th input. For example, the pattern '{0}.{0}.{1}' on the inputs 'a' and 'b' will result in the string 'a.a.b'

{% raw %}

|inputs|Format String|result|
|------|-------------|------|
|`"a"`, `"b"`, `"c"`|`"{0} {1} {2}"`|`"a b c"`|
|`1.23`|`"{0}"`|`"1.23"`|
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

### Properties

 * __Margin Char__

{% raw %}

|input|Margin Char|result|
|-----|-----------|------|
|`"Hello`<br />`          ∣ World"`|`"∣"`|`"Hello`<br />` World"`|

{% endraw %}


# STRIP_PREFIX

Remove the given prefix string from the beggening of the string

### Properties

 * __Prefix__

{% raw %}

|input|Prefix|result|
|-----|------|------|
|`"((foo))"`|`"("`|`"(foo))"`|
|`"foo"`|`"("`|`"foo"`|

{% endraw %}


# STRIP_SUFFIX

Remove the given suffix string from the end of the string

### Properties

 * __Suffix__

{% raw %}

|input|Suffix|result|
|-----|------|------|
|`"((foo))"`|`")"`|`"((foo)"`|
|`"foo"`|`")"`|`"foo"`|

{% endraw %}


# SUBSTRING

Returns a string that is a substring of the given string

### Inputs

 * __value__
 * __startPosition__
 * __endPosition__

{% raw %}

|value|startPosition|endPosition|result|
|-----|-------------|-----------|------|
|`"Hello World"`|`0`|`5`|`"Hello"`|
|`"Hello"`|`0`|`-1`|`"Hello"`|
|`"Hello"`|`1`|`3`|`"el"`|
|`"Hello"`|`6`|`-1`|`""`|
|`"Hello"`|`-3`|`-2`|`"ll"`|

{% endraw %}


# TOP_PRIVATE_DOMAIN

Get the top private domain from a domain name. For example, for www.example.com will return example.com

{% raw %}

|value|result|
|-----|------|
|`"www.example.com"`|`"example.com"`|
|`"www.example.co.uk"`|`"example.co.uk"`|
|`"www.example.uk.com"`|`"example.uk.com"`|

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

### Properties

 * __Dictionary__
 * __Keep Values Without Translation__ - Whether to keep values that have that are not mapped to a value in the feature
 * __Empty As Null__ - If set, empty values will be treated as null

{% raw %}

|input|Dictionary|Keep Values Without Translation|Empty As Null|result|
|-----|----------|-------------------------------|-------------|------|
|`"a"`|`"a,Antman`<br />`b,Batman`<br />`d,"`|``false``|``false``|`"Antman"`|
|`"b"`|`"a,Antman`<br />`b,Batman`<br />`d,"`|``false``|``false``|`"Batman"`|
|`"c"`|`"a,Antman`<br />`b,Batman`<br />`d,"`|``false``|``false``|`null`|
|`"c"`|`"a,Antman`<br />`b,Batman`<br />`d,"`|``true``|``false``|`"c"`|
|`"d"`|`"a,Antman`<br />`b,Batman`<br />`d,"`|``true``|``true``|`null`|
|`"d"`|`"a,Antman`<br />`b,Batman`<br />`d,"`|``true``|``false``|`""`|
|`1234`|`"1234.0,good"`|``false``|``false``|`"good"`|
|`1234`|`"1234.0,good"`|``false``|``false``|`"good"`|
|`0`|`"0.0,good"`|``false``|``false``|`"good"`|
|`0`|`"-0.0,good"`|``false``|``false``|`"good"`|
|`0`|`"-0.0,good"`|``false``|``false``|`"good"`|
|`123456000000000000`|`"1.23456e17,good"`|``false``|``false``|`"good"`|
|`6`|`"6.000000000000001,good"`|``false``|``false``|`null`|

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

### Properties

 * __Characters__

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


# URL_PARSER

Parses the URI/URL into its component parts

{% raw %}

|value|result|
|-----|------|
|`"https://www.domain.com/page.html"`|`{"scheme": "https", "authority": "www.domain.com", "host": "www.domain.com", "path": "/page.html"}`|
|`"https://user:pass@www.domain.com:80/page.html?query#fragment"`|`{"scheme": "https", "user_info": "user:pass", "authority": "user:pass@www.domain.com:80", "host": "www.domain.com", "port": 80, "path": "/page.html", "query": "query", "fragment": "fragment"}`|
|`"user:pass@www.domain.com/page.html?query"`|`{"user_info": "user:pass", "authority": "user:pass@www.domain.com", "host": "www.domain.com", "path": "/page.html", "query": "query"}`|
|`"www.domain.com/page.html#fragment"`|`{"authority": "www.domain.com", "host": "www.domain.com", "path": "/page.html", "fragment": "fragment"}`|
|`"/www.domain.com"`|`{"path": "/www.domain.com"}`|

{% endraw %}
