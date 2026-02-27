import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input, Button } from "../../components/ui";
import logo from "../../assets/logo.png";
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
      <div className="bg-white rounded-[18px] border-[1.27px] border-gray-200 p-[23px] flex flex-col gap-[24px] shadow-[0px_3.91px_5.87px_-3.91px_#0000001A,0px_9.78px_14.66px_-2.93px_#0000001A]">
        {/* Logo + heading */}
        <div className="flex flex-col items-center">
          <div className="w-[36px] h-[36px] rounded-[10px] overflow-hidden mb-4">
            <img src={logo} alt="logo" className="w-full h-full rounded-md object-cover" />
          </div>
          <h1 className="text-[22px] font-semibold text-[#0F172A]">Sign In to Nomad</h1>
          <p className="text-sm text-gray-500 mt-1">Welcome back! Please enter your details.</p>
        </div>

        <form className="flex flex-col gap-[24px]" onSubmit={handleSubmit}>
          {/* Role selector */}
          <div>
            <p className="text-sm font-medium text-gray-900 mb-2">Select Role</p>
            <div className="flex gap-2">
              {roles.map((role) => (
                <button
                  key={role}
                  type="button"
                  onClick={() => setSelectedRole(role)}
                  className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedRole === role
                      ? "bg-[#0F172A] text-white shadow-sm"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
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
            <div className="flex justify-end mt-1.5">
              <Link to="/auth/forgot-password" className="text-xs text-[#334F90] font-medium hover:underline">
                Forgot password?
              </Link>
            </div>
          </div>

          <Button type="submit" fullWidth>
            Sign In
          </Button>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400">or</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <Link to="/auth/signup">
            <Button type="button" variant="secondary" fullWidth>
              Create New Account
            </Button>
          </Link>
        </form>

        <p className="text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link to="/auth/signup" className="text-[#334F90] font-medium hover:underline">
            Sign up as company
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
