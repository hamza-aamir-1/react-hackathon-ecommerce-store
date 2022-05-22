import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarHeader from '../../components/navbar/Navbar'

const Layout = () => {
  return (
    <div>
        <NavbarHeader />
        <Outlet />
    </div>
  )
}

export default Layout