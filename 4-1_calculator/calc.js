const yargs = require("yargs");

//! Add command
yargs.command({
  command: "add",
  describe: "sum 2 numbers",
  builder: {
    a: {
      describe: "first val",
      demandOption: true,
      type: "number",
    },
    b: {
      describe: "sec val",
      demandOption: true,
      type: "number",
    },
  },
  handler: function (argv) {
    console.log(argv.a + argv.b);
  },
});
//! Subtract
yargs.command({
  command: "sub",
  describe: "subtract 2 numbers",
  builder: {
    a: {
      describe: "first val",
      demandOption: true,
      type: "number",
    },
    b: {
      describe: "sec val",
      demandOption: true,
      type: "number",
    },
  },
  handler: function (argv) {
    console.log(argv.a - argv.b);
  },
});
//! Multiply
yargs.command({
  command: "mult",
  describe: "multiply 2 numbers",
  builder: {
    a: {
      describe: "first val",
      demandOption: true,
      type: "number",
    },
    b: {
      describe: "sec val",
      demandOption: true,
      type: "number",
    },
  },
  handler: function (argv) {
    console.log(argv.a * argv.b);
  },
});
//!POW
yargs.command({
  command: "pow",
  describe: "power",
  builder: {
    a: {
      describe: "first val",
      demandOption: true,
      type: "number",
    },
  },
  handler: function (argv) {
    console.log(argv.a * argv.a);
  },
});

yargs.parse();
