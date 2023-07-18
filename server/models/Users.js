import mongoose from 'mongoose'


const UserSchema = new mongoose.Schema({
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
    mycourses:{
        type:[String]
    }


},{timestamps: true})


export default mongoose.model("User", UserSchema)