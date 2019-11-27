# Mapping Data To a Desired Schema

UpSQL enables to map your data into a desired schema. The process of such mapping in Upsolver is being done in two simple steps:

1. Ingest your raw data to the Data Lake - this process is being done by configuring a Data Source in Upsolver.
2. Map your data to a desired schema - this process is being done by configuring an Output using UpSql.

To demonstrate this, let’s assume we have the following data in CSV format in a data source called _Purchases _(all values in this table are Strings):
<table>
  <tr>
   <td>purchase_id
   </td>
   <td>customer_id
   </td>
   <td>product_name
   </td>
   <td>quantity
   </td>
   <td>unit_price
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>1
   </td>
   <td>Orange
   </td>
   <td>3
   </td>
   <td>0.25
   </td>
  </tr>
  <tr>
   <td>2
   </td>
   <td>1
   </td>
   <td>Apple
   </td>
   <td>1
   </td>
   <td>0.5
   </td>
  </tr>
  <tr>
   <td>3
   </td>
   <td>1
   </td>
   <td>Banana
   </td>
   <td>2
   </td>
   <td>0.25
   </td>
  </tr>
</table>
## Define Simple Schema
If we define a table as:
```SQL
SELECT customer_id, purchase_id, product_name
FROM Purchases
```
The resulting table will reflect that query as events stream in. The final table will contain the data:
<table>
  <tr>
   <td>customer_id
   </td>
   <td>purchase_id
   </td>
   <td>product_name
   </td>
  </tr>
  <tr>
   <td>“1”
   </td>
   <td>“1”
   </td>
   <td>“Orange”
   </td>
  </tr>
  <tr>
   <td>“1”
   </td>
   <td>“2”
   </td>
   <td>“Apple”
   </td>
  </tr>
  <tr>
   <td>“1”
   </td>
   <td>“3”
   </td>
   <td>“Banana”
   </td>
  </tr>
</table>
## Rename column names
Renaming of column names is being done as follows using the AS statement:
```SQL
SELECT customer_id AS Customer, purchase_id AS Purchase, product_name AS Product
FROM Purchases
```
The column names in the resulting table have been renamed:
<table>
  <tr>
   <td>Customer
   </td>
   <td>Purchase
   </td>
   <td>Product
   </td>
  </tr>
  <tr>
   <td>“1”
   </td>
   <td>“1”
   </td>
   <td>“Orange”
   </td>
  </tr>
  <tr>
   <td>“1”
   </td>
   <td>“2”
   </td>
   <td>“Apple”
   </td>
  </tr>
  <tr>
   <td>“1”
   </td>
   <td>“3”
   </td>
   <td>“Banana”
   </td>
  </tr>
</table>
## Data Type Conversion
Conversion of data types is being done using **“:”<Data Type> **next to the selected column name.
We will demonstrate a conversion of the column quantity from the example data source _Purchases_ (which is in String format) into BIGINT format.
```SQL
SELECT customer_id, purchase_id, product_name, quantity:BIGINT
FROM Purchases
```
The resulting table will reflect the conversion:
<table>
  <tr>
   <td>customer_id
   </td>
   <td>purchase_id
   </td>
   <td>product_name
   </td>
   <td>quantity
   </td>
  </tr>
  <tr>
   <td>“1”
   </td>
   <td>“1”
   </td>
   <td>“Orange”
   </td>
   <td>3
   </td>
  </tr>
  <tr>
   <td>“1”
   </td>
   <td>“2”
   </td>
   <td>“Apple”
   </td>
   <td>1
   </td>
  </tr>
  <tr>
   <td>“1”
   </td>
   <td>“3”
   </td>
   <td>“Banana”
   </td>
   <td>2
   </td>
  </tr>
</table>
## Perform Calculations
**It is possible to perform inline calculations when defining the schema:**<br/><br/>
If we define a table as:
```SQL
SELECT customer_id, purchase_id, product_name, 
      quantity:BIGINT * unit_price as total_cost:BIGINT
FROM Purchases
```
In the above query a calculated field is added to the table scheme.<br/><br/>
**It is also possible to first calculate the field and then just use it in the query:**
 ```SQL
SET total_cost = quantity:BIGINT * unit_price:BIGINT;
SELECT customer_id, purchase_id, product_name, total_cost
FROM Purchases
```