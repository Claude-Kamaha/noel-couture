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
     SELECT demandes.*
     FROM  
     (SELECT
     proposals.*, users.name ,jours.title FROM proposals
          JOIN users ON user_id=users.id,
          JOIN jours ON jour_id =jours.id
          )
          demandes JOIN proposals on demandes.proposal_id=proposals.id  
     
     
     
         ;`
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




