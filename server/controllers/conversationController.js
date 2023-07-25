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

exports.viewConversation = (req, res) => {
console.log('hello');
   pool.getConnection((err, connection) => {
    if (err) throw err
    console.log(`connected as id ${connection.threadId}`);

     connection.query(`
   SELECT a.*, c.name, d.name FROM conversations AS a JOIN users AS c ON a.from = c.id JOIN users AS d ON a.to = d.id;` , (err, rows) => {
       connection.release();

       if (!err) {
        console.log(rows);
         data.response = rows;
         data.message = "Conversation succesfully retrieved";
         console.log(data);
        res.send(data)
       }
       else {
        data.message = "Conversation Failed to retrieved"
       }
  })
   })

}




