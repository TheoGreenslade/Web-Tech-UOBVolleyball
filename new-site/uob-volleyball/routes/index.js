var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'UoB Volleyball' });
});

router.get('/shop', function(req, res, next) {
  res.render('shop', { title: 'Shop' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

module.exports = router;
