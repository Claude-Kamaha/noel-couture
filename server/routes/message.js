const express = require('express');
const router = express.Router();
const modeleController = require('../controllers/messageController')

router.get('/getMessages', modeleController.viewMessages);


module.exports = router
