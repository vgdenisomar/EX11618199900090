const express=require("express");
const router=express.Router();


router.get("/",(req,res,next)=>{
    res.status(200).json({Mensaje:"Bienvenido al examen del primer parcial de SW"})
})

module.exports=router;
