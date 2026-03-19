import React, { useEffect, useMemo, useRef, useState } from "react";

const USER_TYPE_OPTIONS = ["Company","Recruiter","RecruiterCompany"];
const STATUS_OPTIONS = ["Active", "Inactive"];
const CURRENCY_OPTIONS = ["Euro €", "USD $", "GBP £"];

function DropdownField({ label, required, value, placeholder, options, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onDocMouseDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocMouseDown);
    return () => document.removeEventListener("mousedown", onDocMouseDown);
  }, [open]);

  return (
    <div ref={ref} className="w-full inline-flex flex-col justify-start items-start gap-3">
      <div className="self-stretch h-5 relative">
        <div className="left-0 top-[0.39px] absolute justify-start text-slate-900 text-sm font-semibold font-['Inter'] leading-5">
          {label} {required && <span className="text-red-500 font-bold">*</span>}
        </div>
      </div>

      <div className="relative w-full">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="w-full h-11 px-4 pr-10 bg-white rounded-[10.19px] outline outline-[1.32px] outline-offset-[-1.32px] outline-gray-200 text-left"
        >
          <span className={value ? "text-neutral-950 text-sm" : "text-neutral-950/50 text-xs"}>
            {value || placeholder}
          </span>
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-600/70">
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.9508 16.0065C12.7597 16.1975 12.5006 16.3049 12.2303 16.3049C11.9601 16.3049 11.7009 16.1975 11.5098 16.0065L5.74472 10.2414C5.64738 10.1474 5.56974 10.0349 5.51633 9.9106C5.46292 9.78627 5.43481 9.65254 5.43363 9.51722C5.43246 9.38191 5.45824 9.24771 5.50948 9.12247C5.56073 8.99722 5.6364 8.88343 5.73208 8.78775C5.82777 8.69206 5.94156 8.61639 6.0668 8.56515C6.19205 8.51391 6.32624 8.48812 6.46156 8.4893C6.59687 8.49047 6.7306 8.51859 6.85494 8.572C6.97927 8.62541 7.09173 8.70304 7.18573 8.80038L12.2303 13.845L17.2749 8.80038C17.4671 8.61474 17.7245 8.51202 17.9917 8.51434C18.259 8.51666 18.5146 8.62384 18.7035 8.81279C18.8925 9.00174 18.9996 9.25735 19.002 9.52456C19.0043 9.79176 18.9016 10.0492 18.7159 10.2414L12.9508 16.0065Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </button>

        {open && (
          <div className="absolute top-full left-0 z-20 mt-2 w-full max-h-72 overflow-auto p-2 bg-white rounded-2xl shadow-lg outline outline-1 outline-gray-200">
            {options.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                className="w-full text-left px-3 py-2 rounded-xl hover:bg-gray-50 text-neutral-950 text-sm"
              >
                {opt}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function AddPlan({ onBack, onSave }) {
  const [name, setName] = useState("");
  const [userType, setUserType] = useState("");
  const [durationDays, setDurationDays] = useState("");
  const [status, setStatus] = useState("");
  const [price, setPrice] = useState("");
  const [currency, setCurrency] = useState("");
  const [description, setDescription] = useState("");

  const canSave = useMemo(() => {
    return (
      name.trim() &&
      userType.trim() &&
      String(durationDays).trim() &&
      status.trim() &&
      String(price).trim() &&
      currency.trim()
    );
  }, [name, userType, durationDays, status, price, currency]);

  const handleBack = () => {
    if (typeof onBack === "function") onBack();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!canSave) return;
    if (typeof onSave === "function") {
      onSave({
        name: name.trim(),
        type: userType.trim(),
        description: description.trim(),
        price: `${String(price).trim()} ${currency.trim()}`,
        status: status.trim(),
        durationDays: String(durationDays).trim(),
        currency: currency.trim(),
        rawPrice: String(price).trim(),
      });
      return;
    }
    handleBack();
  };

  return (
    <div data-layer="Main Content" className="w-full flex flex-col justify-start items-start gap-5">
      <button
        type="button"
        onClick={handleBack}
        className="h-10 inline-flex items-center gap-3 text-gray-500 hover:text-gray-700"
      >
        <span>
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.09775 12.8186L3.375 8.0958L8.09775 3.37305"
              stroke="currentColor"
              strokeWidth="1.34936"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.8205 8.0957H3.375"
              stroke="currentColor"
              strokeWidth="1.34936"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="text-base font-medium font-['Inter'] leading-6">Back to Subscription Plan</span>
      </button>

      <form
        onSubmit={handleSubmit}
        className="w-full bg-white rounded-3xl outline outline-[1.41px] outline-offset-[-1.41px] outline-gray-200 overflow-hidden"
      >
        <div className="w-full h-20 p-3.5 bg-gradient-to-b from-slate-900 to-blue-900 flex items-center">
          <div className="size-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.0107 21.7544C11.3151 21.9301 11.6603 22.0226 12.0118 22.0226C12.3632 22.0226 12.7085 21.9301 13.0129 21.7544L20.0205 17.75C20.3246 17.5744 20.5771 17.322 20.7528 17.018C20.9286 16.7141 21.0212 16.3692 21.0216 16.0181V8.00938C21.0212 7.65827 20.9286 7.31343 20.7528 7.00945C20.5771 6.70547 20.3246 6.45304 20.0205 6.27749L13.0129 2.27312C12.7085 2.0974 12.3632 2.00488 12.0118 2.00488C11.6603 2.00488 11.3151 2.0974 11.0107 2.27312L4.00304 6.27749C3.69898 6.45304 3.44642 6.70547 3.27071 7.00945C3.095 7.31343 3.00231 7.65827 3.00195 8.00938V16.0181C3.00231 16.3692 3.095 16.7141 3.27071 17.018C3.44642 17.322 3.69898 17.5744 4.00304 17.75L11.0107 21.7544Z"
                stroke="white"
                strokeWidth="2.00218"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M12.0117 22.0246V12.0137" stroke="white" strokeWidth="2.00218" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3.29297 7.00781L12.0125 12.0133L20.732 7.00781" stroke="white" strokeWidth="2.00218" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7.50781 4.27539L16.5176 9.43101" stroke="white" strokeWidth="2.00218" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="ml-3 flex flex-col">
            <div className="text-white text-lg font-semibold font-['Inter'] leading-8">Add Subscription Plan</div>
            <div className="text-white/80 text-xs font-normal font-['Inter'] leading-5">Create plan details and pricing</div>
          </div>
        </div>

        <div className="p-6 sm:p-8 flex flex-col gap-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="w-full inline-flex flex-col justify-start items-start gap-3">
              <div className="self-stretch h-5 relative">
                <div className="left-0 top-[0.39px] absolute justify-start text-slate-900 text-sm font-semibold font-['Inter'] leading-5">
                  Plan Name <span className="text-red-500 font-bold">*</span>
                </div>
              </div>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter plan name"
                className="w-full h-11 px-4 rounded-[10.19px] border-[1.32px] border-gray-200 text-sm outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            <DropdownField
              label="User Type"
              required
              value={userType}
              placeholder="Select User Type"
              options={USER_TYPE_OPTIONS}
              onChange={setUserType}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="w-full inline-flex flex-col justify-start items-start gap-3">
              <div className="self-stretch h-5 relative">
                <div className="left-0 top-[0.39px] absolute justify-start text-slate-900 text-sm font-semibold font-['Inter'] leading-5">
                  Duration (Days) <span className="text-red-500 font-bold">*</span>
                </div>
              </div>
              <input
                value={durationDays}
                onChange={(e) => setDurationDays(e.target.value)}
                placeholder="Enter duration"
                className="w-full h-11 px-4 rounded-[10.19px] border-[1.32px] border-gray-200 text-sm outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            <DropdownField
              label="Status"
              required
              value={status}
              placeholder="Select Status"
              options={STATUS_OPTIONS}
              onChange={setStatus}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="w-full inline-flex flex-col justify-start items-start gap-3">
              <div className="self-stretch h-5 relative">
                <div className="left-0 top-[0.39px] absolute justify-start text-slate-900 text-sm font-semibold font-['Inter'] leading-5">
                  Price <span className="text-red-500 font-bold">*</span>
                </div>
              </div>
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter price"
                className="w-full h-11 px-4 rounded-[10.19px] border-[1.32px] border-gray-200 text-sm outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            <DropdownField
              label="Currency"
              required
              value={currency}
              placeholder="Select Currency"
              options={CURRENCY_OPTIONS}
              onChange={setCurrency}
            />
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-slate-900 text-sm font-semibold font-['Inter'] leading-5">Description</div>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter plan description, features, and benefits..."
              className="w-full min-h-44 px-5 py-4 bg-white rounded-2xl outline outline-[1.41px] outline-offset-[-1.41px] outline-gray-200 text-sm outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          <div className="inline-flex items-center gap-4 pt-2">
            <button
              type="submit"
              disabled={!canSave}
              className="w-32 h-11 bg-cyan-900 rounded-[10.19px] text-white text-base font-medium font-['Inter'] leading-6 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-cyan-800"
            >
              Save Plan
            </button>
            <button
              type="button"
              onClick={handleBack}
              className="w-24 h-11 rounded-[10.19px] outline outline-[1.32px] outline-offset-[-1.32px] outline-gray-200 text-gray-600 text-base font-medium font-['Inter'] leading-6 hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}