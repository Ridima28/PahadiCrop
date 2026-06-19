import React, {  useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import logo from '../assets/logo.png'



export const SideBar = ()=>  {

  const {chats, setSelectedChat, user} = useAppContext()

  const[search, setSearch] = useState('')

  return (
<div className="flex flex-col h-screen min-w-72 p-5 bg-[#F5F3EE] border-r border-gray-200 transition-all duration-500 max-md:absolute left-0 z-10">
    <img src = {logo} className='w-full max-w-48'/>
                <button
        
className="w-full justify-start gap-2 h-9 text-sm bg-primary text-primary-foreground shadow hover:brightness-95 rounded-xl transition-all duration-200"
            // onClick={handleNewChat}
          >+ New Chat
          </button>

          <div className='flex items-center gap-2 p-3 mt-4 '> 
            <img src = {assets.search_icon} className = 'w-4'/>
            

<input onChange={(e)=>setSearch(e. target. value)} value={search} type="text"
placeholder='Search conversations' className='text-xs
placeholder:text-gray-400 outline-none'/>
</div>

{chats.length > 0 }
I
        
    </div>
  )
}
