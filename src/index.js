//IMPORTS
const express =  require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

//INIT EXPRESS
const app = express();

//SAVE VALUE PORT 
const port = process.env.PORT || 3000;


require('dotenv').config()
app.use(bodyParser.json())




//INITIAL ROUTE
app.get('/',(req,res)=>{
    res.send('Welcome to the users api.')
})


//CONNECT TO DATABASE MONGODB
mongoose.connect(process.env.DATABASE_CONNECTION,{useNewUrlParser: true,
    useUnifiedTopology: true },err=>{
    if(err) console.log(err)
      console.log('Connected to mongodb')
})


app.listen(port,()=>console.log('Server listening on port:'+port))

