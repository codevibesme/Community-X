import React from 'react'

const Chat = ({chat}) => {
    const pic = `http://localhost:8000/assets/${chat.picturePath}`;
    const message = chat.message;
    const name = chat.name;
    return (
        <div className='h-fit w-4/6 text-slate-200 rounded-lg flex items-end mb-2'>
            <img src={pic} className='h-10 w-10 rounded-lg border-0 me-4' alt="prof.jpg"/>
            <div className='flex flex-col items-start'>
                <p className=' text-slate-400 text-sm mb-2'>{name}</p>
                <p className='text-xs'>{message}</p>
            </div>
        </div>
    )
}

export default Chat