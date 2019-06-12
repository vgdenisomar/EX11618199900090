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

router.get("/:id", (req,res,next)=>{
    if  (!req.params.id) return next();
    var id = req.params.id;
    var recetas = coleccionRecetas.filter((e, i) => {
      return (e.id === id);
    });
  
    if (recetas.length > 0) {
      res.status(200).json(recetas[0]);
    } else {
      res.status(404).json({});
  }
})

router.put("/:id", (req,res,next)=>{
    var id = req.params.id;
    var recetaModificada = {};
    var recetaOriginal = {};
    coleccionRecetas = coleccionRecetas.map( (e, i) => {
      if(e.id === id){
        recetaOriginal = Object.assign({}, e);
        return recetaModificada = Object.assign({}, e, req.body);
      }
      return e;
    });
    res.status(200).json({ Original: recetaOriginal, Modificada: recetaModificada});
})


router.delete("/:id", (req,res,next)=>{
    var id = req.params.id;
    var recetaEliminada = {};
    coleccionRecetas = coleccionRecetas.map( (e, i) => {
      if(e.id === id){
        recetaEliminada = Object.assign({}, e);
        return false
      }
      return true;
    });
    res.status(200).json({ Elimanda: recetaEliminada, Recetas: coleccionRecetas});
})



module.exports=router;