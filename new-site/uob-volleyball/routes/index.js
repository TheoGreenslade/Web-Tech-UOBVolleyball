var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'UoB Volleyball' });
});

router.get('/shop', function(req, res, next) {
  res.render('shop', { title: 'Shop' });
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
