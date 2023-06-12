const express = require("express");
const router = express.Router();
const newsController = require('../Controllers/newsController');

//post news
router.post('/save', newsController.saveNews);

//get all news
router.get('/', newsController.getNews);

//update a specific news
router.put('/update/:id', newsController.updateNews);

//delete a specific news
router.delete('/delete/:id', newsController.deleteNews);

module.exports = router;
