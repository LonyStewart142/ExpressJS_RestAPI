//IMPORTS
const express =  require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

//
require('dotenv').config()

//IMPORT ROUTES
const userRoutes = require('./routes/users')

//SAVE VALUE PORT 
const port = process.env.PORT || 3000;


const startServer = async () => {

//INIT EXPRESS
const app = express();

//CONNECT TO DATABASE MONGODB
await mongoose.connect(process.env.DATABASE_CONNECTION,{
    useNewUrlParser: true 
  })


app.use(bodyParser.json())


//INITIAL ROUTE
app.get('/',(req,res)=>{
    res.send('Welcome to the users api.')
})

//USER ROUTES
app.use('/users',userRoutes)


app.listen(port,()=>console.log('Server listening on port:'+port))

}


startServer();