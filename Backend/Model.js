const mongoose = require("mongoose")


const SignUpSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Age: {
        type: Number,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    location: String,
    points: Number,
    profilePic: String,
    coverPhoto: String,
    favourites: Array,
    bookings: Array
})

const guideSchema = new mongoose.Schema({
    Name: String,
    Email: String,
    Age: Number,
    Password: String,
})

const SignupDetail = mongoose.model("signups", SignUpSchema)
const GuideDetails = mongoose.model("guides", guideSchema)

module.exports = { SignupDetail, GuideDetails }