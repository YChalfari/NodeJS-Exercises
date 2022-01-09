const fs = require("fs");

fs.writeFileSync("2.1.txt", "Works");
fs.copyFileSync("2.1.txt", "./copy/copy.txt");
fs.rename("./copy/copy.txt", "./copy/renamed-copy.text", (err) => {
  if (err) {
    console.log(err);
  }
});
fs.readdirSync("./").forEach((file) => console.log(file));
fs.readdirSync("./copy").forEach((file) => console.log(file));

//comment below to not delete the file
fs.unlinkSync("2.1.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully deleted");
  }
});
