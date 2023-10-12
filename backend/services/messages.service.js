import { ChatMessage } from "../models/message.model.js"


export const sendMessage = async (content, sender, chat, attatchments) => {
    const message = await ChatMessage.create({ content, sender, chat, attatchments });
    return message
};

export const getAllUserMessager = async (userId) => {
    const allData = await ChatMessage.find({ sender: userId });
    return allData;
}
