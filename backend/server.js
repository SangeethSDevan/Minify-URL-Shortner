const mongoose =require("mongoose")
const app=require("./app")
require("dotenv").config()

const PORT=process.env.PORT

mongoose.connect(process.env.MONGODB).then(()=>{
    console.log("DB connection success!")
})

app.listen(PORT,console.log(`Server running on Port ${PORT}`))