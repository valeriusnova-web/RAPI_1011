


const express=require("express");
const { error } = require("node:console");
const app=express();
const PORT=300

app.get("/kvadrat/:n", (req,rest)=>
{
    const broj=Number(req,parms.n);//kada nema upitnika nego je samo broj
    if (!Number.isInteger(broj))

    {
        res.status(400).json({error:"Podataka nije broj"});
    }
    else
    {
        res.json({rezultat:broj*broj});
    }

});

app.listen(PORT, ()=>
{
    console.log("Server radi na portu $(PORT)}");

});
