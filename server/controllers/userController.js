const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')

const pool = mysql.createPool({
  connectionLimit: 100,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'atelier'
});
class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  static find(email) {
    return db.execute('SELECT * FROM users WHERE email = ?', [email]);
  }

  static save(user) {
    return connection.query(
      'INSERT INTO users (nom, email, password) VALUES (?, ?, ?)',
      [user.name, user.email, user.password]
    );
  }
};




exports.registration = (req, res) => {

  console.log(req.body);

  

  const {nom, email, password,id_typeuser, sexe,phone, created_at, updated_at} = req.body

 pool.getConnection((err, connection) => {
    if (err) throw err
   connection.query('SELECT email FROM users where email = ?', [email], async (err, row) => {
     if (err) {
       console.log(err)
     }
     else if (row.length > 0) {
       res.status(500).send({
           message: 'EMAIL IS ALREADY IN USE'
         })
     }

     let hashedPassword = await bcrypt.hash(password, 8);
      connection.query('INSERT INTO users SET ?', {
        nom: nom,
         email: email,
     password: hashedPassword,
     id_typeuser: id_typeuser,
     sexe: sexe,
     phone:phone,
     created_at: created_at,
     updated_at: updated_at
   },
     (err, rows) => {
       connection.release();

       if (!err) {
         res.status(200).send({
           message: 'User registered'
         })
       }
       else {
         console.log(err)
       }
  })
   })
   });

}



exports.view = (req, res) => {

   pool.getConnection((err, connection) => {
    if (err) throw err
    console.log(`connected as id ${connection.threadId}`);

     connection.query(`SELECT users.nom as username,
     users.email, users.created_at, users.updated_at, type_user.type as type
      FROM users  INNER JOIN type_user ON type_user.id_typeuser=users.id_typeuser`, (err, rows) => {
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

    connection.query('SELECT * FROM type_user', (err, rows) => {
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





  exports.login = async (req, res, next) => {
    const email = req.body.email;
    let password = req.body.password;
    try {
      // const user = await User.find(email);
  
 pool.getConnection((err, connection) => {
  if (err) throw err
connection.query('SELECT * FROM users where email = ?', [email], async (err, row) => {
  const user= row
  if (row.length < 1) {
     res.status(401).send({
         message: 'EMAIL Not found'
       })
   }
 
      console.log('here is the find',user);
       const storedUser = user[0];
  console.log(storedUser);
  // bcrypt.compare(password, storedUser.password).then(function (result) {
  //   result
  //     ? res
  //     : res.status(400).send({ message: "Login not succesful" })
  // })

 try{
  const isEqual = await bcrypt.compare(password, storedUser.password)
  console.log(isEqual);
  if (!isEqual) {
    const error = new Error('Wrong password!');
    res.status(401).send({
      message: 'Wrong password'
    })

  }
  else{
  const token = jwt.sign(
    {
      email: storedUser.email,
      userId: storedUser,
    },
    'secretfortoken',
    { expiresIn: '1h' }
  );
  res.status(200).json({ token: token, user: storedUser,
  message: 'login succesful' });
}
 }
 catch(e) {
  throw e
 }
      
  
     
  
      
  })
})
    }
    catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  }
   

 

    
  
