import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminSideBar from '../Widgets/AdminSideBar'
import './CSS/AdminAppLayout.css'


export default function AppLayout() {
  return (
    <>
      <div className="AppLayoutContainer">
        <AdminSideBar />
        <Outlet />
      </div>
    </>
  )
}
