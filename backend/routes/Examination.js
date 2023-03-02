const express = require('express');
const router = express.Router();
const Examination = require('../models/examination');

// Get all examinations
router.get('/examinations', async (req, res) => {
  try {
    const examinations = await Examination.find();
    res.status(200).json(examinations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

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

// Get a single examination by ID
router.get('/:id', getExamination, (req, res) => {
  res.json(res.examination);
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

module.exports = router;