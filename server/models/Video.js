import mongoose from 'mongoose'


const VideosSchema = new mongoose.Schema({
    userID: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    videoimgurl: {
        type: String,
        required: true
    },
    videourl: {
        type: String,
        required: true
    },
    rating: {
        type: [String],
        default: []
    },
    views: {
        type:Number,
        default:0
    }
    

},{timestamps: true})


export default mongoose.model("Video", VideosSchema)