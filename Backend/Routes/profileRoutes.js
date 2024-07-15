const express = require("express")
const { SignupDetail } = require("../Model")
const jwt = require("jsonwebtoken")

const profileRouter = express.Router()

profileRouter.get("/getUser", async (req, res) => {
    let token = req.headers.authorization
    let decoded = jwt.verify(token, "SECRET")
    console.log(decoded)
    if (decoded) {
        let user = await SignupDetail.findOne({ Email: decoded })
        if (user) {
            res.send(user)
        } else {
            res.status(404).send({ "message": "User Not found" })
        }
    } else {
        res.status(404).send({ "message": "User Not found" })
    }
})

profileRouter.put("/Updateprofile",async(req,res)=>{
    let data = req.body
    let token = req.headers.authorization
    let decoded = jwt.verify(token,"SECRET")
    console.log(decoded)
    if (decoded){
        let user = await SignupDetail.findOne({Email:decoded})
        if(user){
            let updateData = {};
            if (data.Name) updateData.Name = data.Name;
            if (data.Age) updateData.Age = data.Age;
            if (data.Location) updateData.location = data.Location;
            if (data.Email) updateData.Email = data.Email;

            await SignupDetail.findByIdAndUpdate(user._id,updateData)

            let newToken = jwt.sign(updateData.Email , "SECRET")

            res.status(200).send({ "message": "Profile updated successfully" , "token":newToken,'newData':updateData});
        } 
        else{
            res.status(404).send({"message":"User Not Found"})
        }
    }else{
        res.status(404).send({"message":"Token Invalid"})
    }

 })

module.exports = { profileRouter }