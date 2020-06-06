var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var user = null;
    if(req.user) user = {id: req.user.id};
    console.log(user);
    console.log(user==false);
    res.render('index',{
        user: user,
    });
});

router.get('/shop', function(req, res, next) {
    var user = null;
    if(req.user) user = {id: req.user.id};
    res.render('shop', { 
        user: user
    });
});

router.get('/login', function(req, res, next) {
    var user = null;
    if(req.user) user = {id: req.user.id};
    res.render('login', { 
    user: user
  });
});

router.get('/logout', function(req, res, next) {

    req.logout();
    req.flash('success_message', 'Successful Logout.');
    res.redirect('/login');
});

router.get('/training', function(req, res, next) {
  res.render('training', { title: 'Training' });
});

router.get('/about-the-club', function(req, res, next) {
  res.render('about', { title: 'About' });
});

router.get('/committee', function(req, res, next) {
  res.render('committee', { title: 'Committee' });
});

router.get('/contact-us', function(req, res, next) {
  res.render('contact', { title: 'Contact us' });
});

module.exports = router;
