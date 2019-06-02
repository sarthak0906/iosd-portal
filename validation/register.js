const Validator=require('validator')
const isEmpty=require('./is-empty');

module.exports =function validateRegisterInput(data){
    let errors={};

    data.name=!isEmpty(data.name)?data.name:'';
    data.email=!isEmpty(data.email)?data.email:'';
    data.password=!isEmpty(data.password)?data.password:'';
    data.password2=!isEmpty(data.password2)?data.password2:'';

    if(!Validator.isLength(data.name,{min:2,max:30})){
        errors.name='Name must be b/w 2 & 30 characters'
    }

    if(Validator.isEmpty(data.name)){
        errors.name='Name field required.'
    }

    if(Validator.isEmpty(data.email)){
        errors.email='Email field required.'
    }
    if(!Validator.isEmail(data.email)){
        errors.email='Email is Invalid.'
    }
    if(Validator.isEmpty(data.password)){
        errors.password='Password field required.'
    }
    if(!Validator.isLength(data.password,{min:6,max:30})){
        errors.password='Password must be atleast 6 characters'
    }
    if(Validator.isEmpty(data.password2)){
        errors.password2='Confirm Password field required.'
    }
    if(!Validator.equals(data.password,data.password2)){
        errors.password2='Password must match'
    }

    return{
        errors,
        isValid:isEmpty(errors)
    }
}