const express = require("express");
const app = express();
const port = 5500;
app.get('/', (req, res) => {
  res.send("Hello developers! ya ma hun server");
});
app.listen(port, () => {
  console.log("Server is running on port 5500");
});
