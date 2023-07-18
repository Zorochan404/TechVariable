import mongoose from 'mongoose'
import Users from '../models/Users.js'



export const update = async(req, res) =>{
if(req.params.id === req.user.id){
    try{
        const updatedUser = await Users.findByIdAndUpdate(req.params.id, {
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


export const deleteUser = async(req, res) =>{
    if(req.params.id === req.user.id){
        try{
            const deletedUser = await Users.findByIdAndDelete(req.params.id, )
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
            const user= await findById(req.params.id)
            res.status(200).json(user)
        }catch(err){
            console.log("error in finding user")
        }
    }


