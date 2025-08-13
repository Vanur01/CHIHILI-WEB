"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { CreditCard, Smartphone, Building2, DollarSign, CheckCircle, XCircle, X, Loader2 } from "lucide-react";

const PaymentPage = () => {
  const router = useRouter();
  const [selectedPayment, setSelectedPayment] = useState("cash");
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = () => {
    setShowPaymentModal(true);
  };

  const processPayment = (isSuccess: boolean) => {
    setIsProcessing(true);
    
    // Simulate processing delay
    setTimeout(() => {
      const orderId = `ORD${Date.now()}`;
      const amount = "27000"; // Using the actual total from cart
      
      setIsProcessing(false);
      setShowPaymentModal(false);
      
      if (isSuccess) {
        router.push(`/order-success?status=success&orderId=${orderId}&amount=${amount}`);
      } else {
        router.push(`/order-success?status=failed&orderId=${orderId}&amount=${amount}`);
      }
    }, 2000);
  };

  const paymentMethods = [
    {
      id: "cash",
      label: "Cash on Delivery",
      icon: <DollarSign className="w-5 h-5" />,
    },
    {
      id: "card",
      label: "Credit/Debit Card",
      icon: <CreditCard className="w-5 h-5" />,
    },
    {
      id: "upi",
      label: "UPI",
      icon: <Smartphone className="w-5 h-5" />,
    },
    {
      id: "netbanking",
      label: "Net Banking",
      icon: <Building2 className="w-5 h-5" />,
    },
  ];

  // Payment Simulation Modal Component
  const PaymentSimulationModal = () => (
    <div className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity ${showPaymentModal ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className={`bg-white rounded-2xl shadow-2xl max-w-md w-full transform transition-all duration-300 ${showPaymentModal ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'}`}>
        {/* Close Button */}
        <div className="flex justify-end p-4 pb-0">
          <button
            onClick={() => setShowPaymentModal(false)}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            disabled={isProcessing}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {isProcessing ? (
          // Processing State
          <div className="px-8 pb-8 text-center">
            <div className="mb-6">
              <div className="relative">
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-primary1 to-secondary2 rounded-full flex items-center justify-center mb-4">
                  <Loader2 className="w-10 h-10 text-white animate-spin" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Processing Payment</h3>
              <p className="text-gray-600">Please wait while we process your payment...</p>
              
              {/* Progress dots */}
              <div className="flex justify-center space-x-2 mt-6">
                <div className="w-2 h-2 bg-primary1 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-primary1 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-primary1 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        ) : (
          // Demo Selection State
          <div className="px-8 pb-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Payment Simulation</h3>
              <p className="text-gray-600">Choose the payment outcome for testing</p>
            </div>

            <div className="space-y-4">
              {/* Success Option */}
              <button
                onClick={() => processPayment(true)}
                className="w-full group bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 border-2 border-green-200 hover:border-green-300 rounded-xl p-6 transition-all duration-300 transform hover:scale-[1.02]"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-left flex-1">
                    <h4 className="text-lg font-semibold text-green-800">Payment Success</h4>
                    <p className="text-green-600 text-sm">Simulate successful payment</p>
                  </div>
                  <div className="text-green-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </div>
                </div>
              </button>

              {/* Failure Option */}
              <button
                onClick={() => processPayment(false)}
                className="w-full group bg-gradient-to-r from-red-50 to-rose-50 hover:from-red-100 hover:to-rose-100 border-2 border-red-200 hover:border-red-300 rounded-xl p-6 transition-all duration-300 transform hover:scale-[1.02]"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <XCircle className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-left flex-1">
                    <h4 className="text-lg font-semibold text-red-800">Payment Failed</h4>
                    <p className="text-red-600 text-sm">Simulate payment failure</p>
                  </div>
                  <div className="text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </div>
                </div>
              </button>
            </div>

            {/* Info Note */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-blue-700 text-sm text-center">
                <span className="font-medium">Demo Mode:</span> This is a simulation for testing purposes
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen py-4 mt-20 sm:mt-40 font-lato">
      <div className="max-w-[90rem] mx-auto px-2 sm:px-6 lg:px-8">
        {/* Header */}
        <h1 className="text-xl sm:text-3xl text-center font-light tracking-[0.3rem] sm:tracking-[0.4rem] text-secondary2  mb-10 font-crimson-pro">
          PAYMENT METHODS
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Cart Summary */}
          <div className="space-y-6">
            {/* Cart Summary */}
            <div className="bg-secondary border border-secondary1 p-6">
              <h2 className="text-md lg:text-xl items-center font-light tracking-[0.1rem] sm:tracking-[0.2rem] mb-3 sm:mb-6 text-start font-crimson-pro">
                CART SUMMARY
              </h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-secondary1 pb-3 ">
                  <span className="text-zinc-800">Subtotal</span>
                  <span className="font-medium">₹99.00</span>
                </div>

                <div className="flex justify-between items-center border-b border-secondary1 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-800">Shipping charges</span>
                    <div className="w-4 h-4 bg-zinc-800 rounded-full flex items-center justify-center text-white text-xs">
                      ?
                    </div>
                  </div>
                  <span className="font-medium">₹5.00</span>
                </div>

                <div className="flex justify-between border-b border-secondary1 pb-3">
                  <span className="text-zinc-800">Total Discount</span>
                  <span className="font-medium text-green-600">- ₹100.00</span>
                </div>

                <div className="flex justify-between items-center border-b border-secondary1 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-800">Tax estimate</span>
                    <div className="w-4 h-4 bg-zinc-800 rounded-full flex items-center justify-center text-white text-xs">
                      ?
                    </div>
                  </div>
                  <span className="font-medium">₹8.32</span>
                </div>

                <div className="flex justify-between text-lg font-medium">
                  <span>Total Payable</span>
                  <span>₹27000</span>
                </div>
              </div>
            </div>

            {/* Cash on Delivery Notice */}
            <div className=" bg-secondary border border-secondary1 p-4">
              <p className="text-md ">
                Your order is eligible for{" "}
                <span className="font-semibold text-secondary2">
                  Cash on Delivery
                </span>
              </p>
            </div>

            {/* Product Summary */}
            <div className="bg-white p-6 border border-secondary1">
              <h2 className="text-md lg:text-xl items-center font-light tracking-[0.1rem] sm:tracking-[0.2rem] mb-3 sm:mb-6 text-start font-crimson-pro">
                PRODUCT SUMMARY
              </h2>

              <div className="space-y-4 ">
                {/* Product 1 */}
                <div className="flex gap-4">
                  <div className=" flex items-center justify-center">
                    <img
                      src="/best1.jpg"
                      alt="Product"
                      className="w-20 h-25 object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800">Saree (M)</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Lorem ipsum dolor sit amet consectetur. Amet amet orci
                      semper et diam ut sagittis cras diam. Sed maecenas libero
                      est dapibus penatib...
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="font-semibold text-lg">₹27000</span>
                  </div>
                </div>

                {/* Product 2 */}
                <div className="flex gap-4 ">
                  <div className=" flex items-center justify-center">
                    <img
                      src="/best1.jpg"
                      alt="Product"
                      className="w-20 h-25 object-cover "
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800">Saree (M)</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Lorem ipsum dolor sit amet consectetur. Amet amet orci
                      semper et diam ut sagittis cras diam. Sed maecenas libero
                      est dapibus penatib...
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="font-semibold text-lg">₹27000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Payment Methods */}
          <div className="space-y-6">
            <div className="p-6">
              <div className="space-y-4">
                {paymentMethods.map((method) => (
                  <label
                    key={method.id}
                    className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={method.id}
                      checked={selectedPayment === method.id}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                      className="w-4 h-4 text-red-600 focus:ring-red-500"
                    />
                    <div className="text-gray-600">{method.icon}</div>
                    <span className="font-medium text-gray-800">
                      {method.label}
                    </span>
                    {method.id === "upi" && (
                      <div className="ml-auto">
                        <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded">
                          UPI
                        </span>
                      </div>
                    )}
                  </label>
                ))}
              </div>

              <button 
                onClick={handlePayment}
                className="w-full mt-6 bg-primary1 hover:bg-primary2 text-white font-medium py-3 px-6 transition-colors rounded-lg"
              >
                Proceed to Pay
              </button>
            </div>
          </div>
        </div>

        {/* Payment Simulation Modal */}
        <PaymentSimulationModal />
      </div>
    </div>
  );
};

export default PaymentPage;
