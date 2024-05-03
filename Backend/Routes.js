const express = require('express')
const router = express.Router();
require("dotenv").config()
const mongoose = require("mongoose")
const {SignupDetail} = require("./Model.js")
const bcrypt = require("bcryptjs")


router.post("/SignUp",async (req,res)=>{

    console.log(req.body)
    try{
        let hashedPassword =  await bcrypt.hash(req.body.Password,10)
        await SignupDetail.create({...req.body,Password:hashedPassword})
        res.send("Success")
    }catch(err){
        res.status(500).send("Internal Server Error")
    }
})

module.exports = {router}




