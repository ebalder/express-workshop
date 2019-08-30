var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = require('./routes')();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');
app.use(express.static('public'));

app.use(router);

app.listen(3000, function(){
    console.log('There ya go!');
});
