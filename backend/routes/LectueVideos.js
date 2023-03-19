const express = require('express');
const router = express.Router();
const lectureVideosController = require('../Controllers/lectureVideosController');

// Create a new lecture video
router.post('/', lectureVideosController.createLectureVideo);

// Get all lecture videos for an examination
router.get('/examination/:examinationId', lectureVideosController.getLectureVideosForExamination);

// Get a specific lecture video
router.get('/:id', lectureVideosController.getLectureVideo);

// Update a lecture video
router.put('/:id', lectureVideosController.updateLectureVideo);

// Delete a lecture video
router.delete('/:id', lectureVideosController.deleteLectureVideo);

module.exports = router;
