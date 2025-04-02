import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiUser, FiMail, FiPhone, FiLock, FiHome, FiCheckCircle } from 'react-icons/fi';
import { Link } from "react-router-dom";

export const SignUp = () => {
  const [roles, setRoles] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [areas, setAreas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const submitHandler = async (data) => {
    setIsLoading(true);
    try {
      const res = await axios.post("/eusersignup", data);
      if (res.status === 200) {
        toast.success('Account created successfully!', {
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
        setTimeout(() => navigate("/login"), 2000);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Registration failed', {
        position: "top-center",
        autoClose: 2000,
        theme: "colored"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getAllRoles = async () => {
    const res = await axios.get("/roles");
    setRoles(res.data.data);
  };

  const getAllStates = async () => {
    const res = await axios.get("/getallstates");
    setStates(res.data.data);
  };

  const getCityByStateId = async (id) => {
    const res = await axios.get("getcitybystate/" + id);
    setCities(res.data.data);
    setAreas([]); // Reset areas when state changes
  };
  
  const getAreaByCityId = async (id) => {
    const res = await axios.get("/getareabycity/" + id);
    // console.log(res.data.data)
    setAreas(res.data.data);
  };

  useEffect(() => {
    getAllRoles();
    getAllStates();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <ToastContainer />
      
      <div className="w-full max-w-2xl bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        <div className="p-8">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiUser className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Your Account</h1>
            <p className="text-gray-600">Join us today for an amazing shopping experience</p>
          </div>

          <form onSubmit={handleSubmit(submitHandler)} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4 p-6 bg-gray-50 rounded-xl">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                <FiUser className="mr-2 text-indigo-600" />
                Personal Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      {...register("firstName", { required: "First name is required" })}
                      placeholder="John"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.firstName ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
                    />
                    <FiUser className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  </div>
                  {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      {...register("lastName", { required: "Last name is required" })}
                      placeholder="Doe"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.lastName ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
                    />
                    <FiUser className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  </div>
                  {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>}
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div className="space-y-4 p-6 bg-gray-50 rounded-xl">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                <FiHome className="mr-2 text-indigo-600" />
                Address Information
              </h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
                <div className="relative">
                  <input
                    type="text"
                    {...register("address", { required: "Address is required" })}
                    placeholder="123 Main St"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.address ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
                  />
                  <FiHome className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
                {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                  <select
                    {...register("stateId", { required: "State is required" })}
                    onChange={(e) => getCityByStateId(e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.stateId ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
                  >
                    <option value="">Select State</option>
                    {states.map((state) => (
                      <option key={state._id} value={state._id}>{state.name}</option>
                    ))}
                  </select>
                  {errors.stateId && <p className="mt-1 text-sm text-red-600">{errors.stateId.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <select
                    {...register("cityId", { required: "City is required" })}
                    onChange={(e) => getAreaByCityId(e.target.value)}
                    // disabled={!watch("stateId")}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.cityId ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
                  >
                    <option value="">Select City</option>
                    {cities.map((city) => (
                      <option key={city._id} value={city._id}>{city.name}</option>
                    ))}
                  </select>
                  {errors.cityId && <p className="mt-1 text-sm text-red-600">{errors.cityId.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Area</label>
                  <select
                    {...register("areaId", { required: "Area is required" })}
                    // disabled={!watch("cityId")}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.areaId ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
                  >
                    <option value="">Select Area</option>
                    {areas.map((area) => (
                      <option key={area._id} value={area._id}>{area.name}</option>
                    ))}
                  </select>
                  {errors.areaId && <p className="mt-1 text-sm text-red-600">{errors.areaId.message}</p>}
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4 p-6 bg-gray-50 rounded-xl">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                <FiPhone className="mr-2 text-indigo-600" />
                Contact Information
              </h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <div className="relative">
                  <input
                    type="tel"
                    {...register("phonenumber", { 
                      required: "Phone number is required",
                      pattern: {
                        value: /[6-9]{1}[0-9]{9}/,
                        message: "Please enter a valid phone number"
                      }
                    })}
                    placeholder="+91 00000 00000"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.phonenumber ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
                  />
                  <FiPhone className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
                {errors.phonenumber && <p className="mt-1 text-sm text-red-600">{errors.phonenumber.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <div className="relative">
                  <input
                    type="email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    placeholder="your@email.com"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.email ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
                  />
                  <FiMail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
              </div>
            </div>

            {/* Account Information */}
            <div className="space-y-4 p-6 bg-gray-50 rounded-xl">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                <FiLock className="mr-2 text-indigo-600" />
                Account Information
              </h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <input
                    type="password"
                    {...register("password", { 
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters"
                      }
                    })}
                    placeholder="••••••••"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.password ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
                  />
                  <FiLock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
                {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
              </div>
            </div>

            {/* Role Selection */}
            <div className="space-y-4 p-6 bg-gray-50 rounded-xl">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                <FiUser className="mr-2 text-indigo-600" />
                Account Type
              </h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Select Role</label>
                <select
                  {...register("roleId", { required: "Role is required" })}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.roleId ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
                >
                  <option value="">Select Role</option>
                  {roles.map((role) => (
                    <option key={role._id} value={role._id}>{role.rolename}</option>
                  ))}
                </select>
                {errors.roleId && <p className="mt-1 text-sm text-red-600">{errors.roleId.message}</p>}
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-[1.01] shadow-md hover:shadow-lg active:scale-[0.99] flex items-center justify-center"
            >
              {isLoading ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <>
                  Create Account
                  <FiCheckCircle className="ml-2" />
                </>
              )}
            </button>

            <div className="text-center mt-4">
              <p className="text-gray-600">Already have an account?{' '}
                <Link to="/login" className="text-indigo-600 hover:text-indigo-800 font-medium">
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};