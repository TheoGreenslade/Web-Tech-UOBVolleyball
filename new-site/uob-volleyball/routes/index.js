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

module.exports = router;
