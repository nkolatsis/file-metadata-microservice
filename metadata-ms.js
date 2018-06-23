const express = require("express");
const app = express();
// const bodyParser = require("body-parser");
// const urlencodedParser = bodyParser.urlencoded({extended: false});
const formidable = require("formidable");


app.get("/", (req, res) => {
  return res.sendFile(__dirname + "/index.html");
});

app.post("/analyse-file", (req, res) => {
  let form = new formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    if (err) console.error(err);
    if (files.upfile != undefined) {
      let metadata = {
        name: files.upfile.name,
        type: files.upfile.type,
        size: files.upfile.size
      };
      return res.json(metadata);
    } else res.send("There was an error processing the file. Please try again.");
  });
});

app.listen(5000, () => console.log("Microservice running on port 5000"));

module.exports = app;