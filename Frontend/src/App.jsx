import { SideBar } from './components/SideBar'
import React from 'react'
import {ChatBox} from './components/ChatBox'
import { Routes, Route } from 'react-router-dom';


export default function App() {
  return (
    <>
  <div className='dark:bg-gradient-to-b from-[#242124] to-[#000000]
dark: text-white'>  
      <div className='flex h-screen w-screen'>
        <SideBar/>
        <Routes>
          <Route path ="/" element={<ChatBox/>}/>
        </Routes>
      </div>
      </div>
    </>
  )
}
