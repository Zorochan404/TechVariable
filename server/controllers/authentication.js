import mongoose from "mongoose";
import Users from "../models/Users.js";
import bcrypt from "bcrypt"
import jwt  from "jsonwebtoken";
import { resolveContent } from "nodemailer/lib/shared/index.js";
import sendEmail from "../sendEmail.js";
import crypto from "crypto"




//student


export const signup = async(req, res) =>{
    try{
        const password = req.body.password.toString()
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const newUser = new Users({...req.body, password: hash})


        await newUser.save()
        res.status(200).send("User created")
    }catch (err) {
        console.log(err)
        res.status(500).send("An error occurred");
    }
}



//signin

export const signin = async(req, res) =>{
    try{
        const user = await Users.findOne({uname:req.body.uname})
        if(!user){
            console.log('incorrect username')
        }
        const isCorrect =await bcrypt.compare(req.body.password.toString(), user.password)
        if(!isCorrect){
            console.log('incorrect password')
        }
        



        else{
        const {password, ...others} = user._doc
        const token = jwt.sign({id:user._id}, process.env.JWT)
        res.cookie("access_token", token, {
            httpOnly:true
        }).status(200).json({others, token})
        }
    }catch (err) {
        console.log(err)
        res.status(500).send("An error occurred");
    }
}








//teacher

export const teacher = async (req, res, next) => {
    try {
        const user = await Users.findById({_id:req.user.id});

        if (!user || user.role !== "teacher") {
            console.log("You are not authorized to make changes.");
            return res.status(403).json({ message: "You are not authorized to make changes." });
        }


        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};



export const logout = async (req, res) => {
    try {
        res.cookie('access_token', null, {
            httpOnly: true,
            expires: new Date(0) 
        }).status(200).json('Logged Out');
    } catch (error) {
        console.log(error);
    }
};




export const resetPassword = async (req, res, next) => {
    const resetToken = crypto.randomBytes(20).toString('hex');
    const resetpasswordtoken = crypto.createHash("sha256").update(resetToken).digest('hex')
  
    const resetpasswordexipre = Date.now() + 15 * 60 * 1000;
    
    const User = await Users.findOne({
      email: req.body.email
    });
    try {
  
      if (!User) {
        console.log("User not found");
      } else {
          const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/auth/v1/password/reset/${resetToken}`;
  
  
        User.resetpasswordtoken = resetpasswordtoken;
        User.resetPasswordUrl = resetPasswordUrl;
        User.resetpasswordexipre = resetpasswordexipre;
  
  
        await User.save({ validateBeforeSave: false });
  
        const message = `Your OTP to reset password: \n\n ${resetPasswordUrl} \n\n If you have not requested this email then please ignore`;
  
        await sendEmail({
          email: User.email,
          subject: 'Ecommerce Password Recovery',
          message
        });
  
        res.status(200).json(
          `Email sent to ${User.email} successfully`
        );
      }
    } catch (error) {
      User.resetpasswordtoken = undefined;
      User.resetpasswordexipre = undefined;
  
      await User.save({ validateBeforeSave: false });
      console.log(error);
    }
  };
  
  export const resetPass = async(req,res) =>{
      const resetpasswordtoken = crypto.createHash("sha256").update(req.params.token).digest('hex')
  
      const User = await Users.findOne({
          resetpasswordtoken,
          resetpasswordexipre: {$gt: Date.now()}
  
      })
  
      if (!User) {
          console.log('user not found')
      } else {
          if(req.body.password !== req.body.confirmPassword){
              console.log('Password do not match')
          }
          const salt = bcrypt.genSaltSync(10);
          const hash = bcrypt.hashSync(req.body.password, salt);
          User.password = hash;
          User.resetpasswordtoken = undefined;
          User.resetpasswordexipre = undefined;
  
          await User.save()
          res.status(200).json("password reset successful")
      }
  }
  
  