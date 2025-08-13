import ProductCarousel from "@/components/PeopleBought";
import React from "react";

const OrderDetails = () => {
  return (
    <div className=" bg-secondary">
      <div className="px-4 py-8 md:px-24 md:py-16">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold tracking-wider text-gray-900 mb-2">
              ORDER #54879
            </h1>
            <p className="text-gray-600">Order placed on March 22, 2021</p>
          </div>
          <button className="text-blue-600 hover:text-blue-800 font-medium">
            View invoice →
          </button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8 ">
          {/* Product Details */}
          <div className="lg:col-span-1">
            <div className="flex gap-4">
              <div className="w-24 h-32 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src="/best1.jpg"
                  alt="Grey Dress"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Grey Dress
                </h3>
                <p className="text-lg font-medium text-gray-900 mb-3">
                  ₹3500.00
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur. Amet amet orci semper
                  et diam ut sagittis cras diam. Sed maecenas libero est dapibus
                  penatibus imperdiet placerat sapien.
                </p>
              </div>
            </div>
          </div>

          {/* Delivery Address */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Delivery address
            </h4>
            <div className="space-y-1 text-gray-700">
              <p>Floyd Miles</p>
              <p>7363 Cynthia Pass</p>
              <p>Toronto, ON N3Y 4H8</p>
            </div>
          </div>

          {/* Shipping Updates */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Shipping updates
            </h4>
            <div className="space-y-2 text-gray-700">
              <p>olivia@untitledui.com</p>

              <button className="text-primary hover:text-primary1 font-medium text-sm">
                Edit
              </button>
            </div>
          </div>
        </div>

        {/* Order Status */}
        <div className=" p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Preparing to ship on March 24, 2021
            </h3>
          </div>

          {/* Progress Bar */}
          <div className="relative mb-8">
            <div className="flex items-center">
              <div className="flex-1 h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 bg-primary1 rounded-full"
                  style={{ width: "50%" }}
                ></div>
              </div>
            </div>

            {/* Progress Steps */}
            <div className="flex justify-between mt-6">
              <div className="text-center">
                <h5 className="font-semibold text-gray-900 text-sm mb-1">
                  Order placed
                </h5>
                <p className="text-xs text-gray-600">12th Aug, 2024</p>
              </div>
              <div className="text-center">
                <h5 className="font-semibold text-gray-900 text-sm mb-1">
                  Processing
                </h5>
                <p className="text-xs text-gray-600">15th Aug, 2024</p>
              </div>
              <div className="text-center">
                <h5 className="font-medium text-gray-500 text-sm mb-1">
                  Shipped
                </h5>
                <p className="text-xs text-gray-500">16th Aug, 2024</p>
              </div>
              <div className="text-center">
                <h5 className="font-medium text-gray-500 text-sm mb-1">
                  Delivery
                </h5>
                <p className="text-xs text-gray-500">18th Aug, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Billing and Payment Information */}
      <div className="bg-secondary1 rounded-lg p-6 mt-6 px-8 md:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Billing Address */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Billing address
            </h4>
            <div className="space-y-1 text-gray-700">
              <p>Floyd Miles</p>
              <p>7363 Cynthia Pass</p>
              <p>Toronto, ON N3Y 4H8</p>
            </div>
          </div>

          {/* Payment Information */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Payment information
            </h4>
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
                VISA
              </div>
              <div className="text-gray-700">
                <p>Ending with 4242</p>
                <p className="text-sm text-gray-600">Expires 02 / 24</p>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-gray-900">$72</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Shipping</span>
                <span className="text-gray-900">$5</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Tax</span>
                <span className="text-gray-900">$6.16</span>
              </div>
              <hr className="border-gray-200" />
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-900">
                  Order total
                </span>
                <span className="text-lg font-semibold text-primary">
                  ₹3500.00
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
