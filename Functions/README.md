# Functions

## Calculated Fields

A calculated field is a field that wasn't a part of an incoming event. It is added into the event by using one of Upsolver's functions.

Examples: extracting city from IP, running a regular expression or performing a mathematical operation.

Please note:

* Calculated Fields do not create any physical storage - they are executed at run-time if they are needed in a deployed [Materialized View](/MaterializedViews/README.md), [Output](/outputs.md) or [Pipeline](/pipelines-coming-soon.md).
* Functions input parameters - limited to fields in the incoming event, constant values and other Calculated Fields. It's possible to use fields from various hierarchical locations.
* Functions output parameter - a single value or an array that can be placed at any hierarchical location within the event.
* Functions are built to handle both single values and arrays so be sure to check each one in the documentation.

## Aggregations

Aggregations are functions for grouping multiple events together to form a more significant result.

Unlike databases, Upsolver runs [continuous queries](/Introduction/continuous-queries.md) and not ad-hoc queries. Therefore, aggregation results are incrementally updated with every incoming event.

Aggregation functions require [windowing](/Introduction/windowing.md) to split a stream into buckets of data that can be aggregated.

Aggregation functions can return a single value or a hash table as explained in each function.
