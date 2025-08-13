"use client";

import React, { Suspense, useRef, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import saree1 from "../../../../../public/saree_mix.jpg";
import logo from "../../../../../public/Logo.svg";
import ratha from "../../../../../public/image.png";
import flower from "../../../../../public/flower.png";
import { ArrowRight } from "lucide-react";

export default function EnterOtp() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EnterOtpContent />
    </Suspense>
  );
}

function EnterOtpContent() {
  const searchParams = useSearchParams();
  const method = searchParams.get("method"); // "email" or "mobile"

  const buttonText =
    method === "mobile" ? "Verify Mobile Number" : "Verify Email";

  const [otp, setOtp] = useState(Array(6).fill(""));
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleChange = (value: string, index: number) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="min-h-screen flex flex-col-reverse md:flex-row font-lato bg-secondary">
      {/* Left Side - OTP Form */}
      <div className="flex-1 flex items-center justify-center relative overflow-hidden">
        {/* Background Images */}
        <div className="absolute top-14 right-0 z-0 opacity-90">
          <Image src={ratha} alt="Ratha" priority />
        </div>
        <div className="absolute bottom-0 left-0 z-0 opacity-90">
          <Image
            src={flower}
            alt="Flower"
            className="h-[30vh] w-auto"
            priority
          />
        </div>

        <div className="relative z-10 w-full max-w-2xl space-y-8 p-6 sm:p-10">
          {/* Logo */}
          <div className="mb-24 md:mb-32 w-full flex justify-center md:justify-start">
            <Image src={logo} alt="Chihili Logo" className="w-36" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-semibold text-gray-900">
            {method === "mobile" ? "Enter OTP" : "Enter OTP"}
          </h2>

          {/* OTP Inputs */}
          <form className="space-y-6 w-full">
            <div className="flex justify-center gap-1 sm:gap-2 w-full">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  placeholder="0"
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={(el) => {
                    if (el) inputRefs.current[index] = el;
                  }}
                  className="flex-1 min-w-0 h-12 sm:h-16 text-center border border-gray-300 text-2xl rounded bg-white focus:border-red-800 focus:ring-red-800 outline-none"
                />
              ))}
            </div>
            {/* Resend OTP Button */}
            <button
              type="button"
              onClick={() => console.log("Resend OTP clicked")}
              className="w-full text-right text-primary1 font-medium"
            >
              Resend OTP
            </button>

            {/* Verify Button */}
            <button
              type="submit"
              className="w-full bg-primary1 text-white rounded-lg py-3 px-4 font-medium hover:bg-primary1/10 transition"
            >
              {buttonText}
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-50 text-gray-500">or</span>
            </div>
          </div>

          {/* Login link */}
          <p className="text-center text-gray-600">
            Already have a Chihili Account?{" "}
            <button className="text-red-800 font-semibold hover:text-red-900 inline-flex items-center">
              Log in
              <ArrowRight className="ml-1 w-4 h-4" />
            </button>
          </p>

          {/* Terms */}
          <p className="text-center text-sm text-gray-500 mt-6">
            By proceeding, you agree to the{" "}
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Terms and Conditions
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>

      {/* Right Side - Main Image */}
      <div className="flex-1 relative h-64 md:h-auto">
        <Image
          src={saree1}
          alt="Saree Model"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
