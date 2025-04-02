import axios from "axios";
import React, { useEffect, useState } from "react";
import {FiMenu,FiX,FiShoppingCart,FiChevronDown,FiChevronRight,FiArrowLeft,FiStar} from "react-icons/fi";
import { Link } from 'react-router-dom';

export const ProductPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [cart, setCart] = useState([]);

  // Modern color scheme
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

  // Categories with modern product data
  const categories = [
    {
      name: "🛒 Food & Beverages",
      subcategories: [
        {
          name: "Snacks & Confectionery",
          products: [
            // { 
            //   name: "Pepsi-250ml",
            //   price: 20,
            //   discount: 3,
            
            // },
            // {
            //   name: "Pepsi-750ml",
            //   price: 40,
            //   rating: 4.8,
            // },
            // {
            //   name: "Pepsi-1.15L",
            //   price: 99,
            
            // }
          ]
        },
        {
          name: "Dairy & Eggs",
          products: []
        },
                {
          name: "Bakery Products",
          products: []
        },
        
      ]
    },

    {
      name: " 🧴 Personal Care & Beauty ",
      subcategories: [
        {
          name: "Skincare",
          products: []
        }, 
        {
          name: "Haircare",
          products: []
        },
        {
          name: "Oral Care",
          products: []
        },
      ]
    },


    {
      name: " 🏠 Home Care & Household Essentials ",
      subcategories: [
        {
          name: "Laundry Detergents & Fabric Softeners",
          products: []
        },
        {
          name: "Dishwashing Products",
          products: []
        },
        {
          name: "Surface Cleaners & Disinfectants",
          products: []
        },
        
      
      ]
    },


    {
      name: " 🩺 Health & Wellness ",
      subcategories: [
        {
          name: "Vitamins & Supplements",
          products: []
        },
        {
          name: "Over-the-Counter Medications",
          products: []
        },
        {
          name: "First Aid & Medical Supplies",
          products: []
        },
      
      ]
    },


    {
      name: " 🐾 Pet Care ",
      subcategories: [
        {
          name: "Pet Food",
          products: []
        },
        {
          name: "Grooming & Hygiene",
          products: []
        },
        {
          name: "Toys & Accessories",
          products: []
        },
      
      ]
    },


    {
      name: " 👶 Baby Care ",
      subcategories: [
        {
          name: "Diapers & Wipes",
          products: []
        },
        {
          name: "Baby Food & Formula",
          products: []
        },
        {
          name: "Skincare & Bathing Products",
          products: []
        },
      
      ]
    },


    {
      name: " 🛠️ Miscellaneous & Lifestyle ",
      subcategories: [
        {
          name: "Stationery & Office Supplies",
          products: []
        },
        {
          name: "Batteries & Light Bulbs",
          products: []
        },
        {
          name: "Skincare & Bathing Products",
          products: []
        },
      
      ]
    }

    
  ];

  const toggleCategory = (categoryName) => {
    setActiveCategory(activeCategory === categoryName ? null : categoryName);
    setSelectedSubcategory(null);
  };

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };

  const handleBackToSubcategories = () => {
    setSelectedSubcategory(null);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'INR'
    }).format(price);
  };

  const calculateFinalPrice = (product) => {
    return product.discount ? product.price - product.discount : product.price;
  };

  // const renderRatingStars = (rating) => {
  //   const stars = [];
  //   const fullStars = Math.floor(rating);
  //   const hasHalfStar = rating % 1 >= 0.5;
    
  //   for (let i = 0; i < fullStars; i++) {
  //     stars.push(<FiStar key={`full-${i}`} className="text-yellow-400 fill-current" />);
  //   }
    
  //   if (hasHalfStar) {
  //     stars.push(<FiStar key="half" className="text-yellow-400" />);
  //   }
    
  //   const emptyStars = 5 - stars.length;
  //   for (let i = 0; i < emptyStars; i++) {
  //     stars.push(<FiStar key={`empty-${i}`} className="text-gray-300" />);
  //   }
    
  //   return stars;
  // };

  // const getSubCategoryData = async (data) => {
  //   const res = await axios.get("/getsubcategory",data)
  //   console.log(res.data)
  // }

  // useEffect(() => {
  //   getSubCategoryData()
  // },[])
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

      {/* Modern Sidebar */}
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
          {/* <div className="relative">
            <Link to='/addtocart'><button className={`p-2 rounded-full ${colors.primary} text-white`}>
              <FiShoppingCart className="text-lg" />
            </button> </Link>
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </div> */}
        </div>
        
        <ul className="space-y-4">
          {categories.map((category) => (
            <li key={category.name}>
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
                      key={subcat.name} 
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

      {/* Modern Main Content */}
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
              <p className="text-gray-500 mb-8">Premium selection of {selectedSubcategory.name.toLowerCase()}</p>
              
              <div className="overflow-x-auto bg-white rounded-lg shadow border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Product Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Original Price
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Discount
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Final Price
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {selectedSubcategory.products.map((product) => (
                      <tr key={product.name} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{product.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {formatPrice(product.price)}
                          </div>
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
                    key={subcat.name}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 cursor-pointer group"
                    onClick={() => handleSubcategoryClick(subcat)}
                  >
                    <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {subcat.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {subcat.products.length} premium products
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
                Select a category from the sidebar to explore our premium collection of products.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};