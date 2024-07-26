const express = require("express")
const { SignupDetail } = require("../Model")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const profileRouter = express.Router()


profileRouter.get("/getUser", async (req, res) => {
    let token = req.headers.authorization;
    try {
        let decoded = jwt.verify(token, process.env.SecretKey);
        if (decoded) {
            let user = await SignupDetail.findOne({ Email: decoded });
            if (user) {
                res.send(user);
            } else {
                res.status(404).send({ "message": "User Not found" });
            }
        } else {
            res.status(401).send({ "message": "Invalid token" });
        }
    } catch (err) {
        console.error(err);
        res.status(401).send({ "message": "Token validation failed" });
    }
});

profileRouter.put("/Updateprofile", async (req, res) => {
    let data = req.body;
    let token = req.headers.authorization;
    try {
        let decoded = jwt.verify(token, process.env.SecretKey);
        if (decoded) {
            let user = await SignupDetail.findOne({ Email: decoded });
            if (user) {
                let updateData = {};
                if (data.Name) updateData.Name = data.Name;
                if (data.Age) updateData.Age = data.Age;
                if (data.Location) updateData.location = data.Location;
                if (data.Email) updateData.Email = data.Email;

                await SignupDetail.findByIdAndUpdate(user._id, updateData);

            
                let newToken = data.Email ? jwt.sign({ email: data.Email }, process.env.SecretKey) : token;

                res.status(200).send({ "message": "Profile updated successfully", "token": newToken, "newData": updateData });
            } else {
                res.status(404).send({ "message": "User Not Found" });
            }
        } else {
            res.status(401).send({ "message": "Invalid token" });
        }
    } catch (err) {
        console.error(err);
        res.status(401).send({ "message": "Token validation failed" });
    }
});

module.exports = { profileRouter }