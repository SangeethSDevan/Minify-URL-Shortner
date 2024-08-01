const User=require("../model/userModel")
const bcrypt = require("bcryptjs")
const jwt =require("jsonwebtoken")
require("dotenv").config()

exports.createUser=async(req,res)=>{
    const {password}=req.body
    try{
        const hash=await bcrypt.hash(password,10)
        await User.create({...req.body,password:hash})
        res.status(201).json({
            status:"success",
            message:"Profile Created! Login to Continue!"
        })
    }catch(err){
        res.status(400).json({
            message:"We think email already exist!"
        })
    }
}

exports.loginUser=async(req,res)=>{
    try{
        const data=await User.find({email:req.body.email})
        if(data.length===0) {
            return res.status(404).json({message:"Person doesn't exist"})
        }
        const isUser=await bcrypt.compare(req.body.password,data[0].password)
        if(isUser){
            const token=jwt.sign({id:data[0]._id},process.env.SECRET)
            return res.status(200).json({
                status:"success",
                user:data[0].username,
                token:token
            })
        }
        return res.status(400).json({
            status:"fail",
            message:"Incorrect Password try again"
        })
    }catch(err){
        res.status(400).json({message:err})
    }
}