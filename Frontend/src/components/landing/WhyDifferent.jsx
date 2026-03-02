import React from "react";

const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.9919 3.33008L3.33057 9.99141" stroke="#FB2C36" strokeWidth="1.11" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.33057 3.33008L9.9919 9.99141" stroke="#FB2C36" strokeWidth="1.11" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.1025 3.33008L4.99626 9.4363L2.2207 6.66075" stroke="white" strokeWidth="1.11" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

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
    traditional: "Standard 15-30% placement fees",
    nomad: "Negotiate fees that work for your budget",
  },
];

const WhyDifferent = () => {
  return (
    <section className="w-full relative bg-white overflow-hidden py-14 px-4">
      {/* Decorative blur */}
      <div className="absolute size-96 right-[80px] top-[80px] bg-cyan-900/5 rounded-full blur-3xl" />

      <div className="relative max-w-[1280px] mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="flex flex-col items-center gap-3.5 max-w-[768px] text-center">
          <div className="inline-flex justify-center items-center px-5 py-2.5 bg-cyan-900/10 rounded-full">
            <span className="text-slate-900 text-sm font-medium leading-5">Comparison</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 leading-tight md:leading-[79.20px]">
            Why Nomad is Different
          </h2>

          <div className="w-24 h-2 rounded-full" style={{ background: 'linear-gradient(180deg, transparent 0%, #0F172A 50%, transparent 100%)' }} />

          <p className="text-lg sm:text-xl text-gray-700 font-normal leading-8 max-w-[639px]">
            We&apos;re not another recruitment agency. We&apos;re a marketplace built on transparency, fairness, and mutual control.
          </p>
        </div>

        {/* Comparison table */}
        <div className="w-full max-w-[960px] mt-12 rounded-[20px] shadow-[0px_20.8px_41.7px_-10px_rgba(0,0,0,0.25)] outline-[1.08px] outline-solid outline-gray-100 overflow-hidden bg-white">

          {/* Table header */}
          <div className="hidden md:grid grid-cols-3" style={{ background: 'linear-gradient(to right, #E5E7EB, rgba(22,78,99,0.1), #E5E7EB)' }}>
            <div className="px-7 pt-7 pb-5 bg-linear-to-br from-white to-gray-50">
              <span className="text-slate-900 text-sm font-medium leading-6">Feature</span>
            </div>
            <div className="px-7 pt-7 pb-5 bg-linear-to-br from-white to-gray-50">
              <span className="text-gray-500 text-sm font-medium leading-6">Traditional Agencies</span>
            </div>
            <div className="px-7 pt-7 pb-5 bg-linear-to-l from-slate-900 to-blue-900 rounded-tr-xl">
              <span className="text-white text-sm font-medium leading-6">Nomad Recruitment</span>
            </div>
          </div>

          {/* Data rows */}
          {rows.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-3"
              style={{ background: 'linear-gradient(to right, #F3F4F6, #E5E7EB, #F3F4F6)' }}
            >
              {/* Feature name */}
              <div className="px-7 py-6 bg-white">
                <span className="text-gray-900 text-sm font-medium leading-5">{row.feature}</span>
              </div>

              {/* Traditional */}
              <div className="px-7 py-7 bg-white flex items-start gap-3.5">
                <div className="size-6 shrink-0 bg-red-50 rounded-full flex justify-center items-center">
                  <XIcon />
                </div>
                <span className="text-gray-600 text-sm font-normal leading-5">{row.traditional}</span>
              </div>

              {/* Nomad */}
              <div className="px-7 py-7 bg-linear-to-br from-white to-blue-50/20 flex items-start gap-3.5">
                <div className="size-6 shrink-0 bg-linear-to-l from-slate-900 to-blue-900 rounded-xl flex justify-center items-center">
                  <CheckIcon />
                </div>
                <span className="text-gray-900 text-sm font-medium leading-5">{row.nomad}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
