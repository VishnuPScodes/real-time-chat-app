import UserModel from "../models/reg.model.js"




export const saveUser = async (user_name, password, pro_pic, gender, age, email) => {
    const user = await UserModel.create({ user_name, password, age, gender, pro_pic, email });
    return user;
}

export const getllUsers = async () => {
    const users = await UserModel.find().lean();
    return users
}
