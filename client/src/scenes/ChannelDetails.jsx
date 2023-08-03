import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import ChatPage from './ChatPage';
import MemberList from '../components/MemberList.jsx';
import UserOptions from '../components/UserOptions';
import { useDispatch, useSelector } from 'react-redux';
import { socket } from "../socket.js";
import { setRoom } from '../states/stateSlice';
const ChannelDetails = () => {
        
    const [members, setMembers] = useState(null);
    const user = useSelector((state)=>state.user);
    const token = useSelector((state)=>state.token);
    const channel = useSelector((state) => state.channel);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const addMember = async () => {
        try {
            const response = await fetch(`http://localhost:8000/channel/add/${channel._id}`, {
                method:"PUT",
                headers:{
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(user)
            });
            
        } catch(err){
            console.log(err.message);
        }
    }
    useEffect(() => {
        //adding the member to room
        socket.emit("join_room", {room: channel._id});
        dispatch(setRoom({room: channel._id}));
        let channel_members = channel.members || [];
        const findUser = channel_members.filter(item=>item._id === user._id);
        if(findUser.length === 0) {
            channel_members=[...channel_members, user];
            addMember();
        }
        setMembers(channel_members);
    }, []) //eslint-disable-line

    const handleClick = () => {
        navigate("/"); 
        
    }
    
    return (
        <div className="min-h-screen flex flex-row font-Noto text-white">
            <div className="min-h-full bg-black w-1/4 p-2 flex flex-col text-lg">
                <header className="font-bold w-full ">
                    <button className="text-2xl me-2 active:scale-95" onClick={handleClick}>&lt;</button> All Channels
                </header>
                <main className="w-full">
                    <section className="font-bold mt-4" id="name">{channel.name}</section>
                    <section id="description">
                    <p className="mt-4 mb-7 font-normal">
                        {channel.description}
                    </p>
                    </section>
                    <MemberList members={members}/>
                </main>
                <UserOptions />
            </div>
            <ChatPage />
        </div>
    );
}

export default ChannelDetails