var express = require('express');
var app = express();
var cors = require('cors');
var dal = require('./dal')

// serve react app
const path = require("path");
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(cors());

// create user account

app.get('/create/:name/:email/:password', function (req, res) {
  dal.create(req.params.name, req.params.email, req.params.password)
    .then((user) => {
      console.log('from server create', user);
      res.send(user);
    });
});

// all accounts
app.get('/alldata', function (req, res) {
  dal.all()
    .then((docs) => {
      console.log('from alldata', docs);
      res.send(docs);
    });
});

var port = 5000;
app.listen(port);
console.log('listening in ', port);