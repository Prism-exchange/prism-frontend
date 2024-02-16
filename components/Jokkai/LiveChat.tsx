'use client'
import { useEffect, useState } from 'react'

function LiveChat() {
  const [chatItem, setChatItem] = useState(['hello @first'])
  useEffect(() => {
    const interval = setInterval(() => {
      setChatItem((prev) => [...prev, ` hello: @${new Date()}`].slice(-40))
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  return (
    <div className=' w-full max-w-[15%] flex flex-col'>
      <div className=' sticky top-0 py-2 px-2 h-[50px] border-b border-slate-400 flex items-center '>
        <span className='mr-2 text-header'>Live Trading</span>
        <div className=' bg-green-400 animate-ping w-2 h-2 rounded-lg mt-1'></div>
      </div>
      <div className=' flex-1 max-h-full overflow-y-scroll pl-1'>
        {chatItem.map((x, y) => (
          <div key={`item-${y}`}>{x}</div>
        ))}
      </div>
      <div className=' pl-1 bg-black pt-[5px]'>
        <div className=' h-[50px] bg-slate-800 hover:bg-slate-500 rounded-md text-header border-white/10 border-[1px] cursor-pointer'>
          <div className=' h-full w-full flex justify-center items-center'>
            Sign In
          </div>
        </div>
      </div>
    </div>
  )
}

export default LiveChat
