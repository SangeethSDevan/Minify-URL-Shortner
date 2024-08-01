const jwt =require("jsonwebtoken")
require("dotenv").config()

const authenticator=(req,res,next)=>{
    
    const token=req.headers.authorization
    if(!token) return res.status(400).json({
        status:"fail",
        message:"No token,Login to continue!"
    })
    try{
        const decoded=jwt.verify(token,process.env.SECRET)
        req.body.userId=decoded.id
        next()
    }catch(err){
        console.log(err)
        res.status(400).json({
            status:"fail",
            messsage:"Token expired login to continue"
        })
    }
}

module.exports=authenticator