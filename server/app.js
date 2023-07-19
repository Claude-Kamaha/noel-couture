const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');


const app = express();
const port = process.env.Port || 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.listen(port, () => {
  console.log('Server started on port 3000')
})



const routes = require('./routes/user');
app.use('/', routes)
