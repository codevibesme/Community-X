import React from 'react'
import { useNavigate } from 'react-router';
import ChatPage from './ChatPage';
import MemberList from '../components/MemberList.jsx';
import UserOptions from '../components/UserOptions';
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
                    <MemberList users={users}/>
                </main>
                <UserOptions />
            </div>
            <ChatPage />
        </div>
    );
}

export default ChannelDetails