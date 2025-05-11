import React from 'react'
import addicon from '../assets/Add.png'
const Navbar2 = () => {
  return (
    <div className='w-[1440px] h-[38px] border-b-[1px] border-[#e5e5e5]'>
  <div className="flex items-center justify-between w-full h-full bg-white">
    
    <div className="w-[88px] h-[20px] ml-[24px]">
      <span className="text-black text-sm font-medium leading-5">
        Rank Tracker
      </span>
    </div>

    
    <div className='flex items-center'>
      <div className="flex items-center justify-center w-[118px] h-[32px] bg-[#05f] text-white rounded-[8px] mr-[24px]">
        <div className="flex items-center justify-center gap-[2px] px-[12px] py-[8px]">
          <img src={addicon} alt="plus" className="w-[16px] h-[16px]" />
          <span className="text-xs font-medium">
            New Project
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Navbar2