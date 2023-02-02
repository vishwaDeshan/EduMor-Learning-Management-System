const express = require("express");
const Students = require('../models/Student');

const router = express.Router();

// save students details
router.post('/students/save', (req, res) => {
    let newStudent = new Students(req.body);
    newStudent.save((err => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: "Student save Succesfully"
        });
    }));
});

//Get student details
router.get('/students', (req, res) => {
    Students.find().exec((err, students) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: true,
            existingStudents: students
        });
    });
});

//update student details
router.put('/student/update/:id', (req, res) => {
    Students.findByIdAndUpdate(
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
router.delete('/student/delete/:id',(req,res)=>{
    Students.findByIdAndRemove(req.params.id).exec((err,deletedDetails)=>{
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