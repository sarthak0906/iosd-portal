const express=require('express');
const router=express.Router();
const User=require('../../models/User');
//var gravatar = require('gravatar');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const key=require('../../config/key');
const axios=require('axios')

const passport = require('passport');

const validateRegister=require('../../validation/register')
const validateLogin=require('../../validation/login')

//@route GET api/forms/test
//@desc  Test users route
//@access Public
router.get('/test',(req,res)=>{
    res.json({msg:"Forms Works"})
})

router.post('/save-enroll',(req,res)=>{
    // const {errors,isValid}=validateRegister(req.body);
    // if(!isValid){
    //    return res.status(400).json(errors);
    // }
    //  User.findOne({email:req.body.email})
    //      .then(user=>{
    //          if(user){
    //              errors.email='Email already exists.';
    //              return res.status(400).json(errors)
    //          }
    //          else{
    //                  const newUser =new User({
    //                      name:req.body.name,
    //                      email:req.body.email,
    //                      password:req.body.password,
    //                      priority:req.body.priority
    //                  });
    //                  bcrypt.genSalt(10,(err,salt)=>{
    //                      bcrypt.hash(newUser.password,salt,(err,hash)=>{
    //                          if(err) throw err;
    //                          newUser.password=hash;
    //                          newUser.save()
    //                             .then(user=>res.json(user))
    //                             .catch(err=>console.log(err))
    //                      })
    //                  }) 
    //          }
    //      })
 })

 module.exports=router;