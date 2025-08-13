"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { CheckCircle, XCircle, Package, Truck, ArrowRight, Home, RotateCcw } from "lucide-react";
import { Suspense } from "react";

interface OrderDetails {
  orderId: string;
  amount: number;
  items: number;
  estimatedDelivery: string;
  paymentMethod: string;
}

function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);

  const status = searchParams.get("status") || "success";
  const orderId = searchParams.get("orderId") || "ORD123456789";
  const amount = searchParams.get("amount") || "15000";

  useEffect(() => {
    setOrderDetails({
      orderId: orderId,
      amount: parseFloat(amount),
      items: 3,
      estimatedDelivery: "15-20 business days",
      paymentMethod: "Credit Card"
    });
  }, [orderId, amount]);

  const isSuccess = status === "success";

  const handleContinueShopping = () => router.push("/");
  const handleViewOrders = () => router.push("/orderConfirmation");
  const handleRetryPayment = () => router.push("/payment");

  if (!orderDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center font-lato">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary1"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary py-4 px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 font-lato">
      <div className="max-w-3xl mx-auto">
        {/* Mobile Header */}
        <div className="lg:hidden mb-4 text-center font-lato">
          <h1 className={`text-2xl font-bold font-lato ${isSuccess ? 'text-green-800' : 'text-red-800'}`}>
            {isSuccess ? "Order Successful!" : "Payment Failed"}
          </h1>
        </div>

        <div className="bg-white border-1 border-zinc-200 rounded overflow-hidden font-lato">
          {/* Header Section */}
          <div className={`px-4 py-6 sm:px-6 sm:py-8 text-center ${isSuccess ? 'bg-green-100' : 'bg-red-50'} font-lato`}>
            <div className="flex justify-center mb-3 sm:mb-4">
              {isSuccess ? (
                <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-500" />
              ) : (
                <XCircle className="w-12 h-12 sm:w-16 sm:h-16 text-red-500" />
              )}
            </div>
            
            <h1 className={`hidden lg:block text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 font-lato ${isSuccess ? 'text-green-600' : 'text-red-800'}`}>
              {isSuccess ? "Order Placed Successfully!" : "Payment Failed"}
            </h1>
            
            <p className={`text-sm sm:text-lg font-lato ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
              {isSuccess 
                ? "Thank you for your purchase. Your order has been confirmed."
                : "We're sorry, but your payment could not be processed."
              }
            </p>
          </div>

          {/* Order Details Section */}
          <div className="px-4 py-4 sm:px-6 sm:py-6 font-lato">
            <div className="border-b border-gray-200 pb-4 sm:pb-6 mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4 font-lato">Order Details</h2>
              
              <div className="grid grid-cols-1 gap-3 sm:gap-4 font-lato">
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex justify-between text-sm sm:text-base font-lato">
                    <span className="text-gray-600 font-lato">Order ID:</span>
                    <span className="font-medium text-gray-900 font-lato">{orderDetails.orderId}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm sm:text-base font-lato">
                    <span className="text-gray-600 font-lato">Total Amount:</span>
                    <span className="font-medium text-gray-900 font-lato">₹{orderDetails.amount.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm sm:text-base font-lato">
                    <span className="text-gray-600 font-lato">Items:</span>
                    <span className="font-medium text-gray-900 font-lato">{orderDetails.items} items</span>
                  </div>
                  
                  <div className="flex justify-between text-sm sm:text-base font-lato">
                    <span className="text-gray-600 font-lato">Payment Method:</span>
                    <span className="font-medium text-gray-900 font-lato">{orderDetails.paymentMethod}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm sm:text-base font-lato">
                    <span className="text-gray-600 font-lato">Status:</span>
                    <span className={`font-medium font-lato ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
                      {isSuccess ? "Confirmed" : "Failed"}
                    </span>
                  </div>
                  
                  {isSuccess && (
                    <div className="flex justify-between text-sm sm:text-base font-lato">
                      <span className="text-gray-600 font-lato">Est. Delivery:</span>
                      <span className="font-medium text-gray-900 font-lato">{orderDetails.estimatedDelivery}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Success State - Delivery Timeline */}
            {isSuccess && (
              <div className="mb-4 sm:mb-6 font-lato">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 font-lato">Order Timeline</h3>
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 text-xs sm:text-sm font-lato">
                  <div className="flex items-center text-green-600 font-lato">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                    <span className="font-lato">Order Placed</span>
                  </div>
                  
                  <div className="hidden sm:block flex-1 border-t border-gray-300"></div>
                  
                  <div className="flex items-center text-gray-400 font-lato">
                    <Package className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                    <span className="font-lato">Processing</span>
                  </div>
                  
                  <div className="hidden sm:block flex-1 border-t border-gray-300"></div>
                  
                  <div className="flex items-center text-gray-400 font-lato">
                    <Truck className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                    <span className="font-lato">Shipped</span>
                  </div>
                  
                  <div className="hidden sm:block flex-1 border-t border-gray-300"></div>
                  
                  <div className="flex items-center text-gray-400 font-lato">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                    <span className="font-lato">Delivered</span>
                  </div>
                </div>
              </div>
            )}

            {/* Failed State - Error Information */}
            {!isSuccess && (
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-50 rounded-lg border border-red-200 font-lato">
                <h3 className="text-base sm:text-lg font-semibold text-red-800 mb-1 sm:mb-2 font-lato">What went wrong?</h3>
                <ul className="text-red-600 text-xs sm:text-sm space-y-1 font-lato">
                  <li className="font-lato">• Payment could not be processed by your bank</li>
                  <li className="font-lato">• Please check your payment details and try again</li>
                  <li className="font-lato">• Contact your bank if the issue persists</li>
                </ul>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 font-lato">
              {isSuccess ? (
                <>
                  <button
                    onClick={handleViewOrders}
                    className="flex-1 bg-primary1 hover:bg-primary2 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-medium hover:bg-opacity-90 transition-colors flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base cursor-pointer font-lato"
                  >
                    View My Orders
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                  
                  <button
                    onClick={handleContinueShopping}
                    className="flex-1 border-2 border-primary1 text-primary1 py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-medium hover:bg-primary1 hover:text-white transition-colors flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base cursor-pointer font-lato"
                  >
                    <Home className="w-3 h-3 sm:w-4 sm:h-4" />
                    Continue Shopping
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={handleRetryPayment}
                    className="flex-1 bg-primary1 hover:bg-primary2 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-medium hover:bg-opacity-90 transition-colors flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base cursor-pointer font-lato"
                  >
                    <RotateCcw className="w-3 h-3 sm:w-4 sm:h-4" />
                    Retry Payment
                  </button>
                  
                  <button
                    onClick={handleContinueShopping}
                    className="flex-1 border-2 border-primary1 text-primary1 py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-medium hover:bg-primary1 hover:text-white transition-colors flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base cursor-pointer font-lato"
                  >
                    <Home className="w-3 h-3 sm:w-4 sm:h-4" />
                    Back to Home
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-6 sm:mt-8 text-center text-gray-600 text-xs sm:text-sm font-lato">
          <p className="font-lato">
            Need help? Contact our{" "}
            <button
              onClick={() => router.push("/customer-support")}
              className="text-primary1 hover:underline font-medium cursor-pointer font-lato"
            >
              customer support
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function OrderSuccess() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center font-lato">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary1"></div>
      </div>
    }>
      <OrderSuccessContent />
    </Suspense>
  );
}