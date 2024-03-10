const MongoDB = require("mongoose");
const Bookschema = new MongoDB.Schema({
  Book_Name: {
    type: String,
  },
  Book_price: {
    type: Number,
  },
});

let BookModel = MongoDB.model("Books", Bookschema);
module.exports = BookModel;
