import mongoose from 'mongoose'


const CoursesSchema = new mongoose.Schema({
    userID: {
        type: String,
        required: true,
    },
    coursetitle: {
        type: String,
        required: true
    },
    cousedescription: {
        type: String,
        required: true
    },
    videoimgurl: {
        type: [String],
        required: true
    },
    videourl: {
        type: [String],
        required: true
    },
    videotitle:{
        type: [String],
        required:true
    },
    rating: {
        type: Number,
        default: 0
    },
    subuser:{
        type:[String],
        default: []
    }
    

},{timestamps: true})


export default mongoose.model("Course", CoursesSchema)