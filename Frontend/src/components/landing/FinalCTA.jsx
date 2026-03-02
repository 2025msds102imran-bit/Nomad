import React from "react";

const FinalCTA = () => {
  return (
    <section className="w-full relative bg-linear-to-b from-white via-gray-50/30 to-white overflow-hidden py-14 px-4">
      {/* Decorative elements */}
      <div className="absolute size-[700px] left-1/4 top-0 bg-cyan-900/5 rounded-full blur-3xl" />
      <div className="absolute size-[800px] left-[280px] top-[68px] bg-blue-400/5 rounded-full blur-3xl" />
      <div className="absolute size-28 right-[120px] top-[30px] origin-top-left rotate-12 rounded-2xl border-4 border-slate-900/10 hidden lg:block" />
      <div className="absolute size-32 left-[80px] bottom-0 bg-linear-to-br from-blue-400/10 to-transparent rounded-full hidden lg:block" />

      <div className="relative max-w-[896px] mx-auto flex flex-col items-center gap-9">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 px-5 py-3 bg-slate-900/5 rounded-full outline-[1.30px] outline-solid outline-slate-900/20">
          <span className="text-xl leading-7">🚀</span>
          <span className="text-slate-900 text-sm font-medium leading-5">Ready to Get Started?</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 leading-tight md:leading-[82.80px] text-center">
          Ready to Transform Your Recruitment?
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-normal leading-relaxed md:leading-10 text-center max-w-[768px]">
          Join companies and recruiters who are making smarter, fairer hiring decisions. Get started in minutes.
        </p>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          <div className="flex items-center gap-2">
            <div className="size-10 bg-green-100 rounded-full flex justify-center items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.9948 21.5911C14.5397 21.5911 16.9805 20.5801 18.7801 18.7805C20.5796 16.981 21.5906 14.5402 21.5906 11.9953C21.5906 9.45028 20.5796 7.00954 18.7801 5.20997C16.9805 3.4104 14.5397 2.39941 11.9948 2.39941C9.44979 2.39941 7.00905 3.4104 5.20948 5.20997C3.40991 7.00954 2.39893 9.45028 2.39893 11.9953C2.39893 14.5402 3.40991 16.981 5.20948 18.7805C7.00905 20.5801 9.44979 21.5911 11.9948 21.5911ZM16.4412 10.4443C16.6597 10.2181 16.7806 9.91511 16.7779 9.60061C16.7752 9.28611 16.649 8.98527 16.4266 8.76287C16.2042 8.54048 15.9034 8.41433 15.5889 8.4116C15.2744 8.40887 14.9714 8.52977 14.7452 8.74826L10.7953 12.6982L9.24436 11.1472C9.01813 10.9287 8.71514 10.8078 8.40064 10.8106C8.08614 10.8133 7.7853 10.9394 7.56291 11.1618C7.34051 11.3842 7.21436 11.6851 7.21163 11.9996C7.2089 12.3141 7.3298 12.6171 7.54829 12.8433L9.94725 15.2422C10.1722 15.4671 10.4772 15.5934 10.7953 15.5934C11.1133 15.5934 11.4184 15.4671 11.6433 15.2422L16.4412 10.4443Z" fill="#00A63E"/>
              </svg>
            </div>
            <span className="text-gray-600 text-sm font-medium leading-5">Free to Start</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="size-10 bg-blue-100 rounded-full flex justify-center items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9946 14.9938V16.993M5.99718 20.9912H17.992C18.5222 20.9912 19.0307 20.7806 19.4056 20.4057C19.7805 20.0308 19.9911 19.5223 19.9911 18.9921V12.9947C19.9911 12.4645 19.7805 11.956 19.4056 11.5811C19.0307 11.2062 18.5222 10.9956 17.992 10.9956H5.99718C5.46698 10.9956 4.95849 11.2062 4.58358 11.5811C4.20867 11.956 3.99805 12.4645 3.99805 12.9947V18.9921C3.99805 19.5223 4.20867 20.0308 4.58358 20.4057C4.95849 20.7806 5.46698 20.9912 5.99718 20.9912ZM15.9928 10.9956V6.99729C15.9928 5.93688 15.5716 4.91991 14.8218 4.17009C14.072 3.42027 13.055 2.99902 11.9946 2.99902C10.9342 2.99902 9.9172 3.42027 9.16738 4.17009C8.41756 4.91991 7.99631 5.93688 7.99631 6.99729V10.9956H15.9928Z" stroke="#155DFC" strokeWidth="1.999" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-gray-600 text-sm font-medium leading-5">Secure Payments</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="size-10 bg-purple-100 rounded-full flex justify-center items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.9941 9.99599V2.99902L3.99805 13.9943H10.995V20.9912L19.9911 9.99599H12.9941Z" stroke="#9810FA" strokeWidth="1.999" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-gray-600 text-sm font-medium leading-5">Instant Setup</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="w-72 h-16 bg-linear-to-l from-slate-900 to-blue-900 rounded-2xl overflow-hidden flex items-center justify-center gap-2 hover:opacity-90 transition">
            <span className="text-white text-base font-medium leading-6">Get Started for Free</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.1533 6.66016L17.4835 9.99036M17.4835 9.99036L14.1533 13.3206M17.4835 9.99036H2.49756" stroke="white" strokeWidth="1.665" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button className="w-60 h-16 bg-white rounded-2xl outline-[1.30px] outline-solid outline-gray-200 flex items-center justify-center hover:bg-gray-50 transition">
            <span className="text-slate-900 text-base font-medium leading-6">Schedule a Demo</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
