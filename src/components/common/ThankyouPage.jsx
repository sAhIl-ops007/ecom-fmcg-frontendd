import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheckCircle, FiHome, FiShoppingBag  } from 'react-icons/fi';

export const ThankyouPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 p-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-indigo-100/30 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-purple-100/30 blur-xl"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-pink-100/40 animate-pulse"></div>
      
      {/* Main content */}
      <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-100 w-full max-w-md">
        <div className="p-8 text-center">
          <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <FiCheckCircle className="w-12 h-12 text-white" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-800 mb-3">Order Confirmed!</h1>
          {/* <p className="text-gray-600 mb-6">Your order has been placed successfully. We've sent a confirmation to your email.</p> */}
          
          <div className="bg-gray-50 rounded-xl p-4 mb-6">
            {/* <div className="flex items-center justify-center space-x-2 text-gray-700">
              <FiShoppingBag className="text-indigo-600" />
              <span>Order #12345</span>
            </div> */}
          </div>

          <div className="flex flex-col space-y-3">
            <Link 
              to="/" 
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center"
            >
              <FiHome className="mr-2" />
              Back to Home
            </Link>
            <Link 
              to="/product" 
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center"
            >
              <FiShoppingBag  className="mr-2" />
              Continue to Shopping
            </Link>
            
            {/* <Link 
              to="/orders" 
              className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-all flex items-center justify-center"
            >
              View Order Details
            </Link> */}
          </div>
        </div>
      </div>

      {/* Floating confetti elements */}
      {[...Array(20)].map((_, i) => (
        <div 
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: ['#6366f1', '#ec4899', '#10b981', '#f59e0b'][Math.floor(Math.random() * 4)],
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.7,
            transform: `scale(${Math.random() * 0.5 + 0.5})`,
            animation: `float ${Math.random() * 5 + 3}s infinite ease-in-out ${Math.random() * 2}s`,
          }}
        ></div>
      ))}

      {/* CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
          100% { transform: translateY(0) rotate(360deg); }
        }
      `}</style>
    </div>
  );
};