# Authentication

The API Supports two authentication methods: the first one is to authenticate using your user credentials (used by the UI, not recommended for programmatic use of the API) and the second one uses Authentication Tokens that can be created and revoked for any reason.

## Authenticating using user credentials

To Authenticate using your credentials, simply send two headers: 

* `x-api-email: YOUR_EMAIL_HERE`
* `x-api-password: YOUR_PASSWORD_HERE`

Note that authenticating using this method is not recommended due to security reasons. Use this method only to create Authentication Tokens.

## Creating an Authentication Token

To create an Authentication Token, send a POST request to `/api-tokens` with the name and description of the Api Token, for example: 

```bash
curl --request POST \
 --url https://api.upsolver.com/api-tokens/ \
 --header 'content-type: application/json' \
 --header 'x-api-email: YOUR_EMAIL_HERE' \
 --header 'x-api-password: YOUR_PASSWORD_HERE' \
 --data '{
    "displayData": {
        "name": "Data Sources Bot API Token",
        "description": "API Token used by the bot to create Data Sources"
    }
}'
```

Fill your email and password in the headers.

The response should look like this: 

```json
{
  "id": "12345678-1234-1234-1234-1234567890ab",
  "organizationId": "12345678-1234-1234-1234-1234567890ab",
  "displayData": {
    "name": "Data Sources Bot API Token",
    "description": "API Token used by the bot to create Data Sources",
    "statusMessage": "ok",
    "statusType": "ok",
    "creationTime": "2018-11-01T12:09:27.971Z",
    "createdBy": "Documentation Bot (docs@upsolver.com)"
  },
  "apiToken": "abc12345678901234567890123456789",
  "createdBy": "docs@upsolver.com"
}
```

Copy the `apiToken` field and save it in a secret place. Authentication Tokens can't be restored, so if you lost it you will need to create a new one.

Then every request should have a header "Authorization" with your token, for example, in my case : 

```bash
curl --request GET 
 --url https://api.upsolver.com/inputs/ 
 --header 'authorization: abc12345678901234567890123456789'
```
