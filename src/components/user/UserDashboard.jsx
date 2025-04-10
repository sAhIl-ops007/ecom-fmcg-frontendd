import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios';
import { 
  FiHome, 
  FiShoppingBag, 
  FiLogOut, 
  FiUser,
  FiShoppingCart

} from "react-icons/fi"

export const UserDashboard = () => {
  
  const [field, setfield] = useState([])

  const getNameByUserId = async () => {

      const res = await axios.get("/findeuser/"+localStorage.getItem("id"));
      console.log(res.data);
      setfield(res.data.data)

  }

  useEffect(()=>{
    getNameByUserId()
  },[])


  return (
    <div className="w-72 h-screen bg-gradient-to-b from-indigo-600 to-purple-600 text-white p-6 fixed top-0 left-0 shadow-xl overflow-hidden">
      {/* User Profile Header */}
      <div className="flex items-center space-x-4 mb-8 p-4 bg-white/10 rounded-xl">
        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
          <FiUser className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl font-bold">Welcome Back</h2>
          <p className="text-sm text-white/80">{field.firstName} {field.lastName}</p>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="space-y-1">
        <Link 
          to="/" 
          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-200 text-white/90 hover:text-white"
        >
          <FiHome className="w-5 h-5" />
          <span>Home</span>
        </Link>

        <Link 
          to="/orders"
          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-200 text-white/90 hover:text-white"
        >
          <FiShoppingCart className="w-5 h-5" />
          <span>Your Orders</span>

        </Link>

        <Link 
          to="/product"
          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-200 text-white/90 hover:text-white"
        >
          <FiShoppingBag className="w-5 h-5" />
          <span>Shopping</span>

        </Link>




      </nav>

      {/* Bottom Logout Button */}
      <div className="absolute bottom-6 left-6 right-6">
        <Link to='/login'> <button className="w-full flex items-center justify-center space-x-3 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-200 text-white/90 hover:text-white">
          <FiLogOut className="w-5 h-5" />
          <span>Logout</span>
        </button></Link>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-white/5 rounded-full"></div>
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/5 rounded-full"></div>
    </div>
  )
}