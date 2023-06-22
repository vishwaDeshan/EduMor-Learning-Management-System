const express = require("express");
const advertisementsController = require("../Controllers/advertisementsController");

const router = express.Router();

//post an advertisement
router.post("/save", advertisementsController.saveAdvertisement);

//get all advertisemets
router.get("/", advertisementsController.getAdvertisements);

//get a specific advertisement
router.put("/update/:id", advertisementsController.updateAdvertisement);

//delete a specific advertisement
router.delete("/delete/:id", advertisementsController.deleteAdvertisement);

module.exports = router;
