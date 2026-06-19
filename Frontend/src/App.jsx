import { SideBar } from './components/SideBar'
import React from 'react'
import { ChatBox } from './components/ChatBox'
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="bg-white text-black ">
      <div className='flex h-screen'>
        <SideBar />
        <Routes>
          <Route path="/" element={<ChatBox />} />
        </Routes>
      </div>
    </div>
  )
}