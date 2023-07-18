import mongoose from 'mongoose'


const TutorsSchema = new mongoose.Schema({
    uname: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: false
    },
    img: {
        type:String
    },
    subscribers:{
        type:Number,
        default: 0,
    },
    videos: {
        type:[String]
    }



},{timestamps: true})


export default mongoose.model("Tutor", TutorsSchema)