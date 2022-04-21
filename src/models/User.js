const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique: true

    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:false
    },
    createdDate:{
        type:Date,
        default:Date.now
    },

})



module.exports= mongoose.model('Users',userSchema);