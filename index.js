///jshint esversion:6

const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const port = 3000;


app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});



app.post("/", function(req, res) {

  var newStr = req.body.sentance;
  // console.log(newStr);

  function reverseString(str) {
    var updatedString = "";
     var arrName = str.split('');
  var ptrIndex = 2;
    for (var i = ptrIndex; i < arrName.length ; i=i+3) {
        updatedString += arrName[i];
        
    }
  res.send("The result is:" + updatedString);
    return updatedString;
}


reverseString(newStr);
});

app.listen(3000, function() {
  console.log("Server is starrted!");
});



