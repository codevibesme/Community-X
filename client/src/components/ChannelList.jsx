import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setChannel, setRoom } from '../states/stateSlice';
import { useNavigate } from 'react-router';
import { socket } from "../socket.js";
const ChannelList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const room = useSelector((state) => state.room)
    const enterChannel = (channel) => {
        if(room){
            socket.emit("leave_room", {room});
        }
        dispatch(setChannel({channel}));
        dispatch(setRoom(channel._id));
        navigate(`/:${channel.name}`);
        navigate(0);
    }
    const [channelList, setChannelList] = useState([]);
    const token = useSelector( (state) => state.token);
    const getChannels = async () => {
        const response = await fetch ("https://communityx.onrender.com/channel", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        });
        const { channels } = await response.json();
        setChannelList([...channels]);
    }
    useEffect( () => {
        getChannels();
    }, []) //eslint-disable-line
  return (
    <main className="w-full mt-8">
        <section id="channels" className="flex flex-col max-h-56 overflow-y-auto">
            {   channelList && (
                channelList.map((channel)=>(
                <div className="font-bold mb-3 text-gray-400 hover:text-white" onClick={()=>enterChannel(channel)}>
                    <p>{channel.name}</p>
                </div>
                )) )
            }
        </section>
    </main>
  )
}

export default ChannelList;