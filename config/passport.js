const JwtStrategy=require('passport-jwt').Strategy;
const ExtractJwt=require('passport-jwt').ExtractJwt;
const mongoose=require('mongoose')
const User=require('../models/User');
const key=require('../config/key');

module.exports=function(passport){
    var opts={}
        //opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
        opts.jwtFromRequest=ExtractJwt.fromAuthHeaderWithScheme('JWT');
        opts.secretOrKey=key.secret;
        passport.use(new JwtStrategy(opts,function(jwt_payload,done){
        //console.log(jwt_payload);
        User.findById(jwt_payload.id)
        .then(user=>{
            if(user){
                return done(null,user)
            }
            else{
                return done(null,false);
            }
        })
        .catch(err =>console.log(err))
    }));

}
