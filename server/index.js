const express = require("express");
const connectWithDB = require("./config/database")
require("dotenv").config();

const app = express();

//middleware to parse JSON bodies
app.use(express.json());
//Connecting with DB
connectWithDB();

const PORT = process.env.PORT

//Starting server 
app.listen(PORT,()=>{
    console.log(`Running succesfully on PORT NO. ${PORT}`)
})

app.get('/',(req,res)=>{
    res.send('<h1>AbilityEx Backend HomePage</h1>')
})