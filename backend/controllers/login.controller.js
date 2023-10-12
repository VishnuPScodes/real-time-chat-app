import { configDotenv } from "dotenv";
import UserModel from "../models/reg.model.js";



configDotenv()
let secretkey = process.env.JWT_SECRET_KEY
const newToken = (regData) => {
    if (secretkey) {
        console.log('herere');
        return jwt.sign({ regData }, secretkey);
    }
};


export const userSignIn = async (req, res) => {
    if (!req.body) {
        throw new Error('Please provide user credentials!');
    }
    let user = await UserModel.findOne({ email: req.body.email });
    if (!user) {
        throw new Error('User does not exists!')
    }
    let instance = new UserModel();
    let checkPassword = instance.checkPassword(req.body.password);
    if (!checkPassword) {
        throw new Error('Email or password does not match');
    }
    else {
        let userData = {
            email: req.body.email,
            password: req.body.password
        }
        let newtoken = newToken(userData);
        return res.status(201).send({ message: "User signed in", token: newtoken, data: user });
    }
}

