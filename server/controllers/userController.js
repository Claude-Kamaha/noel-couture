const mysql = require('mysql');


const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'couture'
});



exports.view = (req, res) => {

   pool.getConnection((err, connection) => {
    if (err) throw err
    console.log(`connected as id ${connection.threadId}`);

     connection.query('SELECT * FROM users', (err, rows) => {
       connection.release();

       if (!err) {
         res.send(rows)
       }
       else {
         console.log(err);
       }


  })

   })



}


