const express = require('express');
const path = require('path');

const app = express();

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/homepage.html'));
});

app.get('/kitchen', function(req, res) {
  res.send('You are now in the kitchen');
})

app.get('/living-room', function(req, res) {
  res.send('You are now in the living room');
})

app.get('/family-room', function(req, res) {
  res.send('You are now in the family room');
})

app.get('/bathroom', function(req, res) {
  res.send('You are now in the bathroom');
})

app.get('/closet', function(req, res) {
  res.send('You are now in the closet');
})

app.listen(3000, function() {
  console.log('The server started on port 3000');
})