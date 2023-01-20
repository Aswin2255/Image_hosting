const { uploadimage, getallimage } = require('../controller/Imagecontroller')
const { register, login,  } = require('../controller/Usercontroller')

const { Verifyuser } = require('../Middlewares/Usermiddleware')

const router = require('express').Router()
router.post('/signup',register)
router.post('/login',login)
router.post('/',Verifyuser)
router.post('/uploadimage',Verifyuser,uploadimage)
router.post('/getallimage',Verifyuser,getallimage)
module.exports = router