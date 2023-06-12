const express = require("express");
const router = express.Router();
<<<<<<< HEAD
const authMiddleware = require('../Middlewares/authMiddleware');
const newsController = require('../controllers/newsController');

=======
const newsController = require('../controllers/newsController');
>>>>>>> parent of 8e3ce3e (MakesomeChanges on AdminDashbord)

//post news
router.post('/save', newsController.saveNews);

//get all news
router.get('/',authMiddleware, newsController.getNews);

//update a specific news
router.put('/update/:id', newsController.updateNews);

//delete a specific news
router.delete('/delete/:id', newsController.deleteNews);

module.exports = router;
