import React from 'react'
import { UserDashboard } from '../layouts/UserDashboard'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export const UserProfile = () => {
  return (
    <>
      <UserDashboard />
      
      <div className="flex min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">


        {/* Main Content */}
        <div className="flex-1 p-6 overflow-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="max-w-6xl mx-auto bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                User Profile
              </h2>
              {/* <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-400 text-white rounded-lg hover:shadow-lg transition-all duration-300">
                Edit Profile
              </button> */}
            </div>
            
            {/* Personal Information */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="p-2 bg-purple-100 text-purple-600 rounded-full">👤</span>
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: "First Name", placeholder: "firstname", type: "text" },
                  { label: "Last Name", placeholder: "lastname", type: "text" },
                  { label: "Email", placeholder: "your@example.com", type: "email" },
                  { label: "Phone Number", placeholder: "+91 123 456 7890", type: "tel" },
                  { label: "Role", value: "User", disabled: true }
                ].map((field, index) => (
                  <div key={index} className="space-y-1">
                    <label className="text-sm font-medium text-gray-600">{field.label}</label>
                    <input
                      type={field.type || "text"}
                      placeholder={field.placeholder}
                      value={field.value}
                      disabled={field.disabled}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all duration-200 bg-white/80"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Address Information */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="p-2 bg-blue-100 text-blue-600 rounded-full">🏠</span>
                Address Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: "Address", placeholder: "address" },
                  { label: "City", placeholder: "city" },
                  { label: "State", placeholder: "state" },
                  { label: "PIN Code", placeholder: "pincode" }
                ].map((field, index) => (
                  <div key={index} className="space-y-1">
                    <label className="text-sm font-medium text-gray-600">{field.label}</label>
                    <input
                      type="text"
                      placeholder={field.placeholder}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-200 bg-white/80"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Purchase Details */}
            {/* <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="p-2 bg-green-100 text-green-600 rounded-full">📦</span>
                Order History
              </h3>
              <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      {["Order ID", "Date", "Total", "Status"].map((header, index) => (
                        <th
                          key={index}
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[
                      { id: "#12345", date: "2025-03-19", total: "$120.00", status: "Shipped", statusColor: "text-green-500" },
                      { id: "#12346", date: "2025-03-15", total: "$85.00", status: "Pending", statusColor: "text-yellow-500" },
                      { id: "#12347", date: "2025-03-10", total: "$210.00", status: "Delivered", statusColor: "text-blue-500" }
                    ].map((order, index) => (
                      <motion.tr
                        key={index}
                        whileHover={{ backgroundColor: "rgba(249, 250, 251, 0.8)" }}
                        className="hover:bg-gray-50/80 transition-colors duration-150"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {order.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {order.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                          {order.total}
                        </td>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm ${order.statusColor}`}>
                          {order.status}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </>
  )
}