const express = require('express');
const router = express.Router();
const modeleController = require('../controllers/modeleController')

router.get('/getModeles', modeleController.viewModele);


module.exports = router
