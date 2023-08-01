import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router';
const SignupPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const guest = {email, password};
        const response = await fetch("http://localhost:8000/auth/register", {
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(guest),
        });
        console.log(response);
        const { user } = await response.json();
        console.log(user);
        if(user)
            navigate("/login");
    }
    return (
        <div className="bg-black text-2xl h-screen w-full flex justify-center flex-col ">
            <h1 className="text-5xl text-white  mx-auto mb-10 font-bold">🧨WELCOME TO COMMUNITY-X💀</h1>
            <div className="bg-slate-900 rounded-2xl h-4/6 w-2/4 mx-auto flex flex-col p-10">
                <h1 className="text-3xl text-white  mx-auto mb-10 font-bold">Start funking today!</h1>
                <form onSubmit={handleSubmit} className="h-full w-full text-white font-bold text-2xl">
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="ps-4 pe-12 rounded-lg bg-gray-500 w-full h-12 focus:outline-none mb-12 "/>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="ps-4 pe-12 rounded-lg bg-gray-500 w-full h-12 focus:outline-none mb-12 "/>
                    <button type="submit" className="rounded-xl bg-blue-400 w-4/6 h-12 text-white font-bold text-xl relative left-24 hover:bg-cyan-500 hover:shadow-lg hover:shadow-cyan-500/50">Register</button>
                </form>
            </div>
        </div>
    )
}

export default SignupPage;