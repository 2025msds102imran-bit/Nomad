import React from "react";
import { Check, X } from "lucide-react";

const rows = [
  {
    feature: "Pricing Control",
    traditional: "Fixed percentages, no negotiation",
    nomad: "Fully negotiable fees between parties",
  },
  {
    feature: "Payment Security",
    traditional: "Payment disputes, delayed compensation",
    nomad: "Escrow-based, secure release on hire start",
  },
  {
    feature: "Transparency",
    traditional: "Hidden costs, unclear terms",
    nomad: "Complete visibility and upfront clarity",
  },
  {
    feature: "Control",
    traditional: "Platform-dictated rules and processes",
    nomad: "Both parties control terms and selection",
  },
  {
    feature: "Cost Efficiency",
    traditional: "Standard 15–30% placement fees",
    nomad: "Negotiate fees that work for your budget",
  },
];

const WhyDifferent = () => {
  return (
    <section className="w-full py-16 px-4 sm:py-20 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, #F9FAFB 0%, #FFFFFF 50%, rgba(249, 250, 251, 0.5) 100%)' }}>
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center max-w-3xl">
          <div className="inline-block px-4 py-2 rounded-full border border-gray-200 bg-white text-sm mb-4 sm:mb-6">
            Comparison
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900">
            Why Nomad is Different
          </h2>
          <div className="w-20 h-1 mx-auto my-4 sm:my-6 rounded-full bg-linear-to-r from-[#0F172A] to-[#334F90]" />
          <p className="text-base sm:text-lg text-slate-600">
            We're not another recruitment agency. We're a marketplace built on
            transparency, fairness, and mutual control.
          </p>
        </div>

        <div className="w-full max-w-[900px] mt-10 sm:mt-14 rounded-[20px] border border-gray-200 overflow-hidden bg-white shadow-sm">

          {/* Header Row */}
          <div className="hidden md:grid grid-cols-3">
            <div className="px-6 py-5 font-semibold text-slate-900 text-sm">
              Feature
            </div>
            <div className="px-6 py-5 font-medium text-slate-500 text-sm border-l border-gray-200">
              Traditional Agencies
            </div>
            <div className="px-6 py-5 font-semibold text-white text-sm bg-linear-to-br from-[#0F172A] to-[#334F90] rounded-tr-[19px]">
              Nomad Recruitment
            </div>
          </div>

          {/* Data Rows */}
          {rows.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-200"
            >
              <div className="px-6 py-6 font-semibold text-slate-900 text-sm">
                {row.feature}
              </div>

              <div className="px-6 py-6 flex items-start md:items-center gap-3 text-slate-500 text-sm border-t md:border-t-0 md:border-l border-gray-200">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-50 shrink-0">
                  <X className="h-3.5 w-3.5 text-red-400" />
                </span>
                <span>{row.traditional}</span>
              </div>

              <div className="px-6 py-6 flex items-start md:items-center gap-3 text-sm border-t md:border-t-0 md:border-l border-gray-200 bg-[#F8FAFC]">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-linear-to-br from-[#0F172A] to-[#334F90] shrink-0">
                  <Check className="h-3.5 w-3.5 text-white" />
                </span>
                <span className="font-semibold text-slate-900">{row.nomad}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
