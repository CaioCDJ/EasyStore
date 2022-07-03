const mysql = require('mysql2/promise');

class db{

  static async exec(query:string, params:string[]= []){

    const connection = await mysql.createConnection({
      host:'localhost',
      user:'root',
      database:'mydb',
      password:'Oliver123'
    });
    
    const [rows,fields] = await connection.query(query,params);

    return await rows;
  }
}

module.exports = db;
