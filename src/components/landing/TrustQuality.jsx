import React from "react";

const TrustQuality = () => {
    return (
        <section className="w-full bg-linear-to-r from-[#0F172A] via-[#2A4870] to-[#0F172A] py-20 px-4">

            <div className="max-w-7xl mx-auto flex flex-col items-center">

                <div className="text-center max-w-3xl">

                    <div className="inline-block px-4 py-2 rounded-full text-white border border-white/20 bg-[#0F172A14] text-sm mb-6">
                        Security & Compliance
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold  leading-tight text-white">
                        Trust & Quality
                    </h2>

                    <div className="w-28 h-1 mx-auto my-6 rounded-full bg-linear-to-b from-[#00000000] via-[#FFFFFF] to-[#00000000]" />

                    <p className="text-base sm:text-lg md:text-xl text-[#FFFFFFE5] font-normal leading-[40.8px] leading-relaxed">
                        We maintain the highest standards of professionalism, security, and compliance to protect all parties.
                    </p>
                </div>

                <div className="mt-16 flex flex-col justify-center items-center md:flex-row sm:grid-cols-2 lg:grid-cols-2 gap-8 w-full">

                    {[
                        {
                            id: 1,
                            title: "Verified Recruiters",
                            text: "All recruiters undergo verification before joining the platform",
                            img: <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.7002 14.1056C21.7002 19.5307 17.9026 22.2433 13.3889 23.8166C13.1525 23.8966 12.8958 23.8928 12.6619 23.8057C8.13741 22.2433 4.33984 19.5307 4.33984 14.1056V6.51049C4.33984 6.22272 4.45416 5.94674 4.65764 5.74326C4.86112 5.53978 5.1371 5.42547 5.42486 5.42547C7.5949 5.42547 10.3075 4.12344 12.1954 2.47422C12.4253 2.27783 12.7177 2.16992 13.02 2.16992C13.3223 2.16992 13.6147 2.27783 13.8446 2.47422C15.7434 4.1343 18.4451 5.42547 20.6151 5.42547C20.9029 5.42547 21.1789 5.53978 21.3824 5.74326C21.5858 5.94674 21.7002 6.22272 21.7002 6.51049V14.1056Z" stroke="white" strokeWidth="2.17004" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                        },
                        {
                            id: 2,
                            title: "Rating System",
                            text: "Track record and ratings ensure quality and accountability",
                            img: <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.3602 22.786V20.616C17.3602 19.4649 16.9029 18.361 16.089 17.5471C15.2751 16.7331 14.1712 16.2759 13.0201 16.2759H6.51C5.35894 16.2759 4.25502 16.7331 3.4411 17.5471C2.62718 18.361 2.16992 19.4649 2.16992 20.616V22.786" stroke="white" strokeWidth="2.17004" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9.76586 11.9355C12.1628 11.9355 14.1059 9.99241 14.1059 7.59545C14.1059 5.19849 12.1628 3.25537 9.76586 3.25537C7.3689 3.25537 5.42578 5.19849 5.42578 7.59545C5.42578 9.99241 7.3689 11.9355 9.76586 11.9355Z" stroke="white" strokeWidth="2.17004" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M17.3608 11.9347L19.5309 14.1047L23.871 9.76465" stroke="white" strokeWidth="2.17004" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                        },
                        {
                            id: 3,
                            title: "Compliance Ready",
                            text: "Built with data protection and employment law compliance in mind.",
                            img: <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.2755 2.16992H6.51037C5.93484 2.16992 5.38288 2.39855 4.97592 2.80551C4.56896 3.21247 4.34033 3.76443 4.34033 4.33996V21.7003C4.34033 22.2758 4.56896 22.8278 4.97592 23.2347C5.38288 23.6417 5.93484 23.8703 6.51037 23.8703H19.5306C20.1061 23.8703 20.6581 23.6417 21.0651 23.2347C21.472 22.8278 21.7006 22.2758 21.7006 21.7003V7.59502L16.2755 2.16992Z" stroke="white" strokeWidth="2.17004" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15.1904 2.16992V6.51C15.1904 7.08553 15.4191 7.63749 15.826 8.04445C16.233 8.45141 16.7849 8.68004 17.3605 8.68004H21.7005" stroke="white" strokeWidth="2.17004" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9.76514 16.276L11.9352 18.446L16.2753 14.106" stroke="white" strokeWidth="2.17004" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                        },
                        {
                            id: 4,
                            title: "Quality Assurance",
                            text: "Ongoing monitoring to maintain high standards across the platform",
                            img: <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.7925 13.9858L18.4363 23.2367C18.4547 23.3456 18.4394 23.4576 18.3925 23.5576C18.3455 23.6576 18.2692 23.7409 18.1736 23.7964C18.0781 23.8518 17.9679 23.8768 17.8578 23.8679C17.7476 23.859 17.6429 23.8167 17.5574 23.7467L13.6731 20.8312C13.4855 20.6911 13.2577 20.6154 13.0237 20.6154C12.7896 20.6154 12.5618 20.6911 12.3743 20.8312L8.48341 23.7456C8.39804 23.8155 8.29338 23.8577 8.1834 23.8666C8.07341 23.8755 7.96333 23.8506 7.86784 23.7954C7.77235 23.7401 7.69598 23.657 7.64894 23.5572C7.6019 23.4573 7.58641 23.3456 7.60454 23.2367L9.24726 13.9858" stroke="white" strokeWidth="2.17004" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M13.0199 15.1902C16.6153 15.1902 19.53 12.2755 19.53 8.68004C19.53 5.0846 16.6153 2.16992 13.0199 2.16992C9.42444 2.16992 6.50977 5.0846 6.50977 8.68004C6.50977 12.2755 9.42444 15.1902 13.0199 15.1902Z" stroke="white" strokeWidth="2.17004" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                        }
                    ].map((item) => (
                        <div
                            key={item.id}
                            className="bg-white w-[260px] min-h-[234px] rounded-[15px] border-[1.21px] border-[#FFFFFF33] shadow-lg p-6 flex flex-col justify-center gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >

                            <div className="">
                                <div className="w-12 h-12 rounded-xl bg-linear-to-r from-[#0F172A] to-[#334F90] text-white flex items-center justify-center font-semibold">
                                    {item.img}
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

export default TrustQuality;
