import React from "react";

const KeyValues = () => {
    return (
        <section className="w-full bg-linear-to-b from-[#F9FAFB] via-[#FFFFFF] to-[#F9FAFB80] py-20 px-4">

            <div className="max-w-7xl mx-auto flex flex-col items-center">

                <div className="text-center max-w-3xl">

                    <div className="inline-block px-4 py-2 rounded-full border border-white/20 bg-[#0F172A14] text-sm mb-6">
                        Core Values
                    </div>

                    <h2 className="text-[42px] sm:text-4xl md:text-5xl font-semibold  leading-[60.2px]">
                        Why Companies & Recruiters Choose Nomad
                    </h2>

                    <div className="w-28 h-1 mx-auto my-6 rounded-full bg-linear-to-r from-[#0F172A] to-[#334F90]" />

                </div>

                <div className="mt-16 flex flex-col justify-center items-center md:flex-row sm:grid-cols-2 lg:grid-cols-2 gap-8 w-full">

                    {[
                        {
                            id: 1,
                            img: <svg width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.1257 13.501C19.1257 19.1262 15.188 21.9388 10.5079 23.5701C10.2628 23.6532 9.99657 23.6492 9.75408 23.5589C5.06265 21.9388 1.125 19.1262 1.125 13.501V5.62568C1.125 5.3273 1.24353 5.04114 1.45452 4.83015C1.6655 4.61917 1.95166 4.50064 2.25004 4.50064C4.50013 4.50064 7.31274 3.15058 9.27031 1.44052C9.50866 1.23688 9.81186 1.125 10.1253 1.125C10.4388 1.125 10.742 1.23688 10.9804 1.44052C12.9492 3.16183 15.7506 4.50064 18.0006 4.50064C18.299 4.50064 18.5852 4.61917 18.7962 4.83015C19.0072 5.04114 19.1257 5.3273 19.1257 5.62568V13.501Z" stroke="white" strokeWidth="2.25009" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>,
                            title: "Complete Transparency",
                            text: "No hidden fees, no surprises. Every fee is disclosed upfront. Companies see exactly what they'll pay. Recruiters know exactly what they'll earn.",
                            right_text : 'Trust First'
                        },
                        {
                            id: 2,
                            img: <svg width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.1257 13.501C19.1257 19.1262 15.188 21.9388 10.5079 23.5701C10.2628 23.6532 9.99657 23.6492 9.75408 23.5589C5.06265 21.9388 1.125 19.1262 1.125 13.501V5.62568C1.125 5.3273 1.24353 5.04114 1.45452 4.83015C1.6655 4.61917 1.95166 4.50064 2.25004 4.50064C4.50013 4.50064 7.31274 3.15058 9.27031 1.44052C9.50866 1.23688 9.81186 1.125 10.1253 1.125C10.4388 1.125 10.742 1.23688 10.9804 1.44052C12.9492 3.16183 15.7506 4.50064 18.0006 4.50064C18.299 4.50064 18.5852 4.61917 18.7962 4.83015C19.0072 5.04114 19.1257 5.3273 19.1257 5.62568V13.501Z" stroke="white" strokeWidth="2.25009" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>,
                            title: "Market-Driven Pricing",
                            text: "Recruiters set their own fees based on role complexity and candidate quality. Companies choose the best value. The market decides what's fair—not a corporate algorithm.",
                            right_text : 'Fair Pricing'
                        },
                        {
                            id: 3,
                            img: <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.7509 7.875L15.188 17.4379L9.56278 11.8127L2.25 19.1254" stroke="white" strokeWidth="2.25009" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M18.001 7.875H24.7512V14.6253" stroke="white" strokeWidth="2.25009" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>,
                            title: "Pay for Performance",
                            text: "Companies only pay when a candidate actually starts work. Recruiters get paid when they deliver results. Simple, fair, and risk-free for everyone.",
                            right_text : 'Results Only'
                        }
                    ].map((item) => (
                        <div
                            key={item.id}
                            className="relative bg-white w-[268.84px] h-[331.25px] rounded-2xl shadow-lg p-6 flex flex-col justify-center gap-4 hover:shadow-xl transition duration-300"
                        >

                            <div className="">
                                <div className="w-12 h-12 rounded-xl bg-linear-to-r from-[#0F172A] to-[#334F90] text-white flex items-center justify-center font-semibold">
                                    {item.img}
                                </div>

                                <div className="absolute -top-2 -right-3.5 w-[76px] h-[23.62px] rounded-xl bg-linear-to-r from-[#0F172A] to-[#334F90] text-white flex items-center justify-center font-medium text-[10.13px]">{item.right_text}
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

export default KeyValues;
