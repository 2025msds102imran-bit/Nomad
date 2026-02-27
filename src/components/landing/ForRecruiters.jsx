import React from "react";

const ForRecruiters = () => {
  return (
    <section className="w-full py-16 sm:py-20 px-4" style={{ background: 'linear-gradient(135deg, #F9FAFB 0%, #FFFFFF 50%, rgba(249, 250, 251, 0.5) 100%)' }}>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">

        {/* Left - Cards (single column) */}
        <div className="flex-1 flex flex-col gap-[20px] max-w-[568px] w-full order-2 lg:order-1">
          {[
            "Browse open roles from companies actively hiring",
            "Submit qualified candidates with your proposed fee—no percentage caps",
            "Negotiate terms directly with companies on a level playing field",
            "Build your reputation with verified placements and ratings",
            "Access a steady stream of quality opportunities across industries",
            "Work independently or as an agency with full control over your business",
          ].map((text, index) => (
            <div
              key={index}
              className="border-[1.3px] border-[#F3F4F6] rounded-[16px] p-[20px] flex gap-[20px] items-center bg-white min-h-[96px] hover:shadow-md transition duration-300"
            >
              <div className="w-10 h-10 rounded-md bg-linear-to-r from-[#0F172A] to-[#334F90] flex items-center justify-center shrink-0">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.99054 18.316C14.5886 18.316 18.316 14.5886 18.316 9.99054C18.316 5.39249 14.5886 1.66504 9.99054 1.66504C5.39249 1.66504 1.66504 5.39249 1.66504 9.99054C1.66504 14.5886 5.39249 18.316 9.99054 18.316Z" stroke="white" strokeWidth="1.6651" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.49316 9.99078L9.15826 11.6559L12.4885 8.32568" stroke="white" strokeWidth="1.6651" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </div>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* Right - Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-[18px] max-w-[568px] w-full order-1 lg:order-2">

          <div className="inline-block px-4 py-2 rounded-full bg-[#0F172A14] text-sm">
            For Recruiters
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            For Recruiters & Agencies
          </h2>

          <div className="w-24 h-1 bg-linear-to-r from-[#0F172A] to-[#334F90] rounded-full mx-auto lg:mx-0" />

          <p className="text-base sm:text-lg text-[#364153] leading-relaxed">
            Set your own fees, negotiate directly with companies, and get paid
            securely for every successful placement. Build your business on
            your terms with transparent, fair compensation.
          </p>

          <div className="w-full min-h-[135px] border-[1.3px] border-[#0F172A1A] rounded-[24px] px-[33px] pt-[33px] pb-[1.3px] flex flex-col gap-2 items-start" style={{ background: 'linear-gradient(135deg, rgba(37, 64, 106, 0.03) 0%, rgba(239, 246, 255, 0.3) 50%, rgba(0, 0, 0, 0) 100%)' }}>
            
            <p className="flex items-center gap-2 text-sm text-gray-600 uppercase tracking-wide font-medium">
              <span className="text-green-500">↗</span>
              Average Earnings
            </p>

            <h3 className="text-3xl sm:text-4xl font-semibold text-[#0F172A]">
              $8,500
            </h3>

            <p className="text-sm text-gray-500">
              Per successful placement
            </p>
          </div>

          <button className="w-full sm:w-auto bg-linear-to-r from-[#0F172A] to-[#334F90] text-white px-10 py-4 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
            Start Recruiting Today
          </button>

        </div>
      </div>
    </section>
  );
};

export default ForRecruiters;
