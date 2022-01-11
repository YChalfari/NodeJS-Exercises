const axios = require("axios");
const request = require("request");
const superagent = require("superagent");

const url = "https://api.fbi.gov/wanted/v1/list";

axios
  .get(url)
  .then((res) => console.log(res.data.items[0].title))
  .catch((err) => console.log(err));

request({ url, json: true }, (err, res, body) => {
  if (err) {
    return console.log(err);
  }
  console.log(res.body.items[0].title);
  console.log(body.items[0].title);
});

superagent.get(url).then((res) => console.log(res.body.items[0].title));
