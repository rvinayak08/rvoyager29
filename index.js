var express = require('express');
var app = express();

app.get('/', function (req, res) {
    return res.send('<h1>Hello World</h1>');
})

var server = app.listen(12345, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})
