import React from "react";

const PaymentsTrust = () => {
  return (
    <section className="w-full relative bg-linear-to-b from-white via-gray-50/30 to-white overflow-hidden py-16 sm:py-20 px-4">
      {/* Decorative background blurs */}
      <div className="absolute size-[600px] left-1/3 top-0 bg-slate-900/5 rounded-full blur-3xl" />
      <div className="absolute size-[500px] left-1/3 top-[264px] bg-blue-400/5 rounded-full blur-3xl" />

      <div className="relative max-w-[1055px] mx-auto">
        {/* Main card */}
        <div className="relative rounded-3xl shadow-[0px_22.9px_45.8px_-11px_rgba(0,0,0,0.25)] overflow-hidden">
          {/* Background layers */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #0F172A 0%, #164E63 50%, #0F172A 100%)' }} />
          <div className="absolute size-[458px] right-0 top-0 bg-blue-400/20 rounded-full blur-3xl" />
          <div className="absolute size-[458px] left-0 top-[-22px] bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute inset-0 rounded-2xl" style={{ background: 'linear-gradient(180deg, #0F172A 0%, #1E3A5F 100%)' }} />

          {/* Content */}
          <div className="relative px-6 sm:px-11 pt-11 pb-10 flex flex-col gap-8">
            {/* Header row */}
            <div className="flex flex-col sm:flex-row items-start gap-6">
              {/* Lock icon */}
              <div className="relative size-20 shrink-0">
                <div className="absolute inset-0 bg-white/10 rounded-2xl blur-xl" />
                <div className="relative size-20 bg-slate-900 rounded-2xl shadow-[0px_22.9px_45.8px_-11px_rgba(0,0,0,0.25)] flex justify-center items-center">
                  <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.9881 16.7822H7.62852C5.9433 16.7822 4.57715 18.1484 4.57715 19.8336V30.5134C4.57715 32.1986 5.9433 33.5648 7.62852 33.5648H28.9881C30.6734 33.5648 32.0395 32.1986 32.0395 30.5134V19.8336C32.0395 18.1484 30.6734 16.7822 28.9881 16.7822Z" stroke="white" strokeWidth="3.05" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.6802 16.7829V10.6802C10.6802 8.65701 11.4839 6.71668 12.9145 5.28607C14.3451 3.85547 16.2854 3.05176 18.3086 3.05176C20.3318 3.05176 22.2721 3.85547 23.7027 5.28607C25.1333 6.71668 25.937 8.65701 25.937 10.6802V16.7829" stroke="white" strokeWidth="3.05" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Heading + underline */}
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-white leading-tight lg:leading-[52.75px]">
                  Secure Payments Powered by Stripe
                </h2>
                <div className="w-24 h-1.5 mt-5 bg-linear-to-r from-white via-white/60 to-transparent rounded-full" />
              </div>
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl outline-[1.19px] outline-solid outline-white px-7 pt-7 pb-[1.19px] flex flex-col gap-3.5">
                <div className="flex items-center gap-[18px]">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 mt-[7px]">
                    <path d="M0 3.66165C0 1.63938 1.63938 0 3.66165 0C5.68392 0 7.3233 1.63938 7.3233 3.66165C7.3233 5.68392 5.68392 7.3233 3.66165 7.3233C1.63938 7.3233 0 5.68392 0 3.66165Z" fill="#0F172A"/>
                  </svg>
                  <h3 className="text-slate-900 text-base font-medium leading-6">Industry-Standard Security</h3>
                </div>
                <p className="text-gray-600/90 text-sm font-normal leading-6 pl-[26px]">
                  Payments processed through Stripe with funds held in escrow until the candidate starts work, protecting both parties.
                </p>
              </div>

              <div className="bg-white rounded-2xl outline-[1.19px] outline-solid outline-white px-7 pt-7 pb-[1.19px] flex flex-col gap-3.5">
                <div className="flex items-center gap-[18px]">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 mt-[7px]">
                    <path d="M0 3.66165C0 1.63938 1.63938 0 3.66165 0C5.68392 0 7.3233 1.63938 7.3233 3.66165C7.3233 5.68392 5.68392 7.3233 3.66165 7.3233C1.63938 7.3233 0 5.68392 0 3.66165Z" fill="#0F172A"/>
                  </svg>
                  <h3 className="text-slate-900 text-base font-medium leading-6">Guaranteed Results</h3>
                </div>
                <p className="text-gray-600/90 text-sm font-normal leading-6 pl-[26px]">
                  Pay only for successful hires. Recruiters guaranteed payment on delivery. No disputes, delays, or uncertainty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentsTrust;
