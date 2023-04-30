import React from 'react'
import {Routes,Route} from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Admin from './Admin'
import Home from './Home'
import AdminLogin from './AdminLogin'
import PrivateRoute from './PrivateRoute'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <Admin />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<AdminLogin />} />
    </Routes>
  );
}

export default AllRoutes