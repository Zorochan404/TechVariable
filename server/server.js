import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.js'
import commentRouter from './routes/comments.js'
import courseRouter from './routes/course.js'
import authRouter from './routes/authentication.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'




const app = express();
dotenv.config()




const connect = async() => {
    try{
        await mongoose.connect(process.env.mongo_url)
        console.log(`connected to ${mongoose.connection.host}`)
    }catch(err)
    {
        console.log(`${err} in connecting`)
    }
}


app.use(cors({origin: 'http://localhost:5173'}))
app.use(cookieParser())
app.use(express.json())
app.use('/api/auth', authRouter)
app.use('/api/users', userRouter)
app.use('/api/course', courseRouter)
app.use('/api/comment', commentRouter)





connect()

app.listen(8800, ()=> console.log ('listening on port 8800'))