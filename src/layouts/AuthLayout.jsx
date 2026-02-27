import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

const backLinks = {
  "/auth/login": { to: "/", label: "Back to Home" },
  "/auth/signup": { to: "/auth/login", label: "Back to Sign In" },
  "/auth/forgot-password": { to: "/auth/login", label: "Back to Sign In" },
};

const AuthLayout = () => {
  const { pathname } = useLocation();
  const back = backLinks[pathname] || { to: "/", label: "Back to Home" };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10" style={{ background: 'linear-gradient(180deg, #0F172A 0%, #1E3A5F 50%, #334F90 100%)' }}>
      <div className="w-full max-w-[460px]">
        <Link to={back.to} className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm transition mb-4">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          {back.label}
        </Link>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
