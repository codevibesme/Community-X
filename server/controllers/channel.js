import Channel from "../models/Channel.js";

export const create_channel = async (req, res) => {
    try {
        const { name, description } = req.body;
        const duplicateChannel = await Channel.findOne({name}).exec();
        if(duplicateChannel) return res.status(409).json({message: "Channel with same name exists"});
        const channel = await new Channel({
            name,
            description,
        });
        const newChannel = await channel.save();
        res.status(201).json({channel: newChannel});
    } catch(err) {
        res.status(400).json({error: err.message});
    }
};
export const getChannel = async (req, res) => {
    try{
        const { id } = await req.params;
        console.log(id);
        const channel = await Channel.findById(id).exec();
        console.log(channel);
        if(!channel)
            return res.status(404).json({error: "NO such channel exists!"});
        res.status(200).json({channel});
    } catch(err){
        res.status(400).json({error: err.message});
    }
}
export const getChannels = async (req, res) => {
    try {
        const channels = await Channel.find({});
        res.status(200).json({channels});
    } catch(err) {
        res.status(400).json({error: err.message});
    }
};
export const addMember = async (req, res) => {
    try {
        console.log(req.params);
        const { id } = await req.params;
        console.log(id);
        const user = await req.body;
        let channel = await Channel.findById(id).exec();
        let members = channel.members;
        members = [...members, user];
        const updateChannel = await Channel.findOneAndUpdate({_id: id}, {members: members});
        channel = await Channel.findById(id).exec();
        res.status(201).json({channel});
    } catch(err) {
        res.status(400).json({error: err.message});
        console.log(err.message);
    }
}
