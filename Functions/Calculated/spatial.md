# WKT_SPATIAL_CONTAINS

Checks if the first WKT formatted spatial object contains the second

### Inputs

 * __first__
 * __second__

{% raw %}

|first|second|result|
|-----|------|------|
|`"POLYGON((-10 30, -40 40, -10 -20, 40 20, 0 0, -10 30))"`|`"POINT(10 0)"`|``true``|
|`"POLYGON((-10 30, -40 40, -10 -20, 40 20, 0 0, -10 30))"`|`"POINT(15 0)"`|``false``|

{% endraw %}


# WKT_SPATIAL_INTERSECT

Checks if the WKT formatted spatial objects intersect

### Inputs

 * __first__
 * __second__

{% raw %}

|first|second|result|
|-----|------|------|
|`"POLYGON((-10 30, -40 40, -10 -20, 40 20, 0 0, -10 30))"`|`"POINT(10 0)"`|``true``|
|`"POLYGON((-10 30, -40 40, -10 -20, 40 20, 0 0, -10 30))"`|`"POINT(16 0)"`|``false``|

{% endraw %}
