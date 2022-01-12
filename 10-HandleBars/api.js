const axios = require("axios");

const url = "http://ron-swanson-quotes.herokuapp.com/v2/quotes";

const getQuote = function () {
  axios
    .get(url)
    .then((res) => {
      return res.data[0];
    })
    .catch((err) => console.log(err));
};

module.exports = { getQuote };
