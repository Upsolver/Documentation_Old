# Aggregating Data

If during the creation of you output you selected that you would like to aggregate your data, the _Schema_ tab described in [Configuring Schema And Filters](/Outputs/configuring-schema-and-filters.md) will be slightly different and will allow you to aggregate your data before it's exported.

## Key Columns and Aggregations

To aggregate your data you must select the _key columns_ from your data which will be used to group your data. Each unique combination of values for your selected key columns will create it's own grouping.
**Note**: missing key values will create a new grouping with an empty value for that key.

Once you have selected your key columns you can add _Aggregations_, these will define how and what data to export for each key grouping.

### Adding Key Columns

1. Click _Add Key Column_.
2. Select the field you would like as a key column, or add a new [Calculated Field](/Functions/Calculated/README.md) to act as a key column.
3. Click _Select_ to add the key column.

### Adding Aggreagations

1. Click _Add Aggregation_.
2. Select one of the [aggregation functions](/Functions/aggregations.md).
3. Based on the function you selected you can fill in the input field/s for that function. You can see and example of how this function will aggregate data on the right hand side of the screen.
4. Once configured and named, click _Add_ to add this aggregation to your output.


### Deleting Key Columns or Aggregations

1. Click the "Trash Can" icon next to any key column or aggregation to remove it from this output.
