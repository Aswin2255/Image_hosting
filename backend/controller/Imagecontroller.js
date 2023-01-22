const multer = require("multer")
const { uploadimagehelper, getallimagehelper, getimage } = require("../helpers/Imagehelpers")
const storage = require("../helpers/Multerhelpers")

module.exports.uploadimage = async(req,res,next)=>{
    console.log('reached the upload image')
    
  const upload =   multer({storage: storage}).single('images')
  
  
    upload(req,res,async()=>{
    
    console.log(req.file)
     console.log(res.userdetails)
     const imagedata = {
        image:req.file.filename,
        user:res.userdetails
     }
     await uploadimagehelper(imagedata).then((data)=>{
        res.json({status:true,imageid:data,message:'image upload succesfull'})
     })

})





}
module.exports.getallimage = async(req,res,next)=>{
    console.log('imagessssssssssssssssssssssssssssssssssssssssssssssssssssssss')
    let allimages = await getallimagehelper()
    console.log(res.userdetails)
    res.json({status:true,images:allimages,currentuser:res.userdetails.username})

}
module.exports.getimgdetails = async(req,res,next)=>{
    const id = req.params.id
    let images = await getimage(id)
    res.json({status:true,images:images,currentuser:res.userdetails.username})

}