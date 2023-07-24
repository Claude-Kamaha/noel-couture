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

     connection.query(`SELECT users.name as username, 
     users.email, users.created_at, users.updated_at, rdvs.name as type
      FROM users  INNER JOIN rdvs ON rdvs.id=users.rdv_id`, (err, rows) => {
       connection.release();

       if (!err) {
         res.send(rows)
       }
       else {
         console.log(err)
       }
  })
   })

}

exports.typeUtilisateur = (req, res) => {
  
let data={
  response: '',
  message: ''
};
  pool.getConnection((err, connection) => {
   if (err) throw err
   console.log(`connected as id ${connection.threadId}`);

    connection.query('SELECT * FROM rdvs', (err, rows) => {
      connection.release();

      if (!err) {
        data.response = rows;
        data.message = "user types succesfully retrieved"
        res.send(data)
      }
      else {
        data.message = "user types failed to retrieved"
        console.log(err)
      }
 })
  })



}

