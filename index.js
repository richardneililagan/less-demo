var express = require('express'),
    app = express()
    ;

app.use('/a', express.static(__dirname + '/pub'));

app.get('/', function (req, res) {
    res.sendfile('./pub/index.html');
});

require('http').createServer(app).listen(process.env.PORT || 8080, function () {
    console.log('App listening at port 8080.');
});