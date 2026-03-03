import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import {
  ArrowLeft,
  Star,
  MapPin,
  Building2,
  Award,
  Users,
  Calendar,
  Globe,
} from "lucide-react";
import { vacancyCards } from "../../data/dummyData";

const companyDetail = {
  name: "Tata Consultancy Services",
  type: "Technology Company",
  location: "TCS, Gandhinagar, Gujarat, India",
  verified: true,
  rating: 4,
  avatar: "https://placehold.co/78x77",
  about:
    "Tata Consultancy Services (TCS) is an Indian multinational technology company specializing in information technology services and consulting. Headquartered in Mumbai, it is a part of the Tata Group and operates in 150 locations across 46 countries.",
  vision:
    "Lorem ipsum dolor sit amet consectetur. Commodo congue mi cursus sit. Viverra neque lorem in vestibulum sapien nunc fermentum pretium. Viverra ornare vitae orci lacus sit. Cursus varius scelerisque ut ut velit. Semper sagittis fusc.",
  industryType: "Information Technology (IT) / Software",
  organizationType: "Technology Company",
  teamSize: "1001+ employees",
  established: "1978",
  socials: [
    { name: "Facebook", url: "www.tcs.com", bg: "bg-blue-600", icon: "facebook" },
    { name: "Twitter", url: "www.tcs.com", bg: "bg-black", icon: "twitter" },
    { name: "Instagram", url: "www.tcs.com", bg: "bg-linear-to-b from-orange-400 via-pink-600 to-purple-800", icon: "instagram" },
    { name: "YouTube", url: "www.tcs.com", bg: "bg-red-600", icon: "youtube" },
    { name: "LinkedIn", url: "www.tcs.com", bg: "bg-sky-600", icon: "linkedin" },
  ],
};

const FacebookIcon = () => (
  <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
    <path d="M15.348 1.705h-2.558a4.264 4.264 0 0 0-4.263 4.264v2.558H5.969v3.41h2.558v6.822h3.41v-6.821h2.559l.852-3.411h-3.41V5.969c0-.226.09-.443.25-.603a.852.852 0 0 1 .603-.25h2.558V1.706Z" stroke="white" strokeWidth="1.705" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
    <g clipPath="url(#tw)">
      <path d="M18.76 3.411s-.597 1.79-1.705 2.9c1.364 8.526-8.016 14.75-15.348 9.89 1.876.085 3.752-.511 5.117-1.706-4.263-1.28-6.395-6.31-4.264-10.232 1.876 2.217 4.775 3.496 7.675 3.41-.768-3.58 3.41-5.627 5.968-3.24 .938 0 2.558-1.022 2.558-1.022Z" stroke="white" strokeWidth="1.705" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs><clipPath id="tw"><rect width="20.464" height="20.464" fill="white" /></clipPath></defs>
  </svg>
);

const InstagramIcon = () => (
  <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
    <g clipPath="url(#ig)">
      <rect x="1.707" y="1.705" width="17.053" height="17.054" rx="4.263" stroke="white" strokeWidth="1.705" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.644 9.695a3.412 3.412 0 1 1-6.75 1.042 3.412 3.412 0 0 1 6.75-1.042Z" stroke="white" strokeWidth="1.705" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.922 5.542h.008" stroke="white" strokeWidth="1.705" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs><clipPath id="ig"><rect width="20.464" height="20.464" fill="white" /></clipPath></defs>
  </svg>
);

const YouTubeIcon = () => (
  <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
    <g clipPath="url(#yt)">
      <path d="M2.13 14.495a17.71 17.71 0 0 1 0-8.527c.078-.285.23-.545.439-.755.21-.21.47-.36.755-.44a44.18 44.18 0 0 1 13.813 0c.286.079.546.23.755.44.21.21.361.47.44.755a17.71 17.71 0 0 1 0 8.527 1.843 1.843 0 0 1-1.195 1.194 44.18 44.18 0 0 1-13.813 0 1.843 1.843 0 0 1-1.194-1.194Z" stroke="white" strokeWidth="1.705" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.527 12.79l4.264-2.558-4.264-2.558v5.116Z" stroke="white" strokeWidth="1.705" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs><clipPath id="yt"><rect width="20.464" height="20.464" fill="white" /></clipPath></defs>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
    <g clipPath="url(#li)">
      <path d="M13.643 6.821a5.116 5.116 0 0 1 5.116 5.116v5.969h-3.41v-5.969a1.706 1.706 0 0 0-3.412 0v5.969h-3.41v-5.969a5.116 5.116 0 0 1 5.116-5.116Z" stroke="white" strokeWidth="1.705" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.118 7.674H1.707v10.232h3.41V7.674Z" stroke="white" strokeWidth="1.705" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="3.412" cy="3.41" r="1.705" stroke="white" strokeWidth="1.705" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs><clipPath id="li"><rect width="20.464" height="20.464" fill="white" /></clipPath></defs>
  </svg>
);

const socialIcons = { facebook: FacebookIcon, twitter: TwitterIcon, instagram: InstagramIcon, youtube: YouTubeIcon, linkedin: LinkedInIcon };

const CompanyDetailPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const basePath = location.pathname.startsWith("/recruiter") ? "/recruiter" : "/dashboard";
  const card = vacancyCards.find((c) => c.id === Number(id));
  const company = companyDetail;

  return (
    <div className="flex flex-col gap-5 min-w-0">
      {/* Back link */}
      <Link
        to={`${basePath}/jobs`}
        className="inline-flex items-center gap-2 text-cyan-900 text-sm sm:text-base font-medium leading-6 w-fit"
      >
        <ArrowLeft size={20} stroke="#2A4870" />
        Back to Vacancies
      </Link>

      {/* Hero Banner */}
      <div className="w-full p-6 bg-linear-to-l from-slate-900 to-blue-900 rounded-2xl overflow-hidden">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex flex-1 gap-3">
            <div className="size-20 shrink-0 bg-white rounded-full p-[2.5px]">
              <img
                className="size-full rounded-full object-cover"
                src={company.avatar}
                alt={company.name}
              />
            </div>
            <div className="flex flex-col gap-2 min-w-0">
              <h1 className="text-white text-xl sm:text-2xl font-semibold leading-10 truncate">
                {card?.company || company.name}
              </h1>
              <div className="flex items-center gap-[2.5px]">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    size={17}
                    fill={i <= company.rating ? "#F59E0B" : "none"}
                    stroke={i <= company.rating ? "#F59E0B" : "#D1D5DB"}
                    strokeWidth={1.38}
                  />
                ))}
              </div>
              <p className="text-white/80 text-sm font-normal leading-7">
                {company.type}
              </p>
              <div className="flex items-center gap-2">
                <MapPin size={17} stroke="white" strokeOpacity={0.9} strokeWidth={1.36} />
                <span className="text-white/90 text-sm font-normal leading-5">
                  {card ? `${card.location}` : company.location}
                </span>
              </div>
            </div>
          </div>
          {company.verified && (
            <div className="self-start px-4 py-2 bg-emerald-500 rounded-[10px]">
              <span className="text-white text-sm font-semibold leading-5">
                Verified Company
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Main Content - Two columns */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-6 min-w-0">
          {/* About Company */}
          <div className="bg-white rounded-2xl outline-[1.33px] outline-gray-200 px-6 pt-6 pb-6">
            <div className="flex items-center gap-2 mb-4">
              <Building2 size={21} stroke="#6366F1" strokeWidth={1.7} />
              <h2 className="text-slate-900 text-lg font-semibold leading-7">
                About Company
              </h2>
            </div>
            <p className="text-gray-600 text-base font-normal leading-7">
              {company.about}
            </p>
          </div>

          {/* Company Vision */}
          <div className="bg-white rounded-2xl outline-[1.33px] outline-gray-200 px-6 pt-6 pb-6">
            <div className="flex items-center gap-2 mb-4">
              <Building2 size={21} stroke="#10B981" strokeWidth={1.7} />
              <h2 className="text-slate-900 text-lg font-semibold leading-7">
                Company Vision
              </h2>
            </div>
            <p className="text-gray-600 text-base font-normal leading-7">
              {company.vision}
            </p>
          </div>

          {/* Company Information */}
          <div className="bg-white rounded-2xl outline-[1.33px] outline-gray-200 px-6 pt-6 pb-6">
            <div className="flex items-center gap-2 mb-4">
              <Award size={21} stroke="#F59E0B" strokeWidth={1.7} />
              <h2 className="text-slate-900 text-lg font-semibold leading-7">
                Company Information
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
              <div className="flex flex-col gap-1">
                <span className="text-gray-500 text-xs font-semibold capitalize leading-4 tracking-tight">
                  Industry Type
                </span>
                <span className="text-slate-900 text-base font-medium leading-6">
                  {company.industryType}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-gray-500 text-xs font-semibold capitalize leading-4 tracking-tight">
                  Organization Type
                </span>
                <span className="text-slate-900 text-base font-medium leading-6">
                  {company.organizationType}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-gray-500 text-xs font-semibold capitalize leading-4 tracking-tight">
                  Team Size
                </span>
                <div className="flex items-center gap-2">
                  <Users size={17} stroke="#4A90E2" strokeWidth={1.36} />
                  <span className="text-slate-900 text-base font-medium leading-6">
                    {company.teamSize}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-gray-500 text-xs font-semibold capitalize leading-4 tracking-tight">
                  Established
                </span>
                <div className="flex items-center gap-2">
                  <Calendar size={17} stroke="#4A90E2" strokeWidth={1.36} />
                  <span className="text-slate-900 text-base font-medium leading-6">
                    {company.established}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Company Gallery */}
          <div className="bg-white rounded-2xl outline-[1.33px] outline-gray-200 px-6 pt-6 pb-6">
            <h2 className="text-slate-900 text-lg font-semibold leading-7 mb-4">
              Company Gallery
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-32 bg-linear-to-b from-gray-100 to-gray-200 rounded-[10px] flex items-center justify-center"
                >
                  <Building2 size={33} stroke="#9CA3AF" strokeWidth={2.73} />
                </div>
              ))}
            </div>
          </div>

          {/* Company Video */}
          <div className="bg-white rounded-2xl outline-[1.33px] outline-gray-200 px-6 pt-6 pb-6">
            <h2 className="text-slate-900 text-lg font-semibold leading-7 mb-4">
              Company Video
            </h2>
            <div className="h-96 bg-linear-to-b from-slate-900 to-blue-900 rounded-[10px] flex items-center justify-center">
              <div className="flex flex-col items-center gap-3">
                <Globe size={50} stroke="white" strokeWidth={1} className="opacity-50" />
                <span className="text-white text-sm font-normal leading-5 opacity-75">
                  Company introduction video
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-96 shrink-0">
          {/* Social Media */}
          <div className="bg-white rounded-2xl outline-[1.33px] outline-gray-200 px-6 pt-6 pb-6">
            <h2 className="text-slate-900 text-lg font-semibold leading-7 mb-4">
              Social Media
            </h2>
            <div className="flex flex-col gap-3">
              {company.socials.map((social) => {
                const Icon = socialIcons[social.icon];
                return (
                  <a
                    key={social.name}
                    href={`https://${social.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-16 px-3 rounded-[10px] flex items-center gap-3 hover:bg-gray-50 transition"
                  >
                    <div className={`size-10 ${social.bg} rounded-[10px] flex items-center justify-center`}>
                      <Icon />
                    </div>
                    <div className="flex-1 flex flex-col min-w-0">
                      <span className="text-slate-900 text-sm font-medium leading-5">
                        {social.name}
                      </span>
                      <span className="text-gray-500 text-xs font-normal leading-4 truncate">
                        {social.url}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetailPage;
