var express = require('express');
var router = express.Router();
var shop_db = require('./shop_db.js');
var admin_db = require('./admin_db.js');

router.get('/admin', function(req, res, next) {
  var user = null;
        var admin = false;
    if(req.user){
        if(req.user.admin) admin = true;
        user = {id: req.user.id};
    } 
    if(user && admin) {
        shop_db.getCategories( function(error, categories) {
            res.render('admin', { 
                user: user,
                categories: categories,
                title: 'Add Products or Categories',
                admin: admin
            });
        });
       }else{
            req.flash('error_message', 'Only Admins can access that page.')
            res.redirect('/');
       }
});

router.get('/users', function(req, res, next) {
  var user = null;
        var admin = false;
    if(req.user){
        if(req.user.admin) admin = true;
        user = {id: req.user.id};
    } 
    if(user && admin) {
        admin_db.getUsers( function(error, users) {
            res.render('users', { 
                user: user,
                users: users,
                title: 'Users',
                admin: admin
            });
        });

       }else{
            req.flash('error_message', 'Only Admins can access that page.')
            res.redirect('/');
       }
});

router.get('/orders', function(req, res, next) {
  var user = null;
        var admin = false;
    if(req.user){
        if(req.user.admin) admin = true;
        user = {id: req.user.id};
    } 
    if(user && admin) {
        admin_db.getOrders( function(error, orders) {
            res.render('orders', { 
                user: user,
                orders: orders,
                title: 'Orders',
                admin: admin
            });     
        });
       }else{
            req.flash('error_message', 'Only Admins can access that page.')
            res.redirect('/');
       }
});

router.post('/add_product', function(req, res, next) {
    var name = req.body.productName;
    var description = req.body.productDescription;
    var category = req.body.category;
    var price = req.body.productPrice*100;
    var discount = req.body.productDiscount;
    var imagePath = req.body.productImagePath;
    
    if(!Number.isInteger(price) && price>=0) {
        req.flash('error_message', 'Invalid Price');
        res.redirect('/admin');
    }
    
    if(imagePath == '') { imagePath = null; }
    if(description == '') { description = null; }
    if(discount == '') { discount = null; }

    admin_db.selectProductByName(name, function(error, product) {
        if(product) {
            req.flash('error_message', 'Product already present in our database.');
            res.redirect('/admin');
        } else {
            var product = {
                    name: name,
                    description: description,
                    category: category,
                    price: price,
                    discount: discount,
                    imagePath: imagePath
                }

            admin_db.insertProduct(product);  
            req.flash('success_message', 'Product added.');
            user = {id: req.user.id}
            res.render('admin', {
                success_message: req.flash('success_message'),
                title: 'Admin page',
                error_message: null,
                user: user,
                admin: true
            });
        }    
    });
});

router.post('/add_category', function(req, res, next) {
    var name = req.body.categoryName;
    
    admin_db.selectCategoryByName(name, function(error, category) {
        if(category) {
            req.flash('error_message', 'Category already present in our database.');
            res.redirect('/admin');
        } else {
            admin_db.insertCategory(name);  
            req.flash('success_message', 'Category added.');
            user = {id: req.user.id}
            res.render('admin', {
                success_message: req.flash('success_message'),
                title: 'Admin page',
                error_message: null,
                user: user,
                admin: true
            });
        }    
    });
});

router.post('/add_admin', function(req, res, next) {
    var userId = req.body.userId;
    admin_db.setAdmin(userId);
    req.flash('success_message', 'User added as admin.');
    res.redirect('/users');
});

module.exports = router;
