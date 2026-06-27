import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
import TryCatch from "../utils/tryCatch.js";
import generateToken from "../utils/generateToken.js";
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

        generateToken(user._id,res);    
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

     generateToken(user._id,res);
    res.json({
        user,
        message:"LOGGED IN.."
    })
    generateToken(user._id, res);

    console.log(res.getHeaders());

    res.json({
        user,
        message: "LOGGED IN.."
    });
});

export const myprofile = TryCatch(async(req,res)=>{
    const user = await User.findById(req.user._id)
    res.json(user);
})
export const userProfile = TryCatch(async(req,res)=>{
    const user = await User.findById(req.params.id).select("-password");


    res.json(user);
})
export const followUnfolloUser = TryCatch(async(req,res)=>{
    const user = await User.findById(req.params.id);
    const loggedInUser = await User.findById(req.user._id)
    if(!user)
        return res.status(400).json({
            message:"No user with this id",
    });
    if(user._id.toString()=== loggedInUser._id.toString()) return res.status(400).json({
        message : "You cant follow your self ",
    });

    if(user.followers.includes(loggedInUser._id)){
        const indexFollowing = loggedInUser.following.indexOf(user._id);
        const indexFollowers = user.followers.indexOf(loggedInUser._id);

        loggedInUser.following.splice(indexFollowing,1 );
        user.followers.splice(indexFollowers,1)

        await loggedInUser.save(); 
        await user.save();

        res.json({
            message:"User Unfollowed",
        });
    } else{
        loggedInUser.following.push(user._id);
        user.followers.push(loggedInUser._id );

        await loggedInUser.save(); 
        await user.save();

        res.json({
            message:"User  followed",
        });
    }
     
        
})

export const logOutUser = TryCatch(async(req,res)=>{
    res.cookie("token","",{maxAge:0});

    res.json({
        message:"Logged Out Sucessfully",
    })
})