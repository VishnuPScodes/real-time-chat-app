import { sendMessage } from "../services/messages.service.js"




export const addMessage = async (req, res) => {
    const { content, sender, attatchments, chat } = req.body
    const messageAdded = await sendMessage(content, sender, chat, attatchments);
    if (!messageAdded) {
        return res.status(400).send({ status: "Failed", message: 'Failed to send the message!' });
    }
    return res.status(200).send({ status: "Successful", message: messageAdded });
}