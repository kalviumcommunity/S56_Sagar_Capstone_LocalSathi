const express = require('express')
const router = express.Router();
require("dotenv").config()
const { SignupDetail, GuideDetails } = require("../Model.js")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


router.post("/signup", async (req, res) => {
    console.log(req.body)
    let data = await SignupDetail.find({ Email: req.body.Email })
    console.log(data.length)
    if (data.length != 0) {
        res.send("User already Exists")
    } else {
        try {
            let hashedPassword = await bcrypt.hash(req.body.Password, 10)
            await SignupDetail.create({ ...req.body, Password: hashedPassword, points: 0, location: "", profilePic: "", coverPhoto: "" })
            res.send("Success")
        } catch (err) {
            res.status(500).send("Internal Server Error")
        }
    }
})

router.post("/guidesignup", async (req, res) => {
    console.log(req.body)
    let data = await GuideDetails.find({ Email: req.body.Email })
    console.log(data.length)
    if (data.length != 0) {
        res.send("User already Exists")
    } else {
        try {
            let hashedPassword = await bcrypt.hash(req.body.Password, 10)
            await GuideDetails.create({ ...req.body, Password: hashedPassword })
            res.send("Success")
        } catch (err) {
            res.status(500).send("Internal Server Error")
        }
    }
})

router.post("/login", async (req, res) => {
    let data = await SignupDetail.findOne({ Email: req.body.Email })
    console.log(req.body.Password, data)
    if (data) {
        hashedPassword = bcrypt.compare(req.body.Password, data.Password)
        if (hashedPassword) {
            let token = jwt.sign(data.Email, "SECRET")
            res.send({ message: "Login Success", token: token })
        } else {
            res.send("Password Wrong")
        }
    } else {
        res.send("User not exist")
    }
})




module.exports = { router }




