## 

## **Is Upsolver a streaming or a batch engine?**

**This one is a bit confusing.**

**Upsolver is a streaming first engine since every incoming event updates the current state.**

**When Upsolver reads a file from S3, every row is processed as if it was received from a stream.**

**                
**

**It’s common to think that streaming functionality is limited comparing to batch but that’s exactly the gap Upsolver is closing - like a database but for streams.**



## **How do I avoid vendor lock-in?**

**Upsolver connects data streams to data outputs. It replaces ETL code and data plumbing and it’s always possible to go back or choose another data platform.**

**Upsolver has no data copies outside S3.**

**Events are persisted to S3 using Apache Avro which is fully supported in other data platforms.**

## **I want to enrich my stream but I couldn’t find the function I need. What are my options?**

**Write custom code in Python or contact us at**[**support@upsolver.com**](mailto:support@upsolver.com)**and we will help as soon as we can.**

**                
**

