const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

router.get('/getUsers', userController.view);
router.get('/userType', userController.typeUtilisateur)

router.get('/register', userController.registration)
router.post('/register',  userController.registration)


module.exports = router
