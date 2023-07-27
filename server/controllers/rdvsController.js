const mysql = require('mysql');


const pool = mysql.createPool({
  connectionLimit: 100,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'atelier'
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
    SELECT a.*, c.nom, d.* FROM demandes AS a JOIN proposals AS b ON a.proposal_id = b.id JOIN users AS c ON b.user_id = c.id JOIN jours AS d ON b.jour_id = d.id;`
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

     connection.query(`SELECT a.*, c.nom AS customer FROM disponibilite AS a LEFT JOIN users AS c ON a.id_user = c.id_user;`, (err, row) => {
      // connection.release();
console.log(row);
       if (!err) {
        res.status(200).json({
          data: row,
          message: 'Date succesfully retrieved'
        })
      
       }
       else {
        console.log(err);
        data.message = "Date Failed to retrieved"
       }
  })
   })

}




exports.nouveauJour = (req, res) => {

  console.log(req.body);

  const {date_dispo, message,id_user, created_at, updated_at} = req.body
 
 pool.getConnection((err, connection) => {
      connection.query('INSERT INTO disponibilite SET ?', {
        date_dispo: date_dispo,
        message: message,
        id_user: id_user,
     created_at: created_at,
     updated_at: updated_at
   },
     (err, rows) => {
       connection.release();

       if (!err) {
         res.status(200).send({
           message: 'Rdv registered Ok '
         })
       }
       else {
         console.log(err)
       }
  })
   })
   }








