import mongoose from "mongoose";


const mongo_url = process.env.URL;
export const connectToMongoDB = () => {
    return mongoose.connect('mongodb+srv://vishnu:vishnu@cluster0.xcbj6su.mongodb.net/')
}