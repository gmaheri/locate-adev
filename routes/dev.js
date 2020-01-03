const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(' GET - Hello from here!')
});

router.post('/', (req, res) => {
  res.send(' POST - Hello from here!')
});

module.exports = router;
