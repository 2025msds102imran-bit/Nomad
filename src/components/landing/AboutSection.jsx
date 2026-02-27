import React from "react";

/**
 * AboutSection — reusable component for both the landing page summary
 * and the full About page. Pass `full` prop to render extended content.
 */
const AboutSection = ({ full = false }) => {
  return (
    <>
      {/* ── Hero / Intro ── */}
      <section className="w-full bg-linear-to-b from-white to-[#F9FAFB4D] py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center">

          <div className="text-center max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-[#25406A14] text-sm font-medium mb-4">
              About Us
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              What is Nomad Recruitment?
            </h1>

            <div className="w-24 h-1 mx-auto my-6 rounded-full bg-linear-to-r from-[#0F172A] to-[#334F90]" />

            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-600">
              {full
                ? "Nomad Recruitment is an online recruitment marketplace that connects companies directly with recruiters and recruitment agencies. Instead of long contracts, high percentage fees, or one-sided control, Nomad lets both sides make clear agreements upfront."
                : "A transparent marketplace connecting companies with professional recruiters, built on fairness and mutual empowerment."}
            </p>
          </div>

          {/* ── Feature Cards (Marketplace & Process) ── */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[1040px]">

            {/* Card 1 — Marketplace */}
            <div className="group relative bg-white border-[1.08px] border-gray-200 rounded-[20px] shadow-md p-5 sm:p-8 hover:sm:pl-12 flex flex-col gap-4 min-h-[200px] sm:min-h-[272px] overflow-hidden transition-all duration-300">
              <div className="absolute top-[1.08px] left-[1.08px] w-[7px] h-[calc(100%-2.16px)] rounded-[13px] bg-linear-to-b from-[#0F172A] to-[#334F90] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-center justify-between">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-linear-to-r from-[#0F172A] to-[#334F90] text-white flex items-center justify-center font-semibold text-sm sm:text-base">
                  1
                </div>
                <div className="flex-1 h-px mx-3 sm:mx-4 bg-linear-to-r from-[#25406A4D] to-transparent" />
                <div className="bg-[#25406A14] rounded-full px-3 sm:px-4 py-1 text-xs sm:text-sm">
                  Marketplace
                </div>
              </div>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Nomad Recruitment is a transparent marketplace connecting
                companies with professional recruiters and agencies. Unlike
                traditional platforms with hidden fees and rigid structures, we
                give both parties full control over pricing, terms, and selection.
              </p>
            </div>

            {/* Card 2 — Process */}
            <div className="group relative bg-white border-[1.08px] border-gray-200 rounded-[20px] shadow-md p-5 sm:p-8 hover:sm:pl-12 flex flex-col gap-4 min-h-[200px] sm:min-h-[272px] overflow-hidden transition-all duration-300">
              <div className="absolute top-[1.08px] left-[1.08px] w-[7px] h-[calc(100%-2.16px)] rounded-[13px] bg-linear-to-b from-[#0F172A] to-[#334F90] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-center justify-between">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-linear-to-r from-[#0F172A] to-[#334F90] text-white flex items-center justify-center font-semibold text-sm sm:text-base">
                  2
                </div>
                <div className="flex-1 h-px mx-3 sm:mx-4 bg-linear-to-r from-[#25406A4D] to-transparent" />
                <div className="bg-[#25406A14] rounded-full px-3 sm:px-4 py-1 text-xs sm:text-sm">
                  Process
                </div>
              </div>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Companies post roles and review candidate proposals with upfront
                fees. Recruiters present qualified candidates and negotiate their
                terms directly. Payment is held securely and only released when
                the hire successfully starts work.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Extended content (full About page only) ── */}
      {full && (
        <>
        {/* ── "A New Way of Working" Banner ── */}
        <section className="w-full bg-white py-16 px-4 sm:py-20 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
          <div className='w-full max-w-5xl rounded-[24px] p-8 sm:p-12 bg-linear-to-b from-[#0F172A] to-[#334F90] flex items-center flex-col'>
            <h2 className='font-semibold text-3xl sm:text-[42px] leading-tight sm:leading-[56px] text-white'>A new way of working.</h2>
            <p className='max-w-3xl text-center text-base sm:text-[18px] leading-relaxed sm:leading-[32px] text-[#FFFFFFD9] mt-4'>Nomad isn't another recruitment platform. It's a new way of working. Instead of high percentage fees and one-sided control, we bring companies and recruiters together in one transparent marketplace. No CVs thrown over the fence. No paying without results. No unnecessary middlemen.</p>
            {/* Highlight pills */}
            <div className='flex flex-col sm:flex-row gap-4 w-full max-w-4xl justify-between mt-8'>
              <div className='flex-1 rounded-[16px] px-6 py-4 border border-[#FFFFFF33] bg-[#FFFFFF1A] flex justify-center items-center'>
                <p className='text-[15px] leading-[22.5px] font-medium text-white text-center'>No CVs thrown over the fence</p>
              </div>
              <div className='flex-1 rounded-[16px] px-6 py-4 border border-[#FFFFFF33] bg-[#FFFFFF1A] flex justify-center items-center'>
                <p className='text-[15px] leading-[22.5px] font-medium text-white text-center'>No paying without results</p>
              </div>
              <div className='flex-1 rounded-[16px] px-6 py-4 border border-[#FFFFFF33] bg-[#FFFFFF1A] flex justify-center items-center'>
                <p className='text-[15px] leading-[22.5px] font-medium text-white text-center'>No unnecessary middlemen</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── "Recruitment Should Be Simple" Split Section ── */}
        <div className='w-full py-10 sm:py-14 md:py-16'>
          <div className='max-w-7xl mx-auto px-5 sm:px-8 md:px-12 flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-10 items-start'>
            <h2 className='text-[28px] sm:text-[34px] md:text-[42px] font-semibold leading-[1.3] md:leading-[56px] text-[#0F172A] w-full md:max-w-[523px] md:shrink-0'>Recruitment should be simple.</h2>
            <p className='w-full md:flex-1 text-[15px] sm:text-base md:text-[17px] text-[#4A5565] leading-[1.7]'>In reality, it often isn't. For companies, hiring talent has become expensive and unpredictable. On the other side, recruiters face work without guarantees. Nomad changes this by putting clarity, control, and fairness back into the process, turning recruitment into what it should be: direct, transparent, and based on real results.</p>
          </div>
        </div>

        {/* ── CTA — "Ready to Join the Revolution?" ── */}
        <div className='w-full pt-10 sm:pt-[64px] px-5 sm:px-10 lg:px-[80px] pb-10 sm:pb-14 flex flex-col items-center' style={{ background: 'linear-gradient(270deg, #0F172A 0%, #334F90 100%)' }}>
          <div className="flex flex-col items-center gap-3 sm:gap-4">
            <h1 className="text-2xl sm:text-3xl md:text-[42px] font-semibold leading-tight md:leading-[54px] text-center text-white max-w-[1216px]">Ready to Join the Revolution?</h1>
            <p className="text-sm sm:text-base md:text-[20px] font-normal leading-relaxed md:leading-[32px] text-center text-[#FFFFFFD9] max-w-[915px]">Whether you're a company looking for talent or a recruiter ready to grow—Nomad is built for you.</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-[16px] max-w-[1216px] w-full mt-5">
            <button className="w-full sm:w-[196px] h-[49px] rounded-[14px] border-[1.1px] border-white bg-white text-[#0F172A] font-semibold text-sm shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A] hover:scale-105 transition">Get Started Today</button>
            <button className="w-full sm:w-[196px] h-[49px] rounded-[14px] border-[1.1px] border-white bg-transparent text-white font-semibold text-sm hover:bg-white/10 hover:scale-105 transition">Learn More</button>
          </div>
        </div>

        {/* ── "Quality Matters" + Verified Trust Cards ── */}
        <div className="w-full bg-[#F9FAFB] py-10 sm:py-[56px] px-5 sm:px-8 md:px-16 lg:px-[270px] flex flex-col items-center gap-8 sm:gap-[48px]">
          {/* Shield icon */}
          <div className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] rounded-full flex justify-center items-center" style={{ background: 'linear-gradient(270deg, #0F172A 0%, #334F90 100%)' }}>
            <svg className="w-7 h-7 sm:w-10 sm:h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.9974 19.9966L18.3302 23.3294L24.9957 16.6638M34.3575 9.97159C29.0886 10.2514 23.9238 8.42953 19.9966 4.90576C16.0693 8.42953 10.9045 10.2514 5.63559 9.97159C5.21155 11.6132 4.99765 13.302 4.99903 14.9974C4.99903 24.3142 11.3713 32.1446 19.9966 34.3642C28.6218 32.1446 34.9941 24.3159 34.9941 14.9974C34.9941 13.261 34.7724 11.578 34.3575 9.97159Z" stroke="white" strokeWidth="3.33278" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-[42px] font-semibold leading-tight md:leading-[56px] text-center text-[#0F172A] max-w-[717px]">Quality matters — especially in recruitment.</h1>
          <p className="text-sm sm:text-base md:text-[18px] font-normal leading-relaxed md:leading-[32px] text-center text-[#4A5565] max-w-[895px]">Nomad is built around trust. Companies, recruiters, and recruitment agencies are verified before they can actively use the platform. By keeping the platform focused on quality, Nomad creates a safer and more reliable environment where connections are meaningful.</p>

          {/* Verified trust cards */}
          {/* Verified trust cards */}
          <div className="w-full max-w-[900px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white rounded-2xl shadow-sm p-5 sm:p-6 flex flex-col items-center text-center gap-2 sm:gap-3">
              <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#0F172A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              <h3 className="font-semibold text-sm sm:text-base text-[#0F172A]">Verified Companies</h3>
              <p className="text-xs sm:text-sm text-gray-500">Every company is manually reviewed</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-5 sm:p-6 flex flex-col items-center text-center gap-2 sm:gap-3">
              <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#0F172A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              <h3 className="font-semibold text-sm sm:text-base text-[#0F172A]">Verified Recruiters</h3>
              <p className="text-xs sm:text-sm text-gray-500">Only qualified professionals join</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-5 sm:p-6 flex flex-col items-center text-center gap-2 sm:gap-3">
              <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#0F172A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              <h3 className="font-semibold text-sm sm:text-base text-[#0F172A]">Verified Agencies</h3>
              <p className="text-xs sm:text-sm text-gray-500">Trusted partners, proven track record</p>
            </div>
          </div>
        </div>
        </>
      )}
    </>
  );
};

export default AboutSection;
