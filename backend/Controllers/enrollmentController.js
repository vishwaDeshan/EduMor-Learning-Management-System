const Enrollment = require('../models/Enrollment');

// Controller for enrolling a user in an examination
exports.enrollUser = async (req, res) => {
  const { userId, examinationId } = req.body;

  try {
    const enrollment = new Enrollment({
      user: userId,
      examination: examinationId
    });

    await enrollment.save();

    res.status(200).json({ message: 'User enrolled successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller for getting the enrolled examinations for a particular user
exports.getEnrollments = async (req, res) => {
  const userId = req.params.userId;

  try {
    const enrollments = await Enrollment.find({ user: userId })
      .populate('examination', 'title description')
      .select('examination');

    res.status(200).json(enrollments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
