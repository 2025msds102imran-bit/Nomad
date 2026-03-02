import React from "react";

const checkIcon = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.99054 18.316C14.5886 18.316 18.316 14.5886 18.316 9.99054C18.316 5.39249 14.5886 1.66504 9.99054 1.66504C5.39249 1.66504 1.66504 5.39249 1.66504 9.99054C1.66504 14.5886 5.39249 18.316 9.99054 18.316Z" stroke="white" strokeWidth="1.665" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.49316 9.99078L9.15826 11.6559L12.4885 8.32568" stroke="white" strokeWidth="1.665" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const features = [
  "Post your role and receive multiple candidate proposals with transparent fees",
  "Review recruiter profiles, ratings, and past placements before choosing",
  "Negotiate fees directly—no hidden markups or percentage surprises",
  "Only pay when the candidate starts work—zero risk, total protection",
  "Access a global network of vetted recruiters and agencies",
  "Save 30-50% compared to traditional agency fees",
  "Fill roles faster with competitive, motivated recruiters",
];

const ForCompanies = () => {
  return (
    <section className="w-full relative bg-white overflow-hidden py-14 px-4">
      {/* Decorative blur */}
      <div className="absolute w-96 h-80 right-[80px] -top-[23px] bg-slate-900/5 rounded-full blur-3xl" />

      <div className="relative max-w-[1216px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
        {/* Left column */}
        <div className="flex flex-col items-start gap-4 max-w-[568px] w-full pt-[77px]">
          <div className="inline-flex justify-center items-center px-5 py-2.5 bg-slate-900/10 rounded-full">
            <span className="text-slate-900 text-sm font-medium leading-5">For Companies</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight lg:leading-[79.20px]">
            For Companies &amp; Hiring Teams
          </h2>

          <div className="w-24 h-2 bg-linear-to-l from-slate-900 to-blue-900 rounded-2xl" />

          <p className="text-gray-700 text-lg sm:text-xl font-normal leading-8">
            Stop overpaying for recruitment. Choose from multiple qualified candidates, negotiate fees directly, and only pay when someone starts.
          </p>

          {/* Stats card */}
          <div className="w-full rounded-3xl px-8 pt-8 pb-[1.30px] outline-[1.30px] outline-solid outline-slate-900/10 flex items-start" style={{ background: 'linear-gradient(135deg, rgba(37,64,106,0.03) 0%, rgba(239,246,255,0.3) 50%, transparent 100%)' }}>
            <div className="flex gap-16 pb-8">
              <div className="flex flex-col gap-2">
                <span className="text-slate-900 text-4xl font-semibold leading-10">30-50%</span>
                <span className="text-gray-600 text-sm font-normal leading-5">Cost Savings</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-slate-900 text-4xl font-semibold leading-10">50%</span>
                <span className="text-gray-600 text-sm font-normal leading-5">Faster Hiring</span>
              </div>
            </div>
          </div>

          {/* CTA button */}
          <button className="w-64 h-16 bg-linear-to-l from-slate-900 to-blue-900 rounded-2xl overflow-hidden flex items-center justify-center gap-2 hover:opacity-90 transition">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.3206 16.6509V3.33014C13.3206 2.88853 13.1451 2.465 12.8329 2.15274C12.5206 1.84047 12.0971 1.66504 11.6555 1.66504H8.32526C7.88364 1.66504 7.46012 1.84047 7.14785 2.15274C6.83559 2.465 6.66016 2.88853 6.66016 3.33014V16.6509" stroke="white" strokeWidth="1.665" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.6509 4.99512H3.33014C2.41053 4.99512 1.66504 5.74061 1.66504 6.66022V14.9857C1.66504 15.9053 2.41053 16.6508 3.33014 16.6508H16.6509C17.5705 16.6508 18.316 15.9053 18.316 14.9857V6.66022C18.316 5.74061 17.5705 4.99512 16.6509 4.99512Z" stroke="white" strokeWidth="1.665" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-white text-base font-medium leading-6">Post Your First Role</span>
          </button>
        </div>

        {/* Right column — feature list */}
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
      </div>
    </section>
  );
};

export default ForCompanies;
