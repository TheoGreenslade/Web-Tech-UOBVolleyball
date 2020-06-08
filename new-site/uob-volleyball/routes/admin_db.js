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
