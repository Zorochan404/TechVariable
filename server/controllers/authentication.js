import mongoose from "mongoose";
import Users from "../models/Users.js";
import Tutors from "../models/Tutors.js";
import bcrypt from "bcrypt"
import jwt  from "jsonwebtoken";




//student

//signup

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
        }).status(200).json(others)
        }
    }catch (err) {
        console.log(err)
        res.status(500).send("An error occurred");
    }
}




//teacher

//signup

export const tutorsignup = async(req, res) =>{
    
try{
    const password = req.body.password.toString()
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const newTutor = new Tutors({...req.body, password: hash})


    await newTutor.save()
    res.status(200).send("User created")
}catch (err) {
    console.log(err)
    res.status(500).send("An error occurred");
}
}



//signin

export const tutorsignin = async(req, res) =>{
    
try{
    const tutor = await Tutors.findOne({uname:req.body.uname})
    if(!tutor){
        console.log('incorrect username')
    }
    const isCorrect =await bcrypt.compare(req.body.password.toString(), tutor.password)
    if(!isCorrect){
        console.log('incorrect password')
    }



    else{
    const {password, ...others} = tutor._doc
    const token = jwt.sign({id:tutor._id}, process.env.JWT)
    res.cookie("access_token", token, {
        httpOnly:true
    }).status(200).json(others)
    }
}catch (err) {
    console.log(err)
    res.status(500).send("An error occurred");
}
}