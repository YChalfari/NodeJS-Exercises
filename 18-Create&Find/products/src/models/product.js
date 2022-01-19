const mongoose = require("mongoose");
const validator = require("validator");

const Product = new mongoose.model("Product", {
  name: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
  },
  details: {
    description: {
      type: String,
      minLength: 10,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    discount: {
      type: Number,
      required: false,
      default: 0,
    },

    images: {
      type: [String], //Array of strings
      required: false,
      minItems: 2,
    },
    phone: {
      type: String,
      required: true,
      validate(val) {
        if (!validator.isMobilePhone(val, "he-IL")) {
          throw Error("Must be valid Israeli phone number");
        }
      },
    },
    DateAdded: {
      type: Date,
      default: Date.now(),
      // default: new Date(),
    },
  },
});

module.exports = Product;
