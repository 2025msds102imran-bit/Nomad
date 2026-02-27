import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input, Button } from "../../components/ui";
const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email });
    setSubmitted(true);
  };

  return (
    <div className="w-full">
      <div className="bg-white rounded-2xl shadow-md p-8 sm:p-10">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-[#0F172A]">Reset your password</h1>
          <p className="text-sm text-gray-500 mt-2">
            Enter your email and we'll send you a link to reset your password.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
              <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              If an account exists for <strong>{email}</strong>, you'll receive a password reset link shortly.
            </p>
            <Link to="/auth/login" className="text-sm text-[#334F90] font-medium hover:underline">
              Back to Sign In
            </Link>
          </div>
        ) : (
          <>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <Input
                label="Email Address"
                id="forgot-email"
                type="email"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" fullWidth className="mt-2">
                Send Reset Link
              </Button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-6">
              Remember your password?{" "}
              <Link to="/auth/login" className="text-[#334F90] font-medium hover:underline">
                Sign in
              </Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
