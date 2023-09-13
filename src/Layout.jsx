import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
        {/* Header */}
        <Outlet />
        {/* Footer */}
        <footer className='flex flex-col py-6 px-[8%] items-center'>
            <div>&copy; MovieBox by Ibiyemi Samuel 2023</div>
        </footer>
    </div>
  )
}
