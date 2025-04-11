import React from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { FiMail, FiLock, FiArrowRight, FiUserPlus } from 'react-icons/fi';

export const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const submitHandler = async (data) => {
    console.log(data)
    try {
      const res = await axios.post("/euserlogin", data);
      console.log(res);
      
      if (res.status === 200) {
        toast.success('Login Successful', {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
        
        localStorage.setItem("id", res.data.data._id);
        localStorage.setItem("rolename", res.data.data.roleId.rolename);
        
        setTimeout(() => {
          if (res.data.data.roleId.rolename === "user") {
            navigate("/userprofile");
          } else if (res.data.data.roleId.rolename === "admin") {
            navigate("/adminprofile");
          }else if (res.data.data.roleId.rolename === "vendor"){
            navigate("/adminprofilev")
          }
        }, 2000);
      }
    } catch (err) {
      console.log("error:", err);
      toast.error('Invalid credentials', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 p-4">
      <ToastContainer />
      
      <div className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        <div className="p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h2>
            <p className="text-gray-600">Sign in to your account</p>
          </div>
          
          <form onSubmit={handleSubmit(submitHandler)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  {...register('email', { required: "Email is required" })}
                  placeholder="your@email.com"
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.email ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiLock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  {...register('password', { required: "Password is required" })}
                  placeholder="••••••••"
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.password ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
                />
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link to='/forgotpass' className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </Link>
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-[1.01] shadow-md hover:shadow-lg active:scale-[0.99] flex items-center justify-center"
            >
              Sign in
              <FiArrowRight className="ml-2" />
            </button>
          </form>

          <div className="mt-6 text-center">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Don't have an account?
                </span>
              </div>
            </div>

            <Link 
              to={'/signup'} 
              className="mt-4 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <FiUserPlus className="mr-2" />
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}