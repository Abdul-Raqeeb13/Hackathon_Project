import React from 'react'
import NavbarCom from '../Widgets/NavbarMain'
import { Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <>
        <NavbarCom/>
        <Outlet/> 
    </>
  )
}
