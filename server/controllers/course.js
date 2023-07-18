import Users from "../models/Users.js"
import Tutors from "../models/Tutors.js"
import Course from "../models/course.js"





export const addCourse = async(req, res)=>{
    const newCourse = new Course({userId:req.tutor.id, ...req.body})
    try{
        const savedCourse = await newCourse.save()
        res.status(200).json(savedCourse)
    }catch(err){
        console.log(err)
    }
}



export const deleteCourse = async()=>{
    try{
        const Course = await Course.findById(req.params.id)
        if(!Course){
            console.log('Course not found')
        }
        if(req.tutor.id === Course.userID){
            const deletedCourse = await Course.findByIdAndDelete(req.params.id)
            res.status(200).json(deletedCourse)
        }
    }catch(err){
        console.log(err)
    }
}



export const updateCourse = async(req, res)=>{
      
    try{
        const Course = await Course.findById(req.params.id)
        if(!Course){
            console.log('Course not found')
        }
        if(req.tutor.id === Course.userID){
            const updatedCourse = await Course.findByIdAndUpdate(req.params.id , {
                $set:req.body,
            }, {
                new:true
            })
            res.status(200).json(updatedCourse)
        }
    }catch(err){
        console.log(err)
    }
}



export const findCourse = async(req, res)=>{
    try{
        const course = await Course.findById(req.params.id)
        res.status(200).json(course)
    }catch(err){
        console.log(err)
    }
}



export const rateCourse = async(req, res)=>{
    try{
        const course = await Course.findByIdAndUpdate(req.params.id,
          {$inc:{rating:1} },
          {new: true} 
        )
    
        res.status(200).json("rating added")
    }catch(err){
        console.log(err)
    }
}




export const randomCourse = async()=>{
    try{
        const Course = await Course.aggregate([{$sample: {size: 40}}]
        )
        res.status(200).json(Course)
    }catch(err){
        console.log(err)
    }
}


export const trendingCourse = async()=>{
    try{
        const Course = await Course.find().sort({rating:-1})
        
        res.status(200).json(Course)
    }catch(err){
        console.log(err)
    }
}




