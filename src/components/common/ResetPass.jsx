import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import { FiLock, FiArrowLeft, FiCheckCircle } from 'react-icons/fi';

export const ResetPass = () => {
  const token = useParams().token;
  const { register, handleSubmit, formState: { errors }, watch } = useForm();

  const submitHandler = async (data) => {
    console.log(data);
    const obj = {
      token: token,
      password: data.password,
    };
    try {
      const res = await axios.post("/resetpassword", obj);
      console.log(res.data);
    } catch (error) {
      console.error("Error resetting password:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 p-4">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        <div className="p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiLock className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Reset Password</h2>
            <p className="text-gray-600">Create a new secure password</p>
          </div>
          
          <form onSubmit={handleSubmit(submitHandler)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiLock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  {...register("password", { 
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters"
                    }
                  })}
                  placeholder="Enter new password"
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.password ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
                />
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiLock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  {...register("confirmPassword", { 
                    required: "Please confirm your password",
                    validate: value => 
                      value === watch('password') || "Passwords do not match"
                  })}
                  placeholder="Confirm new password"
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.confirmPassword ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
                />
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
              )}
            </div>

            <button 
              type="submit" 
              className="w-full px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-[1.01] shadow-md hover:shadow-lg active:scale-[0.99] flex items-center justify-center"
            >
              Reset Password
              <FiCheckCircle className="ml-2" />
            </button>

            <div className="text-center">
              <Link 
                to="/login" 
                className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
              >
                <FiArrowLeft className="mr-1" />
                Back to Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};