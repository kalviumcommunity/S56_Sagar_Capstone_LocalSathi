const express = require('express')
const router = express.Router();
require("dotenv").config()
const { SignupDetail, GuideDetails } = require("../Model.js")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


router.post("/signup", async (req, res) => {
    console.log(req.body);
    try {
        let data = await SignupDetail.findOne({ Email: req.body.Email });
        if (data) {
            return res.status(200).send("User already exists"); 
        }

        let hashedPassword = await bcrypt.hash(req.body.Password, 10);
        await SignupDetail.create({
            ...req.body,
            Password: hashedPassword,
            points: 0,
            location: req.body.location || "", 
            profilePic: req.body.profilePic || "",
            coverPhoto: req.body.coverPhoto || "" 
        });
        res.status(201).send("User created successfully"); 
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

router.post("/guidesignup", async (req, res) => {
    console.log(req.body);
    try {
        let data = await GuideDetails.findOne({ Email: req.body.Email });
        if (data) {
            return res.status(200).send("User already exists"); // 409 Conflict
        }

        let hashedPassword = await bcrypt.hash(req.body.Password, 10);
        await GuideDetails.create({ ...req.body, Password: hashedPassword });
        res.status(201).send("Guide created successfully"); // 201 Created
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

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




