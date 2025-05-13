import React from 'react';

// Image imports
import rankTrackerIcon from '../assets/ranktracker.png';
import contentviewIcon from '../assets/ContentView.png';
import logoIcon from '../assets/logo.png';
import rightsideIcon from '../assets/RightSidebar.png';
import SlideIcon from '../assets/SlideSearch.png';
import WindowIcon from '../assets/Window.png';
import wrenchIcon from '../assets/Wrench.png';
import addicon from '../assets/Add.png';
import horizontalicon from '../assets/MoreHorizontal.png';
import staricon from '../assets/Star.png';
import dropdownicon from '../assets/DownArrow.png';
import upArrowIcon from '../assets/DownArrow.png'; 

const Navbar = () => {
  return (
    <div className="w-full">
      
      <div className="w-full h-[11vh] border-b border-[#e5e5e5] bg-white flex items-center justify-between px-8 shadow-sm">
        <div className="flex items-center gap-2 px-[5px] py-[5px]">
          <img src={logoIcon} alt="SEORCE Logo" className="w-[19.6vh] h-[5.48vh]" />
        </div>
        <div className="flex items-center justify-center w-[130.53vh] h-[8.38vh] gap-2 px-[10px] py-[5px] rounded-[8px] bg-[#f4f4f4] shadow">
          <div className="flex items-center px-4 py-2 bg-[#f4f4f4] rounded gap-[8px] cursor-pointer">
            <img src={WindowIcon} alt="Project" className="w-[3.22vh] h-[3.22vh]" />
            <span className="text-[2vh] font-medium text-gray-800 whitespace-nowrap">Project </span>
            <span className="flex items-center justify-center w-[2.5vh] h-[2.5vh] rounded-full bg-[#ff7875] text-white text-[1.6vh]">1</span>
          </div>
          <div className="flex items-center px-4 py-2 bg-[#f4f4f4] rounded gap-[8px] cursor-pointer">
            <img src={contentviewIcon} alt="Content Studio" className="w-[3.22vh] h-[3.22vh]" />
            <span className="text-[2vh] font-medium text-gray-800">Content Studio</span>
            <span className="flex items-center justify-center w-[2.5vh] h-[2.5vh] rounded-full bg-[#ff7875] text-white text-[1.6vh]">1</span>
          </div>
          <div className="flex items-center px-4 py-2 bg-[#f4f4f4] rounded gap-[8px] cursor-pointer">
            <img src={SlideIcon} alt="Keyword Explorer" className="w-[3.22vh] h-[3.22vh]" />
            <span className="text-[2vh] font-medium text-gray-800">Keyword Explorer</span>
          </div>
          <div className="flex items-center px-4 py-2 bg-[#f4f4f4] rounded gap-[8px] cursor-pointer">
            <img src={wrenchIcon} alt="Technical Suit" className="w-[3.22vh] h-[3.22vh]" />
            <span className="text-[2vh] font-medium text-gray-800">Technical Suit</span>
          </div>
          <div className="flex items-center border-b-[1.5px] border-[#05f] px-4 py-2 bg-white text-blue-600 rounded shadow gap-[1.29vh] cursor-pointer">
            <img src={rankTrackerIcon} alt="Rank Tracker" className="w-[3.22vh] h-[3.22vh]" />
            <span className="text-[2vh] font-medium text-black">Rank Tracker</span>
            <span className="flex items-center justify-center w-[2.5vh] h-[2.5vh] rounded-full bg-[#ff7875] text-white text-[1.6vh]">1</span>
          </div>
        </div>
        <div className="flex items-center">
          <img src={rightsideIcon} className="w-[20.64vh] h-[5.16vh]" />
        </div>
      </div>

      
      <div className="w-full h-[7.74vh] mx-auto border-b border-[#e5e5e5] bg-white flex items-center justify-between">
        <div className="ml-[3.87vh]">
          <span className="text-black text-[2.2vh] font-medium leading-[3.22vh]">Rank Tracker</span>
        </div>
        <div className="flex items-center mr-[3.87vh]">
          <div className="flex items-center justify-center bg-[#05f] text-white rounded-[1.29vh]">
            <div className="flex items-center gap-[0.32vh] px-[1.9vh] py-[1.29vh]">
              <img src={addicon} alt="plus" className="w-[2.5vh] h-[2.5vh]" />
              <span className="text-[2vh] font-medium mb-[3px]">New Project</span>
            </div>
          </div>
        </div>
      </div>

      
      <div className="w-full h-[9.67vh] mx-auto border-b border-[#e5e5e5] bg-white flex items-center">
        <div className="w-full px-[3.87vh] py-[1.93vh] flex justify-between items-center">
          <div className="flex gap-[1.93vh] items-center">
            <div className="flex items-center gap-[1.29vh]">
              <div className="text-[3.87vh] font-semibold text-black">All Project</div>
              <img src={horizontalicon} alt="More" className="w-[3.87vh] h-[3.87vh] mt-[10px]   " />
            </div>
            <div className="w-[76.66vh] bg-[#F4F4F4] rounded-[1.29vh] px-[1.93vh] py-[1.29vh] flex items-center gap-[8px]">
              <img src={staricon} alt="Star" className="w-[2.5vh] h-[2.5vh]" />
              <p className="text-[1.93vh] leading-[2.5vh] text-[#1C1C1C]">
                Need inspiration? Use our <span className="text-[#3366FF] underline cursor-pointer">Keyword Research tool</span> to find high-impact keywords.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-[1.93vh]">
            <div className="w-[32vh] bg-white border border-[#E5E5E5] rounded-[1.29vh] px-[2.5vh] py-[1.29vh] flex items-center gap-[1.29vh]">
              <span className="text-[2.25vh] font-medium">
                <span className="text-[#1f1f1f] opacity-[45%]">Trends:</span>{' '}
                <span className="text-black">Last 30 Days</span>
              </span>
              <img src={dropdownicon} alt="Down" className="w-[1.93vh] h-[1.93vh]" />
            </div>
            <div className="w-[17vh] bg-white border border-[#E5E5E5] rounded-[1.29vh] px-[2.5vh] py-[1.29vh] flex items-center gap-[1.29vh]">
              <span className="text-[2.25vh] font-medium text-[#1f1f1f] opacity-[45%]">Sort By</span>
              <img src={dropdownicon} alt="Down" className="w-[1.93vh] h-[1.93vh]" />
            </div>
          </div>
        </div>
      </div>


      <div className='w-full h-[8.38vh] mx-auto bg-white border-b border-[#e5e5e5]'>
        <div className='px-[3.87vh]'>
          <div className='pb-[2.5vh] flex gap-[3450px]'>
            <div className='flex bg-[#fafafa] border-[0.16vh] border-[#E5E5E5] rounded-[1.29vh] px-[0.6vh] py-[0.6vh]'>
              <div className='text-white bg-[#05f] px-[2.5vh] py-[0.6vh] items-center font-semibold rounded-[0.6vh] text-[2.25vh]'>All</div>
              <div className='text-[#595959] px-[2.5vh] py-[0.6vh] items-center font-semibold rounded-[4px] text-[2.25vh]'>Active</div>
              <div className='text-[#595959] px-[2.5vh] py-[0.6vh] items-center font-semibold rounded-[4px] text-[2.25vh]'>Verify</div>
              <div className='text-[#595959] px-[2.5vh] py-[0.6vh] items-center font-semibold rounded-[4px] text-[2.25vh]'>Inactive</div>
            </div>
            <img src={upArrowIcon} className='w-[3.22vh] h-[3.22vh] mt-[2.5vh] transform rotate-180' />
          </div>
        </div>
      </div>

      
      <div className='w-full h-[5.8vh] bg-white border-b border-[#e5e5e5] px-[3.87vh] flex items-center'>
        <div className='flex gap-x-[8.62vh]'>
          <div className='text-[#595959] text-[2.25vh] font-medium'>Details</div>
          <div className='text-[#595959] text-[2.25vh] font-medium'>Status</div>
          <div className='text-[#595959] text-[2.25vh] font-medium'>Project ID</div>
          <div className='text-[#595959] text-[2.25vh] font-medium'>Last Activity</div>
          <div className='text-[#595959] text-[2.25vh] font-medium'>Created On</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
