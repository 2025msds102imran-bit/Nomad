import React from "react";

const cards = [
  {
    id: 1,
    title: "Hidden Costs & No Negotiation",
    text: "Companies are locked into rigid fee structures with no room to negotiate. Pricing is often unclear until the very end, leading to budget surprises and mistrust.",
    icon: (
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.3198 2.05322V22.5864" stroke="white" strokeWidth="2.053" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.4529 5.1333H9.75297C8.79996 5.1333 7.886 5.51188 7.21212 6.18575C6.53825 6.85963 6.15967 7.7736 6.15967 8.7266C6.15967 9.6796 6.53825 10.5936 7.21212 11.2674C7.886 11.9413 8.79996 12.3199 9.75297 12.3199H14.8863C15.8393 12.3199 16.7532 12.6985 17.4271 13.3724C18.101 14.0462 18.4795 14.9602 18.4795 15.9132C18.4795 16.8662 18.101 17.7802 17.4271 18.454C16.7532 19.1279 15.8393 19.5065 14.8863 19.5065H6.15967" stroke="white" strokeWidth="2.053" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Payment Risk for Recruiters",
    text: "Recruiters invest time and resources upfront but face payment delays or disputes. There's no guarantee they'll be compensated fairly for successful placements.",
    icon: (
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.3198 22.5864C17.9899 22.5864 22.5864 17.9899 22.5864 12.3198C22.5864 6.64972 17.9899 2.05322 12.3198 2.05322C6.64972 2.05322 2.05322 6.64972 2.05322 12.3198C2.05322 17.9899 6.64972 22.5864 12.3198 22.5864Z" stroke="white" strokeWidth="2.053" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12.3203 8.21338V12.32" stroke="white" strokeWidth="2.053" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12.3203 16.4263H12.3314" stroke="white" strokeWidth="2.053" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Slow, Inefficient Process",
    text: "Traditional recruitment involves endless back-and-forth, unclear expectations, and wasted time. Both parties spend weeks navigating unclear processes.",
    icon: (
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.3208 22.5866C17.9908 22.5866 22.5873 17.9901 22.5873 12.32C22.5873 6.64997 17.9908 2.05347 12.3208 2.05347C6.6507 2.05347 2.0542 6.64997 2.0542 12.32C2.0542 17.9901 6.6507 22.5866 12.3208 22.5866Z" stroke="white" strokeWidth="2.053" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12.3203 6.16016V12.3201L16.4269 14.3734" stroke="white" strokeWidth="2.053" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Lack of Control & Transparency",
    text: "Neither companies nor recruiters have full visibility into the process. Terms are dictated by platforms, not negotiated between the parties who matter most.",
    icon: (
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.5334 13.3464C20.5334 18.4797 16.9401 21.0463 12.6693 22.535C12.4456 22.6108 12.2027 22.6072 11.9814 22.5247C7.70023 21.0463 4.10693 18.4797 4.10693 13.3464V6.15982C4.10693 5.88754 4.2151 5.6264 4.40763 5.43387C4.60017 5.24133 4.8613 5.13317 5.13359 5.13317C7.1869 5.13317 9.75355 3.90118 11.5399 2.34066C11.7574 2.15483 12.0341 2.05273 12.3202 2.05273C12.6063 2.05273 12.8829 2.15483 13.1004 2.34066C14.8971 3.91144 17.4535 5.13317 19.5068 5.13317C19.7791 5.13317 20.0402 5.24133 20.2327 5.43387C20.4253 5.6264 20.5334 5.88754 20.5334 6.15982V13.3464Z" stroke="white" strokeWidth="2.053" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12.3203 8.21338V12.32" stroke="white" strokeWidth="2.053" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12.3203 16.4265H12.3314" stroke="white" strokeWidth="2.053" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const ProblemCard = ({ item, className = "" }) => (
  <div className={`relative bg-white/95 rounded-2xl outline-[1px] outline-solid outline-white/50 overflow-hidden p-8 flex flex-col gap-0 min-h-[240px] ${className}`}>
    {/* Decorative top-right blur */}
    <div className="absolute size-[75px] -right-3 -top-3 bg-linear-to-br from-[#25406A]/20 to-[#4A90E2]/20 rounded-full blur-[18px]" />

    {/* Number badge (top-right) */}
    <div className="absolute right-[24px] top-[13px] size-8 bg-linear-to-l from-slate-900 to-blue-900 rounded-md flex justify-center items-center">
      <span className="text-white text-xs font-bold leading-4">{item.id}</span>
    </div>

    {/* Icon */}
    <div className="size-12 bg-linear-to-l from-slate-900 to-blue-900 rounded-xl flex justify-center items-center mb-5">
      {item.icon}
    </div>

    {/* Title */}
    <h3 className="text-slate-900 text-lg font-semibold leading-6 mb-3">{item.title}</h3>

    {/* Description */}
    <p className="text-gray-700 text-sm font-normal leading-6">{item.text}</p>

    {/* Bottom accent bar */}
    <div className="absolute left-px bottom-[4px] w-0 h-1 bg-slate-900 rounded-bl-2xl" />
  </div>
);

const VerticalConnector = () => (
  <svg width="1" height="25" viewBox="0 0 1 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
    <rect width="0.764" height="24.64" fill="url(#connectorGrad)" />
    <defs>
      <linearGradient id="connectorGrad" x1="0.38" y1="0" x2="0.38" y2="24.64" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" stopOpacity="0.3" />
        <stop offset="1" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

const ProblemSection = () => {
  return (
    <section className="w-full relative shadow-2xl overflow-hidden py-14 sm:py-16 px-4" style={{ background: 'linear-gradient(to left, #0F172A, #334F90)' }}>
      {/* Background decorative elements */}
      <div className="absolute size-[600px] left-0 top-0 bg-blue-400/20 rounded-full blur-3xl" />
      <div className="absolute size-[800px] left-[320px] top-[478px] bg-white/5 rounded-full blur-3xl" />
      <div className="absolute size-36 right-[80px] top-[68px] origin-top-left rotate-12 opacity-95 rounded-2xl border-[1.30px] border-white/10 hidden lg:block" />
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle,white,transparent)]" />

      <div className="relative max-w-[1280px] mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 max-w-[896px] text-center">
          <div className="inline-flex justify-center items-center px-6 py-2.5 bg-white/10 rounded-full shadow-[0px_21.5px_43px_-10.3px_rgba(0,0,0,0.25)] outline-[1.11px] outline-solid outline-white/20">
            <span className="text-white/95 text-xs font-medium uppercase leading-4 tracking-wide">The Challenge</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight md:leading-[79.20px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.15)]">
            Problem with Traditional Recruitment
          </h2>

          <div className="w-32 h-2 rounded-full shadow-2xl" style={{ background: 'linear-gradient(180deg, transparent 0%, white 50%, transparent 100%)' }} />

          <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed md:leading-10 max-w-[768px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)]">
            Hidden fees, inflexible terms, and zero transparency leave both companies and recruiters frustrated.
          </p>
        </div>

        {/* Cards — staggered 2x2 grid on desktop, stacked on mobile */}
        <div className="mt-16 w-full max-w-[887px] relative">
          {/* Decorative blue blur behind bottom-right cards */}
          <div className="absolute size-[540px] right-[-40px] bottom-[-80px] bg-blue-500/20 rounded-full blur-[49px]" />

          {/* Mobile: stacked, Desktop: staggered 2-col */}
          <div className="relative flex flex-col gap-6 lg:hidden">
            {cards.map((item) => (
              <ProblemCard key={item.id} item={item} />
            ))}
          </div>

          <div className="relative hidden lg:block">
            {/* Row 1 */}
            <div className="flex gap-[38px]">
              <div className="flex-1 -mt-[57px]">
                <ProblemCard item={cards[0]} />
              </div>
              <div className="flex-1 -mt-[20px]">
                <ProblemCard item={cards[1]} />
              </div>
            </div>

            {/* Vertical connectors */}
            <div className="flex gap-[38px] py-2">
              <div className="flex-1 flex justify-center">
                <VerticalConnector />
              </div>
              <div className="flex-1 flex justify-center">
                <VerticalConnector />
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex gap-[38px]">
              <div className="flex-1">
                <ProblemCard item={cards[2]} />
              </div>
              <div className="flex-1 mt-[20px]">
                <ProblemCard item={cards[3]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
