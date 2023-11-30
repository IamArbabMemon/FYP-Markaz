const {userProfileModel} = require('../models/userProfileModel.js'); 
const express = require('express');
const bcrypt = require('bcrypt');
const userProfileRouter = express.Router();

userProfileRouter.post('/signUp',async(req,res)=>{
   if(!req.body){
    return res.status(400).json({message:'Empty request body'});
   }      

   try{
    
    const hashedPass = await bcrypt.hash(req.body.password,10);
    await userProfileModel.create({
            username:req.body.username,
            email:req.body.email,
            businessName:req.body.businessName,
            address:req.body.address,
            accountType:req.body.accountType,
            accountNumber:req.body.accountNumber,
            mobileNumber:req.body.mobileNumber,
            password:hashedPass
    });

   }catch(err){
    console.log(err);
    return res.status(400).json({message:'something went wrong'});
   }
   
   return res.json({message:'Success'});

})




module.exports = {
    userProfileRouter
}