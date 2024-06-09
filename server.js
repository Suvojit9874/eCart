const express= require('express');
require('dotenv').config();
const dbConnect= require('./config/database');
const app= express();
const productRouter=require('./routes/product')
const orderRouter=require('./routes/orderRoute')
const PORT = process.env.PORT || 5000;

app.use(express.json());


app.use('/',productRouter)
app.use('/',orderRouter)

dbConnect();

app.get('/',(req,res)=>{
    res.send('hi')
})
app.listen(PORT,()=> console.log(`Server is Running at ${PORT}`))
