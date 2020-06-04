var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('database.db', sqlite3.OPEN_READWRITE, (err) => {
  if(err) {
    console.error(err.message);
  }
  console.log('Connected to the database.');
});

exports.addNewUser = function(user){
    var query = "INSERT INTO User (username, email, password) VALUES (?, ?, ?);";
    
    db.serialize(( ) => {
       db.run(query, [user['username'], user['email'], user['password']], function(error) {
           if(error) {
               console.log(error);
           } else {
               console.log("DeathToIan");
           }
           
       });
    });
}

exports.selectUser = function(email, callback){
    var query = "SELECT * FROM User WHERE email = ?;";
    
    db.serialize(( ) => {
       db.all(query, email, function(error, rows) {
           console.log(error, rows);
           callback(rows);           
       });
    });
}

