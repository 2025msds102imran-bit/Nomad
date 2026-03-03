import React from "react";

const PaymentsTrust = () => {
  return (
    <section className="w-full relative min-h-[600px] bg-linear-to-b from-white via-gray-50/30 to-white overflow-hidden py-16 sm:py-20 px-4 flex items-center justify-center">
      {/* Decorative background blurs - Figma: size-[599.98px] left-[480.24px], size-[500px] left-[460.52px] top-[264px] */}
      <div className="absolute size-[600px] left-1/2 -translate-x-1/2 top-0 bg-slate-900/5 rounded-full blur-3xl" />
      <div className="absolute size-[500px] left-1/2 -translate-x-1/2 top-[264px] bg-blue-400/5 rounded-full blur-3xl" />

      {/* Main card - Figma: w-[1055px] h-96, absolute positioning throughout */}
      <div className="relative w-full max-w-[1055px] min-h-[620px] md:min-h-0 md:h-110 rounded-3xl shadow-[0px_22.895248413085938px_45.790496826171875px_-10.98971939086914px_rgba(0,0,0,0.25)] overflow-hidden bg-linear-to-b from-slate-900 via-cyan-900 to-slate-900">
        {/* Inner decorative blurs - Figma: left-[597.10px] and left-0 top-[-21.95px] */}
        <div className="absolute size-[457.90px] left-[597.10px] top-0 bg-blue-400/20 rounded-full blur-3xl hidden sm:block" />
        <div className="absolute size-[457.90px] right-0 top-0 bg-blue-400/20 rounded-full blur-3xl sm:hidden" />
        <div className="absolute size-[457.90px] left-0 top-[-21.95px] bg-blue-500/20 rounded-full blur-3xl" />
        {/* Content overlay - Figma: px-11 pt-11, from-slate-900 to-blue-900 */}
        <div className="absolute w-full h-full left-0 top-0 px-6 sm:px-11 pt-11 bg-linear-to-b from-slate-900 to-blue-900 rounded-2xl" />

        {/* Header - Figma: w-[908.50px] h-20 left-[73.25px] top-[73.25px] */}
        <div className="absolute w-[calc(100%-88px)] max-w-[908.50px] h-20 left-6 sm:left-[73.25px] top-[44px] sm:top-[73.25px]">
          {/* Icon - Figma: size-20 left-0 top-0 */}
          <div className="absolute size-20 left-0 top-0">
            <div className="absolute size-20 left-0 top-0 bg-slate-900 rounded-2xl shadow-[0px_22.895248413085938px_45.790496826171875px_-10.98971939086914px_rgba(0,0,0,0.25)] inline-flex justify-center items-center">
              <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.9881 16.7822H7.62852C5.9433 16.7822 4.57715 18.1484 4.57715 19.8336V30.5134C4.57715 32.1986 5.9433 33.5648 7.62852 33.5648H28.9881C30.6734 33.5648 32.0395 32.1986 32.0395 30.5134V19.8336C32.0395 18.1484 30.6734 16.7822 28.9881 16.7822Z" stroke="white" strokeWidth="3.05" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.6802 16.7829V10.6802C10.6802 8.65701 11.4839 6.71668 12.9145 5.28607C14.3451 3.85547 16.2854 3.05176 18.3086 3.05176C20.3318 3.05176 22.2721 3.85547 23.7027 5.28607C25.1333 6.71668 25.937 8.65701 25.937 10.6802V16.7829" stroke="white" strokeWidth="3.05" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="absolute size-20 left-0 top-0 bg-white/10 rounded-2xl blur-xl" />
          </div>
          {/* Heading + divider - Figma: left-[102.54px] top-0, to-black/0 */}
          <div className="absolute left-[102.54px] top-0 w-[calc(100%-102.54px)] max-w-[805.95px] h-20">
            <h2 className="absolute left-0 top-[-1.19px] text-white text-2xl sm:text-3xl lg:text-5xl font-semibold leading-[52.75px]">
              Secure Payments Powered by Stripe
            </h2>
            <div className="absolute w-24 h-1.5 left-0 top-[74.72px] rounded-full bg-linear-to-r from-white via-white/60 to-black/0" />
          </div>
        </div>

        {/* Info cards - Figma: w-[908.50px] h-40 left-[73.25px] top-[197.41px] */}
        <div className="absolute  flex flex-row justify-between w-[calc(100%-88px)] max-w-[908.50px] min-h-[336px] md:min-h-40 md:h-40 left-6 sm:left-[73.25px] top-[180px] sm:top-[197.41px]">
          {/* Card 1 - Figma: w-96 h-40 left-0 top-0 */}
          <div className="absolute w-[443px] h-40 left-0 top-0 bg-white rounded-2xl outline-[1.19px] outline outline-offset-[-1.19px] outline-white px-7 pt-7 pb-[1.19px] inline-flex flex-col justify-start items-start gap-3.5">
            <div className="self-stretch h-6 relative">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-0 top-[7.32px]">
                <path d="M0 3.66165C0 1.63938 1.63938 0 3.66165 0C5.68392 0 7.3233 1.63938 7.3233 3.66165C7.3233 5.68392 5.68392 7.3233 3.66165 7.3233C1.63938 7.3233 0 5.68392 0 3.66165Z" fill="#0F172A"/>
              </svg>
              <div className="absolute w-52 h-6 left-[18.30px] top-0">
                <span className="absolute left-0 top-[-0.37px] text-slate-900 text-base font-medium leading-6">Industry-Standard Security</span>
              </div>
            </div>
            <div className="self-stretch h-16 relative overflow-hidden">
              <p className="absolute w-full max-w-96 left-[18.30px] top-[-1.29px] text-gray-600/90 text-sm font-normal leading-6">Payments processed through Stripe with funds held in escrow until the candidate starts work, protecting both parties.</p>
            </div>
          </div>
          {/* Card 2 - Figma: w-96 h-40 left-[465.22px] top-0 */}
          <div className="absolute w-[443px] h-40 left-0 top-[176px] md:left-[465.22px] md:top-0 bg-white rounded-2xl outline-[1.19px] outline outline-offset-[-1.19px] outline-white px-7 pt-7 pb-[1.19px] inline-flex flex-col justify-start items-start gap-3.5">
            <div className="self-stretch h-6 relative">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-0 top-[7.32px]">
                <path d="M0 3.66165C0 1.63938 1.63938 0 3.66165 0C5.68392 0 7.3233 1.63938 7.3233 3.66165C7.3233 5.68392 5.68392 7.3233 3.66165 7.3233C1.63938 7.3233 0 5.68392 0 3.66165Z" fill="#0F172A"/>
              </svg>
              <div className="absolute w-40 h-6 left-[18.30px] top-0">
                <span className="absolute left-0 top-[-0.37px] text-slate-900 text-base font-medium leading-6">Guaranteed Results</span>
              </div>
            </div>
            <div className="self-stretch h-16 relative overflow-hidden">
              <p className="absolute w-full max-w-96 left-[18.30px] top-[-1.29px] text-gray-600/90 text-sm font-normal leading-6">Pay only for successful hires. Recruiters guaranteed payment on delivery. No disputes, delays, or uncertainty.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentsTrust;
