import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input, Button } from "../components/ui";
import logo from "../assets/logo.png";

const roles = ["Company", "Recruiter", "Agency"];

const LoginPage = () => {
  const [selectedRole, setSelectedRole] = useState("Company");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ selectedRole, email, password });
  };

  return (
    <div className="w-full">
      <div className="bg-white rounded-2xl p-6 flex flex-col gap-6 shadow-[0px_3.91px_5.87px_-3.91px_rgba(0,0,0,0.10),0px_9.78px_14.66px_-2.93px_rgba(0,0,0,0.10)] outline-[1.27px] outline-gray-200">
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

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div>
            <p className="text-sm font-medium text-slate-900 mb-2">Select Role</p>
            <div className="flex justify-between">
              {roles.map((role) => (
                <button
                  key={role}
                  type="button"
                  onClick={() => setSelectedRole(role)}
                  className={`w-24 h-11 rounded-xl text-xs font-medium transition-colors ${
                    selectedRole === role
                      ? "bg-[#25406A] text-white"
                      : "bg-gray-50 text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>

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

          <Button type="submit" fullWidth>
            Sign In
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
            Sign up as company
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
