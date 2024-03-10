const MongoDB = require("mongoose");
const BookModel = require("../DBFile");
const DeletBook = async (req, res) => {
  const BooKModel = MongoDB.model("Books");
  res.send("Deleted Book Successfully!");
  console.log(req.params);
  await BookModel.deleteOne({
    _id: req.params.Book_id,
  });
};
module.exports = DeletBook;
