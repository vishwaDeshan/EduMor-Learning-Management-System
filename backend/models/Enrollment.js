const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
    user: {
        type: String
    },
    examination: {
        type: String
    }
}, { timestamps: true });

const Enrollment = mongoose.model('Enrollment', enrollmentSchema);

module.exports = Enrollment;
