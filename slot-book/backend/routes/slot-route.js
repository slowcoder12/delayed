const express = require('express');
const router = express.Router();

const slotController = require('../controllers/slotController');

router.post('/addBooking',slotController.addBooking);

router.get('/addBooking',slotController.addBooking);


module.exports = router;