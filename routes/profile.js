const express = require('express');

const router = express.Router();

router.get('/me', (req, res, next) => {
  res.json({
    email: process.env.EMAIL,
    name: "",
    stack: process.env.STACK
  });
});

module.exports = router;
