import React from 'react'

const MemberList = ({members}) => {
  return (
    members && (<section id="members" className="flex flex-col">
      <p className="font-bold mb-3">MEMBERS</p>
      <div className="overflow-y-auto max-h-48">
        {
          members.map((user)=>(
            <div key={user._id} className="h-fit w-full p-2 font-bold mb-1 text-gray-400 flex">
                <img className="rounded-full border-0 h-10 w-10 mx-3" src={`https://communityx.onrender.com/assets/${user.picturePath}`} alt="img" />
                <p>{user.name}</p>
            </div>
          ))
        }
      </div>
    </section>)
  )
}

export default MemberList;