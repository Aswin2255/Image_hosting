const multer = require('multer')

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"../backend/public")
    },
    filename:(req,file,cb)=>{
        console.log(file)
        cb(null, Date.now() + '-' + file.originalname )
    }

    
})

module.exports = storage
