var express = require('express');
var router = express.Router();
var shop_db = require('./shop_db.js');


router.post('/purchase', function(req, res, next) {
    var user = null;
    if(req.user) {
        console.log("Product Id: " + req.body.productId);
            shop_db.insertPurchase(req.user.id, req.body.productId);
            req.flash('success_message', 'Thank you for your purchase!');
            res.redirect('/shop');
    } else {
        req.flash('error_message', 'You must be logged in to access our shop.');
        res.redirect('/login');
    }
});

module.exports = router;

