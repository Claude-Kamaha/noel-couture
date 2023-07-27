const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const multer = require("multer")
const upload = multer({ dest: 'uploads/' })
// const upload = multer({storage: multer.memoryStorage()})
const app = express();
const port = process.env.Port || 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(fileUpload());

app.listen(port, () => {
  console.log('Server started on port 3000')
})
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// CORS is enabled for the selected origins
let corsOptions = {
    origin: [ 'http://localhost:4200', 'http://localhost:3000' ]
};
const userRoutes = require('./routes/user');
app.use('/', cors(corsOptions), userRoutes)

const modeleRoutes = require('./routes/modele');
app.use('/', cors(corsOptions), modeleRoutes)

const messageRoutes = require('./routes/message');
app.use('/', cors(corsOptions), messageRoutes)

const rdvsRoutes = require('./routes/rdvs');
app.use('/', cors(corsOptions), rdvsRoutes)

const conversationRoutes = require('./routes/conversation');
app.use('/', cors(corsOptions), conversationRoutes)



app.post("/modele",upload.single('produit'),(req, res) => {
  console.log(req.body);
  console.log(req.files);
  

  created_at= req.body.created_at      
   updated_at= req.body.updated_at
 idtype_mod =req.body.idtype_mod
   id_user= req.body.id_user
   prix= req.body.prix
   nom = req.body.nom
    image = req.body.image;
  let uploadPath;
if(!req.files || Object.keys(req.files).length ===0){
  return res.status(400).send('No files updated.');
}

  console.log(imageV2);

//   const {date_dispo, message,id_user, created_at, updated_at} = req.body
 
//  pool.getConnection((err, connection) => {
//       connection.query('INSERT INTO disponibilite SET ?', {
//         date_dispo: date_dispo,
//         message: message,
//         id_user: id_user,
//      created_at: created_at,
//      updated_at: updated_at
//    },
//      (err, rows) => {
//        connection.release();

//        if (!err) {
//          res.status(200).send({
//            message: 'Rdv registered Ok '
//          })
//        }
//        else {
//          console.log(err)
//        }
//   })
//    })
   })
