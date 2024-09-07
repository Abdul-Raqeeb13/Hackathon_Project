// App.js
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './Components/AppLayout';
import Home from './Components/Home';
import About from './Components/About';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import AdminAppLayout from './Admin Panel/Components/AdminAppLayout';
import { AuthProvider } from './Components/AuthContext';
import ProtectedRoute from './Components/ProtectedRoute';
import Contact from './Components/Contact';
import AdminDashboard from './Admin Panel/Components/AdminDashboard';
import AdminOrder from './Admin Panel/Components/Admin Order';
import AdminPayment from './Admin Panel/Components/Admin Payment';
import AdminSetting from './Admin Panel/Components/Admin Setting';
import UpdateProfile from './Components/UpdateProfile';

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
      {
        path: '/updateProfile',
        element: <UpdateProfile />,
      },
    ]
  },
  {
    path: "/admin",
    element: <AdminAppLayout />,
    children: [
      {
        path: "/admin",
        element: <AdminDashboard />
      },
      {
        path: "/admin/order",
        element: <AdminOrder />
      },
      {
        path: "/admin/payment",
        element: <AdminPayment />
      },
      {
        path: "/admin/setting",
        element: <AdminSetting />
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
