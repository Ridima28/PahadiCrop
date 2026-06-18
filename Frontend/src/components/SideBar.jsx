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
      sede
    </div>
  )
}
