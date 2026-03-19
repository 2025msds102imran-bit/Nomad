import { useState } from "react";
import {
  BackArrowIcon,
  PricingControlIcon,
  ShieldIcon,
  EditIcon,
  EarlyAccessSparkleIcon,
  ClickToEditIcon,
  PriceEditIcon,
  SaveIcon,
} from "../../../../../assets/icons/icons.jsx";

function RecruiterAgency({ handleSaveConfig, setPricingTab }) {
  const [earlyAccessOpen, setEarlyAccessOpen] = useState(true);
  const [plans, setPlans] = useState({
    basic: {
      price: 27,
      earlyAccessPrice: "FREE",
      boosts: 3,
      resumes: 10,
      jobPosts: 5,
      chatCredits: 50,
      recruiterFee: 5,
    },
    pro: {
      price: 79,
      earlyAccessPrice: 15,
      boosts: 3,
      resumes: 10,
      jobPosts: 5,
      chatCredits: 50,
      recruiterFee: 5,
    },
    premium: {
      price: 199,
      earlyAccessPrice: 45,
      boosts: -1,
      resumes: -1,
      jobPosts: -1,
      chatCredits: -1,
      recruiterFee: 2,
    },
  });

  const updatePlan = (planName, field, value) => {
    setPlans({
      ...plans,
      [planName]: {
        ...plans[planName],
        [field]: value,
      },
    });
  };

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Back Button */}
      <button
        onClick={() => setPricingTab("company")}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold px-4 py-2 rounded-lg hover:bg-blue-50 transition-all w-fit"
      >
        <BackArrowIcon width={20} height={20} />
        Back to Configuration
      </button>

      {/* Pricing Control */}
      <div className="w-full px-5 pt-5 pb-1 bg-white rounded-xl border border-gray-200 flex flex-col gap-3">
        <div className="flex items-center gap-2.5">
          <div className="size-10 bg-gradient-to-b from-emerald-500 to-emerald-600 rounded-xl shadow-md flex justify-center items-center">
            <PricingControlIcon width={19} height={19} />
          </div>
          <div>
            <div className="text-slate-900 text-lg font-bold">Pricing Control</div>
            <div className="text-gray-500 text-xs">
              Manage early access pricing across the platform
            </div>
          </div>
        </div>
        <div className="w-full py-5 px-4 sm:px-5 bg-gradient-to-b from-green-50 to-green-100 rounded-xl border border-emerald-500 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex-1 w-full sm:w-auto">
            <div className="flex items-center gap-2.5 mb-1">
              <span className="text-slate-900 text-sm font-semibold">
                Early Access Status
              </span>
              <span className="bg-emerald-500 text-white text-[9.51px] font-bold px-2 py-0.5 rounded-full">
                OPEN
              </span>
            </div>
            <div className="text-emerald-800 text-xs">
              ✅ Open - Early access pricing is live on the frontend.
            </div>
            <div className="text-gray-500 text-xs mt-0.5">
              When Open, users will see the Early Access price defined within
              each plan card instead of the standard monthly rate.
            </div>
          </div>
          <button
            type="button"
            onClick={() => setEarlyAccessOpen(!earlyAccessOpen)}
            className={`w-16 h-9 rounded-full flex shrink-0 items-center transition-colors ${
              earlyAccessOpen
                ? "bg-emerald-500 justify-end pr-2"
                : "bg-gray-300 justify-start pl-2"
            }`}
          >
            <div className="size-6 bg-white rounded-full shadow" />
          </button>
        </div>
      </div>

      {/* Recruiter Agency Subscription Plans */}
      <div className="w-full flex flex-col gap-6">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-3">
            <ShieldIcon width={29} height={30} className="text-slate-900 shrink-0" />
            <span className="text-slate-900 text-lg font-semibold">
              Recruiter Agency Subscription Plans
            </span>
          </div>
        </div>

        <div className="p-4 bg-gradient-to-b from-blue-50 to-blue-100 rounded-xl border border-blue-500 flex items-center gap-3">
          <div className="size-11 bg-white rounded-xl shadow flex justify-center items-center shrink-0">
            <EditIcon width={22} height={22} className="text-blue-600" />
          </div>
          <div>
            <div className="text-blue-800 text-xs font-bold">
              ✏️ All Pricing is Fully Editable
            </div>
            <div className="text-blue-800 text-xs">
              Click on any price amount or limit to edit it directly. Changes
              will be saved when you click &quot;Save All Configuration&quot; at
              the bottom.
            </div>
          </div>
        </div>

        {/* Plan Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Basic Plan */}
          <div className="w-96 h-[602px] relative bg-white rounded-2xl outline outline-[1.42px] outline-offset-[-1.42px] outline-gray-200 overflow-hidden">
            {/* Header Section */}
            <div className="w-96 h-60 p-5 absolute left-0 top-0 bg-gradient-to-b from-blue-500 to-blue-600 inline-flex flex-col justify-start items-start gap-3">
              <div className="self-stretch h-52 flex flex-col justify-start items-start gap-3">
                {/* Plan Title */}
                <div className="self-stretch h-11 inline-flex justify-between items-center">
                  <div className="w-24 h-11 relative">
                    <div className="w-24 h-7 left-0 top-0 absolute">
                      <div className="left-0 top-[-0.24px] absolute justify-start text-white text-lg font-bold">Basic Plan</div>
                    </div>
                    <div className="w-24 h-4 left-0 top-[29.04px] absolute inline-flex justify-start items-start">
                      <div className="justify-start text-white/80 text-xs font-normal">Standard features</div>
                    </div>
                  </div>
                </div>

                {/* Early Access Price Box */}
                <div className="self-stretch h-36 flex flex-col justify-start items-start gap-1.5">
                  <div className="w-80 h-28 px-4 pt-4 pb-px bg-gradient-to-b from-amber-100 to-amber-200 rounded-2xl outline outline-1 outline-offset-[-1.10px] outline-amber-500 flex flex-col justify-start items-start gap-2">
                    <div className="self-stretch h-5 relative">
                      <EarlyAccessSparkleIcon width={16} height={16} />
                      <div className="left-[23.97px] top-[0.10px] absolute justify-start text-slate-900 text-sm font-bold">Early Access Price</div>
                    </div>
                    <div className="self-stretch h-8 inline-flex justify-start items-center">
                      <div className="w-14 h-8 relative">
                        <div className="left-0 top-[-0.90px] absolute justify-start text-emerald-500 text-2xl font-bold">FREE</div>
                      </div>
                    </div>
                    <div className="self-stretch h-4 inline-flex justify-start items-start">
                      <div className="flex-1 justify-start text-amber-800 text-xs font-normal">Basic plan stays FREE during early access</div>
                    </div>
                  </div>
                  <div className="self-stretch h-4 relative">
                    <ClickToEditIcon width={13} height={13} />
                    <div className="left-[16.29px] top-0 absolute justify-start text-white/70 text-xs font-normal">Click to edit pricing</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Price Section */}
            <div className="w-80 h-14 p-4 absolute left-[15.58px] top-[267.25px] bg-gradient-to-b from-emerald-100 to-emerald-200 rounded-2xl outline outline-1 outline-offset-[-1.10px] outline-emerald-500 inline-flex justify-start items-center gap-3">
              <div className="w-2.5 h-5 relative">
                <div className="left-0 top-[0.40px] absolute justify-start text-emerald-500 text-sm font-bold">$</div>
              </div>
              <input
                type="number"
                value={plans.basic.price}
                onChange={(e) => updatePlan("basic", "price", Number(e.target.value) || 0)}
                className="w-24 h-9 bg-white text-emerald-500 text-3xl font-bold rounded border border-gray-200 px-2 outline-none text-center"
              />
              <div className="w-12 h-5 relative">
                <div className="left-0 top-[0.40px] absolute justify-start text-emerald-500 text-sm font-semibold">/month</div>
              </div>
              <PriceEditIcon width={17} height={17} />
            </div>

            {/* Fields Section */}
            <div className="w-96 h-48 p-4 absolute left-[1.58px] top-[348.25px] inline-flex flex-col justify-start items-start gap-3">
              <div className="w-80 h-36 relative">
                <div className="w-80 left-0 top-0 absolute inline-flex flex-col justify-start items-start gap-3">
                  {/* Row 1 */}
                  <div className="self-stretch inline-flex justify-between items-center">
                    <div className="w-36 h-12 inline-flex flex-col justify-start items-start gap-[5.14px]">
                      <div className="self-stretch h-2.5 inline-flex justify-start items-start">
                        <div className="flex-1 justify-start text-gray-500 text-xs font-semibold">Boosts</div>
                      </div>
                      <input type="number" value={plans.basic.boosts} onChange={(e) => updatePlan("basic", "boosts", Number(e.target.value) || 0)} className="self-stretch h-8 px-2 py-[5.14px] rounded-md outline outline-1 outline-offset-[-0.89px] outline-gray-200 text-neutral-950 text-[9px] font-medium outline-none" />
                    </div>
                    <div className="w-36 h-12 inline-flex flex-col justify-start items-start gap-[5.14px]">
                      <div className="self-stretch h-2.5 inline-flex justify-start items-start">
                        <div className="flex-1 justify-start text-gray-500 text-xs font-semibold">Resumes</div>
                      </div>
                      <input type="number" value={plans.basic.resumes} onChange={(e) => updatePlan("basic", "resumes", Number(e.target.value) || 0)} className="self-stretch h-8 px-2 py-[5.14px] rounded-md outline outline-1 outline-offset-[-0.89px] outline-gray-200 text-neutral-950 text-[9px] font-medium outline-none" />
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="self-stretch inline-flex justify-between items-center">
                    <div className="w-36 h-12 inline-flex flex-col justify-start items-start gap-[5.14px]">
                      <div className="self-stretch h-2.5 inline-flex justify-start items-start">
                        <div className="flex-1 justify-start text-gray-500 text-xs font-semibold">Job Posts</div>
                      </div>
                      <input type="number" value={plans.basic.jobPosts} onChange={(e) => updatePlan("basic", "jobPosts", Number(e.target.value) || 0)} className="self-stretch h-8 px-2 py-[5.14px] rounded-md outline outline-1 outline-offset-[-0.89px] outline-gray-200 text-neutral-950 text-[9px] font-medium outline-none" />
                    </div>
                    <div className="w-36 h-12 inline-flex flex-col justify-start items-start gap-[5.14px]">
                      <div className="self-stretch h-2.5 inline-flex justify-start items-start">
                        <div className="flex-1 justify-start text-gray-500 text-xs font-semibold">Chat Credits</div>
                      </div>
                      <input type="number" value={plans.basic.chatCredits} onChange={(e) => updatePlan("basic", "chatCredits", Number(e.target.value) || 0)} className="self-stretch h-8 px-2 py-[5.14px] rounded-md outline outline-1 outline-offset-[-0.89px] outline-gray-200 text-neutral-950 text-[9px] font-medium outline-none" />
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="self-stretch h-12 flex flex-col justify-start items-start gap-[5.14px]">
                    <div className="self-stretch h-2.5 inline-flex justify-start items-start">
                      <div className="flex-1 justify-start text-gray-500 text-xs font-semibold">Recruiter Fee (%)</div>
                    </div>
                    <input type="number" value={plans.basic.recruiterFee} onChange={(e) => updatePlan("basic", "recruiterFee", Number(e.target.value) || 0)} className="self-stretch h-8 px-2 py-[5.14px] rounded-md outline outline-1 outline-offset-[-0.89px] outline-gray-200 text-neutral-950 text-[9px] font-medium outline-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pro Plan - Similar Structure */}
          <div className="w-96 h-[602px] relative bg-white rounded-2xl outline outline-[1.42px] outline-offset-[-1.42px] outline-gray-200 overflow-hidden">
            <div className="w-96 h-60 p-5 absolute left-0 top-0 bg-gradient-to-b from-violet-500 to-violet-600 inline-flex flex-col justify-start items-start gap-3">
              <div className="self-stretch h-52 flex flex-col justify-start items-start gap-3">
                <div className="self-stretch h-11 inline-flex justify-between items-center">
                  <div className="w-28 h-11 relative">
                    <div className="w-28 h-7 left-0 top-0 absolute">
                      <div className="left-0 top-[-0.24px] absolute text-white text-lg font-bold">Pro Plan</div>
                    </div>
                    <div className="w-28 h-4 left-0 top-[29.04px] absolute inline-flex justify-start items-start">
                      <div className="text-white/80 text-xs font-normal">Advanced features</div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-36 flex flex-col justify-start items-start gap-1.5">
                  <div className="w-80 h-32 px-4 pt-4 pb-px bg-gradient-to-b from-amber-100 to-amber-200 rounded-2xl outline outline-1 outline-offset-[-1.10px] outline-amber-500 flex flex-col justify-start items-start gap-2">
                    <div className="self-stretch h-5 relative">
                      <EarlyAccessSparkleIcon width={16} height={16} />
                      <div className="left-[23.08px] top-[0.62px] absolute text-slate-900 text-sm font-bold">Early Access Price ($)</div>
                    </div>
                    <div className="self-stretch h-12 inline-flex justify-start items-center gap-2">
                      <div className="w-3 h-7 relative">
                        <div className="left-[-0.89px] top-[-0.28px] absolute text-slate-900 text-lg font-bold">$</div>
                      </div>
                      <input type="number" value={plans.pro.earlyAccessPrice} onChange={(e) => updatePlan("pro", "earlyAccessPrice", Number(e.target.value) || 0)} className="w-24 h-12 px-3 py-2 rounded-[10px] outline outline-1 outline-offset-[-1.10px] outline-gray-200 text-slate-900 text-2xl font-bold text-center outline-none" />
                      <div className="w-12 h-5 relative">
                        <div className="left-[-0.89px] top-[0.62px] absolute text-gray-500 text-sm font-normal">/month</div>
                      </div>
                    </div>
                    <div className="self-stretch h-4 inline-flex justify-start items-start">
                      <div className="flex-1 text-amber-800 text-xs font-normal">Special launch pricing</div>
                    </div>
                  </div>
                  <div className="self-stretch h-4 relative">
                    <ClickToEditIcon width={13} height={13} />
                    <div className="left-[15.40px] top-[0.52px] absolute text-white/70 text-xs font-normal">Click to edit pricing</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-96 h-48 p-4 absolute left-[1.58px] top-[347.53px] inline-flex flex-col justify-start items-start gap-3">
              <div className="w-80 h-36 relative">
                <div className="w-80 left-0 top-0 absolute inline-flex flex-col justify-start items-start gap-3">
                  <div className="self-stretch inline-flex justify-between items-center">
                    <div className="w-36 h-12 inline-flex flex-col justify-start items-start gap-[5.14px]">
                      <div className="self-stretch h-2.5 inline-flex justify-start items-start">
                        <div className="flex-1 text-gray-500 text-xs font-semibold">Boosts</div>
                      </div>
                      <input type="number" value={plans.pro.boosts} onChange={(e) => updatePlan("pro", "boosts", Number(e.target.value) || 0)} className="self-stretch h-8 px-2 py-[5.14px] rounded-md outline outline-1 outline-offset-[-0.89px] outline-gray-200 text-neutral-950 text-[9px] font-medium outline-none" />
                    </div>
                    <div className="w-36 h-12 inline-flex flex-col justify-start items-start gap-[5.14px]">
                      <div className="self-stretch h-2.5 inline-flex justify-start items-start">
                        <div className="flex-1 text-gray-500 text-xs font-semibold">Resumes</div>
                      </div>
                      <input type="number" value={plans.pro.resumes} onChange={(e) => updatePlan("pro", "resumes", Number(e.target.value) || 0)} className="self-stretch h-8 px-2 py-[5.14px] rounded-md outline outline-1 outline-offset-[-0.89px] outline-gray-200 text-neutral-950 text-[9px] font-medium outline-none" />
                    </div>
                  </div>
                  <div className="self-stretch inline-flex justify-between items-center">
                    <div className="w-36 h-12 inline-flex flex-col justify-start items-start gap-[5.14px]">
                      <div className="self-stretch h-2.5 inline-flex justify-start items-start">
                        <div className="flex-1 text-gray-500 text-xs font-semibold">Job Posts</div>
                      </div>
                      <input type="number" value={plans.pro.jobPosts} onChange={(e) => updatePlan("pro", "jobPosts", Number(e.target.value) || 0)} className="self-stretch h-8 px-2 py-[5.14px] rounded-md outline outline-1 outline-offset-[-0.89px] outline-gray-200 text-neutral-950 text-[9px] font-medium outline-none" />
                    </div>
                    <div className="w-36 h-12 inline-flex flex-col justify-start items-start gap-[5.14px]">
                      <div className="self-stretch h-2.5 inline-flex justify-start items-start">
                        <div className="flex-1 text-gray-500 text-xs font-semibold">Chat Credits</div>
                      </div>
                      <input type="number" value={plans.pro.chatCredits} onChange={(e) => updatePlan("pro", "chatCredits", Number(e.target.value) || 0)} className="self-stretch h-8 px-2 py-[5.14px] rounded-md outline outline-1 outline-offset-[-0.89px] outline-gray-200 text-neutral-950 text-[9px] font-medium outline-none" />
                    </div>
                  </div>
                  <div className="self-stretch h-12 flex flex-col justify-start items-start gap-[5.14px]">
                    <div className="self-stretch h-2.5 inline-flex justify-start items-start">
                      <div className="flex-1 text-gray-500 text-xs font-semibold">Recruiter Fee (%)</div>
                    </div>
                    <input type="number" value={plans.pro.recruiterFee} onChange={(e) => updatePlan("pro", "recruiterFee", Number(e.target.value) || 0)} className="self-stretch h-8 px-2 py-[5.14px] rounded-md outline outline-1 outline-offset-[-0.89px] outline-gray-200 text-neutral-950 text-[9px] font-medium outline-none" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-80 h-14 p-4 absolute left-[20.58px] top-[266.75px] bg-gradient-to-b from-emerald-100 to-emerald-200 rounded-2xl outline outline-1 outline-offset-[-1.10px] outline-emerald-500 inline-flex justify-start items-center gap-3">
              <div className="w-2.5 h-5 relative">
                <div className="left-0 top-[0.40px] absolute text-emerald-500 text-sm font-bold">$</div>
              </div>
              <input type="number" value={plans.pro.price} onChange={(e) => updatePlan("pro", "price", Number(e.target.value) || 0)} className="w-24 h-9 bg-white text-emerald-500 text-3xl font-bold rounded border border-gray-200 px-2 outline-none text-center" />
              <div className="w-12 h-5 relative">
                <div className="left-0 top-[0.40px] absolute text-emerald-500 text-sm font-semibold">/month</div>
              </div>
            </div>
          </div>

          {/* Premium Plan - Similar Structure */}
          <div className="w-96 h-[602px] relative bg-white rounded-2xl outline outline-[1.42px] outline-offset-[-1.42px] outline-amber-500 overflow-hidden">
            <div className="w-96 h-60 px-5 pt-4 absolute left-0 top-0 bg-gradient-to-b from-amber-500 to-amber-600 inline-flex flex-col justify-start items-start gap-1.5">
              <div className="self-stretch h-11 pr-48 inline-flex justify-between items-center">
                <div className="w-32 h-11 relative">
                  <div className="w-32 h-7 left-0 top-0 absolute">
                    <div className="left-0 top-[-0.24px] absolute text-white text-lg font-bold">Premium Plan</div>
                  </div>
                  <div className="w-32 h-4 left-0 top-[29.04px] absolute inline-flex justify-start items-start">
                    <div className="flex-1 text-white/80 text-xs font-normal">Unlimited access</div>
                  </div>
                </div>
              </div>
              <div className="w-72 h-36 px-4 pt-4 pb-px bg-gradient-to-b from-amber-100 to-amber-200 rounded-2xl outline outline-1 outline-offset-[-1.10px] outline-amber-500 flex flex-col justify-start items-start gap-2">
                <div className="self-stretch h-5 relative">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="absolute left-0 top-[1.99px]" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1044_2198)">
                      <path d="M6.61694 10.323C6.55748 10.0925 6.43735 9.88218 6.26904 9.71387C6.10073 9.54556 5.8904 9.42543 5.65992 9.36597L1.5741 8.31239C1.50439 8.2926 1.44304 8.25062 1.39935 8.1928C1.35567 8.13499 1.33203 8.06451 1.33203 7.99205C1.33203 7.91959 1.35567 7.8491 1.39935 7.79129C1.44304 7.73348 1.50439 7.69149 1.5741 7.67171L5.65992 6.61745C5.89032 6.55805 6.10059 6.43802 6.2689 6.26984C6.4372 6.10165 6.55738 5.89146 6.61694 5.6611L7.67053 1.57528C7.69011 1.5053 7.73205 1.44364 7.78995 1.39972C7.84785 1.3558 7.91853 1.33203 7.9912 1.33203C8.06387 1.33203 8.13455 1.3558 8.19245 1.39972C8.25034 1.44364 8.29229 1.5053 8.31187 1.57528L9.36479 5.6611C9.42425 5.89158 9.54438 6.10191 9.71269 6.27022C9.881 6.43853 10.0913 6.55866 10.3218 6.61812L14.4076 7.67104C14.4779 7.69042 14.5399 7.73232 14.584 7.7903C14.6282 7.84829 14.6521 7.91916 14.6521 7.99205C14.6521 8.06493 14.6282 8.1358 14.584 8.19379C14.5399 8.25177 14.4779 8.29367 14.4076 8.31305L10.3218 9.36597C10.0913 9.42543 9.881 9.54556 9.71269 9.71387C9.54438 9.88218 9.42425 10.0925 9.36479 10.323L8.3112 14.4088C8.29162 14.4788 8.24968 14.5405 8.19178 14.5844C8.13388 14.6283 8.0632 14.6521 7.99053 14.6521C7.91786 14.6521 7.84718 14.6283 7.78929 14.5844C7.73139 14.5405 7.68945 14.4788 7.66986 14.4088L6.61694 10.323Z" stroke="#F59E0B" strokeWidth="1.33197" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M13.3203 1.99805V4.66199" stroke="#F59E0B" strokeWidth="1.33197" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14.6522 3.33008H11.9883" stroke="#F59E0B" strokeWidth="1.33197" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2.66406 11.3213V12.6533" stroke="#F59E0B" strokeWidth="1.33197" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3.33002 11.9873H1.99805" stroke="#F59E0B" strokeWidth="1.33197" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_1044_2198">
                        <rect width="15.9836" height="15.9836" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="left-[23.97px] top-[0.10px] absolute text-slate-900 text-sm font-bold">Early Access Price ($)</div>
                </div>
                <div className="self-stretch h-12 inline-flex justify-start items-center gap-2">
                  <div className="w-3 h-7 relative">
                    <div className="left-0 top-[-0.80px] absolute text-slate-900 text-lg font-bold">$</div>
                  </div>
                  <input type="number" value={plans.premium.earlyAccessPrice} onChange={(e) => updatePlan("premium", "earlyAccessPrice", Number(e.target.value) || 0)} className="w-24 h-12 px-3 py-2 rounded-[10px] outline outline-1 outline-offset-[-1.10px] outline-gray-200 text-slate-900 text-2xl font-bold text-center outline-none" />
                  <div className="w-12 h-5 relative">
                    <div className="left-0 top-[0.10px] absolute text-gray-500 text-sm font-normal">/month</div>
                  </div>
                </div>
                <div className="self-stretch h-4 inline-flex justify-start items-start">
                  <div className="flex-1 text-amber-800 text-xs font-normal">Special launch pricing</div>
                </div>
              </div>
            </div>
            <div className="w-96 h-56 p-4 absolute left-[1.58px] top-[345.53px] inline-flex flex-col justify-start items-start gap-3">
              <div className="self-stretch h-52 relative">
                <div className="w-80 left-0 top-0 absolute inline-flex flex-col justify-start items-start gap-3.5">
                  <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                    <div className="w-40 h-16 inline-flex flex-col justify-start items-start gap-1.5">
                      <div className="self-stretch flex flex-col justify-start items-start gap-[5px]">
                        <div className="self-stretch h-2.5 inline-flex justify-start items-start">
                          <div className="flex-1 text-gray-500 text-xs font-semibold">Boosts</div>
                        </div>
                        <input type="number" value={plans.premium.boosts} onChange={(e) => updatePlan("premium", "boosts", Number(e.target.value) || 0)} className="self-stretch h-8 px-2 py-1.5 rounded-md outline outline-1 outline-offset-[-0.91px] outline-gray-200 text-neutral-950 text-[9.26px] font-medium outline-none" />
                        <div className="self-stretch h-2.5 inline-flex justify-start items-start">
                          <div className="flex-1 text-amber-500 text-[7.93px] font-medium">-1 = Unlimited</div>
                        </div>
                      </div>
                    </div>
                    <div className="w-40 h-16 inline-flex flex-col justify-start items-start gap-1.5">
                      <div className="self-stretch flex flex-col justify-start items-start gap-[5px]">
                        <div className="self-stretch h-2.5 inline-flex justify-start items-start">
                          <div className="flex-1 text-gray-500 text-xs font-semibold">Resumes</div>
                        </div>
                        <input type="number" value={plans.premium.resumes} onChange={(e) => updatePlan("premium", "resumes", Number(e.target.value) || 0)} className="self-stretch h-8 px-2 py-1.5 rounded-md outline outline-1 outline-offset-[-0.91px] outline-gray-200 text-neutral-950 text-[9.26px] font-medium outline-none" />
                        <div className="self-stretch h-2.5 inline-flex justify-start items-start">
                          <div className="flex-1 text-amber-500 text-[7.93px] font-medium">-1 = Unlimited</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                    <div className="w-40 h-16 inline-flex flex-col justify-start items-start gap-1.5">
                      <div className="self-stretch flex flex-col justify-start items-start gap-[5px]">
                        <div className="self-stretch h-2.5 inline-flex justify-start items-start">
                          <div className="flex-1 text-gray-500 text-xs font-semibold">Job Posts</div>
                        </div>
                        <input type="number" value={plans.premium.jobPosts} onChange={(e) => updatePlan("premium", "jobPosts", Number(e.target.value) || 0)} className="self-stretch h-8 px-2 py-1.5 rounded-md outline outline-1 outline-offset-[-0.91px] outline-gray-200 text-neutral-950 text-[9.26px] font-medium outline-none" />
                        <div className="self-stretch h-2.5 inline-flex justify-start items-start">
                          <div className="flex-1 text-amber-500 text-[7.93px] font-medium">-1 = Unlimited</div>
                        </div>
                      </div>
                    </div>
                    <div className="w-40 h-16 inline-flex flex-col justify-start items-start gap-1.5">
                      <div className="self-stretch flex flex-col justify-start items-start gap-[5px]">
                        <div className="self-stretch h-2.5 inline-flex justify-start items-start">
                          <div className="flex-1 text-gray-500 text-xs font-semibold">Chat Credits</div>
                        </div>
                        <input type="number" value={plans.premium.chatCredits} onChange={(e) => updatePlan("premium", "chatCredits", Number(e.target.value) || 0)} className="self-stretch h-8 px-2 py-1.5 rounded-md outline outline-1 outline-offset-[-0.91px] outline-gray-200 text-neutral-950 text-[9.26px] font-medium outline-none" />
                        <div className="self-stretch h-2.5 inline-flex justify-start items-start">
                          <div className="flex-1 text-amber-500 text-[7.93px] font-medium">-1 = Unlimited</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-12 flex flex-col justify-start items-start gap-1.5">
                    <div className="self-stretch h-2.5 inline-flex justify-start items-start">
                      <div className="flex-1 text-gray-500 text-xs font-semibold">Recruiter Fee (%)</div>
                    </div>
                    <input type="number" value={plans.premium.recruiterFee} onChange={(e) => updatePlan("premium", "recruiterFee", Number(e.target.value) || 0)} className="self-stretch h-8 px-2 py-1.5 rounded-md outline outline-1 outline-offset-[-0.91px] outline-gray-200 text-neutral-950 text-[9.26px] font-medium outline-none" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-80 h-14 p-4 absolute left-[20.58px] top-[264.75px] bg-gradient-to-b from-emerald-100 to-emerald-200 rounded-2xl outline outline-1 outline-offset-[-1.10px] outline-emerald-500 inline-flex justify-start items-center gap-3">
              <div className="w-2.5 h-5 relative">
                <div className="left-0 top-[0.40px] absolute text-emerald-500 text-sm font-bold">$</div>
              </div>
              <input type="number" value={plans.premium.price} onChange={(e) => updatePlan("premium", "price", Number(e.target.value) || 0)} className="w-24 h-9 bg-white text-emerald-500 text-3xl font-bold rounded border border-gray-200 px-2 outline-none text-center" />
              <div className="w-12 h-5 relative">
                <div className="left-0 top-[0.40px] absolute text-emerald-500 text-sm font-semibold">/month</div>
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="w-full flex justify-end">
          <button
            type="button"
            onClick={handleSaveConfig}
            className="w-48 h-11 pl-8 bg-gradient-to-b from-slate-900 to-blue-900 rounded-xl shadow-lg text-white text-xs font-semibold flex items-center gap-2.5 hover:opacity-90 transition-opacity"
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              className="shrink-0 -ml-2.5"
            >
              <path
                d="M11.5252 2.60156C11.9397 2.60747 12.335 2.77691 12.6252 3.07299L15.6109 6.05871C15.907 6.34884 16.0764 6.74421 16.0823 7.15871V15.173C16.0823 15.5898 15.9167 15.9895 15.622 16.2842C15.3273 16.5789 14.9277 16.7444 14.5109 16.7444H3.51088C3.09411 16.7444 2.69441 16.5789 2.39971 16.2842C2.10501 15.9895 1.93945 15.5898 1.93945 15.173V4.17299C1.93945 3.75622 2.10501 3.35652 2.39971 3.06182C2.69441 2.76712 3.09411 2.60156 3.51088 2.60156H11.5252Z"
                stroke="white"
                strokeWidth="1.57"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.9372 16.7447V11.2447C12.9372 11.0363 12.8544 10.8365 12.7071 10.6891C12.5597 10.5418 12.3599 10.459 12.1515 10.459H5.86579C5.65741 10.459 5.45756 10.5418 5.31021 10.6891C5.16286 10.8365 5.08008 11.0363 5.08008 11.2447V16.7447"
                stroke="white"
                strokeWidth="1.57"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.08008 2.60156V5.74442C5.08008 5.9528 5.16286 6.15265 5.31021 6.3C5.45756 6.44735 5.65741 6.53013 5.86579 6.53013H11.3658"
                stroke="white"
                strokeWidth="1.57"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Save All Configuration
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecruiterAgency;
