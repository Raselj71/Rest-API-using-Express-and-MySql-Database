# Rest API Using Mysql and node js
### Database connection

```const mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "practise",
});
```
You must use your database host, username, password, and name.
## Get Request
To get all of the data you have to hit this URL ``` /user ``` route as a get request
## Post Request
To add data you have to hit this URL ``` /user ``` as a post request and also add data in the request body as a JSON format
## Delete Request
To delete data you have to hit this URL as delete request``` /user/:id ``` This means you have to pass an id as a param suppose ```user/3```. According to ID, data will be deleted
## Put Request
To update user information you have to hit this URL as a PUT Request ```/user/:id ```. Here id will work as our targeted user and you have to also pass user update information in the request body. 

