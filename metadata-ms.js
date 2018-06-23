const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});
const formidable = require("formidable");


app.get("/", (req, res) => {
  // PMT: curl http://localhost:5000
  return res.sendFile(__dirname + "/index.html");
});

app.post("/analyse-file", urlencodedParser, (req, res) => {
  // curl -d upfile=@curlTestFile http://localhost:5000/analyse-file
  let form = new formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {})
  return res.send("Process the file and output the metadata.")
});

app.listen(5000, () => console.log("Microservice running on port 5000"));

module.exports = app;