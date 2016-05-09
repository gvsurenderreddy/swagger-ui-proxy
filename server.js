var express = require('express');
var request = require('request');

var app = express();

app.use(express.static(__dirname + '/dist'));

app.get('/json-api', function (req, res) {
    var url = process.env['API_ENDPOINT_URL'];
    res.set('Content-Type', 'application/json');
    console.log('Requesting Documentation JSON for ' + url);
    request.get(url).pipe(res);
});

console.log('Starting Server');
app.listen(8081, function() {
    console.log('Example app listening on port 8081!');
});
