const mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "practise",
});

module.exports = connection;
