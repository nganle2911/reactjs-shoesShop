import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderHome from '../../Components/HeaderHome/HeaderHome';
import FooterHome from '../../Components/FooterHome/FooterHome';

const HomeTemplate = () => {
  return (
    <>
        <HeaderHome />
        <div style={{minHeight: '75vh'}}>
            {/* Outlet là nơi chứa nội dung các component pages */}
            <Outlet />
        </div>
        <FooterHome />
    </>
  )
}

export default HomeTemplate