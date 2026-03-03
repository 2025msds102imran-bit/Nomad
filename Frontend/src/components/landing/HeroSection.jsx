import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import heroimg from "../../assets/hero.jpg";
const CheckIcon = () => (
  <svg className="h-5 w-5 shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M9.99053 17.9831C12.1103 17.9831 14.1432 17.141 15.6421 15.6421C17.1409 14.1432 17.983 12.1103 17.983 9.99059C17.983 7.87085 17.1409 5.83793 15.6421 4.33905C14.1432 2.84017 12.1103 1.99811 9.99053 1.99811C7.87079 1.99811 5.83787 2.84017 4.33899 4.33905C2.84011 5.83793 1.99805 7.87085 1.99805 9.99059C1.99805 12.1103 2.84011 14.1432 4.33899 15.6421C5.83787 17.141 7.87079 17.9831 9.99053 17.9831ZM13.694 8.6988C13.876 8.51038 13.9767 8.25801 13.9745 7.99606C13.9722 7.73411 13.8671 7.48354 13.6819 7.2983C13.4966 7.11307 13.2461 7.008 12.9841 7.00572C12.7222 7.00345 12.4698 7.10415 12.2814 7.28613L8.99147 10.576L7.69968 9.28425C7.51126 9.10227 7.25889 9.00157 6.99694 9.00384C6.73499 9.00612 6.48442 9.11119 6.29918 9.29642C6.11395 9.48166 6.00888 9.73223 6.0066 9.99418C6.00432 10.2561 6.10502 10.5085 6.28701 10.6969L8.28513 12.695C8.47248 12.8823 8.72655 12.9876 8.99147 12.9876C9.25638 12.9876 9.51045 12.8823 9.6978 12.695L13.694 8.6988Z" fill="#05DF72"/>
  </svg>
);

const StarIcon = () => (
  <svg className="h-4 w-4" width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.69748 0.335615L9.44887 3.77685C9.4887 3.86419 9.55136 3.93985 9.6306 3.99627C9.70984 4.0527 9.80289 4.08793 9.90048 4.09846L13.7667 4.65591C13.8787 4.66992 13.9842 4.71463 14.071 4.78483C14.1578 4.85503 14.2223 4.94782 14.257 5.05236C14.2916 5.15691 14.295 5.26889 14.2667 5.37523C14.2384 5.48157 14.1796 5.57788 14.0972 5.65291L11.3104 8.34371C11.2393 8.40838 11.1859 8.48934 11.1551 8.57921C11.1243 8.66908 11.1171 8.76502 11.1342 8.85829L11.8061 12.6426C11.8255 12.7513 11.8132 12.8632 11.7706 12.9654C11.7279 13.0677 11.6566 13.1563 11.5648 13.2211C11.473 13.2859 11.3644 13.3243 11.2512 13.3319C11.1381 13.3396 11.025 13.3162 10.9249 13.2643L7.44414 11.474C7.35501 11.4315 7.25704 11.4093 7.15775 11.4093C7.05846 11.4093 6.96049 11.4315 6.87136 11.474L3.39063 13.2643C3.29049 13.3162 3.17742 13.3396 3.06429 13.3319C2.95115 13.3243 2.84249 13.2859 2.75068 13.2211C2.65886 13.1563 2.58757 13.0677 2.54492 12.9654C2.50228 12.8632 2.48998 12.7513 2.50943 12.6426L3.18135 8.81541C3.19838 8.72213 3.19117 8.6262 3.16039 8.53633C3.12961 8.44646 3.07623 8.3655 3.00511 8.30083L0.185274 5.65291C0.10185 5.57582 0.0431808 5.47685 0.016375 5.36797C-0.0104309 5.2591 -0.00422367 5.145 0.0342446 5.03949C0.0727128 4.93397 0.141792 4.84158 0.233113 4.7735C0.324434 4.70543 0.43408 4.66458 0.548768 4.65591L4.41502 4.09846C4.51261 4.08793 4.60567 4.0527 4.68491 3.99627C4.76415 3.93985 4.8268 3.86419 4.86664 3.77685L6.61802 0.335615C6.66571 0.235389 6.74187 0.150535 6.83751 0.0910667C6.93314 0.0315988 7.04426 0 7.15775 0C7.27124 0 7.38236 0.0315988 7.478 0.0910667C7.57363 0.150535 7.64979 0.235389 7.69748 0.335615Z" fill="#FFA600"/>
  </svg>
);

const stats = [
  { number: "500+", label: "Active Roles", icon: (
    <svg className="h-8 w-8" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27.9876 17.6657C24.1766 19.2066 20.1036 19.9963 15.9928 19.9913C11.7507 19.9913 7.7031 19.165 3.99805 17.6657M21.3239 7.99654V5.33104C21.3239 4.6241 21.043 3.94612 20.5431 3.44624C20.0433 2.94636 19.3653 2.66553 18.6583 2.66553H13.3273C12.6204 2.66553 11.9424 2.94636 11.4425 3.44624C10.9426 3.94612 10.6618 4.6241 10.6618 5.33104V7.99654M15.9928 15.9931H16.0062M6.66356 26.6551H25.3221C26.029 26.6551 26.707 26.3743 27.2069 25.8744C27.7068 25.3745 27.9876 24.6965 27.9876 23.9896V10.6621C27.9876 9.95512 27.7068 9.27713 27.2069 8.77725C26.707 8.27737 26.029 7.99654 25.3221 7.99654H6.66356C5.95662 7.99654 5.27864 8.27737 4.77876 8.77725C4.27888 9.27713 3.99805 9.95512 3.99805 10.6621V23.9896C3.99805 24.6965 4.27888 25.3745 4.77876 25.8744C5.27864 26.3743 5.95662 26.6551 6.66356 26.6551Z" stroke="currentColor" strokeWidth="2.66551" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )},
  { number: "2,000+", label: "Recruiters", icon: (
    <svg className="h-8 w-8" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.6568 26.6551H29.3206V23.9896C29.3205 23.1586 29.0616 22.3484 28.5798 21.6714C28.098 20.9944 27.4172 20.4844 26.6321 20.2122C25.847 19.94 24.9967 19.9192 24.1992 20.1526C23.4017 20.386 22.6968 20.8621 22.1824 21.5146M22.6568 26.6551H9.3293M22.6568 26.6551V23.9896C22.6568 23.1153 22.4889 22.2796 22.1824 21.5146M22.1824 21.5146C21.6875 20.2778 20.8333 19.2176 19.7301 18.4708C18.6269 17.724 17.3253 17.3248 15.9931 17.3248C14.6609 17.3248 13.3592 17.724 12.256 18.4708C11.1528 19.2176 10.2987 20.2778 9.80376 21.5146M9.3293 26.6551H2.66553V23.9896C2.66559 23.1586 2.92453 22.3484 3.40635 21.6714C3.88818 20.9944 4.56895 20.4844 5.35403 20.2122C6.1391 19.94 6.98948 19.9192 7.78695 20.1526C8.58442 20.386 9.28935 20.8621 9.80376 21.5146M19.9913 9.32926C19.9913 10.3897 19.5701 11.4066 18.8203 12.1565C18.0704 12.9063 17.0535 13.3275 15.9931 13.3275C14.9327 13.3275 13.9157 12.9063 13.1659 12.1565C12.4161 11.4066 11.9948 10.3897 11.9948 9.32926C11.9948 8.26885 12.4161 7.25188 13.1659 6.50206C13.9157 5.75224 14.9327 5.33099 15.9931 5.33099C17.0535 5.33099 18.0704 5.75224 18.8203 6.50206C19.5701 7.25188 19.9913 8.26885 19.9913 9.32926ZM27.9879 13.3275C27.9879 14.0345 27.707 14.7124 27.2071 15.2123C26.7073 15.7122 26.0293 15.993 25.3223 15.993C24.6154 15.993 23.9374 15.7122 23.4375 15.2123C22.9377 14.7124 22.6568 14.0345 22.6568 13.3275C22.6568 12.6206 22.9377 11.9426 23.4375 11.4427C23.9374 10.9428 24.6154 10.662 25.3223 10.662C26.0293 10.662 26.7073 10.9428 27.2071 11.4427C27.707 11.9426 27.9879 12.6206 27.9879 13.3275ZM9.3293 13.3275C9.3293 14.0345 9.04847 14.7124 8.54859 15.2123C8.04871 15.7122 7.37073 15.993 6.66379 15.993C5.95685 15.993 5.27887 15.7122 4.77899 15.2123C4.27911 14.7124 3.99828 14.0345 3.99828 13.3275C3.99828 12.6206 4.27911 11.9426 4.77899 11.4427C5.27887 10.9428 5.95685 10.662 6.66379 10.662C7.37073 10.662 8.04871 10.9428 8.54859 11.4427C9.04847 11.9426 9.3293 12.6206 9.3293 13.3275Z" stroke="currentColor" strokeWidth="2.66551" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )},
  { number: "98%", label: "Success Rate", icon: (
    <svg className="h-8 w-8" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.9946 15.9931L14.6601 18.6586L19.9911 13.3276M27.9876 15.9931C27.9876 17.5683 27.6774 19.128 27.0746 20.5833C26.4718 22.0386 25.5882 23.3609 24.4744 24.4747C23.3606 25.5885 22.0383 26.472 20.583 27.0748C19.1278 27.6776 17.568 27.9879 15.9928 27.9879C14.4177 27.9879 12.8579 27.6776 11.4026 27.0748C9.94735 26.472 8.62506 25.5885 7.51124 24.4747C6.39742 23.3609 5.51389 22.0386 4.9111 20.5833C4.3083 19.128 3.99805 17.5683 3.99805 15.9931C3.99805 12.8119 5.26178 9.76094 7.51124 7.51148C9.7607 5.26202 12.8116 3.99829 15.9928 3.99829C19.174 3.99829 22.225 5.26202 24.4744 7.51148C26.7239 9.76094 27.9876 12.8119 27.9876 15.9931Z" stroke="currentColor" strokeWidth="2.66551" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )},
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white">
      <img
        src={heroimg}
        alt="Recruitment hero background"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#0F172A]/70"></div>

      <div className="relative mx-auto min-h-screen w-full max-w-7xl px-4 sm:px-3 lg:px-4">
        <Navbar />

        <main className="grid items-center gap-12 pb-14 pt-32 lg:grid-cols-[1fr_480px] lg:pb-20 lg:pt-14">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3">
              <span className="text-2xl leading-none">✨</span>
              <span className="text-sm font-medium text-white/95">The Future of Recruitment is Here</span>
            </div>

            <h1 className="mt-8 max-w-3xl text-3xl font-semibold leading-tight md:text-4xl lg:text-[42px] lg:leading-[1.3]">
              The Recruitment Marketplace Where Both Sides Decide The Deal.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/95 md:text-xl">
              Companies post jobs. Recruiters offer candidates with a clear fee. You negotiate upfront and pay only when someone actually starts.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/auth/signup"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-medium text-slate-900 shadow-2xl transition hover:bg-white/90"
              >
                Get Started
                <svg className="h-5 w-5 text-slate-900" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.1533 6.6604L17.4835 9.9906M17.4835 9.9906L14.1533 13.3208M17.4835 9.9906H2.49756" stroke="currentColor" strokeWidth="1.6651" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center rounded-2xl border border-white bg-slate-900 px-8 py-4 text-base font-medium text-white transition hover:bg-slate-800"
              >
                Learn More
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              {["Stripe Secured Payments", "No Setup Fees", "24/7 Support"].map((text) => (
                <div key={text} className="inline-flex items-center gap-2">
                  <CheckIcon />
                  <span className="text-sm text-white/80">{text}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-end gap-4">
              <div className="mt-2 flex items-center -space-x-2">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80" alt="User avatar 1" className="h-10 w-10 rounded-full border-2 border-white object-cover" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80" alt="User avatar 2" className="h-10 w-10 rounded-full border-2 border-white object-cover" />
                <img src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=120&q=80" alt="User avatar 3" className="h-10 w-10 rounded-full border-2 border-white object-cover" />
              </div>
              <p className="text-xl font-medium">25k+ <span className="font-normal">People Join</span></p>
              <div className="flex items-center gap-2">
                <span className="text-base font-medium uppercase">5.0</span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {stats.map(({ number, label, icon }) => (
              <div
                key={label}
                className="relative rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm"
              >
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent" />
                <div className="relative flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-semibold leading-none text-white">{number}</p>
                    <p className="mt-2 text-xs uppercase tracking-wide text-white/80">{label}</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4 text-white">{icon}</div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
};

export default HeroSection;
