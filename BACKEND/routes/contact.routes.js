const express = require('express');
const router = express.Router();
const { contact } = require('../controllers/contact.controller');

router.post('/contactUs', contact);

module.exports = router;