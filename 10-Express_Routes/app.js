const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`success using ${req.method}`);
});
app.post("/", (req, res) => {
  res.send(`success using ${req.method}`);
});
app.put("/", (req, res) => {
  res.send(`success using ${req.method}`);
});
app.delete("/", (req, res) => {
  res.send(`success using ${req.method}`);
});

app.listen(PORT, () => console.log("listening"));
