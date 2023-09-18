import UserModel from "../models/reg.model.js"




export const saveUser = async (user_name, password, age, gender) => {

    const user = await UserModel.create({ user_name, password, age, gender });
    return user;
}