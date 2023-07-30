import Channel from "../models/Channel.js";

export const searchChannel = async  (req, res) => {
    try {
        const { name } = req.params;
        const channels = await Channel.find({});
        const searchedResult = await channels.filter((item) => item.name.includes(name));
        res.status(200).json({channels: searchedResult});
    } catch(err) {
        res.status(404).json({error: err.message});
    }
};