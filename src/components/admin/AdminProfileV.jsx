import React from 'react'
import { Link } from 'react-router-dom';
import { FaUserCog, FaSignOutAlt } from 'react-icons/fa';

export const AdminProfileV = () => {
return (
<div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    
    {/* Sidebar */}
    <div className="w-72 bg-white/90 backdrop-blur-sm shadow-xl p-6 hidden md:block border-r border-gray-200">
    <div className="flex items-center mb-8">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold mr-3">
        A
        </div>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Admin Panel</h2>
    </div>
    <ul className="space-y-3">
        <li>
        <Link 
            to="/adminprofile"
            className="flex items-center p-3 rounded-xl text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-all group"
        >
            <FaUserCog className="mr-3 text-lg text-purple-500 group-hover:text-purple-600" /> 
            <span className="font-medium">Profile</span>
        </Link>
        </li>
        <li>
        <Link
            to="/"
            className="flex items-center p-3 rounded-xl text-gray-700 hover:bg-red-50 hover:text-red-500 transition-all group"
        >
            <FaSignOutAlt className="mr-3 text-lg text-gray-500 group-hover:text-red-500" />
            <span className="font-medium">Logout</span>
        </Link>
        </li>
    </ul>
    </div>

    {/* Main Content */}
    <div className="flex-1 p-6 overflow-auto">
    <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Admin Profile</h2>

        </div>

        {/* Admin Information */}
        <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-100">Admin Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
            <label className="text-sm font-medium text-gray-600">First Name</label>
            <input 
                type="text"
                placeholder="name" 
                className="p-3 border border-gray-200 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            />
            </div>
            <div className="space-y-1">
            <label className="text-sm font-medium text-gray-600">Last Name</label>
            <input 
                type="text"
                placeholder="surname"
                className="p-3 border border-gray-200 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            />
            </div>
            <div className="space-y-1">
            <label className="text-sm font-medium text-gray-600">Email</label>
            <input 
                type="email" 
                placeholder="john@example.com" 
                className="p-3 border border-gray-200 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            />
            </div>
            <div className="space-y-1">
            <label className="text-sm font-medium text-gray-600">Password</label>
            <input 
                type="password" 
                placeholder="••••••••" 
                className="p-3 border border-gray-200 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            />
            </div>
            <div className="space-y-1">
            <label className="text-sm font-medium text-gray-600">Phone Number</label>
            <input 
                type="tel" 
                placeholder="+1 (555) 000-0000" 
                className="p-3 border border-gray-200 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            />
            </div>
            <div className="space-y-1">
            <label className="text-sm font-medium text-gray-600">Role</label>
            <input 
                type="text" 
                value="Admin" 
                disabled 
                className="p-3 bg-gray-50 border border-gray-200 rounded-xl w-full text-gray-600"
            />
            </div>
        </div>
        </div>
    </div>
    </div>
</div>
)

}
