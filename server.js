const express= require('express');
require('dotenv').config();
const dbConnect= require('./config/database');
const app= express();
const productRouter=require('./routes/product')
const orderRouter=require('./routes/orderRoute')
const cartRouter=require('./routes/CartRoute') // 1
const PORT = process.env.PORT || 5000;

app.use(express.json());


app.use('/api/v1',productRouter)
app.use('/',orderRouter)
app.use('/api/v1',cartRouter)   //2

dbConnect();

app.get('/',(req,res)=>{
    res.send('hi')
})
app.listen(PORT,()=> console.log(`Server is Running at ${PORT}`))
