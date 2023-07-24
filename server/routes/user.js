const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

router.get('/getUsers', userController.view);
router.get('/userType', userController.typeUtilisateur)

module.exports = router
