# Troubleshooting

## Elastic IPs Limit Reached

Before deploying a Cluster to your Private VPC, Upsolver allocates Elastic IPs
to make sure that servers are discoverable. For API and Query clusters this is
mandatory,

For Compute Clusters, this is optional and can be edited from the UI by 
navigating to the Compute Cluster, clicking on the caret next to the "Stop" 
button, clicking on "Edit" and then un-checking the "Elastic IPs" checkbox. 
Please note that when the "Elastic IPs" option is off, external resources
(e.g. Redshift or Elasticsearch) will not be able to recognize the Compute
Cluster servers by their IPs.

For Compute or Query Clusters that have Auto Scaling turned on, Upsolver will
allocate Elastic IPs for that cluster according the maximum number of servers.

For Compute clusters that have additional processing units for replay, Upsolver
will allocate Elastic IPs for those processing units as well.

The number of Elastic IPs that an account in AWS can allocate is limited per 
region. You can raise the limit of Elastic IPs by sending [a request to Amazon
Web Services via this form](https://console.aws.amazon.com/support/v1#case/create?issueType=service-limit-increase&limitType=service-code-elastic-ips-ec2-classic&serviceLimitIncreaseType=elastic-ips&type=service_limit_increase): 
In the Limit Type, select "Elastic IPs" and choose the relevant region.

In case that Upsolver will not be able to allocate Elastic IPs because the 
limit is exceeded, a notification will pop up that will link you to this page.