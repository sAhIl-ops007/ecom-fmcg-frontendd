import React from 'react'

export const ContactPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-4">
      <div className="w-full max-w-2xl bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl overflow-hidden">
        <div className="p-8 md:p-10">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Get in touch</h2>
            <p className="text-gray-600">We'd love to hear from you</p>
          </div>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">First Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Last Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>
            </div>
            
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>
            
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Message</label>
              <textarea 
                rows="5" 
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all transform hover:scale-[1.01] shadow-lg hover:shadow-xl active:scale-[0.99]"
            >
              Send Message
            </button>
          </form>
        </div>
        
        <div className="bg-gray-50/50 p-6 text-center border-t border-gray-100">
          <p className="text-gray-600 text-sm">Or reach us directly at <span className="text-purple-600 font-medium">hello@example.com</span></p>
        </div>
      </div>
    </div>
  )
}