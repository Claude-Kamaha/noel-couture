const express = require('express');
const router = express.Router();
const rdvsController = require('../controllers/rdvsController')

router.get('/getRdvs', rdvsController.viewRdvs);
router.get('/getfreeDays', rdvsController.jourDisponible);


module.exports = router
