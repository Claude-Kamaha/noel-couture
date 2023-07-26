const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.Port || 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

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


