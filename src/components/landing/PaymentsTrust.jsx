import React from "react";

const PaymentsTrust = () => {
    return (
        <section className="w-full bg-linear-to-b from-white via-[#F9FAFB4D] to-white py-16 sm:py-20 px-4">
            <div className="max-w-7xl mx-auto">

                <div className="bg-linear-to-b from-[#0F172A] to-[#334F90] rounded-[15px] shadow-xl px-[44px] pt-[44px] pb-10 flex flex-col gap-10 max-w-[1055px] mx-auto">

                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">

                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl  border border-white/20 flex items-center justify-center shrink-0">
                            <svg width="162" height="162" viewBox="0 0 162 162" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_f_48_1408)">
                                    <path d="M43.959 58.612C43.959 50.5194 50.5193 43.959 58.6119 43.959H102.558C110.65 43.959 117.211 50.5193 117.211 58.6119V102.558C117.211 110.65 110.65 117.211 102.558 117.211H58.612C50.5194 117.211 43.959 110.65 43.959 102.558V58.612Z" fill="white" fillOpacity="0.1" />
                                </g>
                                <defs>
                                    <filter id="filter0_f_48_1408" x="0.000106812" y="0.000106812" width="161.169" height="161.169" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                        <feGaussianBlur stdDeviation="21.9794" result="effect1_foregroundBlur_48_1408" />
                                    </filter>
                                </defs>
                            </svg>

                        </div>

                        <div>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white">
                                Secure Payments Powered by Stripe
                            </h2>

                            <div className="w-24 h-1 mt-4 bg-linear-to-r from-white via-white/60 to-transparent rounded-full mx-auto sm:mx-0" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4 hover:shadow-lg transition">
                            <h3 className="font-semibold text-sm sm:text-base flex items-center gap-2">
                                <span className="w-2 h-2 bg-[#0F172A] rounded-full"></span>
                                Industry-Standard Security
                            </h3>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                Payments processed through Stripe with funds held in escrow
                                until the candidate starts work, protecting both parties.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4 hover:shadow-lg transition">
                            <h3 className="font-semibold text-sm sm:text-base flex items-center gap-2">
                                <span className="w-2 h-2 bg-[#0F172A] rounded-full"></span>
                                Guaranteed Results
                            </h3>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                Pay only for successful hires. Recruiters guaranteed payment
                                on delivery. No disputes, delays, or uncertainty.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default PaymentsTrust;
