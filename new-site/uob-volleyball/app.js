"use strict";
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

//HTTPS Setup
var http = require('http');
var https = require('https');
var fs = require('fs');
var privateKey  = fs.readFileSync('security/selfsigned.key', 'utf8');
var certificate = fs.readFileSync('security/selfsigned.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};

//Banned paths
var banned = [];
banUpperCase('./public/', '');

//Express Setup
var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

//User session setup
var session = require('express-session');
app.use(session({
    secret: 'aSecretWord',
    resave: false,
    saveUninitialized: false
}))

//Make URLs lower case, ban upper case filenames, require authorisation for admin.html,
// and deliver static files from ./public.
app.use(lower);
app.use(ban);

// Handlebars and views setup
var hbs = require('express-handlebars');
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
var hbsHelperBuild = hbs.create({});

// register new handlebars helper
hbsHelperBuild.handlebars.registerHelper('json', function(content) {
  return JSON.stringify(content);
});

//Passport Setup
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var flash = require('connect-flash');
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(function(req, res, next) {
  res.locals.success_message = req.flash('success_message');
  res.locals.error_message = req.flash('error_message');
  res.locals.error = req.flash('error');
  next();
});

// Default calls
var options = { setHeaders: deliverXHTML };
app.use(express.static("public", options));

// Make the URL lower case.
function lower(req, res, next) {
    req.url = req.url.toLowerCase();
    next();
}

// Forbid access to the URLs in the banned list.
function ban(req, res, next) {
    for (var i=0; i<banned.length; i++) {
        var b = banned[i];
        if (req.url.startsWith(b)) {
            res.status(404).send("Filename not lower case");
            return;
        }
    }
    if(req.url.includes(' ')) {
        res.status(404).send("URL contains a space");
        return;
       }
    next();
}

// Called by express.static.  Deliver response as XHTML.
function deliverXHTML(res, path, stat) {
    if (path.endsWith(".html")) {
        res.header("Content-Type", "application/xhtml+xml");
    }
}

// Check a folder for files/subfolders with non-lowercase names.  Add them to
// the banned list so they don't get delivered, making the site case sensitive,
// so that it can be moved from Windows to Linux, for example. Synchronous I/O
// is used because this function is only called during startup.  This avoids
// expensive file system operations during normal execution.  A file with a
// non-lowercase name added while the server is running will get delivered, but
// it will be detected and banned when the server is next restarted.
function banUpperCase(root, folder) {
    var folderBit = 1 << 14;
    var names = fs.readdirSync(root + folder);
    for (var i=0; i<names.length; i++) {
        var name = names[i];
        var file = folder + "/" + name;
        if (name != name.toLowerCase()) banned.push(file.toLowerCase());
        var mode = fs.statSync(root + file).mode;
        if ((mode & folderBit) == 0) continue;
        banUpperCase(root, file);
    }
}

//Routes
var router = express.Router();
var index = require('./routes/index');
var login = require('./routes/login');
var shop = require('./routes/shop');
var admin = require('./routes/admin');
app.use('/', index);
app.use('/', login);
app.use('/', shop);
app.use('/', admin);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//HTTPS credentials
var credentials = {key: privateKey, cert: certificate};
var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080, "localhost");
httpsServer.listen(8081, "localhost");
console.log("Visit http://localhost:8080/ or  https://localhost:8081/");

module.exports = app;
