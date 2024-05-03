const mongoose = require("mongoose")


const SignUpSchema = new mongoose.Schema({
    Name:String,
    Email:String,
    Age:Number,
    Password:String,
    
})

const SignupDetail = mongoose.model("signups",SignUpSchema)

module.exports={SignupDetail}