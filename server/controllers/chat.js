import Chat from "../models/Chat.js";

export const sendMsg = async (req, res) => {
    try {
        const {room, name, picturePath, message } = req.body;
        const chat = new Chat({
            room,
            name,
            picturePath,
            message,
        });
        const savedChat = await chat.save();
        res.status(201).json({chat: savedChat});
    } catch(err) {
        res.status(400).json({error: err.message});
    }
};
export const getMessage = async (req, res) => {
    try {
        const { room }  = req.params;
        const chats = await Chat.find({room});
        res.status(200).json({chats});
    } catch(err) {
        res.status(503).json({error: err.message});
    }
}