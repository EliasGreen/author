// server.js

// init project
var express = require('express');
var app = express();
const https = require('https');
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended: true
}));

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + '/app/index.html');
});

app.post('/givemedata', function(req, res) {
  https.get("https://api.themoviedb.org/3/discover/movie?api_key=YOURKEY&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1", (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data).results.length);
    res.json(JSON.parse(data).results);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
});



var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});