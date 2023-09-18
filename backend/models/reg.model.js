import mongoose from "mongoose";


export const UserSchema = new mongoose.Schema({
    user_name: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    pro_pic: {
        required: false,
        type: String,
        default: 'https://i.stack.imgur.com/l60Hf.png'
    },
    age: Number,

});

const UserModel = mongoose.model("users", UserSchema);

export default UserModel;