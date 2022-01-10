// const validator = require("validator");
// const chalk = require("chalk");
const yargs = require("yargs");
const userFuncs = require("./users.js");

// //!Create Add command
//Now when running "node app.js add" in the command line
//yargs will see  the command was "add" and will run the handler
yargs.command({
  command: "add",
  describe: "Create a user",
  builder: {
    email: {
      describe: "email",
      demandOption: true,
      type: "string",
    },
    name: {
      describe: "name",
      demandOption: true,
      type: "string",
    },
    password: {
      describe: "password",
      demandOption: false,
      type: "string",
    },
  },
  handler: function (argv) {
    userFuncs.addUser(argv.email, argv.name, "users.json");
  },
});
// //!Create Remove command
yargs.command({
  command: "remove",
  describe: "remove a user",
  builder: {
    id: {
      describe: "user id",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log(argv);
    userFuncs.removeUser(argv.id, "users.json");
  },
});
// //!Create List command
yargs.command({
  command: "list",
  describe: "list users",
  handler: function (argv) {
    userFuncs.listUsers("users.json");
  },
});
// //!Create read command
yargs.command({
  command: "read",
  describe: "read a user",
  builder: {
    id: {
      describe: "user id",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    userFuncs.readUser(argv.id, "users.json");
  },
});

yargs.parse();
