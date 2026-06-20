import React, { use, useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import logoIcon from '../assets/logo-icon.png';
import { Message } from './Message';
import { assets } from '../assets/assets';
import { Loader2, Send } from 'lucide-react';

export const ChatBox = () => {
  const [message, setMessage] = useState([])
  const [loading, setLoading] = useState(false)
  const { selectedChat } = useAppContext()
  const[prompt, setPrompt] = useState("")
  const[isPublished, setIsPublished] = useState(false)
  const onSubmit = async (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    if (selectedChat) {
      setMessage(selectedChat.messages || [])
    }
  }, [selectedChat])

  return (
    <div className="flex flex-col h-full w-full overflow-hidden">
    
    <header className="flex-shrink-0  px-4 py-3 bg-[#F5F3EE]">
      <p className="text-sm font-medium text-gray-600">Crop Advisory Chatbot</p>
    </header>
    <div className="flex-1 flex flex-col justify-between m-5 md:m-10 xl:mx-30 max-md:mt-14 2xl:pr-40">

      <div className='flex-1 mb-5 overflow-y-scroll'>
        {message.length === 0 && (
          <div className='h-full flex flex-col items-center justify-center gap-2 text-primary'>
            <img src={logoIcon} alt="" className=' max-w-20 ' />
            <h3 className='font-heading text-lg text-gray-800 font-bold'> Namaste 🙏🏻</h3>
            <p className='mt-5 text-md sm:text-1xl text-center text-gray-400 dark:text-white'>
              I'm your crop advisor. Ask me about diseases, pests, post-harvest handling, or planting for your farms.


            </p>
          </div>
        )}
        {message.map((messages,index) => <Message key = {index} message={messages}/>)}
        
        {
          loading && <div className='loader flex items-center gap-1.5'>
          <div className='w-1.5 h-1.5 rounded-full bg-gray-500 dark:bg-white animate-bounce'></div>
      <div className='w-1.5 h-1.5 rounded-full bg-gray-500 dark:bg-white
      animate-bounce'></div>
      <div className='w-1.5 h-1.5 rounded-full bg-gray-500 dark:bg-white
      animate-bounce'></div>
            </div>
        }
      </div>
<div className="flex flex-col gap-1">
<form onSubmit = {onSubmit}className="relative flex items-center gap-2 p-2 rounded-2xl border border-[#E5E7EB] bg-white shadow-lg shadow-[#0D1B1E]/[0.04] animate-float-bar focus-within:border-[#52B788] focus-within:shadow-[#52B788]/10 transition-all duration-300"> 

          <input onChange ={(e)=> setPrompt(e.target.value)} value = {prompt} type = "text" placeholder='Enter your question...'                 className="flex-1 bg-transparent px-3 py-2 text-[15px] text-[#1B4332] placeholder-[#9CA3AF] outline-none min-w-0" />

          <button disabled  = {loading} className="w-10 h-10 rounded-xl bg-[#2d6a4f9d] hover:bg-[#1b4332b6] text-white flex items-center justify-center transition-all disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0"> 
                            {loading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
            {/* <img src = {loading? assets.stop_icon: assets.send_icon} className='w-8 cursor-pointer' /> */}
          </button>

      </form>
            <p className="text-[10px] text-gray-500 text-center mt-1">
                AI-generated advice — always verify with a licensed extension officer
            </p>
            </div>

    </div>

    </div>
  )
}