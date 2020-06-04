var express = require('express');
var router = express.Router();
var login_db = require('./login_db.js');

router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.post('/register_user', function(req, res, next) {
    var email = req.body.registerEmail;
    var password = req.body.registerUsername;
    var username = req.body.registerPassword;
    
    res.send(email+" "+password+" "+username);
    
    var JSONUser = {
        email: email,
        password: password,
        username: username
    }
    
    login_db.addNewUser(JSONUser);
});

router.post('/login_user', function(req, res, next) {
    var email = req.body.loginEmail;  
    var password = req.body.loginPassword;
    
    var check = login_db.selectUser(email, (rows) => {
        console.log(rows.length)
        if(rows.length === 0) {
            console.log("No User Found");
            res.redirect('/login');
        } else {
            console.log(rows[0]['password']);
            if(rows[0]['password'] === password) {
                console.log("Logged In!");
                res.redirect('/login');
               } else {
                   console.log("Incorrect Password");
                   res.redirect('/login');
               }
        }
    });
});
    
    
module.exports = router;