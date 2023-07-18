import mongoose from "mongoose";
import Tutors from "../models/Tutors.js";





export const update = async(req, res) =>{
    if(req.params.id === req.tutor.id){
        try{
            const updatedTutor = await Tutors.findByIdAndUpdate(req.params.id, {
                $set:req.body
            },
            {
                new:true
            })
            res.status(200).json("user updated")
        }catch(err){
            console.log("err")
        }
    
    }else {
        console.log("tokenid != userid")
    }
    }
    
    
export const deleteTutor = async(req, res) =>{
        if(req.params.id === req.tutor.id){
            try{
                const deletedTutor = await Tutors.findByIdAndDelete(req.params.id, )
                res.status(200).json("user deleted")
            }catch(err){
                console.log("err")
            }
        
        }else {
            console.log("tokenid != userid")
        }
    }
    
    
export const find = async(req, res) =>{
            try{
                const tutor= await findById(req.params.id)
                res.status(200).json(tutor)
            }catch(err){
                console.log("error in finding user")
            }
        }