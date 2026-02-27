import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-7xl font-bold text-[#0F172A]">404</h1>
        <p className="text-xl font-semibold text-gray-800 mt-4">Page Not Found</p>
        <p className="text-sm text-gray-500 mt-2">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
