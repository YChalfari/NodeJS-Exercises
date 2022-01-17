const request = require("request");
const key = "00f4ee2885844beb2a28996062fa8187";
const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=${key}&query=${latitude},${longitude}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        " It is currently " +
          body.current.temperature +
          " degress out. There is a " +
          body.current.precip +
          "% chance of rain."
      );
    }
  });
};

module.exports = forecast;
