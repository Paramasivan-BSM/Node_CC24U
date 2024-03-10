const MongoDB = require("mongoose");
const UpdatingExistingBookList = async (req, res) => {
  const BooKModel = MongoDB.model("Books");
  await BooKModel.updateOne(
    {
      _id: "65e5dd83b864a99e00d321cd",
    },
    {
      Book_Name: req.body.Book_Name,
    }
  );

  res.json({
    Msg: BooKModel,
  });
};
module.exports = UpdatingExistingBookList;
