# Running An Output

To start running your output after you have [configured it](/outputs/configuring-schema-and-filters.md), follow the following steps: 

1. In the output's page click _Run_.
2. In the _Compute Environment_ drop down menu select the [compute cluster](/clusters/compute-cluster.md) you would like to run this output on. If you have not created a compute cluster yet you can create one from this menu.
3. In the _Batch Size_ field select the interval you would like you batch files to be. The smallest batch interval is 1 minute.
4. In the _Starting From_ field select when you would like to start exporting data from. Only events with a processing time after or at the _Starting From_ will be exported. Your options are:
 * Data Source Beginning - This will start exporting from the time your [data source](/DataSources.md) was created.
 * Now - Start exporting data from the current time.
 * Custom - Select the time you would like to start from in the fields bellow.
5. In the _Ending At_ field you can select a time that events with a _processing time_ after that time will no longer be exported. Your options are:
 * Never - Export all events.
 * Now - Don't export events received after the current time. 
 * Custom - Select the time you would like  in the fields bellow.
6. Click _Deploy_ to start running your output.

## Stopping A Running Output

To Stop a running output simply click _Stop_ on the output's page and then confirm the stop. You may start and stop an output as much as you would like.