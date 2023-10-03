import express from 'express';
import { getllUsers, saveUser } from '../services/reg.services.js';
import UserModel from '../models/reg.model.js';
import jwt from 'jsonwebtoken'
const newToken = (regData) => {
    return jwt.sign({ regData }, process.env.JWT_SECRET_KEY);
};

export const registerUser = async (req, res) => {
    console.log('wboudddyyy ....', req.body);
    try {
        if (!req.body) {
            res.status(400).send({ message: 'Please provide valid datas' })
        }
        const { user_name, password, pro_pic, gender, age, email } = req.body;
        const oldUser = await UserModel.findOne({ email });
        if (oldUser) {
            return res.status(400).send({ message: "User already exists" });
        }
        const user = await saveUser(user_name, password, pro_pic, gender, age, email);
        res.status(201).send({ message: 'user created', data: user })
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
}