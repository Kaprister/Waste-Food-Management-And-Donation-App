
const express = require('express');
const router = express.Router();

const { donate } = require('../controllers/donate.controller');


router.post('/donate', donate);


module.exports = router;