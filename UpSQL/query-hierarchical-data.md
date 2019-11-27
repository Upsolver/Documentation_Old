# **Query Hierarchical Data**
UpSQL enables to query hierarchical data. See [UpSQL syntax reference](https://docs.upsolver.com/UpSQL/upsql-syntax-reference.html) for syntax definition under "Hierarchical data" section.

For the following examples, we will assume that three events stream into the data source `Purchases` over time:

```JSON
{ "purchase_id": 1, "customer_id": 1, "products": [ { "name": "Orange", "quantity": 3, "unit_price": 0.25 }, { "name": "Banana", "quantity": 4, "price": 0.1 } ] }
{ "purchase_id": 2, "customer_id": 1, "products": [ { "name": "Apple", "quantity": 1, "unit_price": 0.5 } ] }
{ "purchase_id": 1, "customer_id": 1, "products": [ { "name": "Orange", "quantity": -2, "unit_price": 0.25 } ] }
```


## **Using Nested Fields In Group By Statement**

With UpSQL, accessing nested fields in hierarchical data is simple and intuitive.

Fields in nested records can be accessed using the dot syntax. 

If a field is in an array, we use square braces `[]` to denote that.

Let’s have a look at the following query:

```SQL
SELECT customer_id,
       products[].name product_name,
       products[].quantity * products[].unit_price total_cost
  FROM Purchases
 GROUP BY customer_id, products[].name
```

The result will be:

<table>
  <tr>
   <td>customer_id
   </td>
   <td>product_name
   </td>
   <td>total_cost
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>Orange
   </td>
   <td>0.25
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>Banana
   </td>
   <td>0.4
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>Apple
   </td>
   <td>0.5
   </td>
  </tr>
</table>


## **Calculations on Hierarchical data**

When doing calculations on Hierarchical data, the result is placed back in the nested hierarchy. 

This "target location" affects how an operation works when dealing with arrays.

**Example 1**:

The following query:

```SQL
SET products[].total_cost = products[].quantity * products[].unit_price;
SET number_of_purchased_products = SUM_VALUES(products[].quantity);
```

Results in the following output:

```
{ 
    "purchase_id": 1, "customer_id": 1, “number_of_purchased_products”: 7, 
    "products": 
    [ 
        { "name": "Orange", "quantity": 3, "unit_price": 0.25, “total_cost”: 0.75 }, 
        { "name": "Banana", "quantity": 4, "price": 0.1, “total_cost”: 0.4 } 
    ]
}
{ 
    "purchase_id": 2, "customer_id": 1, “number_of_purchased_products”:1, 
    "products": 
    [ 
        { "name": "Apple", "quantity": 1, "unit_price": 0.5, “total_cost”: 0.5 } 
    ]
 }
{ 
    "purchase_id": 1, "customer_id": 1, “number_of_purchased_products”: -2, 
    "products": 
    [    
        { "name": "Orange", "quantity": -2, "unit_price": 0.25, “total_cost”: -0.5 } 
    ] 
}
```

Note that `total_cost` resulted in an array but `number_of_purchased_products` didn't. 

This is because some operations like SUM_VALUE return a single value, regardless of how many inputs they have.

Inline operations use the deepest possible location in the nesting as their target location.

**Example 2:**

```SQL
SET product_indexes = MAP_WITH_INDEX(products[]);
```

Results in the following data:

```
{ 
    "purchase_id": 1, "customer_id": 1, 
    “product_indexes”: 
    [ 
        {“index”: 0, "name": "Orange", "quantity": 3, "unit_price": 0.25}, 
        {“index”: 1, "name": "Banana", "quantity": 4, "price": 0.1} 
    ],
    "products": 
    [ 
        { "name": "Orange", "quantity": 3, "unit_price": 0.25}, 
        { "name": "Banana", "quantity": 4, "price": 0.1} 
    ]
}
{ 
    "purchase_id": 2, "customer_id": 1,
    “product_indexes”: 
    [
        “index” : 0, "name": "Apple", "quantity": 1, "unit_price": 0.5} 
    ],
    "products": 
    [ 
        { "name": "Apple", "quantity": 1, "unit_price": 0.5} 
    ]
}
{ 
    "purchase_id": 1, "customer_id": 1,
    “product_indexes”: 
    [
        {“index” : 0, "name": "Orange", "quantity": -2, "unit_price": 0.25} 
    ],
    "products": 
    [ 
        { "name": "Orange", "quantity": -2, "unit_price": 0.25} 
    ] 
}
```

**Example 3:**

The following query:

```SQL
SET products_quantity = FROM_KEY_VALUE(products[].name, products[].quantity, “name,quantity” );
```

Results in the following data:

```
{ 
    "purchase_id": 1, "customer_id": 1, 
    "products": 
    [ 
        { "name": "Orange", "quantity": 3, "unit_price": 0.25}, 
        { "name": "Banana", "quantity": 4, "price": 0.1} 
    ],
    “products_quantity”: 
    [
        {“Orange”: 3},
        {“Banana”: 4}
    ]
}
{ 
    "purchase_id": 2, "customer_id": 1,
    "products": 
    [ 
        { "name": "Apple", "quantity": 1, "unit_price": 0.5} 
    ],
    “products_quantity”
    [
    	{“Apple”: 1}
    ]
}
{ 
    "purchase_id": 1, "customer_id": 1,
    "products": 
    [ 
        { "name": "Orange", "quantity": -2, "unit_price": 0.25} 
    ],
    “products_quantity”:
    [
    	{“Orange”: -2}
    ] 
}
```

**Example 4:**

The following query:

```SQL
SET indexed_products = ZIP(products);
```
Results in the following data:

```
{ 
    "purchase_id": 1, "customer_id": 1, 
    "products": 
    [ 
        { "name": "Orange", "quantity": 3, "unit_price": 0.25}, 
        { "name": "Banana", "quantity": 4, "price": 0.1} 
    ],
    “indexed_products”:
    [
        {
            “index”: 0, 
            “field_1”: { "name": "Orange", "quantity": 3, "unit_price": 0.25}
        }, 
        {	
            “index”: 1,
            “field_1”: { "name": "Banana", "quantity": 4, "price": 0.1} 
        }
    ]
}
{ 
"purchase_id": 2, "customer_id": 1**, **
"products": 
    [ 
        { "name": "Apple", "quantity": 1, "unit_price": 0.5} 
    ],
    “indexed_products”:
    [
        {
            “index”: 0,
    	    “field_1”: { "name": "Apple", "quantity": 1, "unit_price": 0.5} 
        }
    ]
}
{ 
    "purchase_id": 1, "customer_id": 1**,** 
    "products": 
    [ 
        { "name": "Orange", "quantity": -2, "unit_price": 0.25} 
    ],
    “Indexed_products”:
    [
        {
            “index”: 0,
            “field_1”: { "name": "Orange", "quantity": -2, "unit_price": 0.25} 
        }
    ]
}
```
