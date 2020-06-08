var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('database.db', sqlite3.OPEN_READWRITE, (err) => {
  if(err) {
    console.error(err.message);
  }
});

exports.getProducts = function(callback){
    var query = "SELECT * FROM Product;";
    
    db.serialize(( ) => {
       db.all(query, function(error, rows) {
            if(error) throw error;
           callback(error, rows);           
       });
    });
}

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










