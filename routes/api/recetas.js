const express=require("express");
const router=express.Router();

const uuid=require("uuid/v4");

var coleccionRecetas=[];

var estructuraRecetas= {
    "id":"uuid",
    "receta":"",
    "precio":"",
    "tipo":"",
    "obervacion":"",
    "estado":""
};

coleccionRecetas.push(
    Object.assign(
        estructuraRecetas,
        {
            "id":uuid(),
            "receta":"1 panadol al dia",
            "precio":"12",
            "tipo":"1",
            "obervacion":"sirve para el dolor de cabeza",
            "estado":"ACT"
        }


    )
);

router.get("/",(req,res,next)=>{
    res.status(200).json({Recetas:coleccionRecetas});
})

router.post("/", (req,res,next)=>{
    var nuevoElemento=Object.assign({},estructuraRecetas,{id:uuid()},req.body);
    coleccionRecetas.push(nuevoElemento);
    res.status(200).json({Recetas:coleccionRecetas});
})


module.exports=router;