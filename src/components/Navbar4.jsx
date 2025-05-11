import React from 'react';
import upArrowIcon from '../assets/DownArrow.png'; 

const Navbar4 = () => {
  return (
    <div className='w-[1440px] h-[52px] bg-white border-b border-[#e5e5e5]'>
        <div className='px-[24px]'>
            <div className='pb-[16px] flex gap-[1078px]'>
                <div className='w-[290px] h-[36px] px-[4px] py-[4px] flex bg-[#fafafa] border-[1px] border-[#E5E5E5] rounded-[8px]'>
                    <div className='text-white bg-[#05f] w-[50px] h-[28px] px-[16px] py-[4px] items-center font-semibold rounded-[4px] text-[14px]'>All</div>
                    <div className='text-[#595959] bg-[#fafafa] w-[75px] h-[28px] px-[16px] py-[4px] items-center font-semibold rounded-[4px] text-[14px]'>Active</div>
                    <div className='text-[#595959] bg-[#fafafa] w-[72px] h-[28px] px-[16px] py-[4px] items-center font-semibold rounded-[4px] text-[14px]'>Verify</div>
                    <div className='text-[#595959] bg-[#fafafa] w-[85px] h-[28px] px-[16px] py-[4px] items-center font-semibold rounded-[4px] text-[14px]'>Inactive</div>
                </div>
                <img src={upArrowIcon} className='w-[20px] h-[20px] mt-[16px] transform rotate-180'/>
            </div>
        </div>
    </div>
  );
};

export default Navbar4;
