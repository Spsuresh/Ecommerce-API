const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://spsuri777:Spsuresh97@cluster0.ei1xgab.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

module.exports = db;
