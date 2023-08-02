import React from 'react'
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router';
const SignupPage = () => {
    const inputRef = useRef(null);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [picture, setPicture] = useState(null);
    const [name, setName] = useState(''); 
    const [picSrc, setPicSrc] = useState('');
    const uploadImage = () => {
        inputRef.current.click();
    }
    const handleUpload = (e) => {
        const fileObj = e.target.files && e.target.files[0];
        // PREVIEWING IMAGE
        const fr = new FileReader();
        fr.readAsDataURL(fileObj);
        fr.onloadend = (e) => {
            setPicSrc(e.target.result);
        }
        setPicture(fileObj);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        if(picture){
            formData.append("picture", picture);
            formData.append("picturePath", picture.name);
        }
        formData.append("name", name);
        formData.append("email", email);
        formData.append("password", password);
        
        const response = await fetch("http://localhost:8000/auth/register", {
            method:"POST",
            body: formData,
        });
        const { user } = await response.json();
        console.log(user);
        if(user)
            navigate("/login");
    }
    return (
        <div className="bg-black text-2xl h-full w-full flex justify-center flex-col ">
            <h1 className="text-5xl text-white  mx-auto mb-10 font-bold">🧨WELCOME TO COMMUNITY-X💀</h1>
            <div className="bg-slate-900 rounded-2xl h-fit w-2/4 mx-auto flex flex-col p-10">
                <h1 className="text-3xl text-white  mx-auto mb-10 font-bold">Start funking today!</h1>
                <form onSubmit={handleSubmit} className="h-full w-full text-white font-bold text-2xl">
                    <div className=' flex flex-col justify-center mb-4 items-center'>
                        <label htmlFor='pic' className='text-center mb-2'>Upload Picture</label>
                        <img src={picSrc? `${picSrc}`: "assets/blank.jpg"} onClick={uploadImage} className='h-14 w-14 rounded-2xl hover:bg-sky-500 hover:shadow-lg hover:shadow-sky-400/75' alt='blank.png' />
                    </div>
                    <input type='file' ref={inputRef} className='hidden' onChange={handleUpload} />
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="ps-4 pe-12 rounded-lg bg-gray-500 w-full h-12 focus:outline-none mb-12 "/>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="ps-4 pe-12 rounded-lg bg-gray-500 w-full h-12 focus:outline-none mb-12 "/>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="ps-4 pe-12 rounded-lg bg-gray-500 w-full h-12 focus:outline-none mb-12 "/>
                    <button type="submit" className="rounded-xl active:scale-95 bg-blue-400 w-4/6 h-12 text-white font-bold text-xl relative left-24 hover:bg-cyan-500 hover:shadow-lg hover:shadow-cyan-500/50">Register</button>
                </form>
                <p className=' mt-8 text-white text-sm'>Already a member? <span className=' text-blue-400 active:scale-110 cursor-pointer' onClick={()=>navigate("/login")}>Login</span></p>
            </div>
        </div>
    )
}

export default SignupPage;