import express from 'express';
import { saveUser } from '../services/reg.services.js';

export const registerUser = async (req, res) => {
    console.log('boooodyyyy', req.body);
    console.log('here');
    try {
        if (!req.body) {
            res.status(400).send({ message: 'Please provide valid datas' })
        }
        const { user_name, password, pro_pic, gender, age } = req.body;
        console.log('user name got ', user_name)
        const user = await saveUser(user_name, password, pro_pic, gender, age);
        res.status(201).send({ message: 'user created', data: user })
    } catch (error) {
        console.log('errr', error);
    }
}
