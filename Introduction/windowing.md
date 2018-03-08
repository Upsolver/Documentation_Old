# Windowing

Upsolver is a streaming first data platform. In order to perform computations outside the context of one event, windows are necessary to decide which part of the infinite stream is relevant to the query. There are a few types of windows:

## Sliding time windows

Most common and easy to define - aggregate over all events received in the last X days/hours/minutes. Time windows in Upsolver always slide every minute, so if you define a three week window, it will reference data up to three weeks from the event being processed, accurate to the minute.

Unlike streaming analytics platforms, Upsolver Streams stores the query results in-memory and the raw event data on S3. Therefore, it's possible to create sliding time windows of any size.

![](/assets/One minute time window.png)![](/assets/one year time window.png)

## Session windows

Coming soon

## Tumbling window

Coming soon

