const { uploadimage, getallimage, getimgdetails } = require('../controller/Imagecontroller')
const { register, login, checkuser,  } = require('../controller/Usercontroller')

const { Verifyuser } = require('../Middlewares/Usermiddleware')

const router = require('express').Router()
router.post('/signup',register)
router.post('/login',login)
router.post('/',Verifyuser)
router.post('/uploadimage',Verifyuser,uploadimage)
router.post('/getallimage',Verifyuser,getallimage)
router.post('/checkuser',Verifyuser,checkuser)
router.post('/getimgdetails/:id',Verifyuser,getimgdetails)
module.exports = router