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

exports.viewRdvs = (req, res) => {
console.log('hello');
   pool.getConnection((err, connection) => {
    if (err) throw err
    console.log(`connected as id ${connection.threadId}`);

     connection.query(`
    SELECT a.*, c.name, d.* FROM demandes AS a JOIN proposals AS b ON a.proposal_id = b.id JOIN users AS c ON b.user_id = c.id JOIN jours AS d ON b.jour_id = d.id;`
     , (err, rows) => {
       connection.release();

       if (!err) {
        console.log(rows);
         data.response = rows;
         data.message = "Rdvs succesfully retrieved";
         console.log(data);
        res.send(data)
       }
       else {
        data.message = "Rdvs Failed to retrieved"
       }
  })
   })

}

exports.jourDisponible = (req, res) => {
console.log('hello');
   pool.getConnection((err, connection) => {
    if (err) throw err
    console.log(`connected as id ${connection.threadId}`);

     connection.query(`
    SELECT a.*, c.name, FROM jours AS a JOIN users AS c ON a.user_id = c.id `
     , (err, rows) => {
       connection.release();

       if (!err) {
        console.log(rows);
         data.response = rows;
         data.message = "Date succesfully retrieved";
         console.log(data);
        res.send(data)
       }
       else {
        data.message = "Date Failed to retrieved"
       }
  })
   })

}




