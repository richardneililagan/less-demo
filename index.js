var express = require('express'),
    app = express()
    ;

app.use('/', express.static(__dirname + 'pub/'));

app.listen(8080, function () {
    console.log('App listening at port 8080.');
});