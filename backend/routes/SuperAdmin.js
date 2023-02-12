const express = require("express");
const SuperAdmin = require('../models/SuperAdmin');

const router = express.Router();

// save students details
router.post('/superadmin/save', (req, res) => {
    let newSuperAdmin = new SuperAdmin(req.body);
    newSuperAdmin.save((err => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: "Super Admin save Succesfully"
        });
    }));
});

//Get student details
router.get('/superadmin', (req, res) => {
    SuperAdmin.find().exec((err, superadmin) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: true,
            existingSuperAdmin: superadmin
        });
    });
});

//update student details
router.put('/superadmin/update/:id', (req, res) => {
    SuperAdmin.findByIdAndUpdate(
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
router.delete('/superadmin/delete/:id', (req, res) => {
    SuperAdmin.findByIdAndRemove(req.params.id).exec((err, deletedDetails) => {
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