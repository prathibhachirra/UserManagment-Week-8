import React from 'react'
import AddUser from './AddUser'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'
function Rootlayout() {
  return (
    <div >
        <Header />
        <div >
        <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default Rootlayout