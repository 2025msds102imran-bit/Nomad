import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input, Select, Button } from "../../components/ui";

const registrationOptions = [
  { value: "2019/123456/07", label: "2019/123456/07" },
  { value: "2020/654321/07", label: "2020/654321/07" },
  { value: "2021/112233/07", label: "2021/112233/07" },
];

const SignupPage = () => {
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [location, setLocation] = useState("");
  const [registrationNo, setRegistrationNo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ companyName, email, password, contactNumber, location, registrationNo });
  };

  return (
    <div className="w-full">
      <div className="bg-white rounded-[20px] p-8 flex flex-col gap-7 shadow-[0px_3.31px_4.97px_-3.31px_rgba(0,0,0,0.10),0px_8.28px_12.42px_-2.48px_rgba(0,0,0,0.10)] outline-[1.07px] outline-gray-200">
        <div className="text-center">
          <h1 className="text-2xl font-semibold leading-8 text-slate-900">
            Welcome to Nomad Company
          </h1>
          <p className="text-xs text-gray-500 mt-1.5">
            If you already have an account, you can{" "}
            <Link to="/auth/login" className="text-cyan-900 font-medium hover:underline">
              log in here!
            </Link>
          </p>
        </div>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
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
          <Button type="submit" size="md" fullWidth>
            Save and Next
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
