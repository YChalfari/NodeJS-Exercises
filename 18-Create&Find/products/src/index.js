const express = require("express");
require("./db/mongoose");
const Product = require("./models/product");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/products", (req, res) => {
  Product.find()
    .then((response) => res.send(response))
    .catch((err) => res.status(500).send(err));
});
app.get("/products/filter/active", (req, res) => {
  Product.find({ isActive: true })
    .then((response) => {
      if (!response) {
        return res.status(404).send({ message: "No active products" });
      }
      res.send(response);
    })
    .catch((err) => res.status(500).send(err));
});

app.get("/products/filter/price-range", (req, res) => {
  if (!req.body.min || !req.body.min) {
    throw Error("Please provide a min and max range");
  }
  const min = req.body.min;
  const max = req.body.max;
  Product.find({
    $and: [
      { "details.price": { $gte: min } },
      { "details.price": { $lte: max } },
    ],
  })
    .then((response) => {
      console.log(response);
      res.send(response);
    })
    .catch((err) => res.status(500).send(err));
});

app.get("/products/:id", (req, res) => {
  Product.findById(req.params.id)
    .then((product) => {
      if (!product) {
        return res.status(404).send({ message: "No product found" });
      }
      res.send(product);
    })
    .catch((err) => res.status(500).send(err.message));
});

app.post("/products", (req, res) => {
  const product = new Product(req.body);
  product
    .save()
    .then(() => res.send(product))
    .catch((e) => res.status(400).send(e.message));
});

app.listen(port, () => console.log(`listening on port ${port}`));
