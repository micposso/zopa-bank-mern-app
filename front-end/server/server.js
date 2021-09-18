var express = require('express');
var app = express();
var cors = require('cors');

// serve react app
const path = require("path");
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(cors());

// create user account

app.get('/account/create/:name/:email/:password', function (req, res) {
  res.send({
    name: req.params.name,
    email: req.params.email,
    password: req.params.password
  });
});

var port = 5000;
app.listen(port);
console.log('listening in ', port);