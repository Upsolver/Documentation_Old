# Aggregate Streaming Data

An aggregation is the pre-calculated result of a query. Unlike a simple VIEW the result of an aggregation is stored in a table. Aggregations are being used when immediate response is needed and the query where the aggregation based on would take too long to produce a result. Aggregations have to be refreshed once in a while. It depends on the requirements how often an aggregation is refreshed and how actual its content is. 

Basically an aggregation can be refreshed immediately or deferred, it can be refreshed fully or to a certain point in time. 

UpSql supports several aggregation functions. You can use these functions to build aggregations over streamed data. For the full list of aggregation functions, see [upsolver aggregation functions](https://docs.upsolver.com/Functions/aggregations.html).

For the following examples, we will assume _events_ stream contains several events, in the following format:

```
{“user_id” : Integer, “event_time”: epoch seconds, “action_type” : String}
```


## Aggregate Results in Upsolver Output using UpSql

Aggregations are being performed using GROUP BY statement.

Synopsis:

```

GROUP BY { expression | 

    { ROLLUP | CUBE | GROUPING SETS } ( { expression | ( expression [, ...] ) } [, ...] ) } [, ...]

    [ { WINDOW | MAX DELAY } integer { MINUTE[S] | HOUR[S] | DAY[S] } ]

    [ APPEND ON DUPLICATE ]

```


### **Create a Table With Unique Key**

We will demonstrate the creation of a table with unique key using the GROUP BY statement.

Count all the distinct events per user and per date:

```SQL
SELECT user_id, UNIX_EPOCH_TO_DATE(event_time), COUNT_DISTINCT(*) events
  FROM events
 GROUP BY user_id, UNIX_EPOCH_TO_DATE(event_time)
```

Note that when performing the above query (and any aggregation), Upsolver's default behavior is to replace an existing row in the table when its aggregation is updated.

We can avoid such situation using the following UpSQL feature APPEND ON DUPLICATE.


### **APPEND ON DUPLICATE**

This allows queries to be defined the same as they would be in a non-streaming context. 

By setting `APPEND ON DUPLICATE`, the table will instead be appended to, which will result in multiple rows with the same keys in the final table.

The following query demonstrates this:

```SQL
SELECT user_id, UNIX_EPOCH_TO_DATE(event_time), COUNT_DISTINCT(*) events
  FROM events
 GROUP BY user_id, UNIX_EPOCH_TO_DATE(event_time)
 APPEND ON DUPLICATE
```

Using the APPEND ON DUPLICATE will result in having several rows per user_id and event_time in the output table - each with a different amount of events.


### **Aggregate Records Over a Sliding Window**

The WINDOW clause optionally sets the amount of time until data is expired out of the result. 

For example, if it is set to 30 days, data older than 30 days is removed from the output aggregations. This is a sliding window configuration that moves forwards every minute.

Count all the events per user and event_time and aggregate over a 30 days:

```SQL
SELECT user_id, UNIX_EPOCH_TO_DATE(event_time), count(*) events
  FROM events
 GROUP BY user_id, UNIX_EPOCH_TO_DATE(event_time)
   WINDOW 30 days
```


### **Aggregate Records Using MAX DELAY**

The MAX DELAY will filter out data that arrives delayed by more than the max delay.

Please note: When using MAX DELAY the group by must include a date or timestamp field.

Count all the events per user and event_time and up to 3 days back:

```SQL
SELECT user_id, UNIX_EPOCH_TO_DATE(event_time), count(*) events
  FROM events
 GROUP BY user_id, UNIX_EPOCH_TO_DATE(event_time)
   MAX DELAY 3 days
```
