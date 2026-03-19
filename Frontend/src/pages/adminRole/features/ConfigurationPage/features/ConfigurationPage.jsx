import React, { useState } from "react";
import RecruiterAgency from "./RecruiterAgency";

const ConfigurationPage = () => {
  const [pricingTab, setPricingTab] = useState("company");
  const [freeTrialEnabled, setFreeTrialEnabled] = useState(true);
  const [trialDuration, setTrialDuration] = useState(7);
  const [earlyAccessOpen, setEarlyAccessOpen] = useState(true);
  const [plans, setPlans] = useState({
    basic: { price: 27, boosts: 3, resumes: 10, jobPosts: 5, chatCredits: 50, recruiterFee: 5 },
    pro: { price: 79, boosts: 3, resumes: 10, jobPosts: 5, chatCredits: 50, recruiterFee: 5 },
    premium: { price: 199, boosts: -1, resumes: -1, jobPosts: -1, chatCredits: -1, recruiterFee: 2 },
  });

  const updatePlan = (planKey, field, value) => {
    setPlans((prev) => ({
      ...prev,
      [planKey]: { ...prev[planKey], [field]: value },
    }));
  };

  const handleSaveConfig = () => {
    // TODO: wire to API
    console.log("Saving configuration", { pricingTab, freeTrialEnabled, trialDuration, earlyAccessOpen, plans });
  };

  return (
    <div data-layer="Container" className="Container w-full self-stretch min-h-screen relative bg-gray-50 flex flex-col items-center">
      {/* Header */}
      <div data-layer="Header" className="Header w-full h-auto min-h-24 px-4 sm:px-8 pt-4 pb-[1.30px] bg-white border-b-[1.30px] border-gray-200 flex flex-col justify-start items-start shrink-0">
        <div data-layer="Container" className="Container self-stretch h-auto min-h-12 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4">
          <div data-layer="Container" className="Container w-full sm:w-72 h-auto flex justify-start items-center">
            <div data-layer="Container" className="Container w-full flex-1 h-auto flex flex-col justify-start items-start gap-0.5">
              <div data-layer="Heading 2" className="Heading2 self-stretch h-7 relative">
                <div data-layer="Configuration" className="Configuration left-0 top-[-0.41px] absolute justify-start text-black text-base font-semibold font-['Inter'] capitalize leading-6">Configuration</div>
              </div>
              <div data-layer="Paragraph" className="Paragraph self-stretch h-5 relative">
                <div data-layer="Manage platform settings, pricing, and subscription limits" className="ManagePlatformSettingsPricingAndSubscriptionLimits left-0 top-[0.30px] absolute justify-start text-gray-500 text-xs font-normal font-['Inter'] leading-6">Manage platform settings, pricing, and subscription limits</div>
              </div>
            </div>
          </div>
          <div data-layer="Container" className="Container w-full sm:w-40 h-10 mt-4 sm:mt-0 relative flex justify-start sm:justify-end">
            <div data-layer="Button" className="Button size-9 relative sm:absolute sm:left-0 sm:top-[1.30px] rounded-[10px] mr-3 sm:mr-0">
              <div data-svg-wrapper data-layer="Icon" className="Icon left-[8px] top-[8px] absolute">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_859_115)">
                    <path d="M8.54883 17.4834C8.69498 17.7365 8.90517 17.9467 9.15829 18.0928C9.41141 18.2389 9.69853 18.3159 9.9908 18.3159C10.2831 18.3159 10.5702 18.2389 10.8233 18.0928C11.0764 17.9467 11.2866 17.7365 11.4328 17.4834" stroke="#4A5565" strokeWidth="1.6651" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2.71557 12.7596C2.60681 12.8788 2.53503 13.027 2.50897 13.1863C2.48292 13.3455 2.5037 13.5089 2.56879 13.6566C2.63389 13.8042 2.74049 13.9298 2.87563 14.018C3.01077 14.1062 3.16862 14.1532 3.32999 14.1533H16.6508C16.8121 14.1533 16.97 14.1065 17.1052 14.0185C17.2405 13.9305 17.3472 13.8051 17.4125 13.6575C17.4777 13.51 17.4987 13.3466 17.4729 13.1874C17.447 13.0281 17.3755 12.8798 17.2669 12.7604C16.1596 11.619 14.9857 10.406 14.9857 6.66034C14.9857 5.3355 14.4594 4.06493 13.5226 3.12813C12.5858 2.19133 11.3152 1.66504 9.99039 1.66504C8.66555 1.66504 7.39498 2.19133 6.45818 3.12813C5.52138 4.06493 4.99509 5.3355 4.99509 6.66034C4.99509 10.406 3.82036 11.619 2.71557 12.7596Z" stroke="#4A5565" strokeWidth="1.6651" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_859_115">
                      <rect width="19.9812" height="19.9812" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div data-svg-wrapper data-layer="Text" className="Text left-[23.99px] top-[3.99px] absolute">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 3.99826C0 1.79008 1.79008 0 3.99826 0C6.20644 0 7.99653 1.79008 7.99653 3.99826C7.99653 6.20644 6.20644 7.99653 3.99826 7.99653C1.79008 7.99653 0 6.20644 0 3.99826Z" fill="#4A90E2" />
                </svg>
              </div>
            </div>
            <div data-layer="Button" className="Button w-28 h-10 pl-4 relative sm:absolute sm:left-[51.97px] sm:top-0 bg-white rounded-[10px] outline outline-[1.30px] outline-offset-[-1.30px] outline-gray-200 flex justify-start items-center gap-2">
              <div data-svg-wrapper data-layer="Icon" className="Icon relative">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_859_120)">
                    <path d="M3.33203 5.33105L7.33029 9.32932" stroke="#4A5565" strokeWidth="1.33275" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2.66602 9.32943L6.66428 5.33116L7.99703 3.33203" stroke="#4A5565" strokeWidth="1.33275" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1.33203 3.33203H9.32856" stroke="#4A5565" strokeWidth="1.33275" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4.66406 1.33301H5.33044" stroke="#4A5565" strokeWidth="1.33275" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14.6599 14.6599L11.328 7.99609L7.99609 14.6599" stroke="#4A5565" strokeWidth="1.33275" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9.33008 11.9951H13.3283" stroke="#4A5565" strokeWidth="1.33275" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_859_120">
                      <rect width="15.9931" height="15.9931" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div data-layer="Text" className="Text w-6 h-5 relative">
                <div data-layer="Eng" className="Eng left-0 top-[0.30px] absolute text-center justify-start text-gray-600 text-sm font-medium font-['Inter'] leading-5">Eng</div>
              </div>
              <div data-svg-wrapper data-layer="Icon" className="Icon relative">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.6613 5.99707L7.99669 10.6617L3.33203 5.99707" stroke="#4A5565" strokeWidth="1.33275" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-layer="Frame" className="w-full max-w-8xl mx-auto px-4 sm:px-8 pt-8 pb-12 flex flex-col gap-6">
        {/* Warning Banner */}
        <div className="w-full h-auto min-h-16 px-4 py-3.5 bg-gradient-to-b from-amber-100 via-amber-200 to-amber-100 rounded-[10.40px] border-l-2 border-amber-500 flex flex-col sm:flex-row justify-start items-start gap-3">
          <div className="size-9 bg-white rounded-[10.40px] shadow-sm flex justify-center items-center shrink-0">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_warn)">
                <path d="M8.83288 16.4928C12.8978 16.4928 16.1931 13.1363 16.1931 8.99589C16.1931 4.85549 12.8978 1.49902 8.83288 1.49902C4.76794 1.49902 1.47266 4.85549 1.47266 8.99589C1.47266 13.1363 4.76794 16.4928 8.83288 16.4928Z" stroke="#F59E0B" strokeWidth="1.48565" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.83203 5.99805V8.99741" stroke="#F59E0B" strokeWidth="1.48565" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.83203 11.9961H8.83979" stroke="#F59E0B" strokeWidth="1.48565" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_warn">
                  <rect width="17.6645" height="17.9925" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-amber-800 text-[10.40px] font-bold font-['Inter'] leading-4">⚠️ Critical: Global Configuration Changes</div>
            <div className="text-amber-900 text-[10.40px] font-normal font-['Inter'] leading-4">All changes made here will take effect immediately across the entire platform and impact all users. Please review carefully before saving.</div>
          </div>
        </div>

        {/* Pricing Type Tabs */}
        <div className="w-full sm:w-fit h-auto min-h-12 bg-white rounded-xl border border-gray-200 flex flex-col sm:flex-row items-center gap-2 p-1.5 overflow-hidden">
          <button
            type="button"
            onClick={() => setPricingTab("company")}
            className={`w-full sm:w-auto sm:min-w-36 h-9 px-4 rounded-lg inline-flex justify-center items-center gap-2 transition-colors ${pricingTab === "company"
                ? "bg-gradient-to-b from-slate-900 to-blue-900 text-white shadow-md"
                : "text-gray-500 hover:bg-gray-50"
              }`}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.7793 14.1195V2.56683C3.7793 2.22639 3.91207 1.89989 4.14841 1.65917C4.38475 1.41844 4.70529 1.2832 5.03953 1.2832H10.0804C10.4147 1.2832 10.7352 1.41844 10.9716 1.65917C11.2079 1.89989 11.3407 2.22639 11.3407 2.56683V14.1195H3.7793Z" stroke="currentColor" strokeWidth="1.27187" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6.29883 3.85059H8.81928" stroke="currentColor" strokeWidth="1.27187" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6.29883 6.41895H8.81928" stroke="currentColor" strokeWidth="1.27187" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6.29883 8.98535H8.81928" stroke="currentColor" strokeWidth="1.27187" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6.29883 11.5527H8.81928" stroke="currentColor" strokeWidth="1.27187" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-xs font-bold">Company Pricing</span>
          </button>
          <button
            type="button"
            onClick={() => setPricingTab("recruiter")}
            className={`w-full sm:w-auto sm:min-w-36 h-9 px-4 rounded-lg inline-flex justify-center items-center gap-2 transition-colors ${pricingTab === "recruiter" ? "bg-linear-to-b from-slate-900 to-blue-900 text-white shadow-md" : "text-gray-500 hover:bg-gray-50"
              }`}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.0814 13.4778V12.1942C10.0814 11.5133 9.81582 10.8603 9.34314 10.3789C8.87046 9.89743 8.22937 9.62695 7.56091 9.62695H3.78022C3.11176 9.62695 2.47067 9.89743 1.99799 10.3789C1.52531 10.8603 1.25977 11.5133 1.25977 12.1942V13.4778" stroke="currentColor" strokeWidth="1.27187" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5.66889 7.06028C7.0609 7.06028 8.18935 5.91088 8.18935 4.49303C8.18935 3.07518 7.0609 1.92578 5.66889 1.92578C4.27688 1.92578 3.14844 3.07518 3.14844 4.49303C3.14844 5.91088 4.27688 7.06028 5.66889 7.06028Z" stroke="currentColor" strokeWidth="1.27187" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13.863 13.4774V12.1938C13.8626 11.625 13.6767 11.0724 13.3346 10.6228C12.9924 10.1733 12.5134 9.85217 11.9727 9.70996" stroke="currentColor" strokeWidth="1.27187" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10.084 2.00879C10.6261 2.15018 11.1067 2.47134 11.4498 2.92165C11.793 3.37195 11.9793 3.92577 11.9793 4.49581C11.9793 5.06585 11.793 5.61968 11.4498 6.06998C11.1067 6.52028 10.6261 6.84144 10.084 6.98284" stroke="currentColor" strokeWidth="1.27187" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-xs font-bold">Recruiter Pricing</span>
          </button>
          <button
            type="button"
            onClick={() => setPricingTab("recruiterAgency")}
            className={`w-full sm:w-auto sm:min-w-36 h-9 px-4 rounded-lg inline-flex justify-center items-center gap-2 transition-colors ${pricingTab === "recruiterAgency" ? "bg-gradient-to-b from-slate-900 to-blue-900 text-white shadow-md" : "text-gray-500 hover:bg-gray-50"
              }`}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.3431 1.2832H3.78171C3.08571 1.2832 2.52148 1.8579 2.52148 2.56683V12.8358C2.52148 13.5448 3.08571 14.1195 3.78171 14.1195H11.3431C12.0391 14.1195 12.6033 13.5448 12.6033 12.8358V2.56683C12.6033 1.8579 12.0391 1.2832 11.3431 1.2832Z" stroke="currentColor" strokeWidth="1.27187" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5.67383 14.12V11.5527H9.45451V14.12" stroke="currentColor" strokeWidth="1.27187" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-xs font-bold">Recruiter Agency</span>
          </button>
        </div>

        <div className="flex flex-col gap-6 w-full">
          {pricingTab === "company" && (
            <>
              {/* Trial Period Configuration */}
              <div className="w-full bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col gap-3 p-5">
            <div className="w-full h-16 px-5 pt-3.5 bg-gradient-to-b from-indigo-500 to-indigo-600 flex items-center gap-2.5">
              <div className="size-9 bg-white/20 rounded-lg flex justify-center items-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.67969 1.41895V4.25844" stroke="white" strokeWidth="1.41975" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M11.3574 1.41895V4.25844" stroke="white" strokeWidth="1.41975" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13.4888 2.83984H3.5506C2.7665 2.83984 2.13086 3.47549 2.13086 4.25959V14.1978C2.13086 14.9819 2.7665 15.6175 3.5506 15.6175H13.4888C14.2729 15.6175 14.9086 14.9819 14.9086 14.1978V4.25959C14.9086 3.47549 14.2729 2.83984 13.4888 2.83984Z" stroke="white" strokeWidth="1.41975" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2.13086 7.09961H14.9086" stroke="white" strokeWidth="1.41975" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div className="text-white text-lg font-bold leading-6">Trial Period Configuration</div>
                <div className="text-white/80 text-xs font-normal">Control free trial access and duration</div>
              </div>
            </div>
            <div className="p-4 sm:p-6 flex flex-col gap-6">
              <div className="w-full h-auto min-h-16 py-3 px-4 bg-gradient-to-b from-gray-50 to-gray-100 rounded-xl border border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="size-9 bg-emerald-500 rounded-xl flex justify-center items-center">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.14204 16.7606C13.3497 16.7606 16.7606 13.3497 16.7606 9.14204C16.7606 4.9344 13.3497 1.52344 9.14204 1.52344C4.9344 1.52344 1.52344 4.9344 1.52344 9.14204C1.52344 13.3497 4.9344 16.7606 9.14204 16.7606Z" stroke="white" strokeWidth="1.52372" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6.85742 9.14286L8.38114 10.6666L11.4286 7.61914" stroke="white" strokeWidth="1.52372" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-slate-900 text-xs font-semibold">Free Trial Status</div>
                    <div className="text-gray-500 text-xs">Trial is currently enabled for new users</div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setFreeTrialEnabled(!freeTrialEnabled)}
                  className={`w-12 h-6 rounded-full transition-colors flex items-center ${freeTrialEnabled ? "bg-emerald-500 justify-end pr-1" : "bg-gray-300 justify-start pl-1"}`}
                >
                  <div className="size-5 bg-white rounded-full shadow" />
                </button>
              </div>
              <div className="flex flex-wrap justify-between items-start gap-6">
                <div className="flex flex-col gap-2 min-w-[200px]">
                  <label className="text-slate-900 text-xs font-semibold">Trial Duration</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={trialDuration}
                      onChange={(e) => setTrialDuration(Number(e.target.value) || 0)}
                      className="w-24 h-11 px-3.5 py-2.5 bg-white rounded-lg border border-gray-200 text-neutral-950 text-xs font-medium"
                    />
                    <span className="text-gray-500 text-xs font-medium">days</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" className="shrink-0">
                      <path d="M5.44673 9.98525C7.95328 9.98525 9.98525 7.95328 9.98525 5.44673C9.98525 2.94017 7.95328 0.908203 5.44673 0.908203C2.94017 0.908203 0.908203 2.94017 0.908203 5.44673C0.908203 7.95328 2.94017 9.98525 5.44673 9.98 525Z" stroke="#6B7280" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M5.44531 2.72266V5.44577L7.26072 6.35347" stroke="#6B7280" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Recommended: 7-14 days
                  </div>
                </div>
                <div className="flex flex-col gap-2 min-w-[280px]">
                  <label className="text-slate-900 text-xs font-semibold">Active Configuration</label>
                  <div className="px-4 py-3 bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg border border-blue-500">
                    <div className="flex items-center gap-2">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="text-blue-600 shrink-0">
                        <path d="M9.36669 7.80078L10.2835 12.9602" stroke="currentColor" strokeWidth="1.21" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.26363 8.4716C9.26888 8.4716 10.8944 6.84602 10.8944 4.84078C10.8944 2.83553 9.26888 1.20996 7.26363 1.20996C5.25839 1.20996 3.63281 2.83553 3.63281 4.84078C3.63281 6.84602 5.25839 8.4716 7.26363 8.4716Z" stroke="currentColor" strokeWidth="1.21" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-blue-800 text-xs font-bold">{trialDuration} Days Free Trial</span>
                    </div>
                    <div className="text-blue-500 text-xs mt-0.5">Applied to all new signups</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Control */}
          <div className="w-full px-5 pt-5 pb-1 bg-white rounded-xl border border-gray-200 flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <div className="size-10 bg-gradient-to-b from-emerald-500 to-emerald-600 rounded-xl shadow-md flex justify-center items-center">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.45018 12.5191C7.37948 12.245 7.23663 11.9949 7.0365 11.7948C6.83637 11.5947 6.58627 11.4518 6.31221 11.3811L1.45385 10.1283C1.37097 10.1048 1.29801 10.0549 1.24607 9.98612C1.19412 9.91738 1.16602 9.83356 1.16602 9.7474C1.16602 9.66124 1.19412 9.57743 1.24607 9.50869C1.29801 9.43994 1.37097 9.39002 1.45385 9.36649L6.31221 8.1129C6.58617 8.04227 6.83621 7.89954 7.03633 7.69956C7.23646 7.49957 7.37936 7.24963 7.45018 6.97572L8.70298 2.11737C8.72627 2.03415 8.77614 1.96084 8.84499 1.90862C8.91383 1.85639 8.99787 1.82812 9.08428 1.82812C9.1707 1.82812 9.25474 1.85639 9.32358 1.90862C9.39243 1.96084 9.4423 2.03415 9.46559 2.11737L10.7176 6.97572C10.7883 7.24978 10.9311 7.49989 11.1313 7.70002C11.3314 7.90015 11.5815 8.043 11.8556 8.1137L16.7139 9.3657C16.7975 9.38875 16.8711 9.43856 16.9237 9.50751C16.9762 9.57646 17.0046 9.66074 17.0046 9.7474C17.0046 9.83407 16.9762 9.91834 16.9237 9.98729C16.8711 10.0562 16.7975 10.1061 16.7139 10.1291L11.8556 11.3811C11.5815 11.4518 11.3314 11.5947 11.1313 11.7948C10.9311 11.9949 10.7883 12.245 10.7176 12.5191L9.4648 17.3774C9.44151 17.4607 9.39164 17.534 9.32279 17.5862C9.25394 17.6384 9.1699 17.6667 9.08349 17.6667C8.99708 17.6667 8.91304 17.6384 8.84419 17.5862C8.77535 17.534 8.72548 17.4607 8.70219 17.3774L7.45018 12.5191Z" stroke="white" strokeWidth="1.58" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div className="text-slate-900 text-lg font-bold">Pricing Control</div>
                <div className="text-gray-500 text-xs">Manage early access pricing across the platform</div>
              </div>
            </div>
            <div className="w-full py-5 px-4 sm:px-5 bg-gradient-to-b from-green-50 to-green-100 rounded-xl border border-emerald-500 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex-1 w-full sm:w-auto">
                <div className="flex items-center gap-2.5 mb-1">
                  <span className="text-slate-900 text-sm font-semibold">Early Access Status</span>
                  <span className="bg-emerald-500 text-white text-[9.51px] font-bold px-2 py-0.5 rounded-full">OPEN</span>
                </div>
                <div className="text-emerald-800 text-xs">✅ Open - Early access pricing is live on the frontend.</div>
                <div className="text-gray-500 text-xs mt-0.5">When Open, users will see the Early Access price defined within each plan card instead of the standard monthly rate.</div>
              </div>
              <button
                type="button"
                onClick={() => setEarlyAccessOpen(!earlyAccessOpen)}
                className={`w-16 h-9 rounded-full flex shrink-0 items-center transition-colors ${earlyAccessOpen ? "bg-emerald-500 justify-end pr-2" : "bg-gray-300 justify-start pl-2"}`}
              >
                <div className="size-6 bg-white rounded-full shadow" />
              </button>
            </div>
          </div>

          {/* Company Subscription Plans */}
              <div className="flex flex-col gap-6">
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center gap-3">
                    <svg width="29" height="30" viewBox="0 0 29 30" fill="none" className="text-slate-900 shrink-0">
                      <path d="M13.0704 26.2938C13.4316 26.5062 13.8413 26.6181 14.2584 26.6181C14.6755 26.6181 15.0852 26.5062 15.4464 26.2938L23.7624 21.4536C24.1233 21.2414 24.423 20.9363 24.6315 20.5688C24.84 20.2014 24.95 19.7846 24.9504 19.3602V9.67974C24.95 9.25534 24.84 8.83852 24.6315 8.47109C24.423 8.10366 24.1233 7.79854 23.7624 7.58634L15.4464 2.74611C15.0852 2.5337 14.6755 2.42188 14.2584 2.42188C13.8413 2.42188 13.4316 2.5337 13.0704 2.74611L4.75441 7.58634C4.39357 7.79854 4.09386 8.10366 3.88534 8.47109C3.67682 8.83852 3.56683 9.25534 3.56641 9.67974V19.3602C3.56683 19.7846 3.67682 20.2014 3.88534 20.5688C4.09386 20.9363 4.39357 21.2414 4.75441 21.4536L13.0704 26.2938Z" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-slate-900 text-lg font-semibold">Company Subscription Plans</span>
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-b from-blue-50 to-blue-100 rounded-xl border border-blue-500 flex items-center gap-3">
                  <div className="size-11 bg-white rounded-xl shadow flex justify-center items-center shrink-0">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="text-blue-600">
                      <path d="M14.1979 3.53781C14.5532 3.17595 15.035 2.97266 15.5375 2.97266C16.0399 2.97266 16.5217 3.17595 16.877 3.53781C17.2322 3.89967 17.4318 4.39046 17.4318 4.90221C17.4318 5.41396 17.2322 5.90475 16.877 6.26661L6.15894 17.1845C5.94663 17.4008 5.68419 17.559 5.39592 17.6445L2.83287 18.4062C2.75608 18.429 2.67468 18.4304 2.59719 18.4102C2.5197 18.39 2.44897 18.3489 2.39241 18.2913C2.33585 18.2337 2.29553 18.1616 2.27568 18.0827C2.25583 18.0038 2.25717 17.9209 2.27957 17.8427L3.02742 15.232C3.11151 14.9387 3.26681 14.6717 3.47899 14.4557L14.1979 3.53781Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-blue-800 text-xs font-bold">✏️ All Pricing is Fully Editable</div>
                    <div className="text-blue-800 text-xs">Click on any price amount or limit to edit it directly. Changes will be saved when you click &quot;Save All Configuration&quot; at the bottom.</div>
                  </div>
                </div>

                {/* Plan Cards */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Basic Plan */}
                  <PlanCard
                    name="Basic Plan"
                    subtitle="Standard features"
                    price={plans.basic.price}
                    onPriceChange={(v) => updatePlan("basic", "price", v)}
                    gradient="from-blue-500 to-blue-600"
                    boosts={plans.basic.boosts}
                    resumes={plans.basic.resumes}
                    jobPosts={plans.basic.jobPosts}
                    chatCredits={plans.basic.chatCredits}
                    recruiterFee={plans.basic.recruiterFee}
                    onFieldChange={(f, v) => updatePlan("basic", f, v)}
                    unlimited={false}
                  />
                  {/* Pro Plan */}
                  <PlanCard
                    name="Pro Plan"
                    subtitle="Advanced features"
                    price={plans.pro.price}
                    onPriceChange={(v) => updatePlan("pro", "price", v)}
                    gradient="from-violet-500 to-violet-600"
                    boosts={plans.pro.boosts}
                    resumes={plans.pro.resumes}
                    jobPosts={plans.pro.jobPosts}
                    chatCredits={plans.pro.chatCredits}
                    recruiterFee={plans.pro.recruiterFee}
                    onFieldChange={(f, v) => updatePlan("pro", f, v)}
                    unlimited={false}
                  />
                  {/* Premium Plan */}
                  <PlanCard
                    name="Premium Plan"
                    subtitle="Unlimited access"
                    price={plans.premium.price}
                    onPriceChange={(v) => updatePlan("premium", "price", v)}
                    gradient="from-amber-500 to-amber-600"
                    boosts={plans.premium.boosts}
                    resumes={plans.premium.resumes}
                    jobPosts={plans.premium.jobPosts}
                    chatCredits={plans.premium.chatCredits}
                    recruiterFee={plans.premium.recruiterFee}
                    onFieldChange={(f, v) => updatePlan("premium", f, v)}
                    unlimited
                    popular
                  />
                </div>

                <div className="w-full flex justify-end">
                  <button
                    type="button"
                    onClick={handleSaveConfig}
                    className="w-48 h-11 pl-8 bg-gradient-to-b from-slate-900 to-blue-900 rounded-xl shadow-[0px_6.28px_7.85px_-4.71px_rgba(0,0,0,0.10)] shadow-[0px_15.71px_19.64px_-3.92px_rgba(0,0,0,0.10)] text-white text-xs font-semibold flex items-center gap-2.5 hover:opacity-90 transition-opacity"
                  >
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" className="shrink-0 -ml-2.5">
                      <path d="M11.5252 2.60156C11.9397 2.60747 12.335 2.77691 12.6252 3.07299L15.6109 6.05871C15.907 6.34884 16.0764 6.74421 16.0823 7.15871V15.173C16.0823 15.5898 15.9167 15.9895 15.622 16.2842C15.3273 16.5789 14.9277 16.7444 14.5109 16.7444H3.51088C3.09411 16.7444 2.69441 16.5789 2.39971 16.2842C2.10501 15.9895 1.93945 15.5898 1.93945 15.173V4.17299C1.93945 3.75622 2.10501 3.35652 2.39971 3.06182C2.69441 2.76712 3.09411 2.60156 3.51088 2.60156H11.5252Z" stroke="white" strokeWidth="1.57" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12.9372 16.7447V11.2447C12.9372 11.0363 12.8544 10.8365 12.7071 10.6891C12.5597 10.5418 12.3599 10.459 12.1515 10.459H5.86579C5.65741 10.459 5.45756 10.5418 5.31021 10.6891C5.16286 10.8365 5.08008 11.0363 5.08008 11.2447V16.7447" stroke="white" strokeWidth="1.57" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M5.08008 2.60156V5.74442C5.08008 5.9528 5.16286 6.15265 5.31021 6.3C5.45756 6.44735 5.65741 6.53013 5.86579 6.53013H11.3658" stroke="white" strokeWidth="1.57" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Save All Configuration
                  </button>
                </div>
              </div>
            </>
          )}

          {pricingTab === "recruiter" && (
            <RecruiterPricingContent 
              handleSaveConfig={handleSaveConfig}
            />
          )}

          {pricingTab === "recruiterAgency" && (
            <RecruiterAgency 
              handleSaveConfig={handleSaveConfig}
              setPricingTab={setPricingTab}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function PlanCard({
  name,
  subtitle,
  price,
  onPriceChange,
  gradient,
  boosts,
  resumes,
  jobPosts,
  chatCredits,
  recruiterFee,
  onFieldChange,
  unlimited,
  popular,
}) {
  return (
    <div className={`w-full h-full flex flex-col bg-white rounded-2xl border overflow-hidden relative ${popular ? "border-amber-500" : "border-gray-200"}`}>
      {popular && (
        <div className="absolute top-4 right-4 bg-white rounded-full shadow border border-emerald-500 px-3 py-1.5 flex items-center gap-1.5 z-10">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="text-emerald-500">
            <path d="M5.88473 1.69283C5.90671 1.65217 5.93899 1.61827 5.97822 1.59466C6.01745 1.57105 6.06217 1.55859 6.10774 1.55859C6.1533 1.55859 6.19803 1.57105 6.23726 1.59466C6.27648 1.61827 6.30877 1.65217 6.33074 1.69283L7.83374 4.59904" stroke="currentColor" strokeWidth="1.03" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2.54492 10.8906H9.67293" stroke="currentColor" strokeWidth="1.03" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-emerald-500 text-xs font-bold uppercase tracking-tight">Popular</span>
        </div>
      )}
      <div className={`h-44 px-5 pt-4 bg-gradient-to-b ${gradient} flex flex-col gap-3`}>
        <div>
          <div className="text-white text-lg font-bold">{name}</div>
          <div className="text-white/80 text-xs">{subtitle}</div>
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="h-14 bg-white/10 rounded-[10px] border border-white/20 flex items-center gap-2 px-4">
            <span className="text-white/80 text-sm font-bold">$</span>
            <input
              type="number"
              value={price}
              onChange={(e) => onPriceChange(Number(e.target.value) || 0)}
              className="w-20 bg-transparent text-white text-3xl font-bold placeholder-white/50 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <span className="text-white/80 text-sm font-semibold">/month</span>
          </div>
          <div className="flex items-center gap-1.5 text-white/70 text-xs">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="shrink-0">
              <path d="M11.2004 3.62988L6.87273 8.03795L4.32701 5.44497L1.01758 8.81584" stroke="currentColor" strokeWidth="1.03" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8.14648 3.62988H11.2013V6.74146" stroke="currentColor" strokeWidth="1.03" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Click to edit pricing
          </div>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-3">
          <FieldInput label="Boosts" value={boosts} onChange={(v) => onFieldChange("boosts", v)} unlimited={unlimited} />
          <FieldInput label="Resumes" value={resumes} onChange={(v) => onFieldChange("resumes", v)} unlimited={unlimited} />
          <FieldInput label="Job Posts" value={jobPosts} onChange={(v) => onFieldChange("jobPosts", v)} unlimited={unlimited} />
          <FieldInput label="Chat Credits" value={chatCredits} onChange={(v) => onFieldChange("chatCredits", v)} unlimited={unlimited} />
        </div>
        <FieldInput label="Recruiter Fee (%)" value={recruiterFee} onChange={(v) => onFieldChange("recruiterFee", v)} />
      </div>
    </div>
  );
}

function FieldInput({ label, value, onChange, unlimited }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-gray-500 text-xs font-semibold capitalize">{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value) ?? 0)}
        className="h-8 px-2 py-1.5 rounded-md border border-gray-200 text-neutral-950 text-[9px] font-medium [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />
      {unlimited && (
        <span className="text-amber-500 text-[7.93px] font-medium">-1 = Unlimited</span>
      )}
    </div>
  );
}

function RecruiterPlanCard({
  name,
  subtitle,
  earlyAccessPrice,
  gradient,
  boosts,
  resumes,
  jobPosts,
  chatCredits,
  recruiterFee,
  isPopular,
}) {
  return (
    <div className={`w-full h-full flex flex-col bg-white rounded-2xl border overflow-hidden relative ${isPopular ? "border-amber-500" : "border-gray-200"}`}>
      {isPopular && (
        <div className="absolute top-4 right-4 bg-white rounded-full shadow border border-emerald-500 px-3 py-1.5 flex items-center gap-1.5 z-10">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="text-emerald-500">
            <path d="M5.88473 1.69283C5.90671 1.65217 5.93899 1.61827 5.97822 1.59466C6.01745 1.57105 6.06217 1.55859 6.10774 1.55859C6.1533 1.55859 6.19803 1.57105 6.23726 1.59466C6.27648 1.61827 6.30877 1.65217 6.33074 1.69283L7.83374 4.59904" stroke="currentColor" strokeWidth="1.03" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2.54492 10.8906H9.67293" stroke="currentColor" strokeWidth="1.03" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-emerald-500 text-xs font-bold uppercase tracking-tight">Popular</span>
        </div>
      )}
      <div className={`h-60 px-5 pt-4 bg-gradient-to-b ${gradient} flex flex-col gap-3`}>
        <div>
          <div className="text-white text-lg font-bold">{name}</div>
          <div className="text-white/80 text-xs">{subtitle}</div>
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="h-14 p-4 bg-gradient-to-b from-amber-100 to-amber-200 rounded-2xl border border-amber-500 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-amber-500 shrink-0">
                <path d="M6.61694 10.323C6.55748 10.0925 6.43735 9.88218 6.26904 9.71387C6.10073 9.54556 5.8904 9.42543 5.65992 9.36597L1.5741 8.31239C1.50439 8.2926 1.44304 8.25062 1.39935 8.1928C1.35567 8.13499 1.33203 8.06451 1.33203 7.99205C1.33203 7.91959 1.35567 7.8491 1.39935 7.79129C1.44304 7.73348 1.50439 7.69149 1.5741 7.67171L5.65992 6.61745C5.89032 6.55805 6.10059 6.43802 6.2689 6.26984C6.4372 6.10165 6.55738 5.89146 6.61694 5.6611L7.67053 1.57528C7.69011 1.5053 7.73205 1.44364 7.78995 1.39972C7.84785 1.3558 7.91853 1.33203 7.9912 1.33203C8.06387 1.33203 8.13455 1.3558 8.19245 1.39972C8.25034 1.44364 8.29229 1.5053 8.31187 1.57528L9.36479 5.6611C9.42425 5.89158 9.54438 6.10191 9.71269 6.27022C9.881 6.43853 10.0913 6.55866 10.3218 6.61812L14.4076 7.67104C14.4779 7.69042 14.5399 7.73232 14.584 7.7903C14.6282 7.84829 14.6521 7.91916 14.6521 7.99205C14.6521 8.06493 14.6282 8.1358 14.584 8.19379C14.5399 8.25177 14.4779 8.29367 14.4076 8.31305L10.3218 9.36597C10.0913 9.42543 9.881 9.54556 9.71269 9.71387C9.54438 9.88218 9.42425 10.0925 9.36479 10.323L8.3112 14.4088C8.29162 14.4788 8.24968 14.5405 8.19178 14.5844C8.13388 14.6283 8.0632 14.6521 7.99053 14.6521C7.91786 14.6521 7.84718 14.6283 7.78929 14.5844C7.73139 14.5405 7.68945 14.4788 7.66986 14.4088L6.61694 10.323Z" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-slate-900 text-sm font-bold">Early Access Price</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-500 text-3xl font-bold">${earlyAccessPrice}</span>
              <span className="text-emerald-500 text-sm font-semibold">/month</span>
            </div>
            <div className="text-amber-800 text-xs">Basic plan stays FREE during early access</div>
          </div>
          <div className="flex items-center gap-1.5 text-white/70 text-xs">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="shrink-0">
              <path d="M11.2004 3.62988L6.87273 8.03795L4.32701 5.44497L1.01758 8.81584" stroke="currentColor" strokeWidth="1.03" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8.14648 3.62988H11.2013V6.74146" stroke="currentColor" strokeWidth="1.03" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Click to edit pricing
          </div>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-3 flex-1">
        <div className="grid grid-cols-2 gap-3">
          <RecruiterFieldInput label="Boosts" value={boosts} unlimited={boosts === -1} />
          <RecruiterFieldInput label="Resumes" value={resumes} unlimited={resumes === -1} />
          <RecruiterFieldInput label="Job Posts" value={jobPosts} unlimited={jobPosts === -1} />
          <RecruiterFieldInput label="Chat Credits" value={chatCredits} unlimited={chatCredits === -1} />
        </div>
        <RecruiterFieldInput label="Recruiter Fee (%)" value={recruiterFee} />
      </div>
    </div>
  );
}

function RecruiterFieldInput({ label, value, unlimited }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-gray-500 text-xs font-semibold capitalize">{label}</label>
      <div className="h-8 px-2 py-1.5 rounded-md border border-gray-200 flex items-center text-neutral-950 text-[9px] font-medium bg-white">
        {unlimited ? "-1" : value}
      </div>
      {unlimited && (
        <span className="text-amber-500 text-[7.93px] font-medium">-1 = Unlimited</span>
      )}
    </div>
  );
}

function RecruiterPricingContent({ handleSaveConfig }) {
  const [earlyAccessOpen, setEarlyAccessOpen] = useState(true);

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Pricing Control */}
      <div className="w-full h-48 px-5 pt-5 pb-1 bg-white rounded-xl border border-gray-200 inline-flex flex-col justify-start items-start gap-3">
        <div className="w-full inline-flex justify-start items-center gap-2.5">
          <div className="size-10 bg-gradient-to-b from-emerald-500 to-emerald-600 rounded-xl shadow-md flex justify-center items-center">
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1999_729)">
                <path d="M7.03221 12.7642C6.96151 12.4901 6.81867 12.24 6.61853 12.0399C6.4184 11.8398 6.1683 11.6969 5.89424 11.6262L1.03589 10.3734C0.952997 10.3499 0.880045 10.3 0.828099 10.2312C0.776152 10.1625 0.748047 10.0787 0.748047 9.99252C0.748047 9.90636 0.776152 9.82254 0.828099 9.7538C0.880045 9.68506 0.952997 9.63514 1.03589 9.61161L5.89424 8.35802C6.1682 8.28739 6.41824 8.14466 6.61836 7.94468C6.81849 7.74469 6.96139 7.49475 7.03221 7.22084L8.28501 2.36249C8.3083 2.27927 8.35817 2.20596 8.42702 2.15373C8.49586 2.10151 8.5799 2.07324 8.66631 2.07324C8.75273 2.07324 8.83677 2.10151 8.90561 2.15373C8.97446 2.20596 9.02433 2.27927 9.04762 2.36249L10.2996 7.22084C10.3703 7.4949 10.5132 7.745 10.7133 7.94513C10.9134 8.14527 11.1635 8.28811 11.4376 8.35881L16.296 9.61082C16.3795 9.63386 16.4532 9.68368 16.5057 9.75263C16.5582 9.82158 16.5866 9.90585 16.5866 9.99252C16.5866 10.0792 16.5582 10.1635 16.5057 10.2324C16.4532 10.3014 16.3795 10.3512 16.296 10.3742L11.4376 11.6262C11.1635 11.6969 10.9134 11.8398 10.7133 12.0399C10.5132 12.24 10.3703 12.4901 10.2996 12.7642L9.04683 17.6226C9.02354 17.7058 8.97367 17.7791 8.90482 17.8313C8.83598 17.8835 8.75194 17.9118 8.66552 17.9118C8.57911 17.9118 8.49507 17.8835 8.42622 17.8313C8.35738 17.7791 8.30751 17.7058 8.28422 17.6226L7.03221 12.7642Z" stroke="white" strokeWidth="1.58382" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15.002 2.86523V6.03287" stroke="white" strokeWidth="1.58382" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16.5856 4.44922H13.418" stroke="white" strokeWidth="1.58382" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2.33203 13.9521V15.5365" stroke="white" strokeWidth="1.58382" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3.12532 14.7441H1.54102" stroke="white" strokeWidth="1.58382" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_1999_729">
                  <rect width="19.0058" height="19.0058" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="flex-1 inline-flex flex-col justify-start items-start gap-0">
            <div className="text-slate-900 text-lg font-bold">Pricing Control</div>
            <div className="text-gray-500 text-xs font-normal">Manage early access pricing across the platform</div>
          </div>
        </div>
        <div className="w-full h-28 relative bg-gradient-to-b from-green-50 to-green-100 rounded-xl border border-emerald-500 px-4 py-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex-1 w-full sm:w-auto">
            <div className="flex items-center gap-2.5 mb-1">
              <span className="text-slate-900 text-sm font-semibold">Early Access Status</span>
              <span className="bg-emerald-500 text-white text-[9.51px] font-bold px-2 py-0.5 rounded-full">OPEN</span>
            </div>
            <div className="text-emerald-800 text-xs">✅ Open - Early access pricing is live on the frontend.</div>
            <div className="text-gray-500 text-xs mt-0.5">When Open, users will see the Early Access price defined within each plan card instead of the standard monthly rate.</div>
          </div>
          <button
            type="button"
            onClick={() => setEarlyAccessOpen(!earlyAccessOpen)}
            className={`w-16 h-9 rounded-full flex shrink-0 items-center transition-colors ${earlyAccessOpen ? "bg-emerald-500 justify-end pr-2" : "bg-gray-300 justify-start pl-2"}`}
          >
            <div className="size-6 bg-white rounded-full shadow flex items-center justify-center">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1999_754)">
                  <path d="M7.42999 13.6227C10.8496 13.6227 13.6217 10.8505 13.6217 7.43096C13.6217 4.01138 10.8496 1.23926 7.42999 1.23926C4.0104 1.23926 1.23828 4.01138 1.23828 7.43096C1.23828 10.8505 4.0104 13.6227 7.42999 13.6227Z" stroke="#10B981" strokeWidth="1.23834" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5.57422 7.43072L6.81256 8.66906L9.28924 6.19238" stroke="#10B981" strokeWidth="1.23834" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_1999_754">
                    <rect width="14.8601" height="14.8601" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* Recruiter Subscription Plans */}
      <div className="w-full flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <svg width="29" height="30" viewBox="0 0 29 30" fill="none" className="text-slate-900 shrink-0">
            <path d="M13.0704 26.2938C13.4316 26.5062 13.8413 26.6181 14.2584 26.6181C14.6755 26.6181 15.0852 26.5062 15.4464 26.2938L23.7624 21.4536C24.1233 21.2414 24.423 20.9363 24.6315 20.5688C24.84 20.2014 24.95 19.7846 24.9504 19.3602V9.67974C24.95 9.25534 24.84 8.83852 24.6315 8.47109C24.423 8.10366 24.1233 7.79854 23.7624 7.58634L15.4464 2.74611C15.0852 2.5337 14.6755 2.42188 14.2584 2.42188C13.8413 2.42188 13.4316 2.5337 13.0704 2.74611L4.75441 7.58634C4.39357 7.79854 4.09386 8.10366 3.88534 8.47109C3.67682 8.83852 3.56683 9.25534 3.56641 9.67974V19.3602C3.56683 19.7846 3.67682 20.2014 3.88534 20.5688C4.09386 20.9363 4.39357 21.2414 4.75441 21.4536L13.0704 26.2938Z" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-slate-900 text-lg font-semibold">Recruiter Subscription Plans</span>
        </div>

        <div className="p-4 bg-gradient-to-b from-blue-50 to-blue-100 rounded-xl border border-blue-500 flex items-center gap-3">
          <div className="size-11 bg-white rounded-xl shadow flex justify-center items-center shrink-0">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="text-blue-600">
              <path d="M9.875 18.6709H17.9068" stroke="currentColor" strokeWidth="1.80134" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.7799 3.78293C14.1352 3.42107 14.6171 3.21777 15.1195 3.21777C15.6219 3.21777 16.1037 3.42107 16.459 3.78293C16.8143 4.14479 17.0139 4.63558 17.0139 5.14733C17.0139 5.65908 16.8143 6.14987 16.459 6.51173L5.74098 17.4297C5.52866 17.6459 5.26623 17.8041 4.97795 17.8896L2.4149 18.6513C2.33811 18.6742 2.25671 18.6755 2.17922 18.6553C2.10173 18.6351 2.03101 18.594 1.97444 18.5364C1.91788 18.4788 1.87756 18.4068 1.85771 18.3278C1.83786 18.2489 1.8392 18.166 1.8616 18.0878L2.60945 15.4771C2.69354 15.1838 2.84884 14.9169 3.06102 14.7009L13.7799 3.78293Z" stroke="currentColor" strokeWidth="1.80134" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <div className="text-blue-800 text-xs font-bold">✏️ All Pricing is Fully Editable</div>
            <div className="text-blue-800 text-xs">Click on any price amount or limit to edit it directly. Changes will be saved when you click &quot;Save All Configuration&quot; at the bottom.</div>
          </div>
        </div>

        {/* Recruiter Plan Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          <RecruiterPlanCard
            name="Basic Plan"
            subtitle="Standard features"
            earlyAccessPrice={27}
            gradient="from-blue-500 to-blue-600"
            boosts={3}
            resumes={10}
            jobPosts={5}
            chatCredits={50}
            recruiterFee={5}
          />
          <RecruiterPlanCard
            name="Pro Plan"
            subtitle="Advanced features"
            earlyAccessPrice={79}
            gradient="from-violet-500 to-violet-600"
            boosts={3}
            resumes={10}
            jobPosts={5}
            chatCredits={50}
            recruiterFee={5}
          />
          <RecruiterPlanCard
            name="Premium Plan"
            subtitle="Unlimited access"
            earlyAccessPrice={199}
            gradient="from-amber-500 to-amber-600"
            isPopular
            boosts={-1}
            resumes={-1}
            jobPosts={-1}
            chatCredits={-1}
            recruiterFee={2}
          />
        </div>
      </div>

      {/* Save Button */}
      <div className="w-full flex justify-end">
        <button
          type="button"
          onClick={handleSaveConfig}
          className="w-48 h-11 pl-8 bg-gradient-to-b from-slate-900 to-blue-900 rounded-xl shadow-[0px_6.28px_7.85px_-4.71px_rgba(0,0,0,0.10)] shadow-[0px_15.71px_19.64px_-3.92px_rgba(0,0,0,0.10)] text-white text-xs font-semibold flex items-center gap-2.5 hover:opacity-90 transition-opacity"
        >
          <svg width="19" height="19" viewBox="0 0 19 19" fill="none" className="shrink-0 -ml-2.5">
            <path d="M11.5252 2.60156C11.9397 2.60747 12.335 2.77691 12.6252 3.07299L15.6109 6.05871C15.907 6.34884 16.0764 6.74421 16.0823 7.15871V15.173C16.0823 15.5898 15.9167 15.9895 15.622 16.2842C15.3273 16.5789 14.9277 16.7444 14.5109 16.7444H3.51088C3.09411 16.7444 2.69441 16.5789 2.39971 16.2842C2.10501 15.9895 1.93945 15.5898 1.93945 15.173V4.17299C1.93945 3.75622 2.10501 3.35652 2.39971 3.06182C2.69441 2.76712 3.09411 2.60156 3.51088 2.60156H11.5252Z" stroke="white" strokeWidth="1.57" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.9372 16.7447V11.2447C12.9372 11.0363 12.8544 10.8365 12.7071 10.6891C12.5597 10.5418 12.3599 10.459 12.1515 10.459H5.86579C5.65741 10.459 5.45756 10.5418 5.31021 10.6891C5.16286 10.8365 5.08008 11.0363 5.08008 11.2447V16.7447" stroke="white" strokeWidth="1.57" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.08008 2.60156V5.74442C5.08008 5.9528 5.16286 6.15265 5.31021 6.3C5.45756 6.44735 5.65741 6.53013 5.86579 6.53013H11.3658" stroke="white" strokeWidth="1.57" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Save All Configuration
        </button>
      </div>
    </div>
  );
}

export default ConfigurationPage;
