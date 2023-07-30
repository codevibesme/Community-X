import Channel from "../models/Channel.js";

export const create_channel = async (req, res) => {
    try {
        const { name } = req.body;
        const duplicateChannel = await Channel.findOne({name}).exec();
        if(duplicateChannel) return res.status(409).json({message: "Channel with same name exists"});
        const channel = await new Channel({
            name
        });
        const newChannel = await channel.save();
        res.status(201).json({channel: newChannel});
    } catch(err) {
        res.status(400).json({error: err.message});
    }
};
export const getChannels = async (req, res) => {
    try {
        const channels = await Channel.find({});
        res.status(200).json({channels});
    } catch(err) {
        res.status(400).json({error: err.message});
    }
};
