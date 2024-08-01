const express= require("express")
const minifyController=require("../Controllers/minifyContoller")
const authenticator = require("../authenticator")

const router=express.Router()

router.use(authenticator)

router.post("/",minifyController.toShortify)
      .get("/",minifyController.getLinks)
      .delete("/delete/:id",minifyController.deleteLink)
module.exports=router