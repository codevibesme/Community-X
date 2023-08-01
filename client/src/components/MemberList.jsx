import React from 'react'

const MemberList = ({users}) => {
  return (
    <section id="members" className="flex flex-col">
        <p className="font-bold mb-3">MEMBERS</p>
        <div className="overflow-y-auto max-h-48">
            {
                users.map((user)=>(
                <div className="font-bold mb-3 text-gray-400">
                    <p>{user}</p>
                </div>
                ))
            }
        </div>
        
    </section>
  )
}

export default MemberList;