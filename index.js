var express = require('express'),
    app = express()
    ;

app.use('/a', express.static(__dirname + '/pub'));

app.get('/', function (req, res) {
    res.sendfile('./pub/index.html');
});

app.listen(8080, function () {
    console.log('App listening at port 8080.');
});