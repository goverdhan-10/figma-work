
import twentyicon from '../assets/20.png'
import tenicon from '../assets/10.png'
import fificon from '../assets/15.png'
import badgeicon from '../assets/Badge.png'
import graphicon from '../assets/Graph.png'
import graph2icon from '../assets/Graph2.png'
import acrossicon from '../assets/accross.png'
import twowayicon from '../assets/twoway.png'
import negfificon from '../assets/neg15.png'
const Mainbar = () => {
  return (
    <div className='w-full h-[36.12vh] bg-white text-black px-[2.5vh] py-[2.5vh]'>
      <div className='flex gap-x-[2.5vh]'>
        {/*1 */}
        <div className='w-[48.925vh] h-[30.9vh] gap-y-[9.48vh]'>
          <div className='w-full h-[14.5vh] gap-y-[2.5vh]'>
            <div className='flex gap-x-[19.3vh] items-center '> 
              <div className='text-[2.25vh] font-medium text-[#595959]'>Domain Authority</div>
              <div className='text-[1.61vh] text-[#8c8c8c] font-medium mt-[8px]'>View More</div>
            </div>
            <div className='h-[8.7vh] gap-y-[1.93vh]'>
              <div className='flex gap-x-[0.5vh] items-center'>
                <div className='text-[4.83vh] font-regular text-[#1f1f1f]'>20</div>
                <img src={fificon} className='w-[7.09vh] h-[1.93vh] mt-[8px]'/>
                <div className='text-[1.93vh] font-regular text-[#8c8c8c] mt-[8px]'>vs last month</div>
              </div>
              <img src={badgeicon} className='w-[20.8vh] h-[3.22vh]'/>
            </div>
          </div>
          <img src={graphicon} className='h-[6.96vh] w-[48.925vh] mt-[9.48vh]'/>
        </div>
        {/*2*/}
        <div className='w-[48.925vh] h-[30.9vh] gap-y-[9.48vh]'>
          <div className='w-full h-[14.5vh] gap-y-[2.5vh]'>
            <div className='flex gap-x-[19.3vh] items-center '> 
              <div className='text-[2.25vh] font-medium text-[#595959]'>Average Position</div>
              <div className='text-[1.61vh] text-[#8c8c8c] font-medium mt-[8px]'>View More</div>
            </div>
            <div className='h-[8.7vh] gap-y-[1.93vh]'>
              <div className='flex gap-x-[0.5vh] items-center'>
                <div className='text-[4.83vh] font-regular text-[#1f1f1f]'>20</div>
                <img src={negfificon} className='w-[7.09vh] h-[1.93vh] mt-[8px]'/>
                <div className='text-[1.93vh] font-regular text-[#8c8c8c] mt-[8px]'>vs last month</div>
              </div>
              <img src={acrossicon} className='w-[20.8vh] h-[3.22vh]'/>
            </div>
          </div>
          <img src={graph2icon} className='h-[6.96vh] w-[48.925vh] mt-[9.48vh]'/>
        </div>
        {/*3*/}
        <div className='w-[56.77vh] h-[28.38vh]'>
          <div className='w-full h-[14.5vh] gap-y-[2.5vh]'>
            <div className='flex gap-x-[38.95vh] items-center '> 
              <div className='text-[2.25vh] font-medium text-[#595959]'>Keywords</div>
              <div className='text-[1.61vh] text-[#8c8c8c] font-medium mt-[8px]'>View More</div>
            </div>
            <div className='h-[8.7vh] gap-y-[1.93vh]'>
              <div className='flex gap-x-[0.5vh] items-center'>
                <div className='text-[4.83vh] font-regular text-[#1f1f1f]'>140</div>
                <img src={twentyicon} className='w-[4.51vh] h-[1.93vh] mt-[8px] '/>
                <img src={tenicon} className='w-[4.51vh] h-[1.93vh] mt-[8px]'/>
                <div className='text-[1.93vh] font-regular text-[#8c8c8c] mt-[8px]'>vs last month</div>
              </div>
            </div>
            <div className='h-[16.45vh] w-[61.67vh]'>
              <hr className='border-t border-[#e5e5e5] h-px w-full'/>
              <div className='w-full h-[15.16vh] mt-[1.29vh]'>
                <div className='flex gap-x-[5.17vh]'>
                  <div className='gap-y-[0.322vh]'>
                    <div className='flex gap-x-[8.70vh]'>
                      <div className='text-[2.25vh] text-[#1f1f1f]'>Top 1-3</div>
                      <div className='flex gap-x-[2.5vh]'><span className='text-[2.25vh] text-[#1f1f1f]'>36</span> <img src={fificon} className='w-[7.09vh] h-[1.93vh] mt-[5px]'/></div>
                      
                    </div>
                    <hr className='border-t border-[#e5e5e5] h-px w-full my-4'></hr>
                    <div className='flex gap-x-[7.41935vh]'>
                      <div className='text-[2.25vh] text-[#1f1f1f]'>Top 4-10</div>
                      <div className='flex gap-x-[2.5vh]'><span className='text-[2.25vh] text-[#1f1f1f]'>88</span> <img src={negfificon} className='w-[7.09vh] h-[1.93vh] mt-[5px]'/></div>
                      
                    </div>
                    <hr className='border-t border-[#e5e5e5] h-px w-full my-4'></hr>
                    <div className='flex gap-x-[6.2vh]'>
                      <div className='text-[2.25vh] text-[#1f1f1f]'>Top 11-20</div>
                      <div className='flex gap-x-[2.5vh]'><span className='text-[2.25vh] text-[#1f1f1f]'>36</span> <img src={fificon} className='w-[7.09vh] h-[1.93vh] mt-[8px]'/></div>
                      
                    </div>
                    <hr className='border-t border-[#e5e5e5] h-px w-full my-4'></hr>
                  </div>
                  <div className='gap-y-[0.322vh]'>
                    <div className='flex gap-x-[5.05vh]'>
                      <div className='text-[2.25vh] text-[#1f1f1f]'>Top 21-50</div>
                      <div className='flex gap-x-[2.5vh]'><span className='text-[2.25vh] text-[#1f1f1f]'>100</span> <img src={fificon} className='w-[7.09vh] h-[1.93vh] mt-[8px]'/></div>
                      
                    </div>
                    <hr className='border-t border-[#e5e5e5] h-px w-full my-4'></hr>
                    <div className='flex gap-x-[7.99vh]'>
                      <div className='text-[2.25vh] text-[#1f1f1f]'>Top 51+</div>
                      <div className='flex gap-x-[2.5vh]'><span className='text-[2.25vh] text-[#1f1f1f]'>53</span> <img src={negfificon} className='w-[7.09vh] h-[1.93vh] mt-[8px]'/></div>
                      
                    </div>
                    <hr className='border-t border-[#e5e5e5] h-px w-full my-4'></hr>
                    
                    
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        {/*4*/}
        <div className='w-[49.3vh] h-[30.9vh] gap-y-[3.5vh]'>
            <div className='flex gap-x-[17.15vh] items-center '> 
              <div className='text-[2.25vh] font-medium text-[#595959] ml-[140px]'>Top 10 Keywords</div>
              <img src={twowayicon} className='h-[3.22vh] w-[8.38vh]'/>
            </div>
            <div className='h-25.16 gap-y-[0.6vh] ml-[140px]'>
              <div className='flex gap-x-[1.29vh] rounded-[1.29vh] shadow-lg items-center pl-[10px] w-full h-[4.51vh]'>
                <span className="flex items-center justify-center w-[2.5vh] h-[2.5vh] rounded-[2.5vh] bg-[#f4f4f4] text-[#05f] text-[1.6vh]">1</span>
                <div className='text-[1.93vh] text-regular text-[#1f1f1f]'>Technology</div>
              </div>
              <div className='flex gap-x-[1.29vh] rounded-[1.29vh] shadow-lg items-center pl-[10px] w-full h-[4.51vh]'>
                <span className="flex items-center justify-center w-[2.5vh] h-[2.5vh] rounded-[2.5vh] bg-[#f4f4f4] text-[#05f] text-[1.6vh]">2</span>
                <div className='text-[1.93vh] text-regular text-[#1f1f1f]'>Seorce</div>
              </div>
              <div className='flex gap-x-[1.29vh] rounded-[1.29vh] shadow-lg items-center pl-[10px] w-full h-[4.51vh]'>
                <span className="flex items-center justify-center w-[2.5vh] h-[2.5vh] rounded-[2.5vh] bg-[#f4f4f4] text-[#05f] text-[1.6vh]">3</span>
                <div className='text-[1.93vh] text-regular text-[#1f1f1f]'>Keyword Ranking</div>
              </div>
              <div className='flex gap-x-[1.29vh] rounded-[1.29vh] shadow-lg items-center pl-[10px] w-full h-[4.51vh]'>
                <span className="flex items-center justify-center w-[2.5vh] h-[2.5vh] rounded-[2.5vh] bg-[#f4f4f4] text-[#05f] text-[1.6vh]">4</span>
                <div className='text-[1.93vh] text-regular text-[#1f1f1f]'>Project</div>
              </div>
              <div className='flex gap-x-[1.29vh] rounded-[1.29vh] shadow-lg items-center pl-[10px] w-full h-[4.51vh]'>
                <span className="flex items-center justify-center w-[2.5vh] h-[2.5vh] rounded-[2.5vh] bg-[#f4f4f4] text-[#05f] text-[1.6vh]">5</span>
                <div className='text-[1.93vh] text-regular text-[#1f1f1f]'>Average Position</div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Mainbar