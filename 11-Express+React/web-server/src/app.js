const path = require("path");
const express = require("express");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const app = express();

// Define paths for Express config

// Setup handlebars engine and views location

// Setup static directory to serve
// app.use(express.static(publicDirectoryPath));

app.get("/weather", (req, res) => {
  console.log(req.query);
  if (!req.query.address) {
    return res.send({
      error: "You must provide an address!",
    });
  }

  geocode(
    req.query.address,
    (error, { latitude, longitude, location } = {}) => {
      if (error) {
        return res.send({ error });
      }

      forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
          return res.send({ error });
        }

        res.send({
          forecast: forecastData,
          location,
          address: req.query.address,
        });
      });
    }
  );
});

app.listen(3001, () => {
  console.log("Server is up on port 3001.");
});
