
import Topbar from './Topbar'
import Mainbar from './Mainbar'

const Dashboard = () => {
  return (
    <div className='w-[1440px] min-h-screen bg-white p-4'>
      <div className='max-w-[1440px] mx-auto space-y-4'>
        <Topbar fullrounded={false} />
        <Mainbar />
        <Topbar fullrounded={true} />
        <Topbar />
        <Mainbar />
      </div>
    </div>
  )
}

export default Dashboard