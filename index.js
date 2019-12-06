var express = require("express");
var app = express();


app.use(express.static('public_html'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public_html/index.html');
});

app.get('/secret', function(req, res) {
    res.sendFile(__dirname + '/public_html/secret.html');
})

app.get('/conseils', function(req, res){
    res.sendFile(__dirname + '/public_html/conseils.html');
})

app.get('/ydkozjtotn', function(req, res) {
    res.sendFile(__dirname + '/public_html/ydkozjtotn.html')
})

app.get('/conseils', function(req, res){
    res.sendFile(__dirname + '/public_html/conseils.html');
})


app.get('/options', function(req, res){
    res.sendFile(__dirname + '/public_html/options.html');
})


app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/public_html/error.html');
})

app.listen(8080);
console.log("now listening on port 8080")
