const express = require("express");
const numbers = [1, 2, 3, 4, 5];
const app = express();
const PORT = 3000;

app.get("/numbers", (req, res) => {
  res.send(numbers);
});
app.post("/numbers", (req, res) => {
  numbers.push(req.body);
  res.send(numbers);
});
app.delete("/numbers/:num", (req, res) => {
  const index = numbers.indexOf(parseInt(req.params.num));
  console.log(index);
  numbers.splice(index, 1);
  res.send(numbers);
});
app.put("/numbers/:num/:replacement", (req, res) => {
  const index = numbers.indexOf(parseInt(req.params.num));
  numbers.splice(index, 1, parseInt(req.params.replacement));
  res.send(numbers);
});

app.listen(PORT, () => console.log("listening"));
