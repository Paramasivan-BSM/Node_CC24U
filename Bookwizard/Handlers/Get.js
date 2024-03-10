const MongoDB = require("mongoose");
const GetBookInfo = async (req, res) => {
  const BooKModel = MongoDB.model("Books");

  const FetchedBooks = await BooKModel.find({});

  res.json({
    data: FetchedBooks,
  });

  // res.send(
  //   "Welcome To The BookWizard, Search Your Favorite Book And Read And Be Happy"
  // );
};
module.exports = GetBookInfo;
