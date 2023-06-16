const express = require('express');
const attemptController = require('../Controllers/attemptController');

const router = express.Router();

router.post('/', attemptController.createAttempt);

module.exports = router;
