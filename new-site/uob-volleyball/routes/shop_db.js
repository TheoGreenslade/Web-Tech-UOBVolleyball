"use strict";
var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('database.db', sqlite3.OPEN_READWRITE, (err) => {
  if(err) {
    console.error(err.message);
  }
});

exports.insertPurchase = function(userId, productId) {
    var query = "INSERT INTO Purchase (user_id, product_id) VALUES (?, ?);";
    
    db.serialize(( ) => {
       db.run(query, [userId, productId], function(error) {
           if(error) {
               console.log(error);
           } else {
               console.log('Purchase added to database');
           }            
       });
    });
}

exports.getCategories = function(callback){
    var query = "SELECT * FROM Category;";
    
        db.serialize(( ) => {
       db.all(query, function(error, rows) {
            if(error) throw error;
           callback(error, rows);           
       });
    });   
}

exports.getOrderedProducts = function(orderByThis, order, callback){
    console.log("In function: " + orderByThis);
    var query = "SELECT Product.id AS product_id, Product.imagepath AS imagePath, Product.name AS product_name, \
                    Product.description AS description, Product.price AS price, Product.discount AS discount, \
                    Category.id AS category_id, Category.name AS category_name FROM Product \
                    JOIN Category on Product.category = Category.id \
                    ORDER BY "+orderByThis+ " " + order +" ;"; 
    //Building the query with "..." + var + "..." like this can lead to SQL Injection vulnerabilities however apprently the ORDER BY does not work with prepared
    //Statements i.e. "... ? ..." see https://github.com/mapbox/node-sqlite3/issues/178.
    
    db.serialize(( ) => {
       db.all(query, function(error, rows) {
           console.log(query);
            if(error) throw error;
           callback(error, rows);           
       });
    });
}

exports.getOrderByOptions = function() {
    var option1 = {
        name: 'Last Added', 
        id: 'Product.addedAt'
    };
    var option2 = {
        name: 'Price', 
        id: 'Product.price'
    };
    var option3 = {
        name: 'Category', 
        id: 'Category.name'
    };
    var options = { option1, option2, option3};
    return options;
}









