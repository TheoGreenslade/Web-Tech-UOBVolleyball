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

router.get('/calender', function(req, res, next) {
  res.render('calender', { title: 'Calender' });
});

router.get('/gallery', function(req, res, next) {
  res.render('gallery', { title: 'Gallery' });
});

router.get('/squads', function(req, res, next) {
  res.render('squads', { title: 'Squads' });
});

router.get('/mens-A', function(req, res, next) {
  res.render('mensA', { title: 'Mens A Team' });
});

router.get('/mens-B', function(req, res, next) {
  res.render('mensB', { title: 'Mens B Team' });
});

router.get('/womens-A', function(req, res, next) {
  res.render('womensA', { title: 'Womens A Team' });
});

router.get('/womens-B', function(req, res, next) {
  res.render('womensB', { title: 'Womens B Team' });
});

router.get('/hall-of-fame', function(req, res, next) {
  res.render('hallOfFame', { title: 'Hall Of Fame' });
});

module.exports = router;
