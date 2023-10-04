import { ChatMessage } from "../models/message.model.js"



export const sendMessage = async (sender, content, chat, attatchments) => {
    const message = await ChatMessage.create({ sender, chat, attatchments, content });
    return message
}