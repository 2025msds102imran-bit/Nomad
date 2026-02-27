import React from "react";

const HowItWorks = () => {
  return (
    <section className="w-full bg-[#FFFFFF] py-20 px-4">
      
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="text-center max-w-3xl">
          
          <div className="inline-block px-4 py-2 rounded-full border border-white/20 bg-[#0F172A14] text-sm mb-6">
            Our Process
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold  leading-tight">
            How Nomad Works
          </h2>

          <div className="w-28 h-1 mx-auto my-6 rounded-full bg-linear-to-r from-[#0F172A] to-[#334F90]" />

          <p className="text-base sm:text-lg md:text-xl text-[#364153] font-normal leading-[40.8px] leading-relaxed">
            A simple, transparent process that puts both companies and recruiters in control.
          </p>
        </div>

        <div className="mt-16 flex flex-col justify-center items-center md:flex-row sm:grid-cols-2 lg:grid-cols-2 gap-8 w-full">
          
          {[
            {
              id: 1,
              title: "Companies Post jobs",
              text: "Create detailed job listings with requirements and budget.Set your terms and wait for qualified recruiters."
            },
            {
              id: 2,
              title: "Recruiters Submit Candidates",
              text: "Professional recruiters submit qualified candidates with proposed fees and complete details."
            },
            {
              id: 3,
              title: "Negotiate & Select",
              text: "Review proposals, compare options, and negotiate directly with full control over selection."
            },
            {
              id: 4,
              title: "Secure Payment",
              text: "Payment held securely in escrow and released only when the candidate starts work."
            }
          ].map((item) => (
            <div
              key={item.id}
              className="group relative bg-white w-[268.84px] h-[331.25px] rounded-2xl shadow-lg p-6 flex flex-col justify-center gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute bottom-[1px] left-[1px] h-[7px] w-[calc(100%-2px)] rounded-[13px] bg-linear-to-r from-[#0F172A] to-[#334F90] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div>
                  <div className="w-12 h-12 rounded-xl bg-linear-to-r from-[#0F172A] to-[#334F90] text-white flex items-center justify-center font-semibold">
                    {item.id}
                  </div>
                
                <div className="w-12 h-[5.63px] mt-[5px] rounded-xl bg-linear-to-r from-[#0F172A] to-[#334F90]">
                </div>
              </div>

              <h3 className="text-lg font-semibold">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {item.text}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
