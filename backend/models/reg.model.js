import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const UserRoles = {
    ADMIN: "ADMIN",
    USER: "USER",
    SUPER_ADMIN: "SUPER_ADMIN"
}

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
    gender: {
        required: false,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    role: {
        type: String,
        enum: Object.values(UserRoles),
        default: UserRoles.USER
    }
});

UserSchema.pre("save", function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    let hash = bcrypt.hashSync(this.password, 8);
    this.password = hash;
    return next();
});

UserSchema.methods.checkPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}
const UserModel = mongoose.model("users", UserSchema);

export default UserModel;