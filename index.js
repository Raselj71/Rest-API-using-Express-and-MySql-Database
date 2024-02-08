const port = require("./Config/config");
const connection = require("./Config/db");
const app = require("./app");

app.listen(port, () => {
  connection.connect();

  console.log(`your server is running at http://localhost:${port}`);
});
