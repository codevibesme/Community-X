import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    picturePath: String,
    bio:String,
});
const User = mongoose.model("User", userSchema);
export default User;

