// jshint esversion: 6

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

// app.get("/", (req, res) => {
// var a = 3;
// var b = 5;
// var add = a + b;
// console.log(add);
// });


app.get("/", (req, res) => {

  var today = new Date();
  // console.log(today.getDay());
  var dayToday = today.getDay();

  if (dayToday == 0 || dayToday == 6) {
    res.send("It's a weekend!");
  } else {
    res.send("Today is a weekday");
  }
});



app.listen(3000, () => {
  console.log("Server started on port 3000");
});
