const mysql = require('mysql');


const pool = mysql.createPool({
  connectionLimit: 100,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'couture'
});
let data={
  response: '',
  message: ''
};

exports.viewMessages = (req, res) => {
console.log('hello');
   pool.getConnection((err, connection) => {
    if (err) throw err
    console.log(`connected as id ${connection.threadId}`);

     connection.query(`SELECT * FROM messages`, (err, rows) => {
       connection.release();

       if (!err) {
         data.response = rows;
         data.message = "Modeles succesfully retrieved";
         console.log(data);
        res.send(data)
       }
       else {
        data.message = "Modeles Failed to retrieved"
       }
  })
   })

}




