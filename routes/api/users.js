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

//@route GET api/users/test
//@desc  Test users route
//@access Public
router.get('/test',(req,res)=>{
    res.json({msg:"User Works"})
})


//@route POST api/users/register
//@desc  Register user
//@access Public
router.post('/register',(req,res)=>{
   const {errors,isValid}=validateRegister(req.body);
   if(!isValid){
      return res.status(400).json(errors);
   }
    User.findOne({email:req.body.email})
        .then(user=>{
            if(user){
                errors.email='Email already exists.';
                return res.status(400).json(errors)
            }
            else{
                    const newUser =new User({
                        name:req.body.name,
                        email:req.body.email,
                        password:req.body.password,
                        priority:req.body.priority
                    });
                    bcrypt.genSalt(10,(err,salt)=>{
                        bcrypt.hash(newUser.password,salt,(err,hash)=>{
                            if(err) throw err;
                            newUser.password=hash;
                            newUser.save()
                               .then(user=>res.json(user))
                               .catch(err=>console.log(err))
                        })
                    }) 
            }
        })
})

//@route GET api/users/login
//@desc Login user/ Returning JWT Token
//@access Public
router.post('/login',(req,res)=>{
   const {errors,isValid}=validateLogin(req.body);
   if(!isValid){
      return res.status(400).json(errors);
   }

    const email=req.body.email;
    const password=req.body.password;

    User.findOne({email})
       .then(user=>{
           if(!user){
               errors.email='User not found.';
               return res.status(404).json(errors)
           }
           else{
               bcrypt.compare(password,user.password)
               .then(isMatch=>{
                   if(isMatch){
                       const payload={id:user.id,name:user.name,priority:user.priority}

                       jwt.sign(payload,key.secret,{expiresIn:108000},(err,token)=>{
                           res.json({
                               success:true,
                               token:'JWT '+ token
                           })
                       })
                   }
                   else{
                       errors.password='Invalid Password.'
                       return res.status(404).json(errors)
                   }
               })
           }
       })
})


//@route GET api/users/current
//@desc Current User
//@access Private
router.get('/current',passport.authenticate('jwt',{session:false}),(req,res)=>{
    //res.json(req.user);
    res.json({
        id:req.user.id,
        name:req.user.name,
        email:req.user.email
    })
 });

 // @route   GET api/users/current
// @desc    Get current users profile
// @access  Private
 router.get(
    '/current',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const errors = {};
      Profile.findOne({ user: req.user.id })
        .populate('user', ['name', 'avatar'])
        .then(profile => {
          if (!profile) {
            errors.noprofile = 'There is no profile for this user';
            return res.status(404).json(errors);
          }
          res.json(profile);
        })
        .catch(err => res.status(404).json(err));
    }
  );


  router.get('/manage',(req,res)=>{
     User.find({})
         .then(user=>{
             if(user){
                 res.json(user);
             }
             else{
                 errors.email='No Users found'
                // return res.status(400).json(errors)
                //      const newUser =new User({
                //          name:req.body.name,
                //          email:req.body.email,
                //          password:req.body.password,
                //          priority:req.body.priority
                //      });
                //      bcrypt.genSalt(10,(err,salt)=>{
                //          bcrypt.hash(newUser.password,salt,(err,hash)=>{
                //              if(err) throw err;
                //              newUser.password=hash;
                //              newUser.save()
                //                 .then(user=>res.json(user))
                //                 .catch(err=>console.log(err))
                //          })
                //      }) 
             }
         })
 })
 
module.exports=router;