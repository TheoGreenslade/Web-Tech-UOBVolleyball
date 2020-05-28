"use strict"
/*global require*/
/*global console*/
/* eslint no-console: "off" */

/*
//var app = express();

// view engine setup
app.set('views', path.join(__dirname, "views"));
app.set("view engine", "hbs");
*/

//Loads the express module
var express = require('express');

var path = require('path');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('express-handlebars');

var routes = require('./routes/index');

//Creates our express server
var app = express();
var port = 3000;
var handlebars = require('express-handlebars');
//Sets a basic route

app.engine('handlebars', handlebars({
    layoutsDir: __dirname + '/views/layouts',
}));

app.set('view engine', 'handlebars');

//Serves static files (we need it to import a css file)
app.use(express.static('public'));

function render(req, res) {
    res.render('index');
   // res.render('main', {layout : 'index'); This renders layout first and then main on top of it
}
app.get('/', render);



//Makes the app listen to port 3000
function showPort() {
    console.log('App listening to port ' + port);
}
app.listen(port, showPort);

