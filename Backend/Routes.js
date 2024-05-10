const express = require('express')
const router = express.Router();
require("dotenv").config()
const mongoose = require("mongoose")
const {SignupDetail} = require("./Model.js")
const bcrypt = require("bcryptjs")
const jwt = require ("jsonwebtoken")


router.post("/signup",async (req,res)=>{

    console.log(req.body)
    let data = await SignupDetail.find({Email : req.body.Email})
    console.log(data.length)
    if(data.length != 0){
        res.send("User already Exists")
    }else{
        try{
            let hashedPassword =  await bcrypt.hash(req.body.Password,10)
            await SignupDetail.create({...req.body,Password:hashedPassword})
            res.send("Success")
        }catch(err){
            res.status(500).send("Internal Server Error")
        }
    }
})

router.post("/login" , async (req,res)=>{
    let data = await SignupDetail.find({Email: req.body.Email})
    console.log(req.body.Password , data)
    if(data){
        hashedPassword = await bcrypt.compare(req.body.Password , data[0].Password)
        if(hashedPassword){
            res.send("Login Success")
        }else{
            res.send("Password Wrong")
        }
    }else{
        res.send("User not exist")
    }
})

module.exports = {router}




