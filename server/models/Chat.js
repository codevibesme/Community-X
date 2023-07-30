import mongoose from "mongoose";
const chatSchema = mongoose.Schema({
    channel_id: String,
    user_id: String,
    message: String,
});
const Chat = mongoose.model("Chat", chatSchema);
export default Chat;