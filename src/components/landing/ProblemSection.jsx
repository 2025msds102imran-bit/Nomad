import React from "react";

const ProblemSection = () => {
  return (
    <section className="w-full bg-linear-to-r from-[#0F172A] to-[#334F90] py-20 px-4">
      
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="text-center max-w-3xl">
          
          <div className="inline-block px-4 py-2 rounded-full border border-white/20 bg-white/10 text-white text-sm mb-6">
            THE CHALLENGE
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight">
            Problem with Traditional Recruitment
          </h2>

          <div className="w-28 h-1 mx-auto my-6 rounded-full bg-linear-to-r from-transparent to-white" />

          <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">
            Hidden fees, inflexible terms, and zero transparency leave both
            companies and recruiters frustrated.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-[900px]">
          
          {[
            {
              id: 1,
              title: "Hidden Costs & No Negotiation",
              text: "Traditional platforms charge hidden fees and restrict pricing flexibility, leaving both companies and recruiters with limited control."
            },
            {
              id: 2,
              title: "Payment Risk for Recruiters",
              text: "Recruiters invest time and resources upfront but face payment delays or disputes without guaranteed protection."
            },
            {
              id: 3,
              title: "Slow, Inefficient Process",
              text: "Endless back-and-forth communication, unclear expectations, and manual coordination waste valuable time."
            },
            {
              id: 4,
              title: "Lack of Control & Transparency",
              text: "Neither companies nor recruiters have full visibility. Terms are dictated by platforms instead of mutual agreement."
            }
          ].map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-[18px] p-6 flex flex-col gap-4 min-h-[240px] shadow-lg hover:shadow-xl transition duration-300"
            >
              
              <div className="flex justify-between items-center">
                
                <div className="w-12 h-12 rounded-xl bg-linear-to-r from-[#0F172A] to-[#334F90] text-white flex items-center justify-center font-semibold">
                  $
                </div>

                <div className="w-12 h-12 rounded-xl bg-linear-to-r from-[#0F172A] to-[#334F90] text-white flex items-center justify-center font-semibold">
                  {item.id}
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

export default ProblemSection;
