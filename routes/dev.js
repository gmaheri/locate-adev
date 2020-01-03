const express = require('express');
const router = express.Router();
const {getDev}= require('../controllers/dev')

router.route('/').get(getDev)

module.exports = router;
