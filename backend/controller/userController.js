import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
import TryCatch from "../utils/tryCatch.js";
export const registerUser = TryCatch(async(req,res)=>{
     const{email,name,password} = req.body;
        
        let user = await User.findOne({email});

        if(user)return res.status(400).json({
            message:"Already have an account with this email",
        })
        const hashPassword = await bcrypt.hash(password,10);

        user = await User.create({
            name,
            email,
            password:hashPassword,
        });
        res.status(201).json({
            user,
            message:"user registred"
        })
})
export const loginUser = TryCatch(async(req,res)=>{
  const{email , password} = req.body

  const user = await User.findOne({email});
  if(!user)
    return res.status(400).json({
     message:"No User with This mail",
});
    const comparePassword = await bcrypt.compare(password,user.password);
    if (!comparePassword) return res.status(400).json({
        message:"Wrong Password" ,
    });

    return res.json({user,message:"LOGGED IN.."})
});