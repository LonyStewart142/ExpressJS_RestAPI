const express = require("express");

const router = express.Router();

const User = require('../models/User');


//GET ALL USER
router.get('/', async (req,res)=>{

    try {
        
        const users = await User.find();
        res.status(200).json({success:true,data:users});

    } catch (err) {
        res.json({success:false,data:null,message:err})
    }
})

//GET SPECIFIC USER
router.get('/:userId', async (req,res)=>{

    try {
        
        const user = await User.findById(req.params.userId);
        res.status(200).json({success:true,data:user});


    } catch (err) {
        res.json({success:false,data:null,message:err})
    }
})


//POST USER
router.post('/', async (req,res)=>{
    
    const userExist=  await User.findOne({email:req.body.email});
     if(userExist)
        { 
         res.status(200).json({success:false,data:null,message:"Este usuario ya esta registrado"})
         return;
        }

    const postUser = new User({
       email:     req.body.email,
       firstName: req.body.firstName,
       lastName:  req.body.lastName,
       password:  req.body.password,
       role:      req.body.role
    });

   try {

     const savePost= await postUser.save();
     res.status(200).json({success:true,data:savePost});
  
    } catch (err) {
      res.json({success:false,data:null,message:err})
   }
})


//UPDATE POST
router.put('/:userId', async (req,res)=>{
 

    try {

     let userToUpdate= await User.findById(req.params.userId);  

     if (!userToUpdate) 
        {
            res.status(200)
               .json(
                {success:false,data:null,message:"El usuario no existe"}
                )
            return;
        }
     
        userToUpdate = await User.findByIdAndUpdate(req.params.userId, req.body, {
                        new: true,
                        runValidators: true
                    });
                    
        res.status(200).json({
            success: true,
            data: userToUpdate
        });

    } catch (err) {
      res.json({success:false,data:null,message:err})
    }
})

//DELETE USER

router.delete('/:userId', async (req,res)=>{
    try {
   
     const userRemoved= await User.deleteOne({_Id:req.params.userId})
     res.status(200).json({success:true,data:userRemoved});

    } catch (err) {
         res.json({success:false,data:null,message:err})
    }
})


module.exports = router;
