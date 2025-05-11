
import credicon from '../assets/cred.png'
import divicon from '../assets/div.png'
import activeicon from '../assets/active.png'

import pinicon from '../assets/pin.png'

const Topbar = ({fullrounded=false}) => {
  return (
    <div className={`w-[1392px] h-[68px] bg-white text-black border-[1px] border-[#e5e5e5]  ${fullrounded ? 'rounded-[8px]' : 'rounded-t-[8px]'}`}>
      <div className='px-[16px] py-[12px] flex items-center'>
        <div className='w-[909px] h-[44px] flex gap-x-[56px] items-center'>
          <img src={divicon} className='w-[171px] h-[44px]' />
          <img src={activeicon} className='w-[100px] h-[20px] '/>
          <div className='w-[100px] h-[20px] text-left text-[14px] font-regular'>ID-12345</div>
          <div className='w-[164px] h-[28px] rounded-full items-center text-center border-[1px]'>
            <span className='font-medium text-[12px]'><span className='text-[#1f1f1f]'>Last Tracked:</span ><span className='text-[#595959]'> 2 days ago</span></span>

          </div>
          <div className='w-[150px] h-[20px] items-center' >
            <span className='text-[14px] font-regular'>25 Mar, 2025 01:11 PM</span>
          </div>
        </div>
        <div className='w-[194px] flex h-[36px] whitespace-nowrap justify-right ml-[259px] gap-x-[16px]'>
          <div className='w-[106px] border-[1px] px-[12px] py-[8px] text-[12px] font-medium border-[#05F] text-[#05F] rounded-[8px] items-center text-center'>
            Add Keywords
          </div>
          <img src={pinicon}/>
        </div>
      </div>
    </div>
  )
}

export default Topbar