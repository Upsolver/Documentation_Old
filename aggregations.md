# Aggregations

Aggregations are functions for grouping multiple events together to form a more significant result.

Unlike databases, Upsolver runs [continuous queries](/continuous-queries.md) and not ad-hoc queries. Therefore, aggregation results are incrementally updated with every incoming event.

Aggregation functions require [windowing](/aggregations/windowing.md) to split a stream into buckets of data that can be aggregated.

Aggregation functions can return a single value or a hash table as explained in each function.COUNT\_ALL\(hash\_result\_key optional\)

Total number of rows within a time window.

Input parameters:

* hash\_result\_key parameter – used to return a hash table, mapping each key to an aggregation value.

Note:

* NULL and missing values – not ignored. 

Examples:

For the following stream of events

```json
{}
{"id":"A", "val":1, "val_arr":[1,2]}
{"id":"B", "val":2, "val_arr":[2,3]}
{"id":"B", "val":3, "val_arr":[3,4]}
```

The table below contains possible aggregations

| Aggregation | Result |
| :--- | :--- |
| COUNT\_ALL\(\) | 4 |
| COUNT\_ALL\(id\) | {"A":1, "B":2} |

## COUNT \(field, hash\_result\_key optional\)

Number of times a field appeared within a time window.

Input parameters:

* field - field name in a Data Source.
* hash\_result\_key parameter – used to return a hash table, mapping each key to an aggregation value.

Note:

* NULL and missing values – ignored. 
* Arrays - each item in an array is processed separately.

Examples:

For the following stream of events

```json
{}
{"id":"A", "val":1, "val_arr":[1,2]}
{"id":"B", "val":2, "val_arr":[2,3]}
{"id":"B", "val":3, "val_arr":[3,4]}
```

The table below contains possible aggregations

| Aggregation | Result |
| :--- | :--- |
| COUNT\(val\) | 3 |
| COUNT\(val\_arr\) | 6 |
| COUNT\(val\_arr, id\) | {"A":2, "B":4} |

## COUNT\_DISTINCT\(field, hash\_result\_key optional\)

Distinct number of values for a field within a time window.

Input parameters:

* field - field name in a Data Source.
* hash\_result\_key parameter – used to return a hash table, mapping each key to an aggregation value.

Note:

* NULL and missing values – ignored. 
* Arrays - each item in an array is processed separately.

Example:

For the following stream of events

```json
{}
{"id":"A", "val":1, "val_arr":[1,2]}
{"id":"B", "val":2, "val_arr":[2,3]}
{"id":"B", "val":3, "val_arr":[3,4]}
```

The table below contains possible aggregations

| Aggregation | Result |
| :--- | :--- |
| COUNT\_DISTINCT\(val\) | 3 |
| COUNT\_DISTINCT\(val\_arr\) | 4 |
| COUNT\_DISTINCT\(val\_arr | {"A":2, "B":3} |

## MIN\(field, hash\_result\_key optional\)

Lowest value of a numeric field within a time window.

Input parameters:

* field - field name in a Data Source.
* hash\_result\_key parameter – used to return a hash table, mapping each key to an aggregation value.

Note:

* NULL and missing values – ignored. 
* Arrays - each item in an array is processed separately.

Example:

For the following stream of events

```json
{}
{"id":"A", "val":1, "val_arr":[1,2]}
{"id":"B", "val":2, "val_arr":[2,3]}
{"id":"B", "val":3, "val_arr":[3,4]}
```

The table below contains possible aggregations

| Aggregation | Result |
| :--- | :--- |
| MIN\(val\) | 1 |
| MIN\(val\_arr\) | 1 |
| MIN\(val\_arr, id\) | {"A":1, "B":2} |

## MAX\(field, hash\_result\_key optional\)

Highest value of a numeric field within a time window.

Input parameters:

* field - field name in a Data Source.
* hash\_result\_key parameter – used to return a hash table, mapping each key to an aggregation value.

Note:

* NULL and missing values – ignored. 
* Arrays - each item in an array is processed separately.

Example:

For the following stream of events

```json
{}
{"id":"A", "val":1, "val_arr":[1,2]}
{"id":"B", "val":2, "val_arr":[2,3]}
{"id":"B", "val":3, "val_arr":[3,4]}
```

The table below contains possible aggregations

| Aggregation | Result |
| :--- | :--- |
| MAX\(val\) | 3 |
| MAX\(val\_arr\) | 4 |
| MAX\(val\_arr, id\) | {"A":2", "B":4} |

## SUM\(field, hash\_result\_key optional\)

Sum of values for a numeric field within a time window.

Input parameters:

* field - field name in a Data Source.
* hash\_result\_key parameter – used to return a hash table, mapping each key to an aggregation value.

Note:

* NULL and missing values – ignored. 
* Arrays - each item in an array is processed separately.

Example:

For the following stream of events

```json
{}
{"id":"A", "val":1, "val_arr":[1,2]}
{"id":"B", "val":2, "val_arr":[2,3]}
{"id":"B", "val":3, "val_arr":[3,4]}
```

The table below contains possible aggregations

| Aggregation | Result |
| :--- | :--- |
| SUM\(val\) | 6 |
| SUM\(val\_arr\) | 15 |
| SUM\(\(val\_arr, id\) | {"A":3, "B":12} |

## AVG\(field, hash\_result\_key optional\)

Average value for a numeric field within a time window.

Input parameters:

* field - field name in a Data Source.
* hash\_result\_key parameter – used to return a hash table, mapping each key to an aggregation value.

Note:

* NULL and missing values – ignored. 
* Arrays - each item in an array is processed separately.

Example:

For the following stream of events

```json
{}
{"id":"A", "val":1, "val_arr":[1,2]}
{"id":"B", "val":2, "val_arr":[2,3]}
{"id":"B", "val":3, "val_arr":[3,4]}
```

The table below contains possible aggregations

| Aggregation | Result |
| :--- | :--- |
| AVG\(val\) | 2 |
| AVG\(val\_arr\) | 5 |
| AVG\(val\_arr, id\) | {"A":1.5, "B":3} |

## LAST\(field, hash\_result\_key optional\)

Last value of a field within a time window.

Input parameters:

* field - field name in a Data Source.
* hash\_result\_key parameter – used to return a hash table, mapping each key to an aggregation value.

Note:

* NULL and missing values – ignored. 
* Arrays - each item in an array is processed separately.

Example:

For the following stream of events

```json
{}
{"id":"A", "val":1, "val_arr":[1,2]}
{"id":"B", "val":2, "val_arr":[2,3]}
{"id":"B", "val":3, "val_arr":[3,4]}
```

The table below contains possible aggregations

| Aggregation | Result |
| :--- | :--- |
| LAST\(val\) | 3 |
| LAST\(val\_arr\) | 4 |
| LAST\(val\_arr, id\) | {"A":2, "B":4} |

## FIRST\(field, hash\_result\_key optional\)

First value of a field within a time window.

Input parameters:

* field - field name in a Data Source.
* hash\_result\_key parameter – used to return a hash table, mapping each key to an aggregation value.

Note:

* NULL and missing values – ignored. 
* Arrays - each item in an array is processed separately.

Example:

For the following stream of events

```json
{}
{"id":"A", "val":1, "val_arr":[1,2]}
{"id":"B", "val":2, "val_arr":[2,3]}
{"id":"B", "val":3, "val_arr":[3,4]}
```

The table below contains possible aggregations

| Aggregation | Result |
| :--- | :--- |
| FIRST\(val\) | 1 |
| FIRST\(val\_arr\) | 1 |
| FIRST\(val\_arr, id\) | {"A":1, "B":2} |

## LAST\_K\(field, K, hash\_result\_key optional\)

Last K values of a field within a time window.

Input parameters:

* field - field name in a Data Source.
* hash\_result\_key parameter – used to return a hash table, mapping each key to an aggregation value.

Note:

* NULL and missing values – ignored. 
* Arrays - each item in an array is processed separately.
* K parameter – max items returned by the aggregation. Default value=1000.

Example:

For the following stream of events

```json
{}
{"id":"A", "val":1, "val_arr":[1,2]}
{"id":"B", "val":2, "val_arr":[2,3]}
{"id":"B", "val":3, "val_arr":[3,4]}
```

The table below contains possible aggregations

| Aggregation | Result |
| :--- | :--- |
| LAST\_K\(val,2\) | \[1,2\] |
| LAST\_K\(val\_arr,2\) | \[3,4\] |
| LAST\_K\(val\_arr,2, id\) | {"A":\[1,2\], "B":\[3,4\]} |

## CONCAT\(field, delimiter, hash\_result\_key optional\)

Concatenating all field values within a time window.

Input parameters:

* field - field name in a Data Source.
* delimiter – text for separating values. Default value – “,”.
* hash\_result\_key parameter – used to return a hash table, mapping each key to an aggregation value.

Note:

* NULL and missing values – ignored. 
* Arrays - each item in an array is processed separately.
* K parameter – max items returned by the aggregation. Default value=1000.

Example:

For the following stream of events

```json
{}
{"id":"A", "val":1, "val_arr":[1,2]}
{"id":"B", "val":2, "val_arr":[2,3]}
{"id":"B", "val":3, "val_arr":[3,4]}
```

The table below contains possible aggregations

| Aggregation | Result |
| :--- | :--- |
| CONCAT\(val, “,”\) | “1,2,3” |
| CONCAT\(val\_arr, “,”\) | “1,2,2,3,3,4” |
| CONCAT\(val\_arr, “,”, id\) | {"A":1, "B":2} |



