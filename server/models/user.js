import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const UserSchema=
new mongoose.Schema({

    fname:{
        type:String
    },
    lname:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String,
    },
    password:{
        type:String,
    },
    confirm_password:{
        type:String,    
    },

    otp:{
        type:Number,
    },
    otp_expiry:{
        type:Date,
    },
    is_verified:{
        type:Boolean,
        default:false
    },

    reset_otp:{
        type:Number
    },
    reset_otp_expiry:{
        type:Date
    },
    
});

UserSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        return next();
    }
    const genSalt= await bcrypt.genSalt(10);
    this.password= await bcrypt.hash(this.password,genSalt);
    next();
});

UserSchema.methods.comparePassword= async function(password){
    return await bcrypt.compare(password,this.password);
}

UserSchema.methods.generateToken=  function(){
    return  jwt.sign(
        {_id:this._id},
        process.env.JWT_SECRET_KEY,
        {expiresIn:process.env.JWT_EXPIRY*60*1000}
    )
}

export const user =mongoose.model("user",UserSchema);
