const express = require('express');
const router = express.Router();
const conversationController = require('../controllers/conversationController')

router.get('/getConversation', conversationController.viewConversation);


module.exports = router
