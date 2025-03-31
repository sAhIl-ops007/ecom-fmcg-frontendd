import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaPlus, FaUserCog, FaSignOutAlt, FaArrowLeft } from 'react-icons/fa';
import axios from 'axios';

export const AddProduct = () => {
const { 
    register, 
    handleSubmit, 
    formState: { errors } 
} = useForm();

const submitHandler = async (data) => {
    console.log(data);
    
        const res =await axios.post("/addproduct",data)
       console.log("data",res.data.data);
       


    
    
};

return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Sidebar - Same as AdminProfile */}
    <div className="w-72 bg-white/90 backdrop-blur-sm shadow-xl p-6 hidden md:block border-r border-gray-200">
        <div className="flex items-center mb-8">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold mr-3">
            A
        </div>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Admin Panel</h2>
        </div>
        <ul className="space-y-3">
        <li>
            <Link 
            to="/adminprofile" 
            className="flex items-center p-3 rounded-xl text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-all group"
            >
            <FaUserCog className="mr-3 text-lg text-purple-500 group-hover:text-purple-600" /> 
            <span className="font-medium">Profile</span>
            </Link>
        </li>
        <li>
            <Link 
            to="/addproduct" 
            className="flex items-center p-3 rounded-xl text-purple-600 bg-purple-50 transition-all group"
            >
            <FaPlus className="mr-3 text-lg text-purple-600" /> 
            <span className="font-medium">Add Product</span>
            </Link>
        </li>
        <li>
            <Link 
            to="/" 
            className="flex items-center p-3 rounded-xl text-gray-700 hover:bg-red-50 hover:text-red-500 transition-all group"
            >
            <FaSignOutAlt className="mr-3 text-lg text-gray-500 group-hover:text-red-500" /> 
            <span className="font-medium">Logout</span>
            </Link>
        </li>
        </ul>
    </div>

      {/* Main Content */}
    <div className="flex-1 p-6 overflow-auto">
        <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-8">
            <Link to="/adminprofile" className="flex items-center text-purple-600 hover:text-purple-800">
            <FaArrowLeft className="mr-2" />
            <span>Back to Profile</span>
            </Link>
            <h2 className="text-3xl font-bold text-gray-800">Add New Product</h2>
            <div className="w-8"></div> {/* Spacer for alignment */}
        </div>

        <form onSubmit={handleSubmit(submitHandler)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Product Name */}
            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">Product Name*</label>
                <input
                type="text"
                placeholder="Enter product name"
                className={`p-3 border ${errors.productName ? 'border-red-500' : 'border-gray-200'} rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
                {...register('productName', { required: 'Product name is required' })}
                />
                {errors.productName && <p className="text-red-500 text-xs mt-1">{errors.productName.message}</p>}
            </div>

              {/* Product Image */}


              
            {/* <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">Product Image*</label>
                <input
                type="file"
                className={`p-3 border ${errors.productURL ? 'border-red-500' : 'border-gray-200'} rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
                {...register('productURL', { required: 'Product image is required' })}
                />
                {errors.productURL && <p className="text-red-500 text-xs mt-1">{errors.productURL.message}</p>}
            </div> */}



              {/* SKU */}
            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">SKU (Stock Keeping Unit)*</label>
                <input
                type="text"
                placeholder="Enter SKU"
                className={`p-3 border ${errors.stockeepingunit ? 'border-red-500' : 'border-gray-200'} rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
                {...register('stockeepingunit', { required: 'SKU is required' })}
                />
                {errors.stockeepingunit && <p className="text-red-500 text-xs mt-1">{errors.stockeepingunit.message}</p>}
            </div>

              {/* Price */}
            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">Price*</label>
                <input
                type="number"
                placeholder="Enter price"
                className={`p-3 border ${errors.price ? 'border-red-500' : 'border-gray-200'} rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
                {...register('price', { required: 'Price is required' })}
                />
                {errors.price && <p className="text-red-500 text-xs mt-1">{errors.price.message}</p>}
            </div>

              {/* MRP */}
            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">MRP*</label>
                <input
                type="number"
                placeholder="Enter MRP"
                className={`p-3 border ${errors.mrp ? 'border-red-500' : 'border-gray-200'} rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
                {...register('mrp', { required: 'MRP is required' })}
                />
                {errors.mrp && <p className="text-red-500 text-xs mt-1">{errors.mrp.message}</p>}
            </div>

              {/* Discount */}
            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">Discount (%)*</label>
                <input
                type="number"
                placeholder="Enter discount percentage"
                className={`p-3 border ${errors.discountinpercentage ? 'border-red-500' : 'border-gray-200'} rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
                {...register('discountinpercentage', { 
                    required: 'Discount is required',
                    min: { value: 0, message: 'Discount cannot be negative' },
                    max: { value: 100, message: 'Discount cannot exceed 100%' }
                })}
                />
                {errors.discountinpercentage && <p className="text-red-500 text-xs mt-1">{errors.discountinpercentage.message}</p>}
            </div>

              {/* Weight */}
            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">Weight*</label>
                <input
                type="text"
                placeholder="Enter weight"
                className={`p-3 border ${errors.weight ? 'border-red-500' : 'border-gray-200'} rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
                {...register('weight', { required: 'Weight is required' })}
                />
                {errors.weight && <p className="text-red-500 text-xs mt-1">{errors.weight.message}</p>}
            </div>

              {/* Unit of Measurement */}
            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">Unit of Measurement*</label>
                <select
                className={`p-3 border ${errors.unitOfMeasurement ? 'border-red-500' : 'border-gray-200'} rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
                {...register('unitOfMeasurement', { required: 'Unit is required' })}
                >
                <option value="">Select unit</option>
                <option value="g">Grams (g)</option>
                <option value="kg">Kilograms (kg)</option>
                <option value="ml">Milliliters (ml)</option>
                <option value="l">Liters (l)</option>
                <option value="piece">Piece</option>
                </select>
                {errors.unitOfMeasurement && <p className="text-red-500 text-xs mt-1">{errors.unitOfMeasurement.message}</p>}
            </div>

              {/* Expiry Date */}
            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">Expiry Date*</label>
                <input
                type="date"
                className={`p-3 border ${errors.expirydate ? 'border-red-500' : 'border-gray-200'} rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
                {...register('expirydate', { required: 'Expiry date is required' })}
                />
                {errors.expirydate && <p className="text-red-500 text-xs mt-1">{errors.expirydate.message}</p>}
        </div>
            </div>

            <div className="flex justify-end pt-6">
            <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl hover:shadow-md transition-all hover:from-purple-700 hover:to-indigo-700"
            >
                Add Product
            </button>
            </div>
        </form>
        </div>
    </div>
    </div>
);
};