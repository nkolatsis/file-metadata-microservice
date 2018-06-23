const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.get("/", (req, res) => {
  return res.send("A form to submit the file.");
});

app.post("/analyse-file", urlencodedParser, (req, res) => {
  // curl -d upfile=@curlTestFile http://localhost:5000/analyse-file
  let file = req.body.upfile;
  return res.send("Process the file and output the metadata.")
});

app.listen(5000, () => console.log("Microservice running on port 5000"));

module.exports = app;