import React from "react";

const checkIcon = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.99054 18.316C14.5886 18.316 18.316 14.5886 18.316 9.99054C18.316 5.39249 14.5886 1.66504 9.99054 1.66504C5.39249 1.66504 1.66504 5.39249 1.66504 9.99054C1.66504 14.5886 5.39249 18.316 9.99054 18.316Z" stroke="white" strokeWidth="1.665" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.49316 9.99078L9.15826 11.6559L12.4885 8.32568" stroke="white" strokeWidth="1.665" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const features = [
  "Browse open roles from companies actively hiring",
  "Submit qualified candidates with your proposed fee—no percentage caps",
  "Negotiate terms directly with companies on a level playing field",
  "Build your reputation with verified placements and ratings",
  "Access a steady stream of quality opportunities across industries",
  "Work independently or as an agency with full control over your business",
];

const ForRecruiters = () => {
  return (
    <section className="w-full relative bg-linear-to-br from-gray-50 via-white to-gray-50/50 overflow-hidden py-14 px-4">
      {/* Decorative elements */}
      <div className="absolute size-96 right-[80px] bottom-[-60px] bg-blue-400/5 rounded-full blur-3xl" />
      <div className="absolute size-56 left-[62px] top-[110px] origin-top-left rotate-12 bg-linear-to-br from-cyan-900/10 to-transparent rounded-3xl hidden lg:block" />

      <div className="relative max-w-[1216px] mx-auto flex flex-col-reverse lg:flex-row gap-12 lg:gap-20 items-start">
        {/* Left column — feature list */}
        <div className="flex flex-col gap-4 max-w-[568px] w-full">
          {features.map((text, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl outline-[1.30px] outline-solid outline-gray-100 px-5 pt-5 pb-5 flex items-start gap-5"
            >
              <div className="size-8 shrink-0 bg-linear-to-l from-slate-900 to-blue-900 rounded-[10px] flex justify-center items-center">
                {checkIcon}
              </div>
              <p className="text-gray-700 text-base font-normal leading-6">{text}</p>
            </div>
          ))}
        </div>

        {/* Right column */}
        <div className="flex flex-col items-start gap-4 max-w-[568px] w-full lg:pt-[46px]">
          <div className="inline-flex justify-center items-center px-5 py-2.5 bg-cyan-900/10 rounded-full">
            <span className="text-slate-900 text-sm font-medium leading-5">For Recruiters</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight lg:leading-[79.20px]">
            For Recruiters &amp; Agencies
          </h2>

          <div className="w-24 h-2 bg-linear-to-l from-slate-900 to-blue-900 rounded-2xl" />

          <p className="text-gray-700 text-lg sm:text-xl font-normal leading-8">
            Set your own fees, negotiate directly with companies, and get paid securely for every successful placement. Build your business on your terms with transparent, fair compensation.
          </p>

          {/* Earnings card */}
          <div className="w-full relative rounded-3xl shadow-2xl overflow-hidden">
            <div className="w-full px-8 pt-8 pb-[1.30px] rounded-3xl border-[1.30px] border-slate-900/10" style={{ background: 'linear-gradient(135deg, rgba(37,64,106,0.03) 0%, rgba(239,246,255,0.3) 50%, transparent 100%)' }}>
              <div className="flex flex-col gap-4 pb-8">
                <div className="flex items-center gap-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.9903 6.99707L13.494 15.4934L8.4962 10.4956L1.99902 16.9927" stroke="#05DF72" strokeWidth="1.999" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.9932 6.99707H21.9906V12.9945" stroke="#05DF72" strokeWidth="1.999" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-slate-900/80 text-sm font-medium uppercase leading-5 tracking-tight">Average Earnings</span>
                </div>
                <span className="text-slate-900 text-4xl font-semibold leading-10">$8,500</span>
                <span className="text-slate-900/70 text-sm font-normal leading-5">Per successful placement</span>
              </div>
            </div>
          </div>

          {/* CTA button */}
          <button className="w-64 h-16 bg-linear-to-l from-slate-900 to-blue-900 rounded-2xl overflow-hidden flex items-center justify-center hover:opacity-90 transition">
            <span className="text-white text-base font-medium leading-6">Start Recruiting Today</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ForRecruiters;
