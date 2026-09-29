import express from "express";
const app = express();
const port = 8000;
app.get('/', (req, res) => {
  res.send("Hello World! ya bhi ma hun ap ka apna server ");
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:8000`);
});
