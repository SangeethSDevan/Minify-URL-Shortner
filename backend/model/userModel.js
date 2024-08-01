const mongoose =require("mongoose")

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
        default:"User"
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("User",userSchema)