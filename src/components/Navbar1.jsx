
import rankTrackerIcon from '../assets/ranktracker.png';
import contentviewIcon from '../assets/ContentView.png'
import logoIcon from '../assets/logo.png'
import rightsideIcon from '../assets/RightSidebar.png'
import SlideIcon from '../assets/SlideSearch.png'
import WindowIcon from '../assets/Window.png'
import wrenchIcon from '../assets/Wrench.png'
const Navbar1 = () => {
  return (
    <div className="w-[1440px] h-[68px] border-b-[1px] border-[#e5e5e5] bg-white flex items-center justify-between px-8 shadow-sm">
      
      <div className="flex items-center gap-2">
        <img src={logoIcon} alt="SEORCE Logo" className="w-[121.69px] h-[34px]" />
      </div>

      
      <div className="flex items-center justify-center px-[6px] py-[10px] w-[810px] h-[52px] gap-[2px] rounded-[8px] bg-[#f4f4f4] shadow">
        
        <div className="flex items-center justify-center px-4 py-[10px] h-[40px] w-auto bg-[#f4f4f4] rounded gap-1 cursor-pointer">
          <img src={WindowIcon} alt="Technical Suit" className="w-[20px] h-[20px]" />
          <span className="text-sm font-medium text-gray-800">Project</span>
          <span className="flex items-center justify-center w-[16px] h-[16px] rounded-full bg-[#ff7875] text-white text-[10px]">
            1
          </span>
        </div>

        
        <div className="flex items-center justify-center px-4 py-[10px] h-[40px] w-auto bg-[#f4f4f4] rounded gap-1 cursor-pointer">
          <img src={contentviewIcon} alt="Technical Suit" className="w-[20px] h-[20px]" />
          <span className="text-sm font-medium text-gray-800">Content Studio</span>
          <span className="flex items-center justify-center w-[16px] h-[16px] rounded-full bg-[#ff7875] text-white text-[10px]">
            1
          </span>
        </div>

        
        <div className="flex items-center justify-center px-4 py-[10px] h-[40px] w-auto bg-[#f4f4f4] rounded gap-1 cursor-pointer">
          <img src={SlideIcon} alt="Technical Suit" className="w-[20px] h-[20px]" />
          <span className="text-sm font-medium text-gray-800">Keyword Explorer</span>
        </div>

        
        <div className="flex items-center justify-center px-4 py-[10px] h-[40px] w-auto bg-[#f4f4f4] rounded gap-1 cursor-pointer">
          <img src={wrenchIcon} alt="Technical Suit" className="w-[20px] h-[20px]" />
          <span className="text-sm font-medium text-gray-800">Technical Suit</span>
        </div>

        
        <div className="flex items-center justify-center border-b-[1.5px] border-[#05f] px-4 py-[10px] h-[40px] w-auto bg-white text-blue-600 rounded shadow gap-[4px] cursor-pointer">
          <img src={rankTrackerIcon} alt="Rank Tracker" className="w-[20px] h-[20px]" />
          <span className="text-sm font-medium text-black">Rank Tracker</span>
          <span className="flex items-center justify-center w-[16px] h-[16px] rounded-full bg-[#ff7875] text-white text-[10px]">
            1
          </span>
        </div>

      </div>

      
      <img src={rightsideIcon} className='w-[128px] h-[32px]'/>
    </div>
  );
};

export default Navbar1;
