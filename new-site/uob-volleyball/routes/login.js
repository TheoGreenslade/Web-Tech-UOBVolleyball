var express = require('express');
var router = express.Router();
var login_db = require('./login_db.js');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('database.db', sqlite3.OPEN_READWRITE, (err) => {
  if(err) {
    console.error(err.message);
  }
});



router.post('/register_user', function(req, res, next) {
    var email = req.body.registerEmail;
    var username = req.body.registerUsername;
    var password = req.body.registerPassword;
    
    var JSONUser = {
        email: email,
        password: password,
        username: username
    }
    
    login_db.addNewUser(JSONUser);  
    req.flash('success_message', 'Thank you for joining us!');
    
    res.render('login', {
        success_message: req.flash('success_message'),
        error_message: null,
        user: null
    });
});

/*router.post('/login_user', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.redirect('/login'); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.redirect('/');
    });
  })(req, res, next);
});*/

router.post('/login_user',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);

passport.use(new LocalStrategy({passReqToCallback: true, usernameField: 'loginEmail', passwordField: 'loginPassword'}, function(req, loginEmail, loginPassword, done) {
    console.log("Hello, " + loginEmail);
    
    login_db.selectUserByEmail(loginEmail, (error, user) => {
        console.log("Hello9");
        if(error) throw error;
        if(!user){
            req.flash('error_message', 'Unknown user');
            return done(null, false);
        }else{
            if(loginPassword == user.password) {
                console.log('Success');
                req.flash('success_message', 'Successfully logged in');
                return done(null, user);
            } else {
                req.flash('error_message', 'Incorrect password');
                return done(null, false);
            }
        } 
    }); 
}));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  login_db.selectUserById(id, function(error, user) {
      console.log('Hello');
    done(error, user);
  });
});


    
module.exports = router;