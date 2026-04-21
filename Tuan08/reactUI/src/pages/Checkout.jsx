import { CreditCard, Lock } from 'lucide-react';

export default function Checkout() {
  return (
    <div className="w-full py-12 px-6 max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
      {/* Checkout Form */}
      <div className="flex-1 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Details</h2>
        
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Card Information</label>
            <div className="border border-gray-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-pink-500 focus-within:border-transparent transition-all">
              <div className="flex items-center px-4 py-3 border-b border-gray-200 bg-white">
                <CreditCard className="w-5 h-5 text-gray-400 mr-3" />
                <input 
                  type="text" 
                  placeholder="Card number" 
                  className="w-full focus:outline-none placeholder-gray-400"
                />
              </div>
              <div className="flex bg-white">
                <input 
                  type="text" 
                  placeholder="MM / YY" 
                  className="w-1/2 px-4 py-3 border-r border-gray-200 focus:outline-none placeholder-gray-400"
                />
                <input 
                  type="text" 
                  placeholder="CVC" 
                  className="w-1/2 px-4 py-3 focus:outline-none placeholder-gray-400"
                />
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Name on card</label>
            <input 
              type="text" 
              className="w-full px-4 py-3 border border-gray-200 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all" 
              placeholder="Full name" 
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Country or region</label>
            <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all bg-white text-gray-700">
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Canada</option>
              <option>Vietnam</option>
            </select>
          </div>
          
          <button type="submit" className="w-full py-4 bg-pink-500 text-white rounded-xl font-bold text-lg hover:bg-pink-600 transition-colors shadow-lg shadow-pink-500/30 flex items-center justify-center gap-2">
            <Lock className="w-5 h-5" /> Pay $9.99
          </button>
        </form>
      </div>

      {/* Order Summary */}
      <div className="md:w-80 bg-gray-50 p-8 rounded-3xl border border-gray-100 self-start">
        <h3 className="font-bold text-gray-900 mb-6">Order Summary</h3>
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-pink-100 text-pink-500 rounded-lg flex items-center justify-center font-bold">
              PRO
            </div>
            <div>
              <p className="font-semibold text-gray-900">Pro Plan</p>
              <p className="text-xs text-gray-500">Monthly subscription</p>
            </div>
          </div>
          <span className="font-medium text-gray-900">$9.99</span>
        </div>
        <div className="flex justify-between items-center text-sm mb-2 text-gray-600">
          <span>Subtotal</span>
          <span>$9.99</span>
        </div>
        <div className="flex justify-between items-center text-sm mb-6 text-gray-600">
          <span>Tax</span>
          <span>$0.00</span>
        </div>
        <div className="flex justify-between items-center font-bold text-gray-900 text-lg">
          <span>Total</span>
          <span>$9.99</span>
        </div>
      </div>
    </div>
  );
}
