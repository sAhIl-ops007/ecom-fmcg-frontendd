import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaPlus, FaUserCog, FaSignOutAlt, FaArrowLeft } from 'react-icons/fa';
import axios from 'axios';
import { ToastContainer, toast, Bounce } from 'react-toastify';

export const AddProduct = () => {

const [category, setcategory] = useState([])
const [subcategory, setsubcategory] = useState([])


const { register,handleSubmit,formState:{errors}} = useForm();

const submitHandler = async (data) => {

    console.log(data);
    const res =await axios.post("/addproduct",data)
    console.log("data",res.data.data);
    toast.success('Product addded successfully!', {
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
    setTimeout(()=>{},2000)
};

const getAllCategory = async () => {
    const res =await axios.get("/getcategory");
    // console.log(res.data)
    setcategory(res.data.data);
}

const getSubcategoryByCategoryId = async (id) => {
    const res = await axios.get("/getsubcategorybycategory/" + id);
    console.log(res.data);
    setsubcategory(res.data.data);
}


useEffect(() =>{
    getAllCategory()
},[])

return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <ToastContainer/>
      {/* Sidebar - Same as AdminProfile */}
    <div className="w-72 bg-white/90 backdrop-blur-sm shadow-xl p-6 hidden md:block border-r border-gray-200">
        <div className="flex items-center mb-8">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold mr-3">
            V
        </div>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Vendor Panel</h2>
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
                className={`p-3 border ${errors.pname ? 'border-red-500' : 'border-gray-200'} rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
                {...register('pname', { required: 'Product name is required' })}
                />
                {errors.pname && <p className="text-red-500 text-xs mt-1">{errors.pname.message}</p>}
            </div>


            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">Quantity*</label>
                <input
                type="text"
                placeholder="Enter quantity"
                className={`p-3 border ${errors.quantity ? 'border-red-500' : 'border-gray-200'} rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
                {...register('quantity', { required: 'quantity is required' })}
                />
                {errors.quantity && <p className="text-red-500 text-xs mt-1">{errors.quantity.message}</p>}
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


              {/* Price */}
            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">Price*</label>
                <input
                type="text"
                placeholder="Enter price"
                className={`p-3 border ${errors.price ? 'border-red-500' : 'border-gray-200'} rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
                {...register('price', { required: 'Price is required' })}
                />
                {errors.price && <p className="text-red-500 text-xs mt-1">{errors.price.message}</p>}
            </div>

              {/* Discount */}
            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">Discount (%)*</label>
                <input
                type="number"
                placeholder="Enter discount percentage"
                className={`p-3 border ${errors.pdiscount ? 'border-red-500' : 'border-gray-200'} rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
                {...register('pdiscount', { 
                    required: 'Discount is required',
                    min: { value: 0, message: 'Discount cannot be negative' },
                    max: { value: 100, message: 'Discount cannot exceed 100%' }
                })}
                />
                {errors.pdiscount && <p className="text-red-500 text-xs mt-1">{errors.pdiscount.message}</p>}
            </div>

              {/* Category */}

            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">Category*</label>
                <select
                    {...register("categoryId", { required: "Category is required" })}
                    onChange={(e) => getSubcategoryByCategoryId(e.target.value)}
                    className={`p-3 border ${errors.categoryId ? 'border-red-500' : 'border-gray-200'} rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
                >
                    <option value="">Select Category</option>
                    {category.map((cat) => (
                    <option key={cat._id} value={cat._id}>{cat.categoryname}</option>
                    ))}
                </select>
                {errors.categoryId && <p className="text-red-500 text-xs mt-1">{errors.categoryId.message}</p>}
            </div>


            <div className="space-y-2">
            <label className="text-sm font-medium text-gray-600">Sub-Category*</label>
            <select
                {...register("subCategoryId", { required: "Sub-Category is required" })}
                className={`p-3 border ${errors.subCategoryId ? 'border-red-500' : 'border-gray-200'} rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
            >
                <option value="">Select Sub-Category</option>
                {subcategory.map((subcat) => (
                <option key={subcat._id} value={subcat._id}>{subcat.subCategoryName}</option>
                ))}
            </select>
                {errors.subCategoryId && <p className="text-red-500 text-xs mt-1">{errors.subCategoryId.message}</p>}
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