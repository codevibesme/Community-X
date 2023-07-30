import React from 'react'
import ChatPage from './ChatPage'
const AllChannels = ({channels}) => {
  return (
    <div className="min-h-screen flex flex-row font-Noto text-white">
        <div className="min-h-full bg-black w-1/4 p-5 flex flex-col text-lg">
            <header className="font-bold w-full flex justify-between">
                <div>
                    <p>Channels</p>
                </div>
                <button className="text-2xl">+</button>
            </header>
            <nav className="w-fit px-4 my-3">
                <span className="absolute">🔍</span>
                <input type="text" className=" focus:outline-none ps-6 rounded-lg text-start border-0 w-9/12 h-fit text-white bg-slate-500"  />
            </nav>
            <main className="w-full mt-10">
                <section id="channels" className="flex flex-col max-h-56 overflow-y-auto">
                    {
                        channels.map((channel)=>(
                        <div className="font-bold mb-3 text-gray-400 hover:text-white">
                            <p>{channel}</p>
                        </div>
                        ))
                    }
                </section>
            </main>
            <footer className="w-full flex flex-col h-full justify-end ">
                <div className="font-bold ">{channels[0]}</div>
            </footer>
        </div>
        <ChatPage />
    </div>
    
  )
}

export default AllChannels