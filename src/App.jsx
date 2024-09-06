// App.js
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './Components/AppLayout';
import Home from './Components/Home';
import About from './Components/About';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import AdminAppLayout from './Admin Panel/Components/AdminAppLayout';
import AdminHome from './Admin Panel/Components/Admin Home';
import AdminAbout from './Admin Panel/Components/Admin About';
import { AuthProvider } from './Components/AuthContext';
import ProtectedRoute from './Components/ProtectedRoute';
import Contact from './Components/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <ProtectedRoute element={<About />} />
      },
      {
        path: "/contact",
        element: <ProtectedRoute element={<Contact />} />
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/signin',
        element: <SignIn />,
      },
    ]
  },
  {
    path: "/admin",
    element: <AdminAppLayout />,
    children: [
      {
        path: "/admin/home",
        element: <AdminHome />
      },
      {
        path: "/admin/about",
        element: <AdminAbout />
      },
    ]
  }
]);

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
