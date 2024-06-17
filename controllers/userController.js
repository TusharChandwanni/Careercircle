import { catchAsyncError } from "../middleware/catchAsyncError.js";
import { User } from "../models/userSchema.js";
import ErrorHandler from "../middleware/error.js";

export const register = catchAsyncError(async(re,res,next)=>{
     const {name,email,phone,role,password}=re.body;
     if(!name ||!email ||!phone || !role ||!password){
        return next(new ErrorHandler("Please fill full registration form"));
     }

     const isEmail= await User.findOne({email});

     if(isEmail){
        return next(new ErrorHandler("Email already exits!!"));
     }

     const user =await  User.create({
        name,
        email,
        phone,
        role,
        password,
     });

     res.status(200).json({
        success: true,
        message :"User Registered",
        user
     });
});