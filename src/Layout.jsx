import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
        
        <Outlet />
        {/* Footer */}
        <footer className='flex flex-col py-8 w-full px-[8%] items-center'>
          <div className='flex justify-center items-center gap-8 font-bold my-4 md:flex-row flex-col'>
            <div>Condition of Use</div>
            <div>Privacy & Policy</div>
            <div>Press Room</div>
          </div>
            <div>&copy; 2023 MovieBox by Ibiyemi Samuel</div>
        </footer>
    </div>
  )
}
