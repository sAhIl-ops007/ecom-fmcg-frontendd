import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useForm } from 'react-hook-form'

export const ForgotPass = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    
    const submitHandler = async(data) => {
        console.log(data)
        const verify = await axios.post("/forgotpassword", data)
        console.log(verify.data)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 p-6">
            <div className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="p-8">
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">Reset Password</h2>
                        <p className="text-gray-600">Enter your email to receive a reset link</p>
                    </div>
                    
                    <form onSubmit={handleSubmit(submitHandler)} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <div className="relative">
                                <input
                                    type="email"
                                    {...register("email", { required: "Email is required" })}
                                    placeholder="your@email.com"
                                    className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
                                />
                                {errors.email && (
                                    <svg className="absolute right-3 top-3.5 h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                )}
                            </div>
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                            )}
                        </div>

                        <button 
                            type="submit"
                            className="w-full px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-[1.01] shadow-md hover:shadow-lg active:scale-[0.99] flex items-center justify-center"
                        >
                            Send Reset Link
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <Link 
                            to="/login" 
                            className="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center transition-colors"
                        >
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Login
                        </Link>
                    </div>
                </div>
                
                <div className="bg-gray-50/50 p-4 text-center border-t border-gray-100">
                    <p className="text-sm text-gray-500">Remember your password? <Link to="/login" className="text-indigo-600 hover:underline font-medium">Sign in</Link></p>
                </div>
            </div>
        </div>
    )
}