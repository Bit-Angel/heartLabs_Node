const {Router} = require('express');
const router = Router();

router.get('/:id/:nombre/:precio/:fecha/:name/:lastname',(req,res)=>{
    const data ={
        id:req.params.id, 
        nombre:req.params.nombre, 
        precio:req.params.precio, 
        fecha:req.params.fecha,
        name:req.params.name,
        lastname:req.params.lastname,
    }
    res.render('index', {datos: data});
});

module.exports = router;