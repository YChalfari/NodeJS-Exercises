const http = require("http");
const url = "http://ron-swanson-quotes.herokuapp.com/v2/quotes";

http.get(url, (res) => {
  res.setEncoding("utf8");
  let rawData = "";
  res.on("data", (chunk) => {
    rawData += chunk;
  });
  res.on("end", () => {
    try {
      const parsedData = JSON.parse(rawData);
      console.log(parsedData[0]);
    } catch (err) {
      console.log(err.message);
    }
  });
});
