const express = require("express");
const path = require("path");
const app = express();

console.log(path.join(__dirname, "public"));
app.get("/", (req, res) => {
  //   res.send({ message: "Hello WWW!" });
  res.sendFile(`${__dirname}/public/index.html`);
  console.log("in hompage, received get request");
});

app.listen(3333, () => {
  console.log("server is running on port 3333");
});

app.use(express.static(path.join(__dirname, "public")));
