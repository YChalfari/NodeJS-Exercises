const path = require("path");
const express = require("express");
const api = require("./api");
const app = express();
const axios = require("axios");

const pubDir = path.join(__dirname, "public");
const viewsPath = path.join(__dirname, "/views/templates");

app.use(express.static(pubDir));

app.set("view engine", "hbs");
app.set("views", viewsPath);

app.get("", (req, res) => {
  res.render("home", {
    // quote: quote,
    // // onClick: api.getQuote,
  });
});

app.get("/quote", (req, res) => {
  axios
    .get("http://ron-swanson-quotes.herokuapp.com/v2/quotes")
    .then((data) => {
      res.json(data.data);
    })
    .catch((err) => console.log(err));
});

app.listen(3000, () => {
  console.log("listening");
});
