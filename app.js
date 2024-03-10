const http = require("http");
const server = http.createServer((req, res) => {
  res.end("Hey Programmenr Your Server is Created Successfully!");
});
server.listen(8000, "localhost", () => {
  console.log("Server Listen is Done!");
});
