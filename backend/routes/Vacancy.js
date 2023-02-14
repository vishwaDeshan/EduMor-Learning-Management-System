const express = require("express");
const Vacancies = require('../models/Vacancy');

const router = express.Router();

// save students details
router.post('/vacancies/save', (req, res) => {
    let newVacancy = new Vacancies(req.body);
    newVacancy.save((err => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: "Vacancy save Succesfully"
        });
    }));
});

//Get student details
router.get('/vacancies', (req, res) => {
    Vacancies.find().exec((err, vacancies) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: true,
            existingVacancies: vacancies
        });
    });
});

//update student details
router.put('/vacancy/update/:id', (req, res) => {
    Vacancies.findByIdAndUpdate(
        req.params.id, {
        $set: req.body
    },
    (err,post)=>{
        if(err){
            return res.status(400).json({error:err});
        }
        return res.status(200).json({
            success:"Updated Succesfully"
        });
    }
        
    );
});

//Delete students details
router.delete('/vacancy/delete/:id',(req,res)=>{
    Vacancies.findByIdAndRemove(req.params.id).exec((err,deletedDetails)=>{
        if(err){
            return res.status(400).json({
                message:"Deleted unsuccesfull", err
            });
        }
        return res.json({
            message:"Delete succesfull", deletedDetails
        });
    });
});

module.exports = router;