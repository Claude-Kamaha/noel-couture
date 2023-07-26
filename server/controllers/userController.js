const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'couture'
});



exports.registration = (req, res) => {

  console.log(req.body);

//   const {name, email, password,rdv_id, created_at, updated_at} = req.body

//  pool.getConnection((err, connection) => {
//     if (err) throw err
//    connection.query('SELECT email FROM users where email = ?', [email], async (err, row) => {
//      if (err) {
//        console.log(err)
//      }
//      else if (row.length > 0) {
//        res.status(500).send({
//            message: 'EMAIL IS ALREADY IN USE'
//          })
//      }

//      let hashedPassword = await bcrypt.hash(password, 8);
//       connection.query('INSERT INTO users SET ?', {
//      name: name, email: email,
//      password: hashedPassword,
//      created_at: created_at,
//      updated_at: updated_at
//    },
//      (err, rows) => {
//        connection.release();

//        if (!err) {
//          res.status(200).send('rows', {
//            message: 'User registered'
//          })
//        }
//        else {
//          console.log(err)
//        }
//   })
//    })
//    });

}



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

