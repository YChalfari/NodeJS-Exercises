const express = require("express");
require("./db/mongoose");
const Product = require("./models/product");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (err) {
    res.status(500).send(err);
  }
});
app.get("/products/filter/active", async (req, res) => {
  try {
    const products = await Product.find({ isActive: true });
    if (!products) {
      return res.status(404).send({ message: "No active products" });
    }
    res.send(products);
  } catch (err) {
    res.status(500).send(err);
  }
});
// res.status(401).send("Please provide a min and max range");
app.get("/products/filter/price-range", async (req, res) => {
  try {
    if (!req.body.min || !req.body.max) {
      throw Error("Blah blah error");
    }
    const min = req.body.min;
    const max = req.body.max;
    const product = await Product.find({
      $and: [
        { "details.price": { $gte: min } },
        { "details.price": { $lte: max } },
      ],
    });
    res.status(200).send(product);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).send({ message: "No product found" });
    }
    res.send(product);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.post("/products", async (req, res) => {
  try {
    const product = new Product(req.body);
    const addedProd = await product.save();
    res.send(product);
  } catch (err) {
    res.status(400).send(e.message);
  }
});

app.listen(port, () => console.log(`listening on port ${port}`));
