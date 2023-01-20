const multer = require("multer")
const { uploadimagehelper, getallimagehelper } = require("../helpers/Imagehelpers")
const storage = require("../helpers/Multerhelpers")

module.exports.uploadimage = async(req,res,next)=>{
    console.log(req.body)
    
    const upload = multer({storage:storage}).single('images')
    upload(req,res,async()=>{
        console.log(req.body)
        console.log(req.file)
         console.log(res.userdetails)
         const imagedata = {
            description:req.body.description,
            image:req.file.filename,
            user:res.userdetails
         }
         await uploadimagehelper(imagedata).then((data)=>{
            res.json({status:true,imageid:data,message:'image upload succesfull'})
         })

    })
}
module.exports.getallimage = async(req,res,next)=>{
    let allimages = await getallimagehelper()
    res.json({status:true,images:allimages})

}