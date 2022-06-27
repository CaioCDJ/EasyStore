const mysql = require('mysql2');

export const connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  database:'mydb',
  password:'Oliver123'
});
