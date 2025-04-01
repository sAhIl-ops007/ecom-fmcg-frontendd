import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiArrowRight, FiMail, FiStar } from 'react-icons/fi';

export const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 p-4 text-white shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            ecom-FMCG
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            <Link to="/product" className="text-white/90 hover:text-white transition-colors font-medium">
              Shop
            </Link>
            <Link to="/aboutus" className="text-white/90 hover:text-white transition-colors font-medium">
              About Us
            </Link>
            <Link to="/contactpage" className="text-white/90 hover:text-white transition-colors font-medium">
              Contact
            </Link>
          </ul>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/login"
              className="px-5 py-2 rounded-lg font-medium text-white/90 hover:text-white transition-colors"
            >
              Login
            </Link>
            <Link 
              to="/signup"
              className="px-5 py-2 bg-white text-indigo-600 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-sm"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-indigo-700 text-white p-4">
          <ul className="space-y-4">
            <Link to="/product" className="block py-2 hover:bg-white/10 rounded-lg px-3 transition-colors">
              Shop
            </Link>
            <Link to="/aboutus" className="block py-2 hover:bg-white/10 rounded-lg px-3 transition-colors">
              About Us
            </Link>
            <Link to="/contactpage" className="block py-2 hover:bg-white/10 rounded-lg px-3 transition-colors">
              Contact
            </Link>
            <div className="pt-2 border-t border-white/20 space-y-2">
              <Link 
                to="/login" 
                className="block w-full text-center py-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                className="block w-full text-center py-2 rounded-lg bg-white text-indigo-600 font-medium"
              >
                Sign Up
              </Link>
            </div>
          </ul>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px] bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Premium Products for Your Everyday Needs
          </h1>
          <p className="text-lg text-white/90 mb-8">
            Discover high-quality FMCG products with fast delivery and exceptional service.
          </p>
          <Link 
            to="/product" 
            className="inline-block px-8 py-3 bg-white text-indigo-600 rounded-xl font-medium hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg"
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* Product Categories Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of products tailored for your lifestyle
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {[
            { name: 'Food & Beverages', image: 'foodandbevrage.png', link: '/product' },
            { name: 'Personal Care & Beauty', image: 'beautycare.jpg', link: '/product' },
            { name: 'Home Care & Household', image: 'homecare.png', link: '/product' },
            { name: 'Health & Wellness', image: 'healthandwellness.png', link: '/product' },
            { name: 'Baby Care', image: 'babycare.png', link: '/product' },
            { name: 'Pet Care', image: 'petcare.png', link: '/product' },
            { name: 'Lifestyle', image: 'lifestyle.png', link: '/product' }
          ].map((category, index) => (
            <Link 
              key={index} 
              to={category.link}
              className="group bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-60 overflow-hidden">
                <img 
                  src={`/src/assets/image/${category.image}`} 
                  alt={category.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">{category.name}</h3>
                <div className="flex items-center text-indigo-600 font-medium">
                  <span>Shop now</span>
                  <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Latest Articles Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Latest Articles</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with our latest tips and trends
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {['Top 10 Winter Accessories Trends', 'How to Style Sneakers', 'Best Home Cleaning Tips'].map((article, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-48 bg-gradient-to-r from-blue-50 to-purple-50 flex items-center justify-center">
                  <FiMail className="w-12 h-12 text-purple-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">{article}</h3>
                  <p className="text-gray-600 mb-4">Read more about the latest trends and tips in our blog.</p>
                  <button className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                    Read more
                    <FiArrowRight className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { 
              quote: "Great products and fast delivery! The quality exceeded my expectations.", 
              author: "Sarah Johnson" 
            },
            { 
              quote: "Amazing quality and affordable prices. Will definitely shop here again!", 
              author: "Michael Chen" 
            }
          ].map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((i) => (
                  <FiStar key={i} className="w-5 h-5 text-indigo-800 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg text-gray-700 mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="font-medium text-gray-900">
                — {testimonial.author}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive offers and the latest product updates
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <button className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-100 transition-colors shadow-sm">
              Subscribe
            </button>
          </div> */}
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 p-4 text-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">ecom-FMCG</h3>
              <p className="mb-4">
                Your one-stop e-commerce platform for all your daily needs.
              </p>
            </div>
            
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Shop</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/product" className="hover:text-white transition-colors">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link to="/foodandbevrages" className="hover:text-white transition-colors">
                    Food & Beverages
                  </Link>
                </li>
                <li>
                  <Link to="/personalcare" className="hover:text-white transition-colors">
                    Personal Care
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/aboutus" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contactpage" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/sahil46735/" className="hover:text-white transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
            <p>© 2024 ecom-FMCG. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}