const express = require('express');
const router = express.Router();
const userController = require('../controllers/rdvsController')

router.get('/getRdvs', rdvs.view);


module.exports = router
