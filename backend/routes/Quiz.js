const express = require('express');
const router = express.Router();
const QuizController = require('../controllers/QuizController');

router.post('/level/:id/quiz/save', QuizController.createQuiz);
router.get('/level/:id', QuizController.getQuizzesByLevel);
router.get('/level/quiz/:id', QuizController.getQuizById);
router.patch('/level/quiz/:id', QuizController.updateQuizById);
router.delete('/:id', QuizController.deleteQuizById);

module.exports = router;
