import React, { useState, useRef } from "react";
import { Upload, Trash2 } from "lucide-react";

const TABS = [
  { key: "recruiter", label: "Recruiter Info", color: "text-indigo-500", border: "border-indigo-500" },
  { key: "founding", label: "Founding Info", color: "text-amber-500", border: "border-amber-500" },
  { key: "social", label: "Social-Media-Profile", color: "text-emerald-500", border: "border-emerald-500" },
];

const InputField = ({ label, value, onChange, type = "text", placeholder = "" }) => (
  <div className="flex flex-col gap-2">
    <label className="text-slate-900 text-sm font-medium leading-5">{label}</label>
    {type === "textarea" ? (
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="h-56 px-4 py-3 bg-gray-50 rounded-[10px] border-[1.30px] border-gray-200 text-gray-600 text-base font-normal leading-6 resize-none outline-none focus:border-cyan-900 transition"
      />
    ) : (
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="h-12 px-4 py-3 bg-gray-50 rounded-[10px] outline-[1.30px] outline-gray-200 text-gray-600 text-base font-normal leading-6 focus:outline-cyan-900 transition"
      />
    )}
  </div>
);

const UploadArea = ({ label, text, subtext, size = "large" }) => {
  const inputRef = useRef(null);
  const iconSize = size === "small" ? 24 : 33;
  const containerSize = size === "small" ? "size-12" : "size-16";

  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-slate-900 text-sm font-medium leading-5">{label}</label>}
      <div
        onClick={() => inputRef.current?.click()}
        className={`${size === "small" ? "h-48" : "px-12 py-8"} bg-gray-50 rounded-[10px] outline-[1.41px] outline-gray-200 flex flex-col justify-center items-center gap-3 cursor-pointer hover:bg-gray-100 transition`}
      >
        <div className={`${containerSize} bg-cyan-900 rounded-full flex items-center justify-center`}>
          <Upload size={iconSize} stroke="white" strokeWidth={2.7} />
        </div>
        <span className={`text-slate-900 ${size === "small" ? "text-sm font-semibold" : "text-lg font-semibold"} leading-7 text-center`}>
          {text}
        </span>
        <span className="text-gray-600 text-sm font-normal leading-5 text-center">{subtext}</span>
        <input ref={inputRef} type="file" className="hidden" />
      </div>
    </div>
  );
};

const RecruiterInfoTab = () => {
  const [form, setForm] = useState({
    name: "Tata Consultancy Services",
    email: "tejasdarania007@gmail.com",
    phone: "8460820628",
    location: "TCS, Gandhinagar, Gujarat, India",
    about: "",
    subscription: "Subscription Plan",
    startDate: "",
    endDate: "",
  });

  const update = (field) => (e) => setForm((p) => ({ ...p, [field]: e.target.value }));

  return (
    <div className="flex flex-col gap-6 w-full">
      <UploadArea text="Drag & Drop Picture here" subtext="or click to browse" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <InputField label="Recruiter Name" value={form.name} onChange={update("name")} />
        <InputField label="Email" value={form.email} onChange={update("email")} type="email" />
        <InputField label="Phone Number" value={form.phone} onChange={update("phone")} />
        <InputField label="Location" value={form.location} onChange={update("location")} />
      </div>

      <InputField label="About us" value={form.about} onChange={update("about")} type="textarea" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <UploadArea label="Upload Video" text="Drag & Drop Video here" subtext="or click to browse" size="small" />
        <div className="flex flex-col gap-2">
          <label className="text-slate-900 text-sm font-medium leading-5">Upload Photos</label>
          <div className="grid grid-cols-2 gap-3">
            <div className="h-48 bg-gray-50 rounded-[10px] outline-[1.41px] outline-gray-200 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-gray-100 transition">
              <div className="size-12 bg-cyan-900 rounded-full flex items-center justify-center">
                <Upload size={24} stroke="white" strokeWidth={1.96} />
              </div>
              <span className="text-slate-900 text-sm font-semibold leading-5 text-center">Drag & Drop Picture here</span>
              <span className="text-gray-600 text-[10px] font-normal leading-4 text-center">or click to browse</span>
            </div>
            <div className="h-48 bg-gray-50 rounded-[10px] outline-[1.41px] outline-gray-200 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-gray-100 transition">
              <div className="size-12 bg-cyan-900 rounded-full flex items-center justify-center">
                <Upload size={24} stroke="white" strokeWidth={1.96} />
              </div>
              <span className="text-slate-900 text-sm font-semibold leading-5 text-center">Drag & Drop Picture here</span>
              <span className="text-gray-600 text-[10px] font-normal leading-4 text-center">or click to browse</span>
            </div>
          </div>
        </div>
      </div>

      <InputField label="Subscription Plan" value={form.subscription} onChange={update("subscription")} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <InputField label="Subscription Plan Start Date" value={form.startDate} onChange={update("startDate")} type="date" />
        <InputField label="Subscription Plan End Date" value={form.endDate} onChange={update("endDate")} type="date" />
      </div>

      <div>
        <button className="w-44 h-12 bg-cyan-900 rounded-[10px] text-white text-base font-medium leading-6 cursor-pointer hover:bg-cyan-800 transition">
          Save Changes
        </button>
      </div>
    </div>
  );
};

const FoundingInfoTab = () => {
  const [form, setForm] = useState({
    specialization: "IT & Software Recruitment",
    recruiterType: "Recruitment Agency",
    activeClients: "25+ Companies",
    experienceSince: "2016",
    vision: "",
  });

  const update = (field) => (e) => setForm((p) => ({ ...p, [field]: e.target.value }));

  return (
    <div className="flex flex-col gap-5 w-full">
      <InputField label="Specialization" value={form.specialization} onChange={update("specialization")} />
      <InputField label="Recruiter Type" value={form.recruiterType} onChange={update("recruiterType")} />
      <InputField label="Active Clients" value={form.activeClients} onChange={update("activeClients")} />
      <InputField label="Experience Since" value={form.experienceSince} onChange={update("experienceSince")} />

      <div className="flex flex-col gap-2">
        <label className="text-slate-900 text-sm font-medium leading-5">Vision</label>
        <textarea
          value={form.vision}
          onChange={update("vision")}
          className="h-52 px-4 py-3 bg-gray-50 rounded-[10px] outline-[1.38px] outline-gray-200 text-slate-900 text-base font-normal leading-6 resize-none focus:outline-amber-500 transition"
        />
      </div>

      <div>
        <button className="w-44 h-12 bg-amber-500 rounded-[10px] text-white text-base font-medium leading-6 cursor-pointer hover:bg-amber-600 transition">
          Update
        </button>
      </div>
    </div>
  );
};

const SocialMediaTab = () => {
  const [form, setForm] = useState({
    facebook: "MIGRconsulting/12,651",
    instagram: "MIGRconsulting/12,651",
    twitter: "",
    behance: "",
    dribbble: "",
    linkedin: "MIGRconsulting/12,651",
    portfolio: "",
  });

  const update = (field) => (e) => setForm((p) => ({ ...p, [field]: e.target.value }));

  return (
    <div className="flex flex-col gap-5 w-full">
      <InputField label="Facebook" value={form.facebook} onChange={update("facebook")} placeholder="Facebook profile URL" />
      <InputField label="Instagram" value={form.instagram} onChange={update("instagram")} placeholder="Instagram profile URL" />
      <InputField label="Twitter" value={form.twitter} onChange={update("twitter")} placeholder="Twitter profile URL" />
      <InputField label="Behance" value={form.behance} onChange={update("behance")} placeholder="Behance profile URL" />
      <InputField label="Dribbble" value={form.dribbble} onChange={update("dribbble")} placeholder="Dribbble profile URL" />
      <InputField label="LinkedIn" value={form.linkedin} onChange={update("linkedin")} placeholder="LinkedIn profile URL" />
      <InputField label="Portfolio" value={form.portfolio} onChange={update("portfolio")} placeholder="Portfolio website URL" />

      <div>
        <button className="w-44 h-12 bg-emerald-500 rounded-[10px] text-white text-base font-medium leading-6 cursor-pointer hover:bg-emerald-600 transition">
          Update
        </button>
      </div>
    </div>
  );
};

const BankDetailsSection = () => {
  const [form, setForm] = useState({
    bankName: "Meezan",
    accountNumber: "12345678987654",
    bankCode: "",
  });

  const update = (field) => (e) => setForm((p) => ({ ...p, [field]: e.target.value }));

  return (
    <div className="w-full py-6 bg-white rounded-2xl outline-[1.30px] outline-gray-100 flex flex-col items-center gap-6">
      <div className="w-full px-4 sm:px-8">
        <h2 className="text-slate-900 text-xl font-semibold leading-5">Bank Details</h2>
      </div>
      <div className="w-full px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <InputField label="Bank Name" value={form.bankName} onChange={update("bankName")} />
        <InputField label="Bank Account Number" value={form.accountNumber} onChange={update("accountNumber")} />
      </div>
      <div className="w-full px-4 sm:px-8">
        <InputField label="Bank Code" value={form.bankCode} onChange={update("bankCode")} placeholder="Bank Code" />
      </div>
      <div className="w-full px-4 sm:px-8">
        <button className="w-44 h-12 bg-cyan-900 rounded-[10px] text-white text-base font-medium leading-6 cursor-pointer hover:bg-cyan-800 transition">
          Save Changes
        </button>
      </div>
    </div>
  );
};

const DeleteAccountSection = () => {
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="w-full p-4 sm:p-8 bg-red-600/5 rounded-2xl outline-[1.30px] outline-red-200">
      <h2 className="text-slate-900 text-xl font-semibold leading-7 mb-2">Delete Account</h2>
      <p className="text-gray-600 text-base font-normal leading-6 mb-6">
        Warning: This action will permanently delete your account and all associated data. This cannot be undone.
      </p>
      {!showConfirm ? (
        <button
          onClick={() => setShowConfirm(true)}
          className="w-48 h-12 bg-red-600 rounded-[10px] flex items-center justify-center gap-2 text-white text-base font-medium leading-6 cursor-pointer hover:bg-red-700 transition"
        >
          <Trash2 size={20} stroke="white" /> Delete Account
        </button>
      ) : (
        <div className="flex items-center gap-3">
          <button className="w-48 h-12 bg-red-600 rounded-[10px] flex items-center justify-center gap-2 text-white text-base font-medium leading-6 cursor-pointer hover:bg-red-700 transition">
            <Trash2 size={20} stroke="white" /> Confirm Delete
          </button>
          <button
            onClick={() => setShowConfirm(false)}
            className="h-12 px-6 bg-white rounded-[10px] outline-1 outline-gray-200 text-gray-600 text-base font-medium leading-6 cursor-pointer hover:bg-gray-50 transition"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("recruiter");

  return (
    <div className="flex flex-col gap-5">
      {/* Main form card */}
      <div className="pb-6 bg-white rounded-2xl outline-[1.30px] outline-gray-100 flex flex-col items-center gap-6">
        {/* Tabs */}
        <div className="w-full px-4 sm:px-8 border-b border-gray-200 overflow-x-auto">
          <div className="flex min-w-max sm:min-w-0">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex-1 min-w-[120px] sm:min-w-[160px] h-14 text-sm font-medium leading-5 text-center cursor-pointer transition border-b-[1.30px] whitespace-nowrap ${
                  activeTab === tab.key
                    ? `${tab.color} ${tab.border}`
                    : "text-gray-400 border-transparent hover:text-gray-600"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        <div className="w-full px-4 sm:px-8">
          {activeTab === "recruiter" && <RecruiterInfoTab />}
          {activeTab === "founding" && <FoundingInfoTab />}
          {activeTab === "social" && <SocialMediaTab />}
        </div>
      </div>

      {/* Bank Details & Delete Account — only on Recruiter Info tab */}
      {activeTab === "recruiter" && (
        <>
          <BankDetailsSection />
          <DeleteAccountSection />
        </>
      )}
    </div>
  );
};

export default ProfilePage;
