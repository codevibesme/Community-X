import mongoose from "mongoose";
const chatSchema = mongoose.Schema({
    room: String,
    name: String,
    picturePath: String,
    message: String,
});
const Chat = mongoose.model("Chat", chatSchema);
export default Chat;