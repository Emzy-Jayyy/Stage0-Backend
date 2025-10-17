const express = require('express');
const profileController = require('../controller/profile')

const router = express.Router();

router.get('/me', profileController.getProfile);

module.exports = router;
