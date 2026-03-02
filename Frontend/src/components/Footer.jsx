import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="w-full relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0F172A 0%, #164E63 50%, #0F172A 100%)' }}>
      {/* Background layers */}
      <div className="absolute size-[500px] right-[-60px] top-0 bg-blue-400/10 rounded-full blur-3xl" />
      <div className="absolute size-[600px] left-0 top-[-20px] bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-linear-to-l from-slate-900 to-blue-900" />

      <div className="relative max-w-[1216px] mx-auto pt-20 px-6 flex flex-col items-start gap-12">
        {/* Logo + tagline */}
        <div className="w-full">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="relative size-14 shrink-0">
                <div className="absolute inset-0 bg-white/20 rounded-2xl blur-lg" />
                <img src={logo} alt="Nomad Recruitment" className="relative size-14 shadow-[0px_25px_50px_0px_rgba(0,0,0,0.15)]" />
              </div>
              <span className="text-white text-2xl font-semibold leading-8">Nomad Recruitment</span>
            </div>
            <p className="text-white/80 text-base font-normal leading-6 text-center">
              The transparent recruitment marketplace where both sides decide the deal.
            </p>
          </div>
        </div>

        {/* Nav links */}
        <div className="w-full pb-[1.30px] border-b-[1.30px] border-white/10">
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 pb-6">
            <a href="#" className="text-white/70 text-sm font-normal leading-5 hover:text-white transition">How It Works</a>
            <a href="#" className="text-white/70 text-sm font-normal leading-5 hover:text-white transition">Pricing</a>
            <a href="#" className="text-white/70 text-sm font-normal leading-5 hover:text-white transition">About Us</a>
            <span className="text-white/30 text-sm hidden sm:inline">•</span>
            <a href="#" className="text-white/70 text-sm font-normal leading-5 hover:text-white transition">For Companies</a>
            <a href="#" className="text-white/70 text-sm font-normal leading-5 hover:text-white transition">For Recruiters</a>
            <a href="#" className="text-white/70 text-sm font-normal leading-5 hover:text-white transition">FAQs</a>
            <span className="text-white/30 text-sm hidden sm:inline">•</span>
            <a href="#" className="text-white/70 text-sm font-normal leading-5 hover:text-white transition">Privacy Policy</a>
            <a href="#" className="text-white/70 text-sm font-normal leading-5 hover:text-white transition">Terms</a>
            <a href="#" className="text-white/70 text-sm font-normal leading-5 hover:text-white transition">Compliance</a>
          </div>
        </div>

        {/* Social icons */}
        <div className="w-full flex justify-center items-center gap-4">
          {/* LinkedIn */}
          <a href="#" className="size-12 bg-white/10 rounded-2xl outline-[1.30px] outline-solid outline-white/20 flex justify-center items-center hover:bg-white/20 transition">
            <span className="text-white text-base font-semibold leading-6">in</span>
          </a>
          {/* Facebook */}
          <a href="#" className="size-12 bg-white/10 rounded-2xl outline-[1.30px] outline-solid outline-white/20 flex justify-center items-center hover:bg-white/20 transition">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.4165 8.33333V11.6667H7.9165V17.5H11.2498V11.6667H13.7498L14.5832 8.33333H11.2498V6.66667C11.2498 6.2125 11.629 5.83333 12.0832 5.83333H14.5832V2.5H12.0832C9.814 2.5 7.9165 4.3975 7.9165 6.66667V8.33333H5.4165Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          {/* Twitter/X */}
          <a href="#" className="size-12 bg-white/10 rounded-2xl outline-[1.30px] outline-solid outline-white/20 flex justify-center items-center hover:bg-white/20 transition">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.7917 4.62477C12.1584 4.62466 11.5503 4.8732 11.0983 5.31691C10.6464 5.76061 10.3867 6.36402 10.3751 6.99727L10.3517 8.30977C10.3504 8.38024 10.3341 8.44963 10.3041 8.51337C10.274 8.57712 10.2308 8.63379 10.1773 8.67967C10.1238 8.72555 10.0612 8.75959 9.99358 8.77957C9.92598 8.79955 9.85493 8.80501 9.78508 8.7956L8.48341 8.61894C6.77258 8.3856 5.13258 7.59727 3.55841 6.28644C3.06091 9.04477 4.03341 10.9556 6.37758 12.4298L7.83341 13.3448C7.90263 13.3882 7.96017 13.4479 8.00098 13.5187C8.04178 13.5894 8.06463 13.6691 8.0675 13.7508C8.07038 13.8324 8.05321 13.9135 8.01748 13.987C7.98176 14.0605 7.92857 14.1241 7.86258 14.1723L6.53591 15.1414C7.32508 15.1906 8.07425 15.1556 8.69591 15.0323C12.6276 14.2473 15.2417 11.2889 15.2417 6.40894C15.2417 6.0106 14.3976 4.62477 12.7917 4.62477ZM8.70841 6.96644C8.72296 6.16315 8.97415 5.38199 9.43054 4.72079C9.88694 4.05958 10.5282 3.5477 11.2742 3.24924C12.0201 2.95078 12.8375 2.879 13.624 3.04289C14.4106 3.20678 15.1313 3.59906 15.6959 4.1706C16.2884 4.16644 16.7926 4.31644 17.9192 3.6331C17.6409 4.99977 17.5026 5.5931 16.9084 6.40894C16.9084 12.7773 12.9942 15.8739 9.02175 16.6664C6.29925 17.2098 2.33841 16.3173 1.20508 15.1323C1.78258 15.0873 4.13258 14.8348 5.49091 13.8406C4.34091 13.0823 -0.232422 10.3906 2.77341 3.15477C4.18452 4.80255 5.61508 5.92394 7.06508 6.51894C8.02924 6.91477 8.26675 6.90727 8.70925 6.96727" fill="white"/>
            </svg>
          </a>
        </div>

        {/* Copyright + bottom links */}
        <div className="w-full pt-8 border-t-[1.30px] border-white/10">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 pb-8">
            <p className="text-white/60 text-sm font-normal leading-5 text-center">
              © 2026 Nomad Recruitment. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/60 text-sm font-normal leading-5 hover:text-white transition">Status</a>
              <span className="text-white/30 text-sm">•</span>
              <a href="#" className="text-white/60 text-sm font-normal leading-5 hover:text-white transition">Security</a>
              <span className="text-white/30 text-sm">•</span>
              <a href="#" className="text-white/60 text-sm font-normal leading-5 hover:text-white transition">Cookie Settings</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
