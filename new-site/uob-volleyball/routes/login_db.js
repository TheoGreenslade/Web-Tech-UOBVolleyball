var sqlite3 = require('sqlite3').verbose();
var crypto = require('crypto');

var db = new sqlite3.Database('database.db', sqlite3.OPEN_READWRITE, (err) => {
  if(err) {
    console.error(err.message);
  }
});

exports.addNewUser = function(user){
    var query = "INSERT INTO User (username, email, password) VALUES (?, ?, ?);";
    
    db.serialize(( ) => {
       db.run(query, [user['username'], user['email'], user['password']], function(error) {
           if(error) {
               console.log(error);
           } else {
               console.log(user['username'] + 'added to database');
           }            
       });
    });
}

exports.selectUserByEmail = function(email, callback){
    var query = "SELECT * FROM User WHERE email = ?;";
    
    db.serialize(( ) => {
       db.all(query, email, function(error, rows) {
            if(error) throw error;
           callback(error, rows[0]);           
       });
    });
}

exports.selectUserById = function(id, callback){
    var query = "SELECT * FROM User WHERE id = ?";
    
    db.serialize(() => {
        db.all(query, id, function(error, rows) {
            if(error) throw error;
            callback(error, rows[0]);
        });
    });
}



