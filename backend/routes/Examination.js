const express = require('express');
const router = express.Router();
const examinationController = require('../Controllers/examinationController');

// Create a new examination
router.post('/save', examinationController.createExamination);

// Get all examinations
router.get('/', examinationController.getAllExaminations);

// Get specific examination using ID
router.get('/:id', examinationController.getExaminationById);

// Update an examination by ID
router.put('/:id', examinationController.updateExaminationById);

// Delete an examination by ID
router.delete('/:id', examinationController.deleteExaminationById);

module.exports = router;
