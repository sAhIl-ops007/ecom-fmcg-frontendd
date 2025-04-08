import React from 'react'
import { Link } from 'react-router-dom';
import { FiPlus, FiMinus, FiTrash2, FiArrowLeft, FiShoppingBag } from 'react-icons/fi';
import { useState } from 'react';

export const AddToCart = () => {
    const [cartItems, setCartItems] = useState([

    ]);

    const increaseQuantity = (id) => {
        setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
    };

    const decreaseQuantity = (id) => {
        setCartItems(
            cartItems.map(item =>
                item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            <div className="max-w-6xl mx-auto p-4 md:p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <Link to="/product" className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors group">
                        <FiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium">Continue Shopping</span>
                    </Link>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                        Your Shopping Cart
                    </h1>
                    <div className="flex items-center bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full shadow-xs border border-gray-200">
                        <FiShoppingBag className="text-indigo-600" />
                        <span className="ml-2 text-sm font-medium text-gray-700">
                            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
                        </span>
                    </div>
                </div>

                {cartItems.length === 0 ? (
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm p-12 text-center border border-gray-100 max-w-md mx-auto">
                        <div className="mx-auto w-24 h-24 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-full flex items-center justify-center mb-6">
                            <FiShoppingBag className="text-indigo-400 text-3xl" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-3">Your cart feels light</h2>
                        <p className="text-gray-500 mb-8">Let's find something to put in it</p>
                        <Link to="/product">
                            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-medium transition-all shadow-md hover:shadow-lg">
                                Browse Products
                            </button>
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-6">
                            {cartItems.map(item => (
                                <div key={item.id} className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xs hover:shadow-sm transition-all p-5 flex items-start border border-gray-100 group">
                                    <div className={`w-24 h-24 rounded-xl ${item.color} flex-shrink-0 overflow-hidden shadow-inner`}>
                                        <img src={item.img} alt={item.name} className="w-full h-full object-contain scale-90 group-hover:scale-95 transition-transform" />
                                    </div>
                                    <div className="ml-5 flex-1">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="font-semibold text-gray-900">{item.name}</h3>
                                                <p className="text-indigo-600 font-bold mt-1">Rs.{item.price.toFixed(2)}</p>
                                            </div>
                                            <button 
                                                onClick={() => removeItem(item.id)}
                                                className="text-gray-400 hover:text-red-500 transition-colors p-1 hover:bg-red-50 rounded-lg"
                                            >
                                                <FiTrash2 size={18} />
                                            </button>
                                        </div>
                                        <div className="flex items-center mt-6">
                                            <button 
                                                onClick={() => decreaseQuantity(item.id)}
                                                className="w-9 h-9 flex items-center justify-center border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors hover:border-indigo-300"
                                            >
                                                <FiMinus className="text-gray-600" />
                                            </button>
                                            <span className="mx-4 font-medium text-gray-800 min-w-[20px] text-center">{item.quantity}</span>
                                            <button 
                                                onClick={() => increaseQuantity(item.id)}
                                                className="w-9 h-9 flex items-center justify-center border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors hover:border-indigo-300"
                                            >
                                                <FiPlus className="text-gray-600" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Summary */}
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm p-6 h-fit sticky top-8 border border-gray-100">
                            <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">Order Summary</h2>
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Subtotal ({cartItems.reduce((acc, item) => acc + item.quantity, 0)} items)</span>
                                    <span className="font-medium text-gray-900">Rs.{totalPrice.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Shipping</span>
                                    <span className="font-medium text-green-600">Free</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Tax</span>
                                    <span className="font-medium text-gray-900">Rs.0.00</span>
                                </div>
                            </div>
                            <div className="border-t border-gray-200 my-5"></div>
                            <div className="flex justify-between text-lg font-bold text-gray-900 mb-6">
                                <span>Total</span>
                                <span>Rs.{totalPrice.toFixed(2)}</span>
                            </div>
                            <Link to="/payment">
                                <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-4 rounded-xl font-medium transition-all shadow-md hover:shadow-lg flex items-center justify-center">
                                    Proceed to Checkout
                                    <FiArrowLeft className="ml-2 transform rotate-180" />
                                </button>
                            </Link>
                            <p className="text-xs text-gray-400 text-center mt-4 flex items-center justify-center">
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                                Secure payment processing
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};