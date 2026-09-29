const express = require("express");
const app = express();
const port = 5000;
app.get('/', (req, res) => {
  res.send("Hello World! ya ma ho server jo k 5000 port pr run ho raha hun.");
});
app.listen(port, () => {
  console.log("Server is running on port 5000");
});
