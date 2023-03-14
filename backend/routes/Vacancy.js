const express = require("express");
const router = express.Router();
const VacanciesController = require('../controllers/VacanciesController');

// Save vacancies details
router.post('/vacancies/save', VacanciesController.saveVacancy);

// Get all vacancies details
router.get('/vacancies', VacanciesController.getVacancies);

// Update vacancies details
router.put('/vacancy/update/:id', VacanciesController.updateVacancy);

// Delete vacancies details
router.delete('/vacancy/delete/:id', VacanciesController.deleteVacancy);

module.exports = router;
