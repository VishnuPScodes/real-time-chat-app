import express from 'express';
import { getllUsers, saveUser } from '../services/reg.services.js';
import UserModel from '../models/reg.model.js';
import jwt from 'jsonwebtoken'
import { configDotenv } from 'dotenv';
configDotenv()
let secretkey = process.env.JWT_SECRET_KEY
const newToken = (regData) => {
    console.log('atleast this called')
    if (secretkey) {
        console.log('herere');
        return jwt.sign({ regData }, secretkey);
    }
};
console.log('tookkken', secretkey)
export const registerUser = async (req, res) => {

    try {
        if (!req.body) {
            res.status(400).send({ message: 'Please provide valid datas' })
        }
        const { user_name, password, pro_pic, gender, age, email } = req.body;
        const oldUser = await UserModel.findOne({ email });
        if (oldUser) {
            return res.status(400).send({ message: "User already exists" });
        }
        let registerData = {
            email: email,
            password
        };
        let newtoken = newToken(registerData);
        const user = await saveUser(user_name, password, pro_pic, gender, age, email);
        res.status(201).send({ message: 'user created', data: user, token: newtoken })
    } catch (error) {
        console.log('errr', error);
    }
}

export const allUsers = async (req, res) => {
    try {
        const Users = await getllUsers();
        res.status(200).send(Users);
    } catch (error) {
        console.log({ error });
    }
};

export const getSingleUser = async (req, res) => {
    const userId = req.params.id
    try {
        const singleUser = await getOneUser(userId);
        res.status(200).send(singleUser);
    } catch (error) {
        console.log({ error });
    }
};

