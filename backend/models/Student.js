const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    birthday: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    street: {
        type: String,

    },
    city: {
        type: String,

    },
    zipCode: {
        type: String,

    },
    state: {
        type: String,

    },
    profilePhoto: {
        type: String
    }

}, { timestamps: true });

module.exports = mongoose.model('Students', StudentSchema);