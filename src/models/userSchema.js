import mongoose from "mongoose";
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})


//hash password
userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next()
        this.password  = await bcrypt.hash(this.password, 10)
})

// compare password
userSchema.methods = {
    comparePassword: async function(enteredPassword){
       return await bcrypt.compare(enteredPassword, this.password)
    }
}

export default mongoose.model("User", userSchema)