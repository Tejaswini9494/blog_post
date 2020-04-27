const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = validateSignUpInput = data => {
    let errors = {}

    let{user_name , email , password} = data;

    user_name = !isEmpty(user_name)?user_name:"";
    email = !isEmpty(email)?email:"";
    password = !isEmpty(password)?password:"";

    if(Validator.isEmpty(user_name)){
        errors.user_name = "User_Name is required!";
    }

    if(Validator.isEmpty(email)){
        errors.email = "Email field should be filled!";
    }
    else if(!Validator.isEmail(email)){
        errors.email = "Please enter a valid email_id!";
    }

    if(Validator.isEmpty(password)){
        errors.password = "Password is required!";
    }
    else if(!Validator.isLength(password , {min : 6 , max : 30})){
        errors.password = "Password length must be atleast 6 characters!";
    }

    return{
        errors ,
        isValid : isEmpty(errors)
    };
};