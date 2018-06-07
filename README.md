# LNL Lambda

Demonstration of a serverless Lambda function for SolDevelo L&L. It returns
names from a PostgreSQL database (init script included in the sql directory). 

To build run:

```bash
npm install
npm predeploy
```

Upload the zip to the Lambda function.

Database connection url (including username & password) needs to be set as
the `CONNECTION_STRING` environment variable.