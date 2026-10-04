import express from "express";
const app = express();
const port = 8080;
app.delete("/user", (req, res)=>{
    console.log("Delete request received");
res.json({
    message: "User deleted successfully"
});
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
