import React from "react";

const values = [
  {
    tag: "Trust First",
    title: "Complete Transparency",
    text: "No hidden fees, no surprises. Every fee is disclosed upfront. Companies see exactly what they'll pay. Recruiters know exactly what they'll earn.",
    icon: (
      <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.5007 14.626C22.5007 20.2512 18.563 23.0638 13.8829 24.6951C13.6378 24.7782 13.3716 24.7742 13.1291 24.6839C8.43765 23.0638 4.5 20.2512 4.5 14.626V6.75068C4.5 6.4523 4.61853 6.16614 4.82952 5.95515C5.0405 5.74417 5.32666 5.62564 5.62504 5.62564C7.87513 5.62564 10.6877 4.27558 12.6453 2.56552C12.8837 2.36188 13.1869 2.25 13.5003 2.25C13.8138 2.25 14.117 2.36188 14.3554 2.56552C16.3242 4.28683 19.1256 5.62564 21.3756 5.62564C21.674 5.62564 21.9602 5.74417 22.1712 5.95515C22.3822 6.16614 22.5007 6.4523 22.5007 6.75068V14.626Z" stroke="white" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    tag: "Fair Pricing",
    title: "Market-Driven Pricing",
    text: "Recruiters set their own fees based on role complexity and candidate quality. Companies choose the best value. The market decides what's fair—not a corporate algorithm.",
    icon: (
      <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.0006 23.6257V21.3757C18.0006 20.1821 17.5265 19.0375 16.6825 18.1936C15.8386 17.3496 14.694 16.8755 13.5004 16.8755H6.75017C5.55665 16.8755 4.41202 17.3496 3.56807 18.1936C2.72412 19.0375 2.25 20.1821 2.25 21.3757V23.6257" stroke="white" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.1252 12.3753C12.6105 12.3753 14.6253 10.3605 14.6253 7.87517C14.6253 5.3898 12.6105 3.375 10.1252 3.375C7.6398 3.375 5.625 5.3898 5.625 7.87517C5.625 10.3605 7.6398 12.3753 10.1252 12.3753Z" stroke="white" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24.7506 23.626V21.3759C24.7499 20.3788 24.418 19.4102 23.8071 18.6221C23.1962 17.8341 22.3409 17.2712 21.3755 17.022" stroke="white" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18.0005 3.52148C18.9685 3.76933 19.8265 4.3323 20.4392 5.12165C21.0519 5.91099 21.3844 6.8818 21.3844 7.88103C21.3844 8.88026 21.0519 9.85107 20.4392 10.6404C19.8265 11.4297 18.9685 11.9927 18.0005 12.2406" stroke="white" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    tag: "Results Only",
    title: "Pay for Performance",
    text: "Companies only pay when a candidate actually starts work. Recruiters get paid when they deliver results. Simple, fair, and risk-free for everyone.",
    icon: (
      <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.7509 7.875L15.188 17.4379L9.56278 11.8127L2.25 19.1254" stroke="white" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18.001 7.875H24.7512V14.6253" stroke="white" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const KeyValues = () => {
  return (
    <section className="w-full relative bg-linear-to-br from-gray-50 via-white to-gray-50/50 overflow-hidden py-14 px-4">
      {/* Decorative blurs */}
      <div className="absolute size-[500px] left-0 top-[80px] bg-slate-900/5 rounded-full blur-3xl" />
      <div className="absolute size-[600px] right-[-80px] top-[340px] bg-blue-400/5 rounded-full blur-3xl" />
      {/* Decorative rotated shape */}
      <div className="absolute w-48 h-32 left-0 bottom-[60px] origin-top-left rotate-45 bg-linear-to-br from-slate-900/10 to-transparent rounded-3xl hidden lg:block" />

      <div className="relative max-w-[1280px] mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-center max-w-[768px]">
          <div className="inline-flex justify-center items-center px-5 py-2.5 rounded-full bg-slate-900/10 mb-6">
            <span className="text-slate-900 text-sm font-medium leading-5">Core Values</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 leading-tight md:leading-[79.20px]">
            Why Companies &amp; Recruiters Choose Nomad
          </h2>

          <div className="w-24 h-2 mx-auto mt-4 mb-2 rounded-full" style={{ background: 'linear-gradient(180deg, transparent 0%, #0F172A 50%, transparent 100%)' }} />
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-[33px] w-full max-w-[1027px]">
          {values.map((item, i) => (
            <div key={i} className="relative">
              {/* Tag badge (above card) */}
              <div className="absolute -top-[13px] right-[10px] z-10 w-20 h-6 bg-linear-to-l from-slate-900 to-blue-900 rounded-xl flex items-center justify-center">
                <span className="text-white text-[10.13px] font-medium leading-3">{item.tag}</span>
              </div>

              {/* Card */}
              <div className="group relative bg-white rounded-[20.26px] shadow-[0px_3.38px_5.06px_-3.38px_rgba(0,0,0,0.10),0px_8.44px_12.66px_-2.53px_rgba(0,0,0,0.10)] outline-[1.09px] outline-solid outline-gray-100 overflow-hidden p-[35px] flex flex-col gap-0 size-80">
                {/* Icon */}
                <div className="size-16 shrink-0 bg-linear-to-l from-slate-900 to-blue-900 rounded-xl flex justify-center items-center mb-6">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-slate-900 text-xl font-semibold leading-6 mb-4">{item.title}</h3>

                {/* Description */}
                <p className="text-gray-600 text-sm font-normal leading-5">{item.text}</p>

                {/* Bottom accent bar (shows on hover) */}
                <div className="absolute left-[1.09px] bottom-[4px] w-[calc(100%-2.18px)] h-0 group-hover:h-[5px] rounded-bl-[20.26px] bg-linear-to-b from-slate-900 to-blue-900 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyValues;
