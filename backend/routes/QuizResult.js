const express = require('express');
const router = express.Router();
const quizResultsController = require('../Controllers/QuizResultsController');

// POST route to save quiz results
router.post('/', quizResultsController.saveQuizResults);

module.exports = router;
