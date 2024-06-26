const express = require("express");
const app = express();
require("dotenv").config();

const PORT = 4000 || process.env.PORT
app.listen(PORT,()=>{
    console.log(`Running succesfully on PORT NO. ${PORT}`)
})

app.get('/',(req,res)=>{
    res.send('<h1>AbilityEx Backend HomePage</h1>')
})