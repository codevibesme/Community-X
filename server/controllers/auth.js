import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const duplicateUser = await User.findOne({email}).exec();
        if(duplicateUser){
            return res.status(409).json({message: "User with same email already exists!"});
        }
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = new User({
            name,
            email,
            password: hashedPassword,
        });
        const savedUser = await user.save();
        res.status(201).json({user: savedUser});
        
    } catch(err) {
        res.status(400).json({error: err.message});
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({email}).exec();
        if(!user) return res.status(404).json({message: "email doesn't exist, please sign up!"});
        const saved_pass = user.password;
        const user_id = user._id;
        const isMatch = await bcrypt.compare(password, saved_pass);
        if(!isMatch) return res.status(403).json({message: "Invalid email or password!"});
        const token = jwt.sign({id: user_id}, process.env.ACCESS_TOKEN);
        delete user.password;
        res.status(200).json({token, user});
    } catch(err) {
        res.status(403).json({error: err.message});
    }
};
