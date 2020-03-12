// jshint esversion: 6

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');


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
  // var dayToday = today.getDay();

  var options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  var date = today.toLocaleDateString("ja-JA", options);
  // res.send(date);

  res.render('list', { dateToday: date});

  // if (dayToday == 0 || dayToday == 6) {
  //   // res.send("It's a weekend!");
  //   res.sendFile(__dirname + "/weekend.html");
  // } else {
  //   // res.send("Today is a weekday, get to work!");
  //   res.sendFile(__dirname + "/weekday.html");
  // }
});



app.listen(3000, () => {
  console.log("Server started on port 3000");
});
