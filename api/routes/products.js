const express = require('express')
const router = express.Router()

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:"GET Method"
    })
})


router.post('/', (req,res,next)=>{
    res.status(200).json({
        message:"POST Method"
    })
})

module.exports = router;

