const express = require("express");
const app = express();
const PORT = 8080;

app.get("/minklo", (req, res) => {
  res.send("this is the minklo route!");
});

app.get("/yango/:id", (req, res) => {
    res.send("this is the yango route !");
});

app.get("/tinklo/:id/", (req, res) => {
    res.send("this is the tinklo rout !");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});