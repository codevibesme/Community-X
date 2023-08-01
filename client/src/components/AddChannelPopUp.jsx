import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
const AddChannelPopUp = () => {
    const token = useSelector((state)=>state.token);
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name: name,
            description: desc,
        }
        try {
            const response = await fetch ("http://localhost:8000/channel/create", {
                method:"POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(data)
            });
            const { channel } = await response.json();
            console.log(channel);
            navigate(0);
        } catch(err) {
            console.log(err.message);
        }
    }
    return (
        <>
            <h1 className='text-2xl mb-2'>New Channel</h1>
            <form className='h-full w-full flex flex-col justify-center relative' onSubmit={handleSubmit}>
                <label htmlFor='channelName' className='mb-2'>Channel Name</label>
                <input placeholder='Enter Channel name' className="bg-slate-600 mb-4 h-10 w-full rounded-xl px-4" value={name} onChange={(e)=>setName(e.target.value)}  type='text' />
                <label htmlFor='channelDescription' className='mb-2'>Channel Description</label>
                <input placeholder='Add Description' className="bg-slate-600 mb-8 h-44 w-full rounded-xl px-4" value={desc} onChange={(e)=>setDesc(e.target.value)}  type='text' />
                <div className='flex justify-end'>
                    <button type="submit" className="bg-blue-400  hover:bg-cyan-500 hover:shadow-lg hover:shadow-cyan-500/50 rounded-xl w-24 h-10">Save</button>
                </div>
            </form>
        </>
        
    );
}

export default AddChannelPopUp;