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

     connection.query(`SELECT messages.*,users.name FROM messages JOIN users on messages.user_id=users.id;`
     , (err, rows) => {
       connection.release();

       if (!err) {
        console.log(rows);
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




