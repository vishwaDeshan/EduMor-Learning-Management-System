const express = require("express");
const Advertisements = require('../models/Advertisement');

const router = express.Router();

// save ads details
router.post('/advertisements/save', (req, res) => {
    let newAdvertisement = new Advertisements(req.body);
    newAdvertisement.save((err => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: "Advertisement save Succesfully"
        });
    }));
});

//Get ads details
router.get('/advertisements', (req, res) => {
    Advertisements.find().exec((err, advertisements) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: true,
            existingAds: advertisements
        });
    });
});

//update ads details
router.put('/advertisement/update/:id', (req, res) => {
    Advertisements.findByIdAndUpdate(
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

//Delete ads details
router.delete('/advertisement/delete/:id', (req, res) => {
    Advertisements.findByIdAndRemove(req.params.id).exec((err, deletedDetails) => {
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