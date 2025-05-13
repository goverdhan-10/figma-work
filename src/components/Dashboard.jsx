
import Topbar from './Topbar'
import Mainbar from './Mainbar'

const Dashboard = () => {
  return (
    <div className='w-full min-h-screen bg-white p-[0.6vh]'>
      <div className='w-full mx-auto space-y-4'>
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