import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input, Select, Button } from "../components/ui";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/logo.png";

const roles = ["Company", "Recruiter", "Agency"];

const registrationOptions = [
  { value: "2019/123456/07", label: "2019/123456/07" },
  { value: "2020/654321/07", label: "2020/654321/07" },
  { value: "2021/112233/07", label: "2021/112233/07" },
];

const SignupPage = () => {
  const [selectedRole, setSelectedRole] = useState("Company");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [location, setLocation] = useState("");
  const [registrationNo, setRegistrationNo] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    try {
      const user = await register({ companyName, email, password, contactNumber, location, registrationNo, role: selectedRole });
      const role = user?.role || selectedRole;
      const basePath = role === "Company" ? "/dashboard" : "/recruiter";
      navigate(basePath, { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="bg-white rounded-[20px] px-6 sm:px-8 py-6 flex flex-col gap-4 sm:gap-7 shadow-[0px_3.31px_4.97px_-3.31px_rgba(0,0,0,0.10),0px_8.28px_12.42px_-2.48px_rgba(0,0,0,0.10)] outline-[1.07px] outline-gray-200">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-semibold leading-8 text-slate-900">
          Welcome to Nomad Recruitment

          </h1>
          <p className="text-xs text-gray-500">
            If you already have an account,{" "}
            <Link to="/auth/login" className="text-cyan-900 font-medium hover:underline">
              sign in here
            </Link>
          </p>
        </div>

        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          {error && (
            <div className="px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
              {error}
            </div>
          )}

          <div>
            <p className="text-sm font-medium text-slate-900 mb-2">Select your role</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full">
              {roles.map((role) => (
                <button
                  key={role}
                  type="button"
                  onClick={() => setSelectedRole(role)}
                  className={`h-11 rounded-xl text-sm font-medium transition-colors ${
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
            label="Company Name"
            id="signup-company"
            placeholder="Enter company name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            size="sm"
            required
          />
          <Input
            label="Email"
            id="signup-email"
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            size="sm"
            required
          />
          <Input
            label="Password"
            id="signup-password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            size="sm"
            required
          />
          <Input
            label="Contact Number"
            id="signup-contact"
            type="tel"
            placeholder="Enter contact number"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            size="sm"
            required
          />
          <Input
            label="Location"
            id="signup-location"
            placeholder="Search location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            size="sm"
            required
          />
          <div>
            <Select
              label="Search Company Registration No."
              id="signup-registration"
              value={registrationNo}
              onChange={(e) => setRegistrationNo(e.target.value)}
              options={registrationOptions}
              placeholder="Search Registration no."
            />
            <p className="text-[10px] text-gray-400 mt-1.5">
              Search for your company using the registration number (e.g., 2019/123456/07)
            </p>
          </div>
          <Button type="submit" size="md" fullWidth disabled={isLoading}>
            {isLoading ? "Creating Account..." : "Save and Next"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
