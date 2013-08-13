var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    response.send(readMessage());
});
    
var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log("Listening on " + port);
});

var readMessage = function() {
     var data = fs.readFileSync('index.html')
     return data.toString();
};
