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
           console.log(rows);
           callback(error, rows);           
       });
    });
}