const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter your name"],
        maxlength:[30, "Name cannot exceeds 30 characters"],
        minlength:[2, "Name cannot be less than two characters"]
    },
    email:{
        type:String,
        required:[true, "Please enter your email"],
        unique:true,
        validate:[validator.isEmail, "Please enter a valid email address"]
    },
    password:{
        type:String,
        required:true,
        minlength:[8, "Password should be greater than 8 characters"],
        select:false,
    },
    avatar:{
        
        public_id:{
            type:String,
            required:true,
        },
        url:{
            type:String,
            required:true,
        },    
    },
    role:{
        type:String,
        default: "user",
    },

    resetPasswordToken: String,
    resetPasswordExpireDate: Date,

});

module.exports = mongoose.model("User", userSchema);