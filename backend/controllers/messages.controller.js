import { getAllUserMessager, sendMessage } from "../services/messages.service.js"


export const addMessage = async (req, res) => {
    console.log('sender got');
    const { content, sender, attatchments, chat } = req.body
    console.log('sender got', sender);
    const messageAdded = await sendMessage(content, sender, chat, attatchments);
    if (!messageAdded) {
        return res.status(400).send({ status: "Failed", message: 'Failed to send the message!' });
    }
    return res.status(200).send({ status: "Successful", message: messageAdded });
}

export const getAllMessagesPerUser = async (req, res) => {
    const userID = req.params.id
    const allMessages = await getAllUserMessager(userID);
    if (!allMessages) {
        return res.status(200).send([]);
    }
    return res.status(200).send(allMessages);
}
