const express = require("express");
const connectWithDB = require("./config/database")
const cors = require('cors');
require("dotenv").config();
const router=require("./Routes/routes")

const app = express();

//middleware to parse JSON bodies
app.use(express.json());
app.use(cors({
    origin:'http://localhost:5173'
}))
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

app.use('/api/v1',router)