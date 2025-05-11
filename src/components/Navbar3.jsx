import React from 'react';
import horizontalicon from '../assets/MoreHorizontal.png';
import staricon from '../assets/Star.png'; 
import dropdownicon from '../assets/DownArrow.png'; 

const Navbar3 = () => {
  return (
    <div className='w-[1440px] h-[60px] border-b border-[#e5e5e5] bg-white flex items-center'>
      <div className='w-full px-[24px] py-[12px] flex justify-between items-center'>

       
        <div className='flex gap-[12px] items-center'>
          
          <div className='flex items-center gap-[8px]'>
            <div className='text-[24px] font-semibold text-black'>All Project</div>
            <img src={horizontalicon} alt="More" className='w-[24px] h-[24px]' />
          </div>

          
          <div className='w-[475px] h-[36px] bg-[#F4F4F4] rounded-[8px] px-[12px] py-[8px] flex items-center gap-[8px]'>
            <img src={staricon} alt="Star" className='w-[16px] h-[16px]' />
            <p className='text-[12px] leading-[16px] text-[#1C1C1C]'>
              Need inspiration? Use our <span className='text-[#3366FF] underline cursor-pointer'>Keyword Research tool</span> to find high-impact keywords.
            </p>
          </div>
        </div>

        
        <div className='flex items-center gap-[12px]'>
          
          <div className='w-[198px] h-[36px] bg-white border border-[#E5E5E5] rounded-[8px] px-[16px] py-[8px] flex items-center text-[14px] text-[#1C1C1C] gap-[8px]'>
            <span className='text-[14px] font-medium'><span className='text-[#1f1f1f] opacity-[45%]'>Trends:</span> <span class="text-black">Last 30 Days</span></span>
            <img src={dropdownicon} alt="Down" className='w-[12px] h-[12px]' />
          </div>

          
          <div className='w-[106px] h-[36px] bg-white border border-[#E5E5E5] rounded-[8px] px-[16px] py-[8px] flex items-center text-[14px] text-[#1C1C1C] gap-[8px]'>
            <span className='text-[14px] font-medium text-[#1f1f1f] opacity-[45%]'>Sort By</span>
            <img src={dropdownicon} alt="Down" className='w-[12px] h-[12px]' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar3;
