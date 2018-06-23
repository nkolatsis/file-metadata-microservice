const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.listen(5000, () => console.log("Microservice running on port 5000"));

module.exports = app;