const { ObjectID } = require("bson");
const { MongoClient, Timestamp } = require("mongodb");
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "blog";

// const validateUsers = (userstoAdd,usersDB) =>{
//   users.forEach(user => {
//     if (user.pw) {

//   }})
// }
// const addUser = (user) => {

// }
MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  async (err, client) => {
    if (err) {
      return console.log("unable  to connect");
    }
    const db = client.db(databaseName);
    const users = [
      { name: "Timmy", password: "1234" },
      { name: "Jimmy", password: "1234" },
    ];
    const posts = [
      {
        userID: ObjectID("61e53f5f29218b268cf19619"),
        time: new Timestamp(),
        title: "First post",
        body: "Blah  blah blahh",
      },
      {
        userID: ObjectID("61e53f5f29218b268cf19619"),
        time: new Timestamp(),
        title: "Second post",
        body: "Blah  blah blahh",
      },
    ];
    const comment = {
      userID: ObjectID("61e53f5f29218b268cf19619"),
      body: "cool post",
      time: new Timestamp(),
    };
    await db
      .collection("users")
      .insertMany(users, (err, res) =>
        err ? console.log(err) : console.log(res, res.ops)
      );
    await db
      .collection("posts")
      .insertMany(posts, (err, res) =>
        err ? console.log(err) : console.log(res, res.ops)
      );
    await db
      .collection("comments")
      .insertOne(comment, (err, res) =>
        err ? console.log(err) : console.log(res, res.ops)
      );
  }
);
