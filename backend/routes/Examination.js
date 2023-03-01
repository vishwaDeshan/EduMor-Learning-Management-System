const express = require('express');
const router = express.Router();
const Examination = require('../models/examination');
const Student = require('../models/Student');

// Create a new examination
router.post('/examination/save', async (req, res) => {
  const examination = new Examination({
    examName: req.body.examName,
    description: req.body.description,
    photo: req.body.photo,
    lectureVideos: req.body.lectureVideos,
    levels: req.body.levels
  });

  try {
    const newExamination = await examination.save();
    res.status(201).json(newExamination);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all examinations
router.get('/examinations', async (req, res) => {
  try {
    const examinations = await Examination.find();
    res.status(200).json(examinations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get specific examination using ID
router.get('/examinations/:id', (req, res) => {
  Examination.findById(req.params.id).exec((err, examination) => {
      if (err) {
          return res.status(400).json({
              error: err
          });
      }
      return res.status(200).json({
          success: true,
          examination: examination
      });
  });
});

// Update an examination by ID
router.put('/:id', getExamination, async (req, res) => {
  if (req.body.examName != null) {
    res.examination.examName = req.body.examName;
  }
  if (req.body.description != null) {
    res.examination.description = req.body.description;
  }
  if (req.body.photo != null) {
    res.examination.photo = req.body.photo;
  }
  if (req.body.lectureVideos != null) {
    res.examination.lectureVideos = req.body.lectureVideos;
  }
  if (req.body.levels != null) {
    res.examination.levels = req.body.levels;
  }
  try {
    const updatedExamination = await res.examination.save();
    res.json(updatedExamination);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete an examination by ID
router.delete('/:id', getExamination, async (req, res) => {
  try {
    await res.examination.remove();
    res.json({ message: 'Examination deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware to get a single examination by ID
async function getExamination(req, res, next) {
  let examination;
  try {
    examination = await Examination.findById(req.params.id).populate('levels');
    if (examination == null) {
      return res.status(404).json({ message: 'Cannot find examination' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.examination = examination;
  next();
}

// Route for enrolling a student in an examination
router.post('/:id/enroll', async (req, res) => {
  const { id } = req.params;
  const { studentId } = req.body;

  try {
    // Find the examination by ID
    const examination = await Examination.findById(id);

    // Find the student by ID
    const student = await Student.findById(studentId);

    // Add the enrolled student to the examination
    examination.students.push(student);

    // Save the updated examination
    await examination.save();

    res.status(200).send({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'An error occurred while enrolling the student.' });
  }
});

// POST /examinations/:id/lecture-videos
router.post('/:id/lecture-videos', async (req, res) => {
  const { videoName, videoUrl } = req.body;
  const { id } = req.params;
  
  try {
    const examination = await Examination.findById(id);
    if (!examination) {
      return res.status(404).send('Examination not found');
    }
    
    const newLectureVideo = {
      videoName,
      videoUrl
    };
    
    examination.lectureVideos.push(newLectureVideo);
    await examination.save();
    
    res.send(examination);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;