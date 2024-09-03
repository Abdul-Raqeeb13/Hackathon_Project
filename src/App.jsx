import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Components/AppLayout'
import Home from './Components/Home'
import About from './Components/About'
import SignUp from './Components/SignUp'
import SignIn from './Components/SignIn'

export default function App() {

  const router = createBrowserRouter([
    {
      path : "/",
      element : <AppLayout/>,
      children : [
        {
          path : "/",
          element : <Home/>
        },
        {
          path : "/about",
          element : <About/>
        },
        {
          path: '/user/signup',
          element: <SignUp />,
        },
        {
          path: '/user/signin',
          element: <SignIn />,
        },

      ]
    }
  ])


  return <RouterProvider router={router}/>
}
