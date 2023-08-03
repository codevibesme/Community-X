import React, { useEffect, useState } from 'react';
import ChatPage from './ChatPage';
import ChannelList from '../components/ChannelList.jsx';
import UserOptions from '../components/UserOptions.jsx';
import AddChannelPopUp from '../components/AddChannelPopUp';
import { useRef } from 'react';
const AllChannels = () => {
    const modalRef = useRef(null);
    const addRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const createChannel = async () => {
        setIsVisible(true);
        console.log("Clicked");
    };
    const handleClickOutside = (e) => {
        if(modalRef.current && !modalRef.current.contains(e.target)){
            if(addRef.current && addRef.current.contains(e.target))
                setIsVisible(true);
            else 
            setIsVisible(false);
        }
    };
    useEffect( () => {
        document.addEventListener("click", handleClickOutside ,false);
        return () => {
            document.removeEventListener("click", handleClickOutside, false);
        }
    }, []);
    return (
        <div className="min-h-screen flex flex-row font-Noto text-white">
            <div className="min-h-full bg-black w-1/4 p-5 flex flex-col text-lg">
                <header className="font-bold w-full flex justify-between">
                    <div>
                        <p>Channels</p>
                    </div>
                    <button className="text-2xl active:scale-95" onClick={createChannel} ref={addRef}>+</button>
                </header>
                <nav className="w-fit px-4 my-3 hidden md:block lg:block">
                    <span className="absolute">🔍</span>
                    <input placeholder="Search..." type="text" className=" focus:outline-none ps-6 rounded-lg text-start border-0 w-full h-10 text-white bg-slate-500"  />
                </nav>
                {isVisible && (<div ref={modalRef} className=" py-4  px-8 border-4 h-fit w-2/5 left-1/3 right-1/3 absolute bg-black text-white z-40 border-purple-950 rounded-2xl text-xl">
                    <AddChannelPopUp />
                </div>)}
                <ChannelList />
                <UserOptions />
            </div>
            <ChatPage />
        </div>
        
    );
}

export default AllChannels