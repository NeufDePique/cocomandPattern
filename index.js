var express = require("express");
var app = express();


app.use(express.static('public_html'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public_html/index.html');
});

app.get('/secret', function(req, res) {
    res.sendFile(__dirname + '/public_html/secret.html');
})

app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/public_html/error.html');
})

app.listen(80);
console.log("now listening on port 8080")