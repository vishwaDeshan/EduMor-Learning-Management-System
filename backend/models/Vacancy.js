const mongoose = require("mongoose");

const VacancySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    closingDate: {
        type: String,
        required: true
    }

}, { timestamps: true });

module.exports = mongoose.model('Vacancies', VacancySchema);