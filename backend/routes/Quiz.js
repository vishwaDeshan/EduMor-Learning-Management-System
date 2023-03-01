const express = require('express');
const router = express.Router();
const Quiz = require('../models/quiz');

// Create a new quiz on a specific level
router.post('/level/:id/quiz/save', async (req, res) => {
  const quiz = new Quiz({
    quizName: req.body.quizName,
    questions: req.body.questions,
    level: req.params.id
  });

  try {
    const newQuiz = await quiz.save();
    res.status(201).json(newQuiz);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all quizzes for a given level ID
router.get('/level/:id', async (req, res) => {
  try {
    const quizzes = await Quiz.find({ level: req.params.id });
    res.status(200).json(quizzes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific quiz by ID
router.get('/level/quiz/:id', async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }
    res.status(200).json(quiz);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a quiz by ID
router.patch('/level/quiz/:id', async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }
    quiz.quizName = req.body.quizName || quiz.quizName;
    quiz.questions = req.body.questions || quiz.questions;
    quiz.level = req.body.level || quiz.level;

    const updatedQuiz = await quiz.save();
    res.status(200).json(updatedQuiz);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a quiz by ID
router.delete('/:id', async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }
    await quiz.remove();
    res.status(200).json({ message: 'Quiz deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
