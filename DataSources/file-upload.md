# File Upload

The "File Upload" [Data Source](/DataSources.md) is mainly intended to be used as a tool for developing your data flow. It is a quick and easy way to get data into Upsolver so you can start using it to build your flow and test the system.

## Creating A New File Upload Data Source

1. On the "Data Sources" page select _Add New Data Source_
2. Select File Upload
3. You can now browse for the file you would like to upload or drag it into the designated spot

   1.  The content format will be automatically detected based on the file name extension. If the file name does not contain an extension, or it does not match the actual file content, be sure to manually set the _Content Format_ field.

      Note: Uploading zip files with multiple files of the same type inside is also supported.

4. Give your Data Source a name by filling in the _Name_ text-box, you can also optionally provide a description for this Data Source in the _Description_ text-box.

5. Click _Create_ and you will be taken to the [Data Source Discovery](/DataSources/data-source-discovery.md) page for the new Data Source you just created. Within a few seconds you should see the data from the files you just uploaded.

## CSV

If you choose to upload a CSV file please **be sure to include a header row** in the file and make sure there are no duplicate column names, the header names will become the names of the fields in the generated schema.

