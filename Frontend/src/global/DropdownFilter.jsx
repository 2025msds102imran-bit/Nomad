import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const DropdownFilter = ({ label, value, options, onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="w-full sm:flex-1 flex flex-col gap-1.5 relative" ref={ref}>
      <span className="text-gray-500 text-xs font-medium leading-5">{label}</span>
      <div
        className="h-9 rounded-lg outline-[1.5px] outline-gray-200 px-3 flex items-center justify-between cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="text-gray-600 text-[10px]">{value}</span>
        <ChevronDown size={16} stroke="#4A5565" className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </div>
      {open && (
        <div className="absolute top-full mt-1 w-40 p-3 bg-white rounded-[20px] shadow-lg z-10 flex flex-col gap-3.5 overflow-hidden">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => { onChange(opt); setOpen(false); }}
              className={`text-left text-base font-normal ${value === opt ? "text-neutral-950" : "text-neutral-950/50"}`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownFilter;
