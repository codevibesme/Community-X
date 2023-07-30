import React from 'react'
import { useNavigate } from 'react-router';
import ChatPage from './ChatPage';
const ChannelDetails = ({users}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/"); 
    }
    return (
        <div className="min-h-screen flex flex-row font-Noto text-white">
            <div className="min-h-full bg-black w-1/4 p-2 flex flex-col text-lg">
                <header className="font-bold w-full ">
                    <button className="text-2xl me-2" onClick={handleClick}>&lt;</button> All Channels
                </header>
                <main className="w-full">
                    <section className="font-bold mt-4" id="name">FRONT-END DEVELOPERS</section>
                    <section id="description">
                    <p className="mt-4 mb-7 font-normal">
                        Pellentesque sagittis elit enim, sit amet ultrices tellus accumsan quis. In gravida mollis purus, at interdum arcu tempor non
                    </p>
                    </section>
                    <section id="members" className="flex flex-col">
                        <p className="font-bold mb-3">MEMBERS</p>
                        <div className="overflow-y-auto max-h-48">
                            {
                                users.map((user)=>(
                                <div className="font-bold mb-3 text-gray-400">
                                    <p>{user}</p>
                                </div>
                                ))
                            }
                        </div>
                        
                    </section>
                </main>
                <footer className="w-full flex flex-col h-full justify-end ">
                    <div className="font-bold ">{users[0]}</div>
                </footer>
            </div>
            <ChatPage />
        </div>
    );
}

export default ChannelDetails