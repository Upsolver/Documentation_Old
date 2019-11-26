# Filter a Stream Using The WHERE Clause

UpSQL enables filtering a stream using the WHERE clause as in the familiar ANSI SQL.

**For the following examples, we will assume that:**



1.  Three events stream into the data source `heartbeat` over time:

```

{ "user_id": 1, “device_id”: 1234, “epoch” : 1520672112456, “heart_rate” : 81}

{ "user_id": 2, “device_id”: 5567, “epoch” : 1520672112456, “heart_rate” : 79}

{ "user_id": 1, “device_id”: 1234, “epoch” : 1520672113456, “heart_rate” : 102}

```



2. Three events stream into data source `location` over time:

```

{“user_id”: 1, “epoch” : 1573034761, “latitude” : 28.545926, “longitude” : 31.577451}

{“user_id”: 2, “epoch” : 1573034761, “latitude” : 44.032321, “longitude” : 1.356295}

{“user_id”: 1, “epoch” : 1573035761, “latitude” : 28.545926, “longitude” : 31.577451}

```

**Example 1:**

The following query:

```SQL
SELECT * 
FROM heartbeat
WHERE heart_rate > 80
```

Results in the following output:


<table>
  <tr>
   <td>user_id
   </td>
   <td>device_id
   </td>
   <td>epoch
   </td>
   <td>heart_rate
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>1234
   </td>
   <td>1520672112456
   </td>
   <td>81
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>1234
   </td>
   <td>1520672113456
   </td>
   <td>102
   </td>
  </tr>
</table>


**Example 2:**

The following query:

```SQL
SELECT * 
FROM heartbeat
WHERE heart_rate > 79 AND heart_rate < 102 
```

Results in the following output:


<table>
  <tr>
   <td>user_id
   </td>
   <td>device_id
   </td>
   <td>epoch
   </td>
   <td>heart_rate
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>1234
   </td>
   <td>1520672112456
   </td>
   <td>81
   </td>
  </tr>
</table>


**Example 3:**

The following query:

```SQL
SELECT * 
FROM heartbeat
WHERE heart_rate > 79 OR user_id = 2 
```

Results in the following output:


<table>
  <tr>
   <td>user_id
   </td>
   <td>device_id
   </td>
   <td>epoch
   </td>
   <td>heart_rate
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>1234
   </td>
   <td>1520672112456
   </td>
   <td>81
   </td>
  </tr>
  <tr>
   <td>2
   </td>
   <td>5567
   </td>
   <td>1520672112456
   </td>
   <td>79
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>1234
   </td>
   <td>1520672113456
   </td>
   <td>102
   </td>
  </tr>
</table>