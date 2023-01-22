const multer = require('multer')

const storage =  multer.diskStorage({
    
    destination:  (req,file,cb)=>{
        console.log('mu')
        cb(null,"../frontend/src/images")
    },
    filename:(req,file,cb)=>{
        console.log('reached multer')
        console.log(file.images)
        cb(null, Date.now() + '-' + file.originalname )
    }

    
})

module.exports = storage
