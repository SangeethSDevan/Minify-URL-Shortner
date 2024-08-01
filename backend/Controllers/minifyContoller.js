const minify=require("../model/minifyModel")

exports.toShortify=async(req,res)=>{
    const {url}=req.body
    try{
         req.body.url = url.includes("http://") || url.includes("https://") 
      ? url 
      : `http://${url}`;
        await minify.create(req.body)
        res.status(201).json({
            status:"success",
            message:"Component created!"
        })
    }catch(err){
        res.status(400).json({
            message:err
        })
    }
}
exports.toLongify=async(req,res)=>{
    try{
        const data=await minify.findOne({shortid:req.params.shortid})
        res.status(300).redirect(data.url)
        data.clicks++
        data.save()
    }catch(err){
        res.status(400).json({
            message:err
        })
    }
}
exports.getLinks=async(req,res)=>{
    try{
        const data=await minify.find({userId:req.body.userId})
        res.status(200).json({
            status:"success",
            length:data.length,
            base:`${req.protocol}://${req.get('host')}`,
            data
        })
    }catch(err){
        res.status(400).json({
            status:"fail",
            message:"Fetching failed check your Internet"
        })
    }
}

exports.deleteLink = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await minify.findByIdAndDelete(id);
        if (!data) {
            return res.status(404).json({
                status: "fail",
                message: "No document found with the given ID"
            });
        }

        res.status(200).json({
            status: "success",
            message: "Document successfully deleted",
            data: data
        });
    } catch (err) {
        res.status(500).json({
            status: "fail",
            message: "An error occurred while deleting the document",
            error: err.message
        });
    }
};