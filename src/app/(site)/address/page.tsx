"use client";

import React, { useState } from "react";
import { Edit, MapPin, Check } from "lucide-react";
import { useRouter } from "next/navigation";

const AddressPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    addressLine1: "",
    addressLine2: "",
    apartment: "",
    city: "",
    state: "",
    country: "India",
    zipCode: "",
    mobileNumber: "",
    billingAddressSame: true,

    // Billing fields
    billingFirstName: "",
    billingLastName: "",
    billingAddressLine1: "",
    billingAddressLine2: "",
    billingApartment: "",
    billingCity: "",
    billingState: "",
    billingCountry: "India",
    billingZipCode: "",
    billingMobileNumber: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    let newValue: string | boolean = value;
    if (type === "checkbox" && "checked" in e.target) {
      newValue = (e.target as HTMLInputElement).checked;
    }
    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/payment");
    console.log("Form submitted:", formData);
  };

  const savedAddresses = [
    {
      id: 1,
      name: "Santosh Mudragada",
      address:
        "D.no - 1/170 Damireddypalli, Kadiam, Andhra Pradesh, India. 533126",
    },
    {
      id: 2,
      name: "Santosh Mudragada",
      address:
        "D.no - 1/170 Damireddypalli, Kadiam, Andhra Pradesh, India. 533126",
    },
    {
      id: 3,
      name: "Santosh Mudragada",
      address:
        "D.no - 1/170 Damireddypalli, Kadiam, Andhra Pradesh, India. 533126",
    },
    {
      id: 4,
      name: "Santosh Mudragada",
      address:
        "D.no - 1/170 Damireddypalli, Kadiam, Andhra Pradesh, India. 533126",
    },
    {
      id: 5,
      name: "Santosh Mudragada",
      address:
        "D.no - 1/170 Damireddypalli, Kadiam, Andhra Pradesh, India. 533126",
    },
  ];

  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const countries = [
    "India",
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
  ];

  const RequiredLabel = ({
    children,
    required = false,
  }: {
    children: React.ReactNode;
    required?: boolean;
  }) => (
    <label className="block text-sm font-medium text-gray-700 mb-1 font-lato">
      {children}
      {required && <span className="text-secondary2 ml-1">*</span>}
    </label>
  );

  return (
    <div className="max-w-[90rem] mx-auto p-6 py-4 mt-20 sm:mt-40 min-h-screen font-lato">
      {/* Previously Added Addresses */}
      <div className="mb-8">
        <h2 className="text-lg font-medium text-gray-800 mb-10 font-lato">
          Previously Added
        </h2>
        {/* Horizontal scrolling container for mobile */}
        <div className="overflow-x-auto pb-2">
          <div className="flex gap-4 lg:grid lg:grid-cols-5 lg:gap-4 min-w-max lg:min-w-0">
            {savedAddresses.map((address) => (
              <div
                key={address.id}
                className="bg-secondary p-4 rounded-lg border border-gray-200 flex-shrink-0 w-64 lg:w-auto relative"
              >
                <div className="mb-2">
                  <h3 className="font-semibold text-gray-800 font-lato pr-8">
                    {address.name}
                  </h3>
                </div>
                <div className="flex items-start mb-8">
                  <MapPin
                    size={16}
                    className="text-primary1 mr-2 mt-0.5 flex-shrink-0"
                  />
                  <p className="text-sm text-gray-600 leading-relaxed font-lato">
                    {address.address}
                  </p>
                </div>
                <button className="absolute bottom-3 right-3 text-primary1 hover:text-primary2 text-sm flex items-center gap-1 px-2 py-1 rounded transition-colors cursor-pointer">
                  <Edit size={12} />
                  <span className="font-lato text-xs">Edit</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Address Form */}
      {/* Enter Contact Details */}
      <div className="my-10">
        <h3 className="text-lg font-medium mb-4 text-gray-800 font-lato">
          Enter Contact Details
        </h3>
        <div className="mb-4">
          <RequiredLabel required>Email</RequiredLabel>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-secondary1 focus:border-transparent outline-none font-lato"
          />
        </div>
      </div>

      {/* Shipping Information */}
      <div className="my-10">
        <h3 className="text-lg font-medium mb-4 text-gray-800 font-lato">
          Shipping Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <RequiredLabel required>First Name</RequiredLabel>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-secondary1 focus:border-transparent outline-none font-lato"
            />
          </div>
          <div>
            <RequiredLabel required>Last Name</RequiredLabel>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-secondary1 focus:border-transparent outline-none font-lato"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <RequiredLabel required>Address Line - 1</RequiredLabel>
            <input
              type="text"
              name="addressLine1"
              placeholder="Address Line - 1"
              value={formData.addressLine1}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-secondary1 focus:border-transparent outline-none font-lato"
            />
          </div>
          <div>
            <RequiredLabel>Address Line - 2</RequiredLabel>
            <input
              type="text"
              name="addressLine2"
              placeholder="Address Line - 2"
              value={formData.addressLine2}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-secondary1 focus:border-transparent outline-none font-lato"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <RequiredLabel required>Apartment, Suite, etc.</RequiredLabel>
            <input
              type="text"
              name="apartment"
              placeholder="Apartment, Suite, etc."
              value={formData.apartment}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-secondary1 focus:border-transparent outline-none font-lato"
            />
          </div>
          <div>
            <RequiredLabel required>City</RequiredLabel>
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-secondary1 focus:border-transparent outline-none font-lato"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <RequiredLabel required>State</RequiredLabel>
            <select
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-secondary1 focus:border-transparent outline-none bg-white font-lato"
            >
              <option value="">Select State</option>
              {indianStates.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
          <div>
            <RequiredLabel required>Country</RequiredLabel>
            <select
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-secondary1 focus:border-transparent outline-none bg-white font-lato"
            >
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <RequiredLabel required>Zip Code</RequiredLabel>
            <input
              type="text"
              name="zipCode"
              placeholder="Zip Code"
              value={formData.zipCode}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-secondary1 focus:border-transparent outline-none font-lato"
            />
          </div>
          <div>
            <RequiredLabel required>Mobile Number</RequiredLabel>
            <div className="flex">
              <select className="p-3 border border-gray-300 rounded-l-lg bg-white focus:ring-2 focus:ring-secondary1 focus:border-transparent outline-none font-lato">
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
              </select>
              <input
                type="tel"
                name="mobileNumber"
                placeholder="Mobile Number"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                required
                className="flex-1 p-3 border border-l-0 border-gray-300 rounded-r-lg focus:ring-2 focus:ring-secondary1 focus:border-transparent outline-none font-lato"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Billing Information */}
      <div className="my-13">
        <h3 className="text-lg font-medium mb-4 text-gray-800 font-lato">
          Billing Information
        </h3>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="billingAddressSame"
            checked={formData.billingAddressSame}
            onChange={handleInputChange}
            className="w-5 h-5 text-secondary2 bg-white border-2 border-gray-300 rounded focus:ring-2 focus:ring-secondary2"
          />
          <label className="ml-3 text-gray-700 cursor-pointer font-lato">
            Billing Address is same as Shipping Address
          </label>
        </div>
      </div>

      {/* Conditional Billing Fields */}
      {!formData.billingAddressSame && (
        <div className="my-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <RequiredLabel required>First Name</RequiredLabel>
              <input
                type="text"
                name="billingFirstName"
                placeholder="First Name"
                value={formData.billingFirstName}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-secondary1 outline-none font-lato"
              />
            </div>
            <div>
              <RequiredLabel required>Last Name</RequiredLabel>
              <input
                type="text"
                name="billingLastName"
                placeholder="Last Name"
                value={formData.billingLastName}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-secondary1 outline-none font-lato"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <RequiredLabel required>Address Line - 1</RequiredLabel>
              <input
                type="text"
                name="billingAddressLine1"
                placeholder="Address Line - 1"
                value={formData.billingAddressLine1}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-secondary1 outline-none font-lato"
              />
            </div>
            <div>
              <RequiredLabel>Address Line - 2</RequiredLabel>
              <input
                type="text"
                name="billingAddressLine2"
                placeholder="Address Line - 2"
                value={formData.billingAddressLine2}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-secondary1 outline-none font-lato"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <RequiredLabel required>Apartment, Suite, etc.</RequiredLabel>
              <input
                type="text"
                name="billingApartment"
                placeholder="Apartment, Suite, etc."
                value={formData.billingApartment}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-secondary1 outline-none font-lato"
              />
            </div>
            <div>
              <RequiredLabel required>City</RequiredLabel>
              <input
                type="text"
                name="billingCity"
                placeholder="City"
                value={formData.billingCity}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-secondary1 outline-none font-lato"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <RequiredLabel required>State</RequiredLabel>
              <select
                name="billingState"
                value={formData.billingState}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-secondary1 bg-white outline-none font-lato"
              >
                <option value="">Select State</option>
                {indianStates.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <RequiredLabel required>Country</RequiredLabel>
              <select
                name="billingCountry"
                value={formData.billingCountry}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-secondary1 bg-white outline-none font-lato"
              >
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <RequiredLabel required>Zip Code</RequiredLabel>
              <input
                type="text"
                name="billingZipCode"
                placeholder="Zip Code"
                value={formData.billingZipCode}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-secondary1 outline-none font-lato"
              />
            </div>
            <div>
              <RequiredLabel required>Mobile Number</RequiredLabel>
              <div className="flex">
                <select className="p-3 border border-gray-300 rounded-l-lg bg-white focus:ring-2 focus:ring-secondary1">
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                </select>
                <input
                  type="tel"
                  name="billingMobileNumber"
                  placeholder="Mobile Number"
                  value={formData.billingMobileNumber}
                  onChange={handleInputChange}
                  required
                  className="flex-1 p-3 border border-l-0 border-gray-300 rounded-r-lg focus:ring-2 focus:ring-secondary1 outline-none font-lato"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Proceed to Pay Button */}
      <button
        type="button"
        onClick={handleSubmit}
        className="w-full bg-red-800 text-white py-4 px-6 font-medium text-lg hover:bg-red-900 transition-colors font-lato"
      >
        Proceed to Pay
      </button>
    </div>
  );
};

export default AddressPage;
