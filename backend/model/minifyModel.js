const mongoose =require("mongoose")
const shortid=require("shortid")


const minifySchema=mongoose.Schema({
    url:{
        type:String,
        required:true,
    },
    userId:{
        type:String,
        required:true
    },
    shortid:{
        type:String,
        required:true,
        default:shortid.generate,
        unique:true,
    },
    clicks:{
        type:Number,
        default:0
    }
})

module.exports=mongoose.model("minify",minifySchema)