const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

router.get('/getUsers', userController.view)

module.exports = router
