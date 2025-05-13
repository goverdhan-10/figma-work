import divicon from '../assets/div.png'
import activeicon from '../assets/active.png'
import pinicon from '../assets/pin.png'

const Topbar = ({ fullrounded = false }) => {
  return (
    <div
      className={`w-full h-[10.96vh] bg-white text-black border border-[#e5e5e5] ${
        fullrounded ? 'rounded-[1.29vh]' : 'rounded-t-[1.29vh]'
      }`}
    >
      <div className='px-[2.5vh] py-[1.93vh] flex flex-wrap items-center justify-between h-full'>
        {/* Left Section */}
        <div className='flex flex-wrap items-center gap-x-[3.87vh] gap-y-[1.29vh] flex-1 min-w-0'>
          <img src={divicon} className='h-[7.09vh] w-auto max-w-[27.5vh]' alt="Div Icon" />
          <img src={activeicon} className='h-[3.22vh] w-auto max-w-[16.12vh]' alt="Active Icon" />
          <div className='text-[2.25vh] truncate'>ID-12345</div>
          <div className='px-[1.93vh] py-[0.6vh] h-[4.51vh] rounded-full flex items-center border border-gray-300 text-[1.93vh] font-medium whitespace-nowrap'>
            <span className='text-[#1f1f1f]'>Last Tracked:</span>
            <span className='text-[#595959] ml-[0.6vh]'>2 days ago</span>
          </div>
          <div className='text-[2.25vh] whitespace-nowrap'>25 Mar, 2025 01:11 PM</div>
        </div>

        {/* Right Section */}
        <div className='flex items-center gap-x-[2.5vh] mt-[1.29vh] sm:mt-0'>
          <div className='px-[1.93vh] py-[1.29vh] text-[1.93vh] font-medium border border-[#05F] text-[#05F] rounded-[0.9vh] text-center whitespace-nowrap'>
            Add Keywords
          </div>
          <img src={pinicon} className='h-[5.16vh] w-[11.6vh]' alt="Pin Icon" />
        </div>
      </div>
    </div>
  )
}

export default Topbar
