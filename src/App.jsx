import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'  // This is your combined Navbar1-5
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className='flex flex-col h-screen w-full overflow-hidden'>
      <Navbar />
      <div className='flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden'>
        <Dashboard />
      </div>
    </div>
  )
}

export default App
