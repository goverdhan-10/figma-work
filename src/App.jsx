import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar1 from './components/Navbar1'
import Navbar2 from './components/Navbar2'
import Navbar3 from './components/Navbar3'
import Navbar4 from './components/Navbar4'
import Navbar5 from './components/Navbar5'
import Dashboard from './components/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col items-start'>
    <Navbar1/>
    <Navbar2/>
    <Navbar3/>
    <Navbar4/>
    <Navbar5/>
    <Dashboard/>
      </div>
  )
}

export default App
