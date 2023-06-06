const QuizResult = require('../models/QuizResult');


//saving quiz results
exports.saveQuizResults = async (req, res) => {
  const { userId, quizAnswers,level,examinationId,percentage,quizName,quizId} = req.body;

  try {
    const quizResult = new QuizResult({
      userId,
      quizAnswers,
      level,
      examinationId,
      percentage,
      quizName,
      quizId
    });

    await quizResult.save();
    res.status(200).json({ message: 'Quiz results saved successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save quiz results.' });
  }
};

//Finding records which belong to both userId and examinationId
exports.getQuizResults = (req, res) => {
  const userId = req.params.userId;
  const examinationId = req.params.examinationId;

  QuizResult.find({ userId, examinationId })
    .then(results => {
      res.json({ success: true, results });
    })
    .catch(error => {
      res.status(500).json({ success: false, error: error.message });
    });
};
