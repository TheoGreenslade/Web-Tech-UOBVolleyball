var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('database.db', sqlite3.OPEN_READWRITE, (err) => {
  if(err) {
    console.error(err.message);
  }
});

exports.insertProduct = function(product) {
    var query = "INSERT INTO Product (name, description, price, imagePath, category, discount) VALUES (?, ?, ?, ?, ?, ?) ;";

    db.serialize(( ) => {
       db.run(query, [product['name'], product['description'], product['price'], product['imagePath'], product['category'], product['discount']], function(error) {
           if(error) {
               console.log(error);
           } else {
               console.log('Product added to database');
           }            
       });
    });
}

exports.selectProductByName = function(name, callback) {
    var query = "SELECT * FROM Product WHERE name = ?;";
    
    db.serialize(( ) => {
       db.all(query, name, function(error, rows) {
            if(error) throw error;
           callback(error, rows[0]);           
       });
    });
}

exports.insertCategory = function(name) {
    var query = "INSERT INTO Category (name) VALUES (?);";

    db.serialize(( ) => {
       db.run(query, name, function(error) {
           if(error) {
               console.log(error);
           } else {
               console.log('Category added to database');
           }            
       });
    });
}

exports.selectCategoryByName = function(name, callback) {
    var query = "SELECT * FROM Category WHERE name = ?;";
    
    db.serialize(( ) => {
       db.all(query, name, function(error, rows) {
            if(error) throw error;
           callback(error, rows[0]);           
       });
    });
}

exports.getUsers = function(callback) {
    var query = "SELECT * FROM User;"
    
        db.serialize(( ) => {
       db.all(query, function(error, rows) {
            if(error) throw error;
           callback(error, rows);           
       });
    });
}

exports.setAdmin = function(userId) {
    var query = "UPDATE User SET admin = 1 WHERE id = ?;"
    
        db.serialize(( ) => {
       db.run(query, userId, function(error) {
           if(error) {
               console.log(error);
           } else {
               console.log('User added as admin');
           }            
       });
    });
}


exports.getOrders = function(callback) {
    var query = "SELECT User.email AS email, Product.name AS product, Purchase.purchaseDate AS date, Purchase.id AS id FROM User \
                    JOIN Purchase ON User.id = Purchase.user_id \
                    JOIN Product ON Purchase.product_id = Product.id;"
    
        db.serialize(( ) => {
       db.all(query, function(error, rows) {
            if(error) throw error;
           callback(error, rows);           
       });
    });
}







