// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { ToastContainer, toast, Bounce } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { FiCreditCard, FiDollarSign, FiArrowLeft, FiCheckCircle } from 'react-icons/fi';

// export const Payment = () => {
//   const [paymentMethod, setPaymentMethod] = useState('card');
//   const navigate = useNavigate();

//   const handlePayment = (event) => {
//     event.preventDefault();
    
//     toast.success('Payment Successful!', {
//       position: "top-center",
//       autoClose: 1500,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "colored",
//       transition: Bounce,
//     });

//     setTimeout(() => {
//       navigate("/thankyoupage");
//     }, 2000);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center p-4">
//       <ToastContainer />
      
//       <div className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-100">
//         <div className="p-8">
//           <div className="text-center mb-8">
//             <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-4">
//               <FiDollarSign className="w-8 h-8 text-white" />
//             </div>
//             <h2 className="text-3xl font-bold text-gray-800 mb-2">Payment Details</h2>
//             <p className="text-gray-600">Complete your purchase securely</p>
//           </div>
          
//           <form onSubmit={handlePayment} className="space-y-6">
//             {/* Name */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
//               <input 
//                 type="text" 
//                 className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" 
//                 placeholder="John Doe" 
//                 required 
//               />
//             </div>

//             {/* Payment Method */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
//               <div className="grid grid-cols-3 gap-2">
//                 <button
//                   type="button"
//                   className={`p-3 rounded-lg border ${paymentMethod === 'card' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300'} transition-colors flex flex-col items-center`}
//                   onClick={() => setPaymentMethod('card')}
//                 >
//                   <FiCreditCard className={`w-5 h-5 ${paymentMethod === 'card' ? 'text-indigo-600' : 'text-gray-500'}`} />
//                   <span className={`text-xs mt-1 ${paymentMethod === 'card' ? 'text-indigo-600 font-medium' : 'text-gray-600'}`}>Card</span>
//                 </button>
//                 <button
//                   type="button"
//                   className={`p-3 rounded-lg border ${paymentMethod === 'upi' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300'} transition-colors flex flex-col items-center`}
//                   onClick={() => setPaymentMethod('upi')}
//                 >
//                   <svg className={`w-5 h-5 ${paymentMethod === 'upi' ? 'text-indigo-600' : 'text-gray-500'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                     <path d="M6 15l6-6 6 6" />
//                   </svg>
//                   <span className={`text-xs mt-1 ${paymentMethod === 'upi' ? 'text-indigo-600 font-medium' : 'text-gray-600'}`}>UPI</span>
//                 </button>
//                 <button
//                   type="button"
//                   className={`p-3 rounded-lg border ${paymentMethod === 'cod' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300'} transition-colors flex flex-col items-center`}
//                   onClick={() => setPaymentMethod('cod')}
//                 >
//                   <svg className={`w-5 h-5 ${paymentMethod === 'cod' ? 'text-indigo-600' : 'text-gray-500'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                     <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                   <span className={`text-xs mt-1 ${paymentMethod === 'cod' ? 'text-indigo-600 font-medium' : 'text-gray-600'}`}>COD</span>
//                 </button>
//               </div>
//             </div>

//             {/* Card Details */}
//             {paymentMethod === 'card' && (
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
//                   <input 
//                     type="text" 
//                     className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" 
//                     placeholder="1234 5678 9012 3456" 
//                     required 
//                   />
//                 </div>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
//                     <input 
//                       type="text" 
//                       className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" 
//                       placeholder="MM/YY" 
//                       required 
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
//                     <input 
//                       type="text" 
//                       className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" 
//                       placeholder="123" 
//                       required 
//                     />
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* UPI ID */}
//             {paymentMethod === 'upi' && (
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">UPI ID</label>
//                 <input 
//                   type="text" 
//                   className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" 
//                   placeholder="yourname@upi" 
//                   required 
//                 />
//               </div>
//             )}

//             {/* Submit Button */}
//             <button 
//               type="submit"
//               className="w-full px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-[1.01] shadow-md hover:shadow-lg active:scale-[0.99] flex items-center justify-center"
//             >
//               Pay Now
//               <FiCheckCircle className="ml-2" />
//             </button>

//             <div className="text-center">
//               <Link 
//                 to="/shipping"
//                 className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
//               >
//                 <FiArrowLeft className="mr-1" />
//                 Back to Shipping
//               </Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiCreditCard, FiDollarSign, FiArrowLeft, FiCheckCircle, FiTruck } from 'react-icons/fi';

export const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const navigate = useNavigate();

  const handlePayment = (event) => {
    event.preventDefault();
    
    toast.success(paymentMethod === 'cod' ? 'Order Placed Successfully!' : 'Payment Successful!', {
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

    setTimeout(() => {
      navigate("/thankyoupage");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <ToastContainer />
      
      <div className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        <div className="p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiDollarSign className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Payment Details</h2>
            <p className="text-gray-600">Complete your purchase securely</p>
          </div>
          
          <form onSubmit={handlePayment} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" 
                placeholder="John Doe" 
                required 
              />
            </div>

            {/* Payment Method */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  className={`p-3 rounded-lg border ${paymentMethod === 'card' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300'} transition-colors flex flex-col items-center`}
                  onClick={() => setPaymentMethod('card')}
                >
                  <FiCreditCard className={`w-5 h-5 ${paymentMethod === 'card' ? 'text-indigo-600' : 'text-gray-500'}`} />
                  <span className={`text-xs mt-1 ${paymentMethod === 'card' ? 'text-indigo-600 font-medium' : 'text-gray-600'}`}>Card</span>
                </button>
                <button
                  type="button"
                  className={`p-3 rounded-lg border ${paymentMethod === 'upi' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300'} transition-colors flex flex-col items-center`}
                  onClick={() => setPaymentMethod('upi')}
                >
                  <svg className={`w-5 h-5 ${paymentMethod === 'upi' ? 'text-indigo-600' : 'text-gray-500'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M6 15l6-6 6 6" />
                  </svg>
                  <span className={`text-xs mt-1 ${paymentMethod === 'upi' ? 'text-indigo-600 font-medium' : 'text-gray-600'}`}>UPI</span>
                </button>
                <button
                  type="button"
                  className={`p-3 rounded-lg border ${paymentMethod === 'cod' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300'} transition-colors flex flex-col items-center`}
                  onClick={() => setPaymentMethod('cod')}
                >
                  <svg className={`w-5 h-5 ${paymentMethod === 'cod' ? 'text-indigo-600' : 'text-gray-500'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className={`text-xs mt-1 ${paymentMethod === 'cod' ? 'text-indigo-600 font-medium' : 'text-gray-600'}`}>COD</span>
                </button>
              </div>
            </div>

            {/* Card Details */}
            {paymentMethod === 'card' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" 
                    placeholder="1234 5678 9012 3456" 
                    required 
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" 
                      placeholder="MM/YY" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" 
                      placeholder="123" 
                      required 
                    />
                  </div>
                </div>
              </div>
            )}

            {/* UPI ID */}
            {paymentMethod === 'upi' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">UPI ID</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" 
                  placeholder="yourname@upi" 
                  required 
                />
              </div>
            )}

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-[1.01] shadow-md hover:shadow-lg active:scale-[0.99] flex items-center justify-center"
            >
              {paymentMethod === 'cod' ? (
                <>
                  Place Order
                  <FiTruck className="ml-2" />
                </>
              ) : (
                <>
                  Pay Now
                  <FiCheckCircle className="ml-2" />
                </>
              )}
            </button>

            <div className="text-center">
              <Link 
                to="/shipping"
                className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
              >
                <FiArrowLeft className="mr-1" />
                Back to Shipping
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};