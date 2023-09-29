import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderHome from '../../Components/HeaderHome/HeaderHome';

const HomeTemplate = () => {
  return (
    <>
        <HeaderHome />
        <div style={{minHeight: '75vh'}}>
            {/* Outlet là nơi chứa nội dung các component pages */}
            <Outlet />
        </div>
        <footer className='bg-dark text-white text-center p-3'>
            Footer
        </footer>
    </>
  )
}

export default HomeTemplate