const express = require("express");
const News = require('../models/News');

const router = express.Router();

// save students details
router.post('/news/save', (req, res) => {
    let newNews = new News(req.body);
    newNews.save((err => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: "News save Succesfully"
        });
    }));
});

//Get student details
router.get('/news', (req, res) => {
    News.find().exec((err, news) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: true,
            existingNews: news
        });
    });
});

//update student details
router.put('/news/update/:id', (req, res) => {
    News.findByIdAndUpdate(
        req.params.id, {
        $set: req.body
    },
        (err, post) => {
            if (err) {
                return res.status(400).json({ error: err });
            }
            return res.status(200).json({
                success: "Updated Succesfully"
            });
        }

    );
});

//Delete students details
router.delete('/news/delete/:id', (req, res) => {
    News.findByIdAndRemove(req.params.id).exec((err, deletedDetails) => {
        if (err) {
            return res.status(400).json({
                message: "Deleted unsuccesfull", err
            });
        }
        return res.json({
            message: "Delete succesfull", deletedDetails
        });
    });
});

module.exports = router;