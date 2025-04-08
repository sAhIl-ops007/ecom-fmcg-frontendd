import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiArrowLeft, FiChevronDown, FiChevronRight, FiMenu, FiShoppingCart, FiX } from "react-icons/fi";
import { Link } from 'react-router-dom';

export const ProductPage = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [cart, setCart] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const colors = {
    primary: 'bg-indigo-600',
    primaryHover: 'hover:bg-indigo-700',
    secondary: 'bg-pink-500',
    secondaryHover: 'hover:bg-pink-600',
    textPrimary: 'text-gray-900',
    textSecondary: 'text-gray-600',
    cardBg: 'bg-white',
    cardBorder: 'border-gray-200'
  };


  const initialCategories = [
    {
      id: 1,
      name: "🛒 Food & Beverages",
      subcategories: [
        { id: "67d0539df09614edaaab7823", name: "Snacks & Confectionery", products: [] },
        { id: "67d053bbf09614edaaab7825", name: "Dairy & Eggs", products: [] },
        { id: "67d053cbf09614edaaab7827", name: "Bakery Products", products: [] },
      ]
    },
    {
      id: 2,
      name: "🧴 Personal Care & Beauty",
      subcategories: [
        { id: "67d0573c549d0dfd6b6d7311", name: "Skincare", products: [] },
        { id: "67d0574f549d0dfd6b6d7313", name: "Haircare", products: [] },
        { id: "67d05765549d0dfd6b6d7315", name: "Oral Care", products: [] },
      ]
    },
    {
      id: 3,
      name: "🏠 Home Care & Household Essentials",
      subcategories: [
        { id: "67d05871549d0dfd6b6d731f", name: "Laundry Detergents & Fabric Softeners", products: [] },
        { id: "67d0588d549d0dfd6b6d7321", name: "Dishwashing Products", products: [] },
        { id: "67d0589d549d0dfd6b6d7323", name: "Surface Cleaners & Disinfectants", products: [] },
      ]
    },
    {
      id: 4,
      name: "🩺 Health & Wellness",
      subcategories: [
        { id: "67d058ea549d0dfd6b6d7329", name: "Vitamins & Supplements", products: [] },
        { id: "67d05923549d0dfd6b6d732b", name: "Over-the-Counter Medications", products: [] },
        { id: "67d05934549d0dfd6b6d732d", name: "First Aid & Medical Supplies", products: [] },
      ]
    },
    {
      id: 5,
      name: "🐾 Pet Care",
      subcategories: [
        { id: "67d0596b549d0dfd6b6d7331", name: "Pet Food", products: [] },
        { id: "67d0597f549d0dfd6b6d7333", name: "Grooming & Hygiene", products: [] },
        { id: "67d0598d549d0dfd6b6d7335", name: "Toys & Accessories", products: [] },
      ]
    },
    {
      id: 6,
      name: "👶 Baby Care",
      subcategories: [
        { id: "67d059a9549d0dfd6b6d7337", name: "Diapers & Wipes", products: [] },
        { id: "67d059b5549d0dfd6b6d7339", name: "Baby Food & Formula", products: [] },
        { id: "67d059c6549d0dfd6b6d733b", name: "Skincare & Bathing Products", products: [] },
      ]
    },
    {
      id: 7,
      name: "🛠️ Miscellaneous & Lifestyle",
      subcategories: [
        { id: "67d05bae549d0dfd6b6d733f", name: "Stationery & Office Supplies", products: [] },
        { id: "67d05bb7549d0dfd6b6d7341", name: "Batteries & Light Bulbs", products: [] },
        { id: "67d05bc3549d0dfd6b6d7343", name: "Home Organization", products: [] },
      ]
    }
  ];


  const getProductBySubId = async (subCategoryId) => {
    try {
      setLoading(true);
      setError(null);
      const res = await axios.get(`/getproductbysubcategory/${subCategoryId}`);
      
      if (res.data?.data) {
        setCategories(prevCategories => 
          prevCategories.map(category => ({
            ...category,
            subcategories: category.subcategories.map(subcat => 
              subcat.id === subCategoryId 
                ? { 
                    ...subcat, 
                    products: res.data.data.map(product => ({
                      id: product._id,
                      name: product.pname,
                      quantity: product.quantity,
                      price: product.price,
                      discount: product.pdiscount
                    }))
                  } 
                : subcat
            )
          }))
        );
      }
    } catch (err) {
      console.error("Error fetching products:", err);
      setError("Failed to load products. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Initialize categories
  useEffect(() => {
    setCategories(initialCategories);
  }, []);

  // Toggle category 
  const toggleCategory = (categoryName) => {
    setActiveCategory(activeCategory === categoryName ? null : categoryName);
    setSelectedSubcategory(null);
  };

  // Handle subcategory 
  const handleSubcategoryClick = async (subcategory) => {
    setSelectedSubcategory(subcategory);
    
    // Check if products are already loaded
    const category = categories.find(cat => 
      cat.subcategories.some(sub => sub.id === subcategory.id)
    );
    
    const subcat = category?.subcategories.find(sub => sub.id === subcategory.id);
    
    if (!subcat?.products?.length) {
      await getProductBySubId(subcategory.id);
    }
  };

  // Navigation back to subcategories
  const handleBackToSubcategories = () => {
    setSelectedSubcategory(null);
  };

  // Add product to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Format price as INR
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(price);
  };

  // Calculate final price after discount
  const calculateFinalPrice = (product) => {
    return product.discount ? product.price - product.discount : product.price;
  };

  // Get current subcategory with products
  const getCurrentSubcategory = () => {
    if (!selectedSubcategory) return null;
    
    return categories
      .flatMap(cat => cat.subcategories)
      .find(sub => sub.id === selectedSubcategory.id);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`md:hidden fixed top-6 left-6 z-50 ${colors.primary} text-white p-3 rounded-full shadow-lg transition-all duration-300 ${
          isOpen ? 'rotate-90' : ''
        }`}
      >
        {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:relative top-0 left-0 h-screen w-72 bg-white shadow-xl p-6 space-y-8 overflow-y-auto transition-all duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } md:block z-40 border-r border-gray-100`}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold flex items-center gap-2 text-gray-800">
            <span className={`w-2 h-6 ${colors.primary} rounded-full`}></span>
            Categories
          </h2>
          <div className="relative">
            <Link to='/addtocart'>
              <button className={`p-2 rounded-full ${colors.primary} text-white`}>
                <FiShoppingCart className="text-lg" />
              </button>
            </Link>

            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </div>
        </div>
        
        <ul className="space-y-4">
          {categories.map((category) => (
            <li key={category.id}>
              <div
                className="flex items-center justify-between text-gray-700 hover:text-indigo-600 cursor-pointer py-2 transition-colors duration-200"
                onClick={() => toggleCategory(category.name)}
              >
                <span className="font-medium">{category.name}</span>
                {activeCategory === category.name ? (
                  <FiChevronDown className="ml-2 transition-transform duration-200" />
                ) : (
                  <FiChevronRight className="ml-2 transition-transform duration-200" />
                )}
              </div>
              
              {activeCategory === category.name && (
                <ul className="ml-4 mt-2 space-y-3">
                  {category.subcategories.map((subcat) => (
                    <li
                      key={subcat.id}
                      className="text-gray-600 hover:text-indigo-500 cursor-pointer py-1.5 transition-all duration-200 pl-3 border-l-2 border-gray-200 hover:border-indigo-400 hover:pl-4"
                      onClick={() => handleSubcategoryClick(subcat)}
                    >
                      {subcat.name}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col p-6 ml-0 md:ml-72 transition-all duration-300">
        <div className="w-full max-w-7xl mx-auto">
          {selectedSubcategory ? (
            <div>
              <button
                onClick={handleBackToSubcategories}
                className="mb-6 flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                <FiArrowLeft className="mr-2" />
                Back to {activeCategory}
              </button>
              
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {selectedSubcategory.name}
              </h1>
              
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
                </div>
              ) : error ? (
                <div className="bg-white rounded-lg shadow border border-gray-200 p-8 text-center text-red-500">
                  {error}
                </div>
              ) : (
                <>
                  <p className="text-gray-500 mb-8">Premium selection of {selectedSubcategory.name.toLowerCase()}</p>
                  
                  {(() => {
                    const currentSubcategory = getCurrentSubcategory();
                    return currentSubcategory?.products?.length > 0 ? (
                      <div className="overflow-x-auto bg-white rounded-lg shadow border border-gray-200">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qty</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Discount</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Final Price</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {currentSubcategory.products.map((product) => (
                              <tr key={product.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-sm font-medium text-gray-900">{product.name}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-sm text-gray-900">{product.quantity}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-sm text-gray-900">{formatPrice(product.price)}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-sm text-gray-900">
                                    {product.discount ? formatPrice(product.discount) : '-'}
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-sm font-semibold text-indigo-600">
                                    {formatPrice(calculateFinalPrice(product))}
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <button
                                    onClick={() => addToCart(product)}
                                    className={`${colors.primary} ${colors.primaryHover} text-white px-4 py-2 rounded transition-colors flex items-center justify-center gap-2 text-sm font-medium`}
                                  >
                                    <FiShoppingCart size={14} /> Add
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <div className="bg-white rounded-lg shadow border border-gray-200 p-8 text-center">
                        <p className="text-gray-500">No products found in this category</p>
                      </div>
                    );
                  })()}
                </>
              )}
            </div>
          ) : activeCategory ? (
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {activeCategory}
              </h1>
              <p className="text-gray-500 mb-8">Explore our {activeCategory.toLowerCase()} collection</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {categories.find(cat => cat.name === activeCategory)?.subcategories.map((subcat) => (
                  <div
                    key={subcat.id}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 cursor-pointer group"
                    onClick={() => handleSubcategoryClick(subcat)}
                  >
                    <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {subcat.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {subcat.products.length} products available
                    </p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
                        Shop now
                      </span>
                      <FiChevronRight className="text-gray-400 group-hover:text-indigo-600 transition-colors" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center py-20">
              <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-indigo-200 rounded-full flex items-center justify-center">
                  <FiShoppingCart className="text-indigo-600 text-2xl" />
                </div>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Discover Our Products
              </h1>
              <p className="text-gray-500 max-w-md">
                Select a category from the sidebar to explore our collection of products.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};