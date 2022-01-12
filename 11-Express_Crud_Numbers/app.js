const express = require("express");
const numbers = [1, 2, 3, 4, 5];
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.text());
app.get("/numbers", (req, res) => {
  res.send(numbers);
});
app.post("/numbers", (req, res) => {
  if (numbers.includes(parseInt(req.body.num))) {
    res.status(400).send("Number already exists");
  } else {
    numbers.push(parseInt(req.body.num));
    res.send(numbers);
  }
});
app.delete("/numbers/:num", (req, res) => {
  const index = numbers.indexOf(parseInt(req.params.num));
  if (index === -1) {
    res.status(404).send("Not Found");
  } else {
    numbers.splice(index, 1);
    res.send(numbers);
  }
});
app.put("/numbers/:num", (req, res) => {
  const index = numbers.indexOf(parseInt(req.params.num));
  if (index !== -1 && req.body.num) {
    numbers.splice(index, 1, parseInt(req.body.num));
    res.send(numbers);
  } else {
    res.send("Please enter an existing number and a replacement");
  }
});
//!  using 2 params
// app.put("/numbers/:num/:replacement", (req, res) => {
//   const index = numbers.indexOf(parseInt(req.params.num));
//   numbers.splice(index, 1, parseInt(req.params.replacement));
//   res.send(numbers);
// });
//! can also use queries or just add another key value to the req.body

app.listen(PORT, () => console.log("listening"));
