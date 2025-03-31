import React from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiHome, FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export const ShippingPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = async (data) => {
    // console.log(data);
    try{
      const res = await axios.post("/addshipping",data)
      if(res.status ===200){
        alert("Shipping details added successfully")
      }

    }catch(err){
      console.log(err)
    }

  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        <div className="p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiHome className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Shipping Details</h2>
            <p className="text-gray-600">Where should we deliver your order?</p>
          </div>

          <form onSubmit={handleSubmit(submitHandler)} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiUser className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  {...register("fullname", {
                    required: "Full name is required",
                    minLength: {
                      value: 3,
                      message: "Full name must be at least 3 characters",
                    },
                  })}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                    errors.fullName ? 'border-red-300' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
                  placeholder="John Doe"
                />
              </div>
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
              )}
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiHome className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  {...register("address", {
                    required: "Address is required",
                    minLength: {
                      value: 5,
                      message: "Address must be at least 5 characters",
                    },
                  })}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                    errors.address ? 'border-red-300' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
                  placeholder="123 Main St"
                />
              </div>
              {errors.address && (
                <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
              )}
            </div>

            {/* City and Postal Code */}
            <div className="grid grid-cols-2 gap-4">
              {/* <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMapPin className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    {...register("cityId", {
                      required: "City is required",
                    })}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                      errors.city ? 'border-red-300' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
                    placeholder="New York"
                  />
                </div>
                {errors.city && (
                  <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>
                )}
              </div> */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    {...register("pincode", {
                      required: "Postal code is required",
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "Postal code must be numeric",
                      },
                      minLength: {
                        value: 4,
                        message: "Postal code must be at least 4 digits",
                      },
                      maxLength: {
                        value: 10,
                        message: "Postal code must be less than 10 digits",
                      },
                    })}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                      errors.postalCode ? 'border-red-300' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
                    placeholder="10001"
                  />
                </div>
                {errors.postalCode && (
                  <p className="mt-1 text-sm text-red-600">{errors.postalCode.message}</p>
                )}
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiPhone className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  {...register("phonenumber", {
                    required: "Phone number is required",
                    pattern: {
                      value: /[6-9]{1}[0-9]{9}/,
                      message: "Please enter a valid phone number",
                    },
                  })}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                    errors.phone ? 'border-red-300' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
              )}
            </div>

            <div className="pt-4">
              <Link to='/payment'>
              <button
                type="submit"
                className="block w-full px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-[1.01] shadow-md hover:shadow-lg active:scale-[0.99] text-center"
              >
                Proceed to Payment
              </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};