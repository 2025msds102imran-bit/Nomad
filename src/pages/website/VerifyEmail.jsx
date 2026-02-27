import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui";

const VerifyEmail = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-2xl shadow-md p-10 max-w-md w-full text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
          <svg className="w-8 h-8 text-[#334F90]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </div>
        <h1 className="text-2xl font-semibold text-[#0F172A]">Verify Your Email</h1>
        <p className="text-sm text-gray-500 mt-3 leading-relaxed">
          We've sent a verification link to your email address. Please check your inbox and click the link to verify your account.
        </p>
        <div className="mt-8 flex flex-col gap-3">
          <Button fullWidth>Resend Verification Email</Button>
          <Link to="/auth/login" className="text-sm text-[#334F90] font-medium hover:underline">
            Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
