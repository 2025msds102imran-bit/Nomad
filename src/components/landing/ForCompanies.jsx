import React from "react";

const ForCompanies = () => {
    return (
        <section className="w-full bg-white py-16 sm:py-20 px-4">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">

                <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-[18px] max-w-[568px] w-full">

                    <div className="inline-block px-4 py-2 rounded-full bg-[#0F172A14] text-sm">
                        For Companies
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
                        For Companies & Hiring Teams
                    </h2>

                    <div className="w-24 h-1 bg-linear-to-r from-[#0F172A] to-[#334F90] rounded-full mx-auto lg:mx-0" />

                    <p className="text-base sm:text-lg text-[#364153] leading-relaxed">
                        Stop overpaying for recruitment. Choose from multiple qualified candidates, negotiate fees directly, and only pay when someone starts.
                    </p>

                    <div className="w-full min-h-[135px] border-[1.3px] border-[#0F172A1A] rounded-[24px] px-[33px] pt-[33px] pb-[1.3px] flex items-start" style={{ background: 'linear-gradient(135deg, rgba(37, 64, 106, 0.03) 0%, rgba(239, 246, 255, 0.3) 50%, rgba(0, 0, 0, 0) 100%)' }}>
                        <div className="flex justify-between items-start w-[70%] h-[68px]">
                            <div>
                                <h3 className="text-2xl font-bold">30-50%</h3>
                                <p className="text-sm text-[#4A5565]">Cost Savings</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">50%</h3>
                                <p className="text-sm text-[#4A5565]">Faster Hiring</p>
                            </div>
                        </div>
                    </div>

                    <button className="w-full sm:w-auto bg-linear-to-r from-[#0F172A] to-[#334F90] text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 flex justify-center items-center gap-2">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3206 16.6509V3.33014C13.3206 2.88853 13.1451 2.465 12.8329 2.15274C12.5206 1.84047 12.0971 1.66504 11.6555 1.66504H8.32526C7.88364 1.66504 7.46012 1.84047 7.14785 2.15274C6.83559 2.465 6.66016 2.88853 6.66016 3.33014V16.6509" stroke="white" strokeWidth="1.6651" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16.6509 4.99512H3.33014C2.41053 4.99512 1.66504 5.74061 1.66504 6.66022V14.9857C1.66504 15.9053 2.41053 16.6508 3.33014 16.6508H16.6509C17.5705 16.6508 18.316 15.9053 18.316 14.9857V6.66022C18.316 5.74061 17.5705 4.99512 16.6509 4.99512Z" stroke="white" strokeWidth="1.6651" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Post Your First Role
                    </button>
                </div>

                <div className="flex-1 flex flex-col gap-[20px] max-w-[568px] h-[740px] w-full">
                    {[
                        "Post your role and receive multiple candidate proposals with transparent fees",
                        "Review recruiter profiles, ratings, and past placements before choosing",
                        "Negotiate fees directly—no hidden markups or percentage surprises",
                        "Only pay when the candidate starts work—zero risk, total protection",
                        "Access a global network of vetted recruiters and agencies",
                        "Save 30-50% compared to traditional agency fees",
                        "Fill roles faster with competitive, motivated recruiters"
                    ].map((text, index) => (
                        <div
                            key={index}
                            className="border-[1.3px] border-[#F3F4F6] rounded-[16px] p-[20px] flex gap-[20px] items-center bg-white min-h-[96px] hover:shadow-md transition"
                        >
                            <div className="w-10 h-10 rounded-md bg-linear-to-r from-[#0F172A] to-[#334F90] flex items-center justify-center shrink-0">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.99054 18.316C14.5886 18.316 18.316 14.5886 18.316 9.99054C18.316 5.39249 14.5886 1.66504 9.99054 1.66504C5.39249 1.66504 1.66504 5.39249 1.66504 9.99054C1.66504 14.5886 5.39249 18.316 9.99054 18.316Z" stroke="white" strokeWidth="1.6651" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.49316 9.99078L9.15826 11.6559L12.4885 8.32568" stroke="white" strokeWidth="1.6651" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </div>
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                {text}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ForCompanies;
