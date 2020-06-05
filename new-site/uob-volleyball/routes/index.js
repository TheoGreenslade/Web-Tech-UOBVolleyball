var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var user = null;
    if(req.user) user = {id: req.user.id};
    console.log(user);
    console.log(user==false);
    res.render('index',{
        error_message: null,
        user: user,
    });
});


/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'UoB Volleyball' });
});*/

router.get('/shop', function(req, res, next) {
  res.render('shop', { title: 'Shop' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { 
            error_message: req.flash('error_message'), 
            success_message: req.flash('success_message'),
            user: null,
  });
});

module.exports = router;
