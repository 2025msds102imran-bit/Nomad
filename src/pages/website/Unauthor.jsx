import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui";

const Unauthor = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
          <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-[#0F172A]">Access Denied</h1>
        <p className="text-sm text-gray-500 mt-2">
          You don't have permission to access this page. Please sign in with the correct account.
        </p>
        <div className="flex gap-3 justify-center mt-8">
          <Link to="/auth/login">
            <Button>Sign In</Button>
          </Link>
          <Link to="/">
            <Button variant="secondary">Back to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Unauthor;
