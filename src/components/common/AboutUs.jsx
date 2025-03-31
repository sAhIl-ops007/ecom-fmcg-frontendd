import React from 'react'
import { FaStore, FaTruck, FaHeadset } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            About Our eCommerce
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Welcome to our online store, your one-stop destination for the best products across multiple categories.
            We are committed to providing high-quality products with seamless shopping experiences.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Wide Selection */}
          <div className="group relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity"></div>
            <div className="w-16 h-16 bg-purple-50 rounded-xl flex items-center justify-center mb-6">
              <FaStore size={24} className="text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Wide Selection</h2>
            <p className="text-gray-600">
              Browse through a vast collection of products from electronics to fashion, home essentials, and more.
            </p>
          </div>
          
          {/* Fast Shipping */}
          <div className="group relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity"></div>
            <div className="w-16 h-16 bg-purple-50 rounded-xl flex items-center justify-center mb-6">
              <FaTruck size={24} className="text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Fast & Reliable Shipping</h2>
            <p className="text-gray-600">
              Get your orders delivered quickly and safely with our trusted shipping partners.
            </p>
          </div>
          
          {/* Customer Support */}
          <div className="group relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity"></div>
            <div className="w-16 h-16 bg-purple-50 rounded-xl flex items-center justify-center mb-6">
              <FaHeadset size={24} className="text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">24/7 Customer Support</h2>
            <p className="text-gray-600">
              Our dedicated team is available round the clock to assist you with your queries.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-12 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* About */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">About us</h2>
              <p className="mt-2 text-gray-600">
                Your one-stop e-commerce platform offering Food & Beverages,
                Personal Care & Beauty, Home Care & Household Essentials, 
                Miscellaneous & Lifestyle and more with seamless shopping experience.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h2>
              <ul className="space-y-3">
                <li>
                  <Link 
                    to='/contactpage' 
                    className="text-gray-600 hover:text-purple-600 transition-colors flex items-center"
                  >
                    <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Newsletter</h2>
              <p className="mt-2 text-gray-600">Subscribe to get the latest updates and offers.</p>
              <div className="mt-4 flex rounded-lg overflow-hidden shadow-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium hover:from-purple-700 hover:to-indigo-700 transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© 2024 eCommerce. All Rights Reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                <span className="sr-only">Facebook</span>
                <span className="text-lg">📘</span>
              </a>
              <a href="https://www.instagram.com/sahil46735/" className="text-gray-400 hover:text-purple-600 transition-colors">
                <span className="sr-only">Instagram</span>
                <span className="text-lg">📷</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                <span className="sr-only">Twitter</span>
                <span className="text-lg">🐦</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}