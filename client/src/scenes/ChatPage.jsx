import React, { useEffect } from "react";
import Chat from "../components/Chat";
import {IoSendSharp} from "react-icons/io5"
import { useSelector } from "react-redux";
import { useState } from "react";
import {socket} from "../socket";

const ChatPage = () => {
    const room = useSelector((state) => state.room);
    const user = useSelector((state) => state.user);
    const token = useSelector((state)=>state.token);
    const channel = useSelector((state) => state.channel);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const saveToDB = async (chat) => {
        await fetch(`https://communityx.onrender.com/chat/send`, {
            method:"POST",
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(chat)
        });
    }
    const fetchOldChats = async () => {
        const response = await fetch(`https://communityx.onrender.com/chat/${room}`,{
            method:"GET",
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        const {chats} = await response.json();
        if(chats.length){
            console.log(chats);
            setMessages([...messages, ...chats].reverse());
        }
    }
    const sendMessage = () => {
        console.log(room);
        const chat = {
            name: user.name,
            picturePath: user.picturePath,
            message,
            room: channel._id
        }
        socket.emit("send_message",{room, user, message});
        setMessages([chat, ...messages]);
        saveToDB(chat);
        setMessage("");
    }
    useEffect ( () => {
        fetchOldChats();
    }, []); //eslint-disable-line
    useEffect(() => {
        socket.on("receive_message", (data) => {
            console.log(`From: ${data.user.name}, msg: ${data.message}`);
            const chat = {
                name: data.user.name,
                picturePath: data.user.picturePath,
                message: data.message,
                room: channel._id
            }
            setMessages([chat, ...messages]);
        });
    }, [messages, socket]); //eslint-disable-line

    return (
        <div className="bg-slate-900 flex flex-col h-screen w-3/4 flex flex-col pb-2 ">
            <header>
                <h1 className="text-xl min-h-fit bg-black font-Noto font-bold text-white  px-8 py-4">{channel? channel.name:"WELCOME"}</h1>
            </header>
            <main className="overflow-y-auto px-8 my-4 h-4/5 scroll-smooth hover:scroll-auto">
                {
                    messages.map(chat => (
                        <Chat chat = {chat} />
                    ))
                }
            </main>
            <footer className="px-8 h-fit">
                <button onClick={sendMessage} className="absolute right-9 h-10 w-10 px-2.5 bottom-3 bg-blue-400 rounded-lg hover:bg-cyan-500 hover:shadow-lg hover:shadow-cyan-500/50 active:scale-95"> <IoSendSharp className="text-lg text-center" /></button>
                <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Type a message here" className="ps-4 pe-12 rounded-lg bg-gray-500 w-full h-12 focus:outline-none "/>
            </footer>
        </div>
    );
};
export default ChatPage;