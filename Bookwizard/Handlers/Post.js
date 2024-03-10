const MongoDB = require("mongoose");
const CreateBook = async (req, res) => {
  const BookModel = MongoDB.model("Books");
  await BookModel.create({
    Book_Name: req.body.Book_Name,
    Book_price: req.body.Book_price,
  });

  console.log(req.body);
  res.send("create Book ");
};

module.exports = CreateBook;

// const PostCTS = async (req, res) => {
//   // res.send("Added New Book Successfull!");
//   // console.log(req.body);
//   const BookModel = mongoose.model("BOOKLIST");
//   await BookModel.create({
//     Book_Name: req.body.Book_Name,
//     Book_Author: req.body.Book_Author,
//     Book_Rating: req.body.Book_Rating,
//     Book_Year: req.body.Book_Year,
//   });
//   res.json({
//     status: "Success",
//     msg: "Book Creation is Done!",
//   });
// };
// module.exports = PostCTS;

// const PostCTS = async (req, res) => {
//   try {
//     const BookModel = mongoose.model("BOOKLIST");
//     await BookModel.create({
//       Book_Name: req.body.Book_Name,
//       Book_Author: req.body.Book_Author,
//       Book_Rating: req.body.Book_Rating,
//       Book_Year: req.body.Book_Year,
//     });
//     res.json({
//       status: "Success",
//       msg: "Book Creation is Done!",
//     });
//   } catch (error) {
//     console.error("Error creating book:", error);
//     res.status(500).json({
//       status: "Error",
//       msg: "Failed to create book",
//       error: error.message, // Optionally send the error message back to the client for debugging
//     });
//   }
// };

// module.exports = PostCTS;
