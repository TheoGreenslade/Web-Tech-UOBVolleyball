var express = require('express');
var router = express.Router();
var shop_db = require('./shop_db.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    var user = null;
    if(req.user) user = {id: req.user.id};
    console.log(user);
    res.render('index',{
        user: user,
        title: 'UoB Volleyball'
    });
});

router.get('/shop', function(req, res, next) {
    var user = null;
    if(req.user) {
       user = {id: req.user.id};
       shop_db.getProducts(function(error, products) {
           if(error) throw error;
            res.render('shop', {
                products: products,
                user: user,
                title:'Shop'
            });
       });

    } else {
        req.flash('error_message', 'You must be logged in to access our shop.')
        res.redirect('/login');
    }
});

router.get('/login', function(req, res, next) {
    var user = null;
    if(req.user) user = {id: req.user.id};
    res.render('login', { 
    user: user,
    title: 'Login & Register'
  });
});

router.get('/logout', function(req, res, next) {

    req.logout();
    req.flash('success_message', 'Successful Logout.');
    res.redirect('/login');
});

router.get('/training', function(req, res, next) {
  var user = null;
    if(req.user) user = {id: req.user.id};
    res.render('training', { 
        user: user,
        title: 'Training'
    });
});

router.get('/about-the-club', function(req, res, next) {
  var user = null;
    if(req.user) user = {id: req.user.id};
    res.render('about', { 
        user: user,
        title: 'About the club'
    });
});

router.get('/committee', function(req, res, next) {
  var user = null;
    if(req.user) user = {id: req.user.id};
    res.render('committee', { 
        user: user,
        title: 'Committee'
    });
});

router.get('/contact-us', function(req, res, next) {
  var user = null;
    if(req.user) user = {id: req.user.id};
    res.render('contact', { 
        user: user,
        title: 'Contact us'
    });
});

router.get('/calender', function(req, res, next) {
  var user = null;
    if(req.user) user = {id: req.user.id};
    res.render('calender', { 
        user: user,
        title: 'Calender'
    });
});

router.get('/gallery', function(req, res, next) {
  var user = null;
    if(req.user) user = {id: req.user.id};
    res.render('gallery', { 
        user: user,
        title: 'Gallery'
    });
});

router.get('/squads', function(req, res, next) {
  var user = null;
    if(req.user) user = {id: req.user.id};
    res.render('squads', { 
        user: user,
        title: 'Squads'
    });
});

router.get('/mens-A', function(req, res, next) {
  var user = null;
    if(req.user) user = {id: req.user.id};
    res.render('mensA', { 
        user: user,
        title: 'Mens A Team'
    });
});

router.get('/mens-B', function(req, res, next) {
  var user = null;
    if(req.user) user = {id: req.user.id};
    res.render('mensB', { 
        user: user,
        title: 'Mens B Team'
    });
});

router.get('/womens-A', function(req, res, next) {
  var user = null;
    if(req.user) user = {id: req.user.id};
    res.render('womensA', { 
        user: user,
        title: 'Womens A Team'
    });
});

router.get('/womens-B', function(req, res, next) {
  var user = null;
    if(req.user) user = {id: req.user.id};
    res.render('womensB', { 
        user: user,
        title: 'Womens B Team'
    });
});

router.get('/hall-of-fame', function(req, res, next) {
  var user = null;
    if(req.user) user = {id: req.user.id};
    res.render('hallOfFame', { 
        user: user,
        title: 'Hall of fame'
    });
});

module.exports = router;
