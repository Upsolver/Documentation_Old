# **UpSQL Syntax Reference**

UpSql has similar syntax to ANSI SQL:

```
query_statement:

    query_expr

    [ REPLACE ON DUPLICATE field_name [, ...] ]

    [ PARTITION BY field_name [, ...] ]

query_expr:

    { select | ( query_expr ) | query_expr set_op query_expr }

select:

    [ WITH { field_name IS expression | table_name AS ( query_expr ) } [, ...] ]

    SELECT expression [ [ AS ] alias [ :data_type ] ] [, ...]

    FROM from_table

    [ [ { INNER | LEFT [ OUTER ] } ] JOIN [ LATEST ] from_table [ WAIT integer time_unit [ ALIGNED ] ]

         { ON bool_expression | USING ( field_name [, ...] ) } [...] ]

    [ WHERE bool_expression ]

    [ DELETE WHERE bool_expression ]

    [ GROUP BY { expression | grouping } [, ...]

        [ { WINDOW | MAX DELAY } integer time_unit ] [ APPEND ON DUPLICATE ] ]

    [ HAVING bool_expression [ KEEP EXISTING ] ]

from_table:

    { table_name | ( query_expr ) } [ [ AS ] alias ]

time_unit:

    { MINUTE[S] | HOUR[S] | DAY[S] }

grouping:

    { ROLLUP | CUBE | GROUPING SETS } ( { expression | ( expression [, ...] ) } [, ...] )

set_op:

    UNION { ALL | DISTINCT } | INTERSECT DISTINCT | EXCEPT DISTINCT
```

Notations:



*   Square brackets `[ ]` indicate optional clauses.
*   Parentheses `( )` indicate literal parentheses.
*   Curly braces `{ }` enclose alternatives separated by pipes `|`.
*   Ellipsis `[...]` indicates that the preceding item can repeat, comma followed by ellipsis `[, ...]` indicates repeating in a comma-separated list.


# **Terminology**

When using UpSql, the following terminology is used:


### Window

A Window is a sequence in time in which we require to bring data from.

The Window can be defined in Hours, Minutes and Days.


### Stream

A stream is an unbounded sequence of data.

The streamed data might be either structured, semi-structured or unstructured.


# **UpSql Statements**


## **UpSql Statements examples**

For the following examples, we will assume that three events stream into the data source `Purchases` over time:

```

{ "purchase_id": 1, "customer_id": 1, "products": [ { "name": "Orange", "quantity": 3, "unit_price": 0.25 }, { "name": "Banana", "quantity": 4, "price": 0.1 } ] }

{ "purchase_id": 2, "customer_id": 1, "products": [ { "name": "Apple", "quantity": 1, "unit_price": 0.5 } ] }

{ "purchase_id": 1, "customer_id": 1, "products": [ { "name": "Orange", "quantity": -2, "unit_price": 0.25 } ] }

```


## **Create Table As Select**

Upsolver Create Table As Select statements are designed to keep the state of the table reflecting the result of the query as data streams in. 

Rather than needing to worry about scheduling and updating, all you need to do is define the query you would like the table to represent, and Upsolver will make sure it reflects the result of that query on the latest data as it arrives.

If we define a table as:

```SQL
SELECT customer_id,
       SUM(products[].quantity * products[].unit_price) AS total_cost,
       COUNT(DISTINCT purchase_id) number_of_purchases
  FROM Purchases
 GROUP BY customer_id
```

The resulting table will reflect that query as events stream in. Note that functions are scoped to their common containing record, so `products[].quantity * products[].unit_price` multiplies each product quantity by its corresponding unit_price.

The final table will contain the data:

| customer_id | total_cost | number_of_purchases |
|-----|------|---|
| 1 | 1.15 | 2 |

We can also use nested fields as part of the group by statement:

```SQL
SELECT customer_id,
       products[].name product_name,
       products[].quantity * products[].unit_price total_cost
  FROM Purchases
 GROUP BY customer_id, products[].name
```

The result will be:

| customer_id | product_name | total_cost |
|-----|------|---|
| 1 | Orange | 0.25 |
| 1 | Banana | 0.4 |
| 1 | Apple | 0.5 |

## **Hierarchical data**

Since Upsolver allows creating queries on top of raw data, constructs to handle hierarchical data are required. Regular SQL handling of hierarchical data is cumbersome and does not give high flexibility, which is why Upsolver uses a simpler mechanism. 

We will demonstrate on the following data:

```JSON
{ "tax": 1.1, "charges": [ { "amount": 2.5 }, { "amount": 3 } ] }
```

Fields in nested records can be accessed using the dot syntax.

 If a field is in an array, we use square braces `[]` to denote that.

 For example, the `amount` field is accessed as `charges[].amount`.


## **Calculations on Hierarchical data**

When doing calculations on Hierarchical data, the result is placed back in the nested hierarchy. 

This "target location" affects how an operation works when dealing with arrays.

For example:

```SQL
SET charges[].amount_with_tax = charges[].amount * tax;
SET total_charges = SUM_VALUES(charges[].amount_with_tax);
SET amount_with_tax = charges[].amount * tax;
SET total_charges2 = SUM_VALUES(amount_with_tax[]);
SET number_of_charges = COUNT_VALUES(charges[].amount);
```

Results in the following data:

```
{
  "tax": 1.1,
  "total_charges": 6.05,
  "amount_with_tax": [ 2.75, 3.3 ],
  "total_charges2: 6.05,
  "number_of_charges": 2,
  "charges": [
    { "amount": 2.5, "amount_with_tax": 2.75 },
    { "amount": 3, "amount_with_tax": 3.3 }
  ]
}
```

Note that `amount_with_tax` resulted in an array but `number_of_charges` didn't. This is because some operations like COUNT_VALUES return a single value, regardless of how many inputs they have.

Inline operations use the deepest possible location in the nesting as their target location.


## **Query Sections**

### **WITH Statement**

`WITH { field_name IS expression | table_name AS ( query_expr ) } [, ...]`

Upsolver's `WITH` statement allows you to define common table expressions (CTEs) that can be used within the `JOIN` or `FROM` parts of the query, or define calculated fields that can then be used within the query.

#### **Common Table Expressions (CTE)**

`table_name AS ( query_expr )`

CTEs behave as they would in ANSI SQL. They are pre-calculated for the query, so using them can improve performance if they are referenced in multiple places within the same query.

#### **Calculated Fields**

`field_name IS expression`

Upsolver Calculated Fields are scoped to their target location. For example, in the following query:

```SQL
  WITH products[].total_price IS products[].unit_price * products[].quantity,
       transaction_price IS SUM_VALUES(products[].total_price)
SELECT products[].name name,
       products[].total_price total_price,
       transaction_price
  FROM Purchases
```

The total price field is calculated per product, whereas the transaction_price is the sum of all the products' total_price field, since it is not scoped to the products array. The result of the query is:

| name | total_price | transaction_price |
|-----|------|---|
| Orange | 0.75 | 1.15 |
| Banana | 0.4 | 1.15 |
| Apple | 0.5 | 0.5 |
| Orange | -0.5 | -0.5 |

### **SELECT Statement**

`SELECT expression [ [ AS ] alias [ :data_type ] ] [, ...]`

The SELECT statement defines the fields returned by the query. Aliases are optional and define the names of the columns in the table. Aliases must be valid column names for the output table type being written to. A data type can be optionally specified to define the data type of the columns in the output table (equivalent to a CAST on the expression). If an alias is not specified for a calculated field, the column names in the output table will be col1, col2, etc.

### **FROM Statement**

`FROM { table_name | ( query_expr ) } [ [ AS ] alias ]`

The FROM statement specifies the data source or sub-query to load data from. This can be aliased to differentiate fields coming from the main data source and fields coming from joined sub-queries.

### **JOIN Statement**

```
[ { INNER | LEFT [ OUTER ] } ] JOIN [ LATEST ]

    { table_name | ( query_expr ) } [ [ AS ] alias ] [ WAIT integer { MINUTE[S] | HOUR[S] | DAY[S] } [ ALIGNED ] ]

    { ON bool_expression | USING ( field_name [, ...] ) }
```

The JOIN statement allows combining data from the streaming data source with data arriving in other streams, historical aggregations or reference data files. The join table must be either a Lookup Table or Reference Data. The `ON` statement must be of the form `lookup_key_1 = expression AND lookup_key_2 = expression ...` or `lookup_key_1 IN (expression1, ...) AND lookup_key_2 IN (expression1, ...) ...`. Each key in the lookup table must be mapped to one or more expressions using either `=` or `IN`.

Since Upsolver is a streaming system, all joins are applied in stream time. In order to synchronize between streams, Upsolver supports the `WAIT integer { MINUTE[S] | HOUR[S] | DAY[S] } [ ALIGNED ]` syntax. For example, if `WAIT 5 MINUTES` is specified, Upsolver ensures that the state of the joined lookup table is ready 5 minutes ahead of the data being processed. This will cause the output to be delayed by 5 minutes.

If the keyword `ALIGNED` is used, it will wait for the next aligned window. For example, data arriving after 08:35 and before 08:40 will wait until 08:40. The alignment is done using unix epoch time, so `WAIT 1 DAY` will wait until 00:00 UTC of the following day.

When running a query over historical data, Upsolver maintains the time relation between streams in the same way as it would when processing data that is up to date. The `LATEST` keyword is intended to handle situations where initial data is dumped into a lookup table after the source stream started running. This forces the query to use the state of the joined lookup table that exists when it is run for all historical data. Data that arrived after the query was run is not affected by `LATEST`.

### **WHERE Statement**

`WHERE bool_expression`

The WHERE statement is used to filter rows from the result based on a boolean expression. NOT, AND and OR can be used to combine multiple expressions. All standard SQL operators and functions are supported.

### **DELETE WHERE Statement**

`DELETE WHERE bool_expression`

The DELETE WHERE statement is used in conjunction with the `REPLACE ON DUPLICATE field_name [, ...]` clause, filtered rows are treated as deletes and will remove existing rows from the table with the same duplicate keys. `DELETE WHERE` is not supported if `REPLACE ON DUPLICATE` is not specified.

### **GROUP BY Statement**

```
GROUP BY { expression | 

    { ROLLUP | CUBE | GROUPING SETS } ( { expression | ( expression [, ...] ) } [, ...] ) } [, ...]

    [ { WINDOW | MAX DELAY } integer { MINUTE[S] | HOUR[S] | DAY[S] } ]

    [ APPEND ON DUPLICATE ]
```

The GROUP BY statement causes the query to aggregate results according to the group by clauses. Non aggregate functions in the select statement can only be used on fields in the group by statement.

The WINDOW clause optionally sets the amount of time until data is expired out of the result. For example, if it is set to 30 days, data older than 30 days is removed from the output aggregations. This is a sliding window configuration that moves forwards every minute.

When setting MAX DELAY, the group by must include a date or timestamp field. This will filter out data that arrives delayed by more than the max delay. The following two queries are identical, but setting the MAX DELAY will save storage on S3:

```SQL
SELECT user_id, date(event_time) event_date, count(*) events
  FROM events
 GROUP BY user_id, date(event_time)
   MAX DELAY 3 days
```

```SQL
SELECT user_id, date(event_time) event_date, count(*) events
  FROM events
 WHERE $time - date(event_time) < 3 days
 GROUP BY user_id, date(event_time)
```

To also output summaries for subsets of the group by clauses, grouping functions ROLLUP, CUBE and GROUPING SETS can be used. A good explanation of how they work can be found [here](https://oracle-base.com/articles/misc/rollup-cube-grouping-functions-and-grouping-sets).

For example, if we want to create a table with the number of daily active users per country, we could use the following query:

```SQL
SELECT country,
       DATE(event_time) event_date,
       COUNT(DISTINCT user_id) users
  FROM events
 GROUP BY country, DATE(event_time)
```

#### **APPEND ON DUPLICATE**

When a `GROUP BY` Statement is used, Upsolver's default behavior is to replace an existing row in the table when its aggregation is updated.

This allows queries to be defined the same as they would be in a non-streaming context. 

By setting `APPEND ON DUPLICATE`, the table will instead be appended to, which will result in multiple rows with the same keys in the final table.


### **HAVING Statement**

`HAVING bool_expression [ KEEP EXISTING ] ]`

The HAVING statement filters rows after the GROUP BY statement is applied. Only group by fields, functions based on group by fields, or aggregations are allowed in the HAVING statement.


#### **KEEP EXISTING**

The `KEEP EXISTING` modifier changes the default behavior of aggregated queries to not remove records whose HAVING clause stopped applying. For example:

```SQL
SELECT customer_id, COUNT(*) number_of_transactions
  FROM Purchases
 GROUP BY customer_id
HAVING COUNT(*) < 3
  KEEP EXISTING
```

By default, when the third transaction arrives, Upsolver will delete the customer's record from the table. In this case, since `KEEP EXISTING` is set, that transaction is simply filtered and will not affect the table. The resulting table will be:

| customer_id | number_of_transactions |
|-----|------|
| 1 | 2 |

### **REPLACE ON DUPLICATE field_name [, ...]**

When using `REPLACE ON DUPLICATE field_name [, ...]`, Upsolver will replace rows in the table with the newest row according to the fields list. This should not be used in aggregate queries (queries that include a GROUP BY statement), since this is the default behavior (see APPEND ON DUPLICATE). This can be used together with `DELETE WHERE` to delete rows that already exist in the table, but then arrive again in the stream and are filtered in the where clause.

For example, the following query keeps the latest update of a purchase, and deletes purchases that were refunded from the table:

```SQL
SELECT purchase_id,
       SUM_VALUES(products[].quantity * products[].unit_price) total_cost
  FROM Purchases
DELETE WHERE SUM_VALUES(products[].quantity * products[].unit_price) >= 0
REPLACE ON DUPLICATE purchase_id
```

### **PARTITION BY field_name [, ...]**

Partitions the data in Athena by the field names. 

Data is always partitioned by time, so if there is no date field in the fields list, DATE($time) is added implicitly.

For example, `PARTITION BY DATE(event_date), organization_id` Will create a partition per day according to the event_date field, as well as per organization_id.