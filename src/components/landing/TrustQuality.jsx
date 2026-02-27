import React from "react";

const cards = [
  {
    title: "Verified Recruiters",
    text: "All recruiters undergo verification before joining the platform",
    icon: (
      <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.7002 14.1056C21.7002 19.5307 17.9026 22.2433 13.3889 23.8166C13.1525 23.8966 12.8958 23.8928 12.6619 23.8057C8.13741 22.2433 4.33984 19.5307 4.33984 14.1056V6.51049C4.33984 6.22272 4.45416 5.94674 4.65764 5.74326C4.86112 5.53978 5.1371 5.42547 5.42486 5.42547C7.5949 5.42547 10.3075 4.12344 12.1954 2.47422C12.4253 2.27783 12.7177 2.16992 13.02 2.16992C13.3223 2.16992 13.6147 2.27783 13.8446 2.47422C15.7434 4.1343 18.4451 5.42547 20.6151 5.42547C20.9029 5.42547 21.1789 5.53978 21.3824 5.74326C21.5858 5.94674 21.7002 6.22272 21.7002 6.51049V14.1056Z" stroke="white" strokeWidth="2.17" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Rating System",
    text: "Track record and ratings ensure quality and accountability",
    icon: (
      <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.3602 22.786V20.616C17.3602 19.4649 16.9029 18.361 16.089 17.5471C15.2751 16.7331 14.1712 16.2759 13.0201 16.2759H6.51C5.35894 16.2759 4.25502 16.7331 3.4411 17.5471C2.62718 18.361 2.16992 19.4649 2.16992 20.616V22.786" stroke="white" strokeWidth="2.17" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.76586 11.9355C12.1628 11.9355 14.1059 9.99241 14.1059 7.59545C14.1059 5.19849 12.1628 3.25537 9.76586 3.25537C7.3689 3.25537 5.42578 5.19849 5.42578 7.59545C5.42578 9.99241 7.3689 11.9355 9.76586 11.9355Z" stroke="white" strokeWidth="2.17" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.3608 11.9347L19.5309 14.1047L23.871 9.76465" stroke="white" strokeWidth="2.17" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Compliance Ready",
    text: "Built with data protection and employment law compliance in mind",
    icon: (
      <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.2755 2.16992H6.51037C5.93484 2.16992 5.38288 2.39855 4.97592 2.80551C4.56896 3.21247 4.34033 3.76443 4.34033 4.33996V21.7003C4.34033 22.2758 4.56896 22.8278 4.97592 23.2347C5.38288 23.6417 5.93484 23.8703 6.51037 23.8703H19.5306C20.1061 23.8703 20.6581 23.6417 21.0651 23.2347C21.472 22.8278 21.7006 22.2758 21.7006 21.7003V7.59502L16.2755 2.16992Z" stroke="white" strokeWidth="2.17" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15.1904 2.16992V6.51C15.1904 7.08553 15.4191 7.63749 15.826 8.04445C16.233 8.45141 16.7849 8.68004 17.3605 8.68004H21.7005" stroke="white" strokeWidth="2.17" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.76514 16.276L11.9352 18.446L16.2753 14.106" stroke="white" strokeWidth="2.17" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Quality Assurance",
    text: "Ongoing monitoring to maintain high standards across the platform",
    icon: (
      <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.7925 13.9858L18.4363 23.2367C18.4547 23.3456 18.4394 23.4576 18.3925 23.5576C18.3455 23.6576 18.2692 23.7409 18.1736 23.7964C18.0781 23.8518 17.9679 23.8768 17.8578 23.8679C17.7476 23.859 17.6429 23.8167 17.5574 23.7467L13.6731 20.8312C13.4855 20.6911 13.2577 20.6154 13.0237 20.6154C12.7896 20.6154 12.5618 20.6911 12.3743 20.8312L8.48341 23.7456C8.39804 23.8155 8.29338 23.8577 8.1834 23.8666C8.07341 23.8755 7.96333 23.8506 7.86784 23.7954C7.77235 23.7401 7.69598 23.657 7.64894 23.5572C7.6019 23.4573 7.58641 23.3456 7.60454 23.2367L9.24726 13.9858" stroke="white" strokeWidth="2.17" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.0199 15.1902C16.6153 15.1902 19.53 12.2755 19.53 8.68004C19.53 5.0846 16.6153 2.16992 13.0199 2.16992C9.42444 2.16992 6.50977 5.0846 6.50977 8.68004C6.50977 12.2755 9.42444 15.1902 13.0199 15.1902Z" stroke="white" strokeWidth="2.17" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const TrustQuality = () => {
  return (
    <section className="w-full relative overflow-hidden py-14 px-4" style={{ background: 'linear-gradient(180deg, #0F172A 0%, #164E63 50%, #0F172A 100%)' }}>
      {/* Background layers */}
      <div className="absolute size-[600px] right-[-80px] top-0 bg-blue-400/20 rounded-full blur-3xl" />
      <div className="absolute size-[500px] left-0 bottom-[-100px] bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-linear-to-l from-slate-900 to-blue-900" />

      <div className="relative max-w-[1280px] mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="flex flex-col items-center gap-3 max-w-[768px] text-center">
          <div className="inline-flex justify-center items-center px-6 py-3 bg-white/10 rounded-full outline-[1.30px] outline-solid outline-white/20">
            <span className="text-white/95 text-sm font-medium leading-5">Security &amp; Compliance</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight md:leading-[79.20px]">
            Trust &amp; Quality
          </h2>

          <div className="w-24 h-2 rounded-full" style={{ background: 'linear-gradient(180deg, transparent 0%, white 50%, transparent 100%)' }} />

          <p className="text-lg sm:text-xl text-white/90 font-normal leading-8 max-w-[754px]">
            We maintain the highest standards of professionalism, security, and compliance to protect all parties.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-[30px] w-full max-w-[1131px]">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl outline-[1.21px] outline-solid outline-white/20 p-[31px] flex flex-col gap-0 min-h-[240px]"
            >
              {/* Icon */}
              <div className="size-14 shrink-0 bg-linear-to-l from-slate-900 to-blue-900 rounded-2xl flex justify-center items-center mb-6">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="text-slate-900 text-base font-medium leading-6 mb-2">{card.title}</h3>

              {/* Description */}
              <p className="text-gray-600 text-sm font-normal leading-5">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustQuality;
