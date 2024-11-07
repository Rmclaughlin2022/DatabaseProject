const mysql = require('mysql');
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Aj157881!",
  database: "HangPerson"
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

connect();