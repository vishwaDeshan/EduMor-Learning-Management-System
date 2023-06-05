const QuizResult = require('../models/QuizResult');

const saveQuizResults = async (req, res) => {
  const { userId, quizAnswers,level,examinationId,percentage} = req.body;

  try {
    const quizResult = new QuizResult({
      userId,
      quizAnswers,
      level,
      examinationId,
      percentage
    });

    await quizResult.save();
    res.status(200).json({ message: 'Quiz results saved successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save quiz results.' });
  }
};

module.exports = {
  saveQuizResults
};
