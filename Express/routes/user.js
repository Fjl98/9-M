const express = require('express');
const router = express.Router();

const usuarios = [{
    nombre:"Javi",
    apellido:"Gomez",
},
];
router.use(function timeLog(req,res, next) {
    next();
});

router.get("/",(req,res) => {
    res.send("user list");
});
router.get("/new",(req,res) => {
    res.send("user form");
});
router.get("/:id",(req,res) => {
    res.send("Get user whith id:  " + req.params.id);
});

router.param("id",(req,res, next ,id) => {
    console.log(id);
    next();
});







module.exports = router;