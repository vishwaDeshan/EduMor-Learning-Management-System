const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    emailVerificationToken: {
        type: String,
        default: "",
    },
    verified: {
        type: Boolean,
        default: false
    },
    birthday: {
        type: String,
    },
    phonenumber: {
        type: String,
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

module.exports = mongoose.model('Users', UserSchema);