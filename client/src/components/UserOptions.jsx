import React from 'react'
import { useSelector } from 'react-redux'

const UserOptions = () => {
  const user = useSelector((state) => state.user);
  return (
    <footer className="w-full flex flex-col h-full justify-end ">
        <div className="text-bold text-xl rounded-xl bg-black hover:opacity-60 hover:bg-gray-800">
          {user.email}🔺
        </div>
    </footer>
  )
}

export default UserOptions