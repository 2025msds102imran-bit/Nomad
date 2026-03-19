import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Input, Button } from "../components/ui";
import { useAuth } from "../context/AuthContext";
import { getDashboardPath } from "../utils/roleUtils";
import logo from "../assets/images/logo.png";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname;
  const roleHint = location.state?.role;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    try {
      const user = await login(email, password, roleHint);
      const role = user?.role || "Company";
      const basePath = getDashboardPath(role);
      const target = (from && from.startsWith(basePath)) ? from : basePath;
      navigate(target, { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="bg-white rounded-2xl px-5 sm:p-6 py-6 flex flex-col gap-6 shadow-[0px_3.91px_5.87px_-3.91px_rgba(0,0,0,0.10),0px_9.78px_14.66px_-2.93px_rgba(0,0,0,0.10)] outline-[1.27px] outline-gray-200">
        <div className="flex flex-col items-center gap-2">
          <img
            src={logo}
            alt="Nomad"
            className="w-9 h-9 rounded-[10px] object-cover drop-shadow-lg"
          />
          <h1 className="text-2xl font-semibold text-slate-900 leading-10 text-center">
            Sign In to Nomad
          </h1>
          <p className="text-sm text-gray-500 text-center">
            Welcome back! Please enter your details.
          </p>
        </div>

        {roleHint === "Admin" && (
          <div className="mb-2 inline-flex items-center justify-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
            You are logging in as <span className="ml-1 font-semibold">Admin</span>
          </div>
        )}

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          {error && (
            <div className="px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
              {error}
            </div>
          )}

          <Input
            label="Email"
            id="login-email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div>
            <Input
              label="Password"
              id="login-password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="flex justify-end mt-2">
              <Link
                to="/auth/forgot-password"
                className="text-xs text-cyan-900 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
          </div>

          <Button type="submit" fullWidth disabled={isLoading}>
            {isLoading ? "Signing In..." : "Sign In"}
          </Button>

          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-500">or</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <Link to="/auth/signup">
            <Button type="button" variant="secondary" fullWidth>
              Create New Account
            </Button>
          </Link>
        </form>

        <div className="flex justify-center items-center">
          <span className="text-xs text-gray-500">Don&apos;t have an account?</span>
          <Link
            to="/auth/signup"
            className="text-base font-medium text-cyan-900 hover:underline ml-1"
          >
            Sign up
          </Link>
        </div>

        <div className="mt-2 flex justify-end">
          <Link
            to="/auth/login"
            state={{ role: "Admin" }}
            className="text-xs text-gray-400 hover:text-cyan-900 hover:underline"
          >
            Login as Admin
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
