"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const orderConfirmation = () => {
  const router = useRouter();

  const handleShopMore = () => {
    router.push("/categoryPage");
  };


  return (
    <div className="min-h-screen py-4 mt-20 sm:mt-40 font-lato">
      <div className="max-w-[90rem] mx-auto px-2 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
          <div className="mb-6 lg:mb-0">
            <p className="text-green-600 font-medium mb-2 ">
              Payment successful
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Thanks for ordering
            </h1>
            <p className="text-gray-600 text-sm max-w-xl ">
              We appreciate your order, we're currently processing it. So hang
              tight and we'll send you confirmation very soon!
            </p>
          </div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 ">
              Order#1234
            </h2>
          </div>
        </div>

        {/* Tracking Number */}
        <div className="mb-8 ">
          <p className="text-zinc-700 mb-2">Tracking number</p>
          <p className="text-secondary2 font-medium text-lg">
            515478787555454848512
          </p>
        </div>

        {/* Products and Order Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12 border-b border-secondary1 pb-8">
          {/* Products Section */}
          <div className="lg:col-span-2 border-t border-secondary1 pt-4">
            <div className="space-y-6">
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
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-md md:text-xl font-medium text-gray-900 mb-2">
                        Saree (M)
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-md">
                        Lorem ipsum dolor sit amet consectetur. Amet amet orci
                        semper et diam ut sagittis cras diam. Sed maecenas
                        libero est dapibus penatib...
                      </p>
                    </div>
                    <div className="text-right">
                      <p className=" text-md sm:text-xl font-semibold text-gray-900">
                        ₹27000
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product 2 */}
              <div className="flex gap-4">
                <div className=" flex items-center justify-center">
                  <img
                    src="/best1.jpg"
                    alt="Product"
                    className="w-20 h-25 object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-md md:text-xl font-medium text-gray-900 mb-2">
                        Saree (M)
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-md">
                        Lorem ipsum dolor sit amet consectetur. Amet amet orci
                        semper et diam ut sagittis cras diam. Sed maecenas
                        libero est dapibus penatib...
                      </p>
                    </div>
                    <div className="text-right">
                      <p className=" text-md sm:text-xl font-semibold text-gray-900">
                        ₹27000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-10">
              {/* Shipping Address */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Shipping address
                </h3>
                <div className="text-gray-700 space-y-1">
                  <p>Floyd Miles</p>
                  <p>7363 Cynthia Pass</p>
                  <p>Toronto, ON N3Y 4H8</p>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Contact Information
                </h3>
                <div className="text-gray-700 space-y-2">
                  <p>olivia@untitledui.com</p>
                  <p>9291021033</p>
                  <button className="text-secondary2 hover:text-primary1 cursor-pointer font-medium">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-2 bg-secondary p-6 ">
            <div className="space-y-6 ">
              <div className="flex justify-between border-b border-secondary1 pb-4  text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">₹99.00</span>
              </div>

              <div className="flex justify-between items-center border-b border-secondary1 pb-4">
                <div className="flex items-center gap-2  text-sm">
                  <span className="text-gray-600">Shipping charges</span>
                  <div className="w-4 h-4 bg-zinc-800 rounded-full flex items-center justify-center text-white text-xs">
                    ?
                  </div>
                </div>
                <span className="font-medium  text-sm">₹5.00</span>
              </div>

              <div className="flex justify-between border-b border-secondary1 pb-4 ">
                <span className="text-gray-600  text-sm">Total Discount</span>
                <span className="font-medium  text-sm">- ₹100.00</span>
              </div>

              <div className="flex  text-sm justify-between items-center border-b border-secondary1 pb-4">
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">Tax estimate</span>
                  <div className="w-4 h-4 bg-zinc-800 rounded-full flex items-center justify-center text-white text-xs">
                    ?
                  </div>
                </div>
                <span className="font-medium  text-sm">₹8.32</span>
              </div>

              <div className="flex justify-between text-xl font-bold">
                <span>Amount Paid</span>
                <span>₹27000</span>
              </div>
            </div>
            {/* Bottom Section - Address and Payment Info */}
            <div className="flex flex-col sm:flex-row gap-3  justify-between mt-10">
              {/* Billing Address */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Billing address
                </h3>
                <div className="text-gray-700 space-y-1">
                  <p>Floyd Miles</p>
                  <p>7363 Cynthia Pass</p>
                  <p>Toronto, ON N3Y 4H8</p>
                </div>
              </div>

              {/* Payment Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Payment information
                </h3>
                <div className="flex gap-3">
                    <img
                    src="/visa.png"
                    alt="Visa"
                    className="h-9 w-auto object-contain"
                    />
                  <div className="text-gray-700">
                    <p>Ending with 4242</p>
                    <p className="text-sm">Expires 02 / 24</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Shop More Button */}
        <div className="flex justify-end mt-12">
          <button onClick={handleShopMore} className="inline-flex items-center gap-2 text-primary1 hover:text-primary2 font-medium cursor-pointer">
            Shop More
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default orderConfirmation;
