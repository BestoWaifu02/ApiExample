
const {Router}=require('express')
const router =Router()
//Routes
router.get('/',(req,res)=>{


    const data={
        "name":'Diego',
        'website':'www.BestoWaifu02.com'
    }
    res.json(data)
})

module.exports=router

