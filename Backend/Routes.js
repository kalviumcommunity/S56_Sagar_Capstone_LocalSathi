const express = require('express')
const router = express.Router();
require("dotenv").config()
const mongoose = require("mongoose")
const {SignupDetail} = require("./Model.js")

router.post("/SignUp",async (req,res)=>{

    console.log(req.body)
    try{
        await SignupDetail.create(req.body)
        res.send("Success")
    }catch(err){
        res.status(500).send("Internal Server Error")
    }
})

module.exports = {router}




