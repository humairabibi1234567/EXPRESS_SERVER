const express = require("express");
const app = express();
const port = 8080;
app.get('/', (req, res) => {
  res.send('Hello dev world! ya ma ho server jo k 8080 port pr run ho raha hun.');
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:8080`);
});
