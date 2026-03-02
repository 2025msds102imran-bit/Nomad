import React from "react";

const steps = [
  {
    num: "01",
    title: "Companies Post Jobs",
    text: "Create detailed job listings with requirements and budget. Set your terms and wait for qualified recruiters.",
    active: true,
  },
  {
    num: "02",
    title: "Recruiters Submit Candidates",
    text: "Professional recruiters submit qualified candidates with proposed fees and complete details.",
  },
  {
    num: "03",
    title: "Negotiate & Select",
    text: "Review proposals, compare options, and negotiate directly with full control over selection.",
  },
  {
    num: "04",
    title: "Secure Payment",
    text: "Payment held securely in escrow and released only when the candidate starts work.",
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full relative bg-white overflow-hidden py-14 px-4">
      {/* Decorative blur */}
      <div className="absolute size-[500px] left-1/2 -translate-x-1/2 bottom-[-100px] bg-slate-900/0 rounded-full blur-3xl" />

      <div className="relative max-w-[1280px] mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 max-w-[683px] text-center">
          <div className="inline-flex justify-center items-center px-6 py-2.5 bg-slate-900/10 rounded-full shadow-[0px_3.64px_5.46px_-3.64px_rgba(0,0,0,0.10),0px_9.1px_13.65px_-2.73px_rgba(0,0,0,0.10)]">
            <span className="text-slate-900 text-xs font-medium uppercase leading-5 tracking-wide">Our Process</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 leading-tight md:leading-[79.20px]">
            How Nomad Works
          </h2>

          <div className="w-32 h-2 rounded-2xl bg-linear-to-l from-slate-900 to-blue-900" />

          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-normal leading-relaxed md:leading-10">
            A simple, transparent process that puts both companies and recruiters in control.
          </p>
        </div>

        {/* Cards with connecting line */}
        <div className="mt-16 w-full relative">
          {/* Horizontal connecting line (visible on lg+) */}
          <div className="absolute top-[90px] left-1/2 -translate-x-1/2 w-[80%] max-w-[963px] h-1 opacity-20 rounded-full hidden lg:block" style={{ background: 'linear-gradient(to right, #0F172A, #3B82F6, #0F172A)' }} />

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-[23px]">
            {steps.map((step) => (
              <div
                key={step.num}
                className={`group relative bg-white rounded-3xl overflow-hidden flex flex-col p-8 min-h-[320px] transition-all duration-300 ${
                  step.active
                    ? "shadow-[0px_23.5px_47px_-11.3px_rgba(0,0,0,0.25)] outline-[1.22px] outline-solid outline-slate-900/30"
                    : "outline-[1.22px] outline-solid outline-gray-200 hover:shadow-[0px_23.5px_47px_-11.3px_rgba(0,0,0,0.25)] hover:outline-slate-900/30"
                }`}
              >
                {/* Decorative bottom-right blur */}
                <div className="absolute size-32 right-[-20px] bottom-[-20px] bg-linear-to-br from-blue-50/40 to-transparent rounded-full blur-2xl" />

                {/* Number + decorative blur */}
                <div className="relative w-52 h-20 mb-4">
                  {/* SVG blur behind number */}
                  <div className={`absolute -left-3 -top-3 size-[90px] rounded-[15px] blur-[22px] ${step.active ? "opacity-30" : "opacity-15"}`} style={{ background: 'linear-gradient(180deg, #25406A, #4A90E2)' }} />

                  {/* Number badge */}
                  <div className={`relative bg-linear-to-l from-slate-900 to-blue-900 rounded-2xl flex items-center justify-center ${
                    step.active
                      ? "size-20 -ml-[6px] -mt-[6px] origin-top-left rotate-6"
                      : "size-16"
                  }`}>
                    <span className="text-white text-2xl font-bold leading-8">{step.num}</span>
                  </div>

                  {/* Gradient underline */}
                  <div className={`w-20 h-1.5 bg-linear-to-l from-slate-900 to-blue-900 rounded-2xl ${step.active ? "mt-2" : "mt-3"}`} />
                </div>

                {/* Content */}
                <div className="relative flex flex-col gap-5">
                  <h3 className="text-slate-900 text-lg font-semibold leading-6">{step.title}</h3>
                  <p className="text-gray-600 text-base font-normal leading-6">{step.text}</p>
                </div>

                {/* Bottom accent bar */}
                <div className="absolute left-[1.22px] bottom-0 w-[calc(100%-2.44px)] h-0 group-hover:h-1.5 rounded-2xl bg-linear-to-l from-slate-900 to-blue-900 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
