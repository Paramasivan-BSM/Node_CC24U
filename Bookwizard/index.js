// const Express = require("express");
// const MongoDB = require("mongoose");
// const getBook = require("../Bookwizard/Handlers/Get");
// const PostBook = require("../Bookwizard/Handlers/Post");
// const PatchBook = require("../Bookwizard/Handlers/Patch");
// const DeleteBook = require("../Bookwizard/Handlers/Delete");
// const app = Express();
// app.use(Express.json());
// const Port = 1000;
// app.get("/", getBook);
// app.post("/Cbook", PostBook);
// app.patch("/ubook", PatchBook);
// app.delete("/dbook", DeleteBook);

// MongoDB.connect(
//   "mongodb+srv://Paramasivan:PBSMMONGODB@bookwizard.do7zju7.mongodb.net/BookRecord?retryWrites=true&w=majority&appName=BookWizard" ,{}
// )
//   .then(() => {
//     console.log("connection Successfull!");
//   })
//   .catch(() => {
//     console.log("Connection Failled!");
//   });
// require("./DBModule")

// app.listen(Port, "localhost", () => {
//   console.log("The Server Running Port At :" + Port);
// });
const Express = require("express");
const MongoDB = require("mongoose");
const getBook = require("../Bookwizard/Handlers/Get");
const PostBook = require("../Bookwizard/Handlers/Post");
const PatchBook = require("../Bookwizard/Handlers/Patch");
const DeleteBook = require("../Bookwizard/Handlers/Delete");
const app = Express();
app.use(Express.json());
const Port = 1000;

// Routes
app.get("/", getBook);
app.post("/Cbook", PostBook);
app.patch("/ubook", PatchBook);
app.delete("/dbook/:Book_id", DeleteBook);

// MongoDB Connection
MongoDB.connect(
  "mongodb+srv://Paramasivan:PBSMMONGODB@bookwizard.do7zju7.mongodb.net/BookDB?retryWrites=true&w=majority&appName=BookWizard",
  {}
)
  .then(() => {
    console.log("MongoDB connection successful!");
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error);
  });

require("./DBFile");

// Start Server
app.listen(Port, "localhost", () => {
  console.log("The server is running on port:", Port);
});
