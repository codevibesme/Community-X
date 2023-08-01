import mongoose from "mongoose";

const channelSchema = mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    members: {
        type: [],
    },
});

const Channel = mongoose.model("Channel", channelSchema);
export default Channel;