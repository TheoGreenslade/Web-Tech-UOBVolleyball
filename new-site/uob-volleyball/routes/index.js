var express = require('express');
var router = express.Router();
var shop_db = require('./shop_db.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    var user = null;
    var admin = false;
    
    if(req.user){
        if(req.user.admin) admin = true;
        user = {id: req.user.id};
    } 
    
    console.log(user);
    res.render('index',{
        user: user,
        title: 'UoB Volleyball',
        admin: admin
    });
});

router.get('/training', function(req, res, next) {
  var user = null;
        var admin = false;
    if(req.user){
        if(req.user.admin) admin = true;
        user = {id: req.user.id};
    } 
    res.render('training', { 
        user: user,
        title: 'Training',
        admin: admin
    });
});

router.get('/about-the-club', function(req, res, next) {
  var user = null;
        var admin = false;
    if(req.user){
        if(req.user.admin) admin = true;
        user = {id: req.user.id};
    } 
    res.render('about', { 
        user: user,
        title: 'About the club',
        admin: admin
    });
});

router.get('/committee', function(req, res, next) {
  var user = null;
        var admin = false;
    if(req.user){
        if(req.user.admin) admin = true;
        user = {id: req.user.id};
    } 
    res.render('committee', { 
        user: user,
        title: 'Committee',
        admin: admin
    });
});

router.get('/contact-us', function(req, res, next) {
  var user = null;
        var admin = false;
    if(req.user){
        if(req.user.admin) admin = true;
        user = {id: req.user.id};
    } 
    res.render('contact', { 
        user: user,
        title: 'Contact us',
        admin: admin
    });
});

router.get('/calender', function(req, res, next) {
  var user = null;
        var admin = false;
    if(req.user){
        if(req.user.admin) admin = true;
        user = {id: req.user.id};
    } 
    res.render('calender', { 
        user: user,
        title: 'Calender',
        admin: admin
    });
});

router.get('/gallery', function(req, res, next) {
  var user = null;
        var admin = false;
    if(req.user){
        if(req.user.admin) admin = true;
        user = {id: req.user.id};
    } 
    res.render('gallery', { 
        user: user,
        title: 'Gallery',
        admin: admin
    });
});

router.get('/squads', function(req, res, next) {
  var user = null;
        var admin = false;
    if(req.user){
        if(req.user.admin) admin = true;
        user = {id: req.user.id};
    } 
    res.render('squads', { 
        user: user,
        title: 'Squads',
        admin: admin
    });
});

router.get('/mens-A', function(req, res, next) {
  var user = null;
        var admin = false;
    if(req.user){
        if(req.user.admin) admin = true;
        user = {id: req.user.id};
    } 
    res.render('mensA', { 
        user: user,
        title: 'Mens A Team',
        admin: admin
    });
});

router.get('/mens-B', function(req, res, next) {
  var user = null;
        var admin = false;
    if(req.user){
        if(req.user.admin) admin = true;
        user = {id: req.user.id};
    } 
    res.render('mensB', { 
        user: user,
        title: 'Mens B Team',
        admin: admin
    });
});

router.get('/womens-A', function(req, res, next) {
  var user = null;
        var admin = false;
    if(req.user){
        if(req.user.admin) admin = true;
        user = {id: req.user.id};
    } 
    res.render('womensA', { 
        user: user,
        title: 'Womens A Team',
        admin: admin
    });
});

router.get('/womens-B', function(req, res, next) {
  var user = null;
        var admin = false;
    if(req.user){
        if(req.user.admin) admin = true;
        user = {id: req.user.id};
    } 
    res.render('womensB', { 
        user: user,
        title: 'Womens B Team',
        admin: admin
    });
});

router.get('/hall-of-fame', function(req, res, next) {
  var user = null;
        var admin = false;
    if(req.user){
        if(req.user.admin) admin = true;
        user = {id: req.user.id};
    } 
    res.render('hallOfFame', { 
        user: user,
        title: 'Hall of fame',
        admin: admin
    });
});

module.exports = router;
