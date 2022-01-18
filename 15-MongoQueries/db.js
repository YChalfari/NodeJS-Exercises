//! 1.1 query all
db.resaurants.find().pretty();

//! 1.2 query specific cuisine
db.restaurants.find({ cuisine: "asian" });

//! 1.3 query only  kosher
db.restaurants.find({ kosher: true });

//! 1.4 query specific cities
db.restaurants.find({ "address.city": "Holon" });

//! 1.5 query specific  address
db.restaurants.find({ "address.street": "Herzel 15" });

//! 1.6 query specific coordinates
db.restaurants.findOne({
  _id: ObjectId("61e53f5f29218b268cf19619"),
}).address.coordinates;

//! 1.7 query all rest sorted by  name ascending
db.restaurants.find().sort({ name: 1 }).pretty();

//! 1.8 query all rest sorted by  city ascending
db.restaurants.find().sort({ "address.city": 1 }).pretty();

//! 1.9 update specific rest name
db.restaurants.updateOne(
  { _id: ObjectId("61e53f5f29218b268cf19619") },
  { $set: { name: "THAILAND PARADISE" } }
);

//! 1.10 update specific rest and add new review
db.restaurants.updateOne(
  { _id: ObjectId("61e53f5f29218b268cf19619") },
  { $push: { reviews: { date: new Date(), score: 69 } } }
);

//! 1.11 update all rests to be kosher
db.restaurants.updateMany({ kosher: false }, { $set: { kosher: true } });

//! 1.12 delete a specific restaurant
db.restaurants.deleteOne({ _id: ObjectId("61e53f5f29218b268cf19619") });

//! 1.13 deletes all restaurants
db.restaurants.deleteMany({});

//? forEach
//! 2.1 print all rest names
db.restaurants.find().forEach((rest) => print(rest.name));

//! 2.2 print all rest cities
db.restaurants.find().forEach((rest) => print(rest.address.city));

//! 2.3 print all rest coords
db.restaurants.find().forEach((rest) => print(rest.address.coordinates));

//? 3 Advanced Queries
//! 3.1 query rest names start with a letter
db.restaurants.find({ name: /^b/i });

//! 3.2 query how many docs in rest collection
db.restaurants.find().count();

//! 3.3
db.restaurants.find({ "reviews.date": new Date("2020-01-01") });

//? Aggregation OPS
//! 4.1
db.restaurants.aggregate([
  {
    $project: {
      averageScore: { $avg: "$reviews.score" },
    },
  },
]);
//! 4.2
db.restaurants.aggregate([
  { $match: { _id: ObjectId("61e53f5f29218b268cf19619") } },
  { $unwind: "$reviews" },
  {
    $group: {
      _id: "$name",
      avgRating: { $avg: "$reviews.score" },
    },
  },
]);
