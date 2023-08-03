import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRef, useEffect, useState } from 'react';
import { setUser, setToken, setIsLoggedIn } from '../states/stateSlice';
import { useNavigate } from 'react-router';
const UserOptions = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const optionsRef = useRef(null);
  const handleClickOutside = (e) => {
    if(optionsRef.current && !optionsRef.current.contains(e.target)) {
      setIsVisible(false);
    }
  }
  useEffect(()=> {
    document.addEventListener("click", handleClickOutside, "false");
    return ()=>{
      document.removeEventListener("click", handleClickOutside, "false");
    }
  },[]) //eslint-disable-line
  const handleLogout = () => {
    dispatch(setUser({user: null}));
    dispatch(setToken({token: null}));
    dispatch(setIsLoggedIn());
    navigate("/login");
  }
  const showUserOptions = () => {
    setIsVisible(true);
  }
  return (
    <footer className="w-full flex flex-col h-full justify-end ">
        {isVisible && <button ref={optionsRef} onClick={handleLogout} className=' bg-slate-600 rounded-2xl h-10 w-fit p-2 text-bold border-2 border-blue-300 mb-3 z-40 hover:bg-blue-300 hover:shadow-lg hover:shadow-cyan-200/80 active:scale-95'>Logout</button> }
        <div onClick={showUserOptions} className="flex text-bold text-xs md:text-sm lg:text-xl rounded-xl border-gray-700 border-2 h-fit w-fit p-2 bg-black active:scale-95 hover:bg-slate-800">
          <img className="rounded-full border-0 h-10 w-10 mx-3" src={`https://communityx.onrender.com/assets/${user.picturePath}`} alt="img" />
          <p className='inline'>{user.name}</p>
        </div>
    </footer>
  )
}

export default UserOptions