var express = require("express");
var app = express();


app.use(express.static('public'));

app.get('/', function(req, res) {  
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(8080);
console.log("now listening on port 8080")
