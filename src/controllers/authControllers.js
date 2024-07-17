import User from "../models/userSchema.js";
import JWT from "jsonwebtoken"
import config from "../config/config.js";

export const signUp = async (req, res) => {
    try{
        const {name, email, password} = req.body

        const user = await User.create({name, email, password})

        res.status(200).json({
            success: true,
            message:"User signed up successfully",
            user
        })

    }catch(error){
        console.log(error);
    }
}

export const login = async (req, res) => {
    try{
        const {email, password} = req.body

        const user = await User.findOne({email})

        if(user){
            await user.comparePassword(password)
        }

        const token = JWT.sign({_id:user._id},config.JWT_SECRET , {expiresIn:config.JWT_EXPIRY})
        
        res.status(200).json({
            success:true,
            message:"LoggedIn successfully",
            user,
            token
        })
    }catch(error){
        console.log(error);
    }
}