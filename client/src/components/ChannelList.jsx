import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setChannel } from '../states/stateSlice';
import { useNavigate } from 'react-router';
const ChannelList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const enterChannel = (channel) => {
        dispatch(setChannel({channel}))
        navigate(`/:${channel.name}`);
    }
    const [channelList, setChannelList] = useState([]);
    const token = useSelector( (state) => state.token);
    const getChannels = async () => {
        const response = await fetch ("http://localhost:8000/channel", {
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