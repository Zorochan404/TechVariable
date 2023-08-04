import mongoose from 'mongoose'
import validator from 'validator'


const UserSchema = new mongoose.Schema({
    uname: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate:[validator.isEmail]
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        public_id:{
            type:String,
            default:"328462894692"
        },
        url:{
            type:String,
            default:"dmvbjskbv"
        }
    },
    mycourses:{
        type:[String]
    },
    role:{
        type:String,
        default: "student"
    },
    resetpasswordtoken:{
        type:String,
    },
    resetpasswordexipre:{
        type:Date
    }


},{timestamps: true})


export default mongoose.model("User", UserSchema)