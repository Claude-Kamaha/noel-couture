const mysql = require('mysql');


const pool = mysql.createPool({
  connectionLimit: 100,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'couture'
});
let response={
  data: '',
  message: ''
};

exports.viewModele = (req, res) => {
console.log('hello');
   pool.getConnection((err, connection) => {
    if (err) throw err
    console.log(`connected as id ${connection.threadId}`);

     connection.query(`SELECT * FROM photos`, (err, rows) => {
       connection.release();

       if (!err) {
        response.data = rows;
        response.message = "Modeles succesfully retrieved";
        
        res.send(response)
       }
       else {
        response.message = "Modeles Failed to retrieved"
       }
  })
   })

}




