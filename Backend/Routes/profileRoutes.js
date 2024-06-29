const express = require("express")
const {SignupDetail} = require("../Model")
const jwt = require("jsonwebtoken")

const profileRouter = express.Router()

profileRouter.get("/getUser" , async (req,res)=>{
    let token = req.headers.authorization
    let decoded = jwt.verify(token,"SECRET")
    console.log(decoded)
    if (decoded){
        let user = await SignupDetail.findOne({Email: decoded})
        if (user){
            res.send(user)
        }else{
            res.status(404).send({"message" : "User Not found"})
        }
    }else{
        res.status(404).send({"message" : "User Not found"})
    }  
})

module.exports = {profileRouter}