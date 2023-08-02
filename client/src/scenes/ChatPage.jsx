import React from "react";
import {IoSendSharp} from "react-icons/io5"
const ChatPage = () => {
    const messages = [
        "IUxi7Gjg9Y",
        "lZEyOW4Q0a",
        "YpHwqBeOpo",
        "hH8w89zmsu",
        "nAgrFvyT6Z",
        "ERkXHNx7Mc",
        "ZY1LNbcL8e",
        "09p26EsMyi",
        "JjvXMpNDcI",
        "IUxi7Gjg9Y",
        "lZEyOW4Q0a",
        "YpHwqBeOpo",
        "hH8w89zmsu",
        "nAgrFvyT6Z",
        "ERkXHNx7Mc",
        "ZY1LNbcL8e",
        "09p26EsMyi",
        "JjvXMpNDcI",
        "IUxi7Gjg9Y",
        "lZEyOW4Q0a",
        "YpHwqBeOpo",
        "hH8w89zmsu",
        "nAgrFvyT6Z",
        "ERkXHNx7Mc",
        "ZY1LNbcL8e",
        "09p26EsMyi",
        "JjvXMpNDcI",
        "IUxi7Gjg9Y",
        "lZEyOW4Q0a",
        "YpHwqBeOpo",
        "hH8w89zmsu",
        "nAgrFvyT6Z",
        "ERkXHNx7Mc",
        "ZY1LNbcL8e",
        "09p26EsMyi",
        "JjvXMpNDcI",
        "IUxi7Gjg9Y",
        "lZEyOW4Q0a",
        "YpHwqBeOpo",
        "hH8w89zmsu",
        "nAgrFvyT6Z",
        "ERkXHNx7Mc",
        "ZY1LNbcL8e",
        "09p26EsMyi",
        "JjvXMpNDcI",
        "IUxi7Gjg9Y",
        "lZEyOW4Q0a",
        "YpHwqBeOpo",
        "hH8w89zmsu",
        "nAgrFvyT6Z",
        "ERkXHNx7Mc",
        "ZY1LNbcL8e",
        "09p26EsMyi",
        "JjvXMpNDcI",
        "IUxi7Gjg9Y",
        "lZEyOW4Q0a",
        "YpHwqBeOpo",
        "hH8w89zmsu",
        "nAgrFvyT6Z",
        "ERkXHNx7Mc",
        "ZY1LNbcL8e",
        "09p26EsMyi",
        "JjvXMpNDcI",
        "IUxi7Gjg9Y",
        "lZEyOW4Q0a",
        "YpHwqBeOpo",
        "hH8w89zmsu",
        "nAgrFvyT6Z",
        "ERkXHNx7Mc",
        "ZY1LNbcL8e",
        "09p26EsMyi",
        "JjvXMpNDcI",
        "IUxi7Gjg9Y",
        "lZEyOW4Q0a",
        "YpHwqBeOpo",
        "hH8w89zmsu",
        "nAgrFvyT6Z",
        "ERkXHNx7Mc",
        "ZY1LNbcL8e",
        "09p26EsMyi",
        "JjvXMpNDcI",
    ]
    return (
        <div className="bg-slate-900 flex flex-col h-screen w-3/4 flex flex-col pb-2 ">
            <header>
                <h1 className="text-xl min-h-fit bg-black font-Noto font-bold text-white  px-8 py-4">Hello World!</h1>
            </header>
            <main className="overflow-y-auto px-8 my-4 scroll-smooth hover:scroll-auto">
                {
                    messages.map((message) => (
                        <div className="bg-slate-400 text-center text-white text-bold text-xl mb-8">{message}</div>
                    ))
                }
            </main>
            <footer className="px-8 h-fit">
                <button className="absolute right-9 h-10 w-10 px-2.5 bottom-3 bg-blue-400 rounded-lg hover:bg-cyan-500 hover:shadow-lg hover:shadow-cyan-500/50 active:scale-95"> <IoSendSharp className="text-lg text-center" /></button>
                <input type="text" placeholder="Type a message here "className="ps-4 pe-12 rounded-lg bg-gray-500 w-full h-12 focus:outline-none "/>
            </footer>
        </div>
    );
};
export default ChatPage;