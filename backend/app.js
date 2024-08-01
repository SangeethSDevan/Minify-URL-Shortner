const express=require('express')
const minifyRouter=require("./Router/minifyRouter")
const userRouter=require("./Router/userRouter")
const { toLongify } = require('./Controllers/minifyContoller')
const cors=require("cors")

const app=express()

app.use(cors())
app.use(express.json())

app.use("/api/v1/user",userRouter)
app.use("/api/v1/shortify",minifyRouter)
app.use("/:shortid",toLongify)

module.exports=app