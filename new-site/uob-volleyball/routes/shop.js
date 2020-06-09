"use strict";
var express = require('express');
var router = express.Router();
var shop_db = require('./shop_db.js');

router.get('/shop', function(req, res, next) {
    var user = null;
    if(req.user) {
            var admin = false;
    if(req.user.admin) admin = true;
       user = {id: req.user.id};
       shop_db.getOrderedProducts( 'Product.id', 'ASC',function(error, products) {
           if(error) throw error;
           shop_db.getCategories(function(error, categories) {
                if(error) throw error;
               var orderByOptions = shop_db.getOrderByOptions();
                res.render('shop', {
                    orderByOptions: orderByOptions,
                    categories: categories,
                    products: products,
                    user: user,
                    title:'Shop',
                    admin: admin
                });    
           });  
       });

    } else {
        req.flash('error_message', 'You must be logged in to access our shop.')
        res.redirect('/login');
    }
});

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

router.post('/shop', function(req, res, next) {
    var user = null;
    if(req.user) {
            var admin = false;
    if(req.user.admin) admin = true;
       user = {id: req.user.id};
        var orderByThis = req.body.orderByThis;
        var order = req.body.order;
        console.log(orderByThis);
       shop_db.getOrderedProducts( orderByThis, order, function(error, products) {
           if(error) throw error;
           shop_db.getCategories(function(error, categories) {
                if(error) throw error;
               var orderByOptions = shop_db.getOrderByOptions();
               console.log(products);
                res.render('shop', {
                    orderByOptions: orderByOptions,
                    categories: categories,
                    products: products,
                    user: user,
                    title:'Shop',
                    admin: admin
                });    
           });  
       });

    } else {
        req.flash('error_message', 'You must be logged in to access our shop.')
        res.redirect('/login');
    }
});

module.exports = router;

