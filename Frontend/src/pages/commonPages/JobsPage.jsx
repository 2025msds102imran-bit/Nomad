import React, { useState, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, X, Star, MapPin, Clock, Eye, Mail, DollarSign, Briefcase, MessageSquare } from "lucide-react";
import { vacancyCards, jobs, candidates } from "../../data/dummyData";
import { StatCard, DropdownFilter, StarRating } from "../../global";

const BriefcaseIcon = ({ color }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M13.333 16.667V3.333a1.667 1.667 0 0 0-1.666-1.666H8.333a1.667 1.667 0 0 0-1.666 1.666v13.334" stroke={color} strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16.666 5H3.333A1.667 1.667 0 0 0 1.666 6.667V15c0 .92.746 1.667 1.667 1.667h13.333c.92 0 1.667-.747 1.667-1.667V6.667C18.333 5.746 17.587 5 16.666 5Z" stroke={color} strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const UsersIcon = ({ color }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M13.333 17.5v-1.667a3.333 3.333 0 0 0-3.334-3.333H5a3.333 3.333 0 0 0-3.334 3.333V17.5" stroke={color} strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="7.5" cy="5.833" r="3.333" stroke={color} strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18.334 17.5v-1.667a3.333 3.333 0 0 0-2.5-3.225M13.334 2.608a3.333 3.333 0 0 1 0 6.459" stroke={color} strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CheckCircleIcon = ({ color }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="8.333" stroke={color} strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round" />
    <path d="m7.5 10 1.667 1.667L12.5 8.333" stroke={color} strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const statIcons = [BriefcaseIcon, UsersIcon, CheckCircleIcon, BriefcaseIcon];

const FilterStarButton = () => (
  <button className="size-9 bg-gray-100 rounded-lg flex justify-center items-center">
    <Star size={17} stroke="#4A5565" strokeWidth={1.36} fill="none" />
  </button>
);

const VacancyCard = ({ card, basePath }) => (
  <div className="w-full h-[480px] bg-white rounded-2xl outline-1 outline-gray-100 px-6 pt-6 flex flex-col">
    <div className="flex items-center gap-1.5 mb-4">
      <div className={`w-14 h-14 rounded-full bg-linear-to-br ${card.avatarGradient} flex items-center justify-center text-white text-lg font-bold border border-gray-200`}>
        {card.company[0]}
      </div>
      <div className="flex-1 flex flex-col gap-[3px]">
        <span className="text-slate-900 text-base font-semibold leading-6">{card.company}</span>
        <StarRating rating={card.rating} />
        <div className="flex items-start gap-1">
          <MapPin size={14} stroke="#4A5565" className="shrink-0 mt-0.5" />
          <span className="text-gray-600 text-xs leading-4">{card.location}</span>
        </div>
      </div>
    </div>

    <div className="border-t border-gray-100 my-2" />

    <div className="flex justify-center my-3">
      <span className="text-3xl font-bold bg-linear-to-r from-cyan-900 to-blue-900 bg-clip-text text-transparent">{card.salary}</span>
    </div>

    <h4 className="text-center text-slate-900 text-base font-medium leading-7 mb-2">{card.title}</h4>

    <div className="flex justify-center items-center gap-2 mb-4">
      <Clock size={16} stroke="#4A5565" />
      <span className="text-gray-600 text-sm leading-5">{card.type}</span>
    </div>

    <div className="border-t border-gray-100 my-2" />

    <div className="flex flex-col gap-2 mt-3">
      <div className="flex gap-[11px]">
        <Link to={`${basePath}/company/${card.id}`} className="flex-1 h-10 bg-cyan-900 rounded-[10px] flex justify-center items-center gap-1 text-white text-sm font-medium">
          <Eye size={16} stroke="white" /> View Profile
        </Link>
        <button className="flex-1 h-10 bg-white rounded-[10px] outline-1 outline-gray-200 flex justify-center items-center gap-1 text-slate-900 text-sm font-medium">
          <Mail size={16} stroke="#0F172A" /> Connect
        </button>
      </div>
      <div className="flex gap-[11px]">
        <button className="flex-1 h-10 bg-amber-500 rounded-[10px] flex justify-center items-center gap-1 text-white text-sm font-medium">
          <DollarSign size={16} stroke="white" /> Bid
        </button>
        <button className="flex-1 h-10 bg-white rounded-[10px] outline-1 outline-gray-200 flex justify-center items-center gap-1 text-slate-900 text-sm font-medium">
          <Briefcase size={16} stroke="#0F172A" /> View Job
        </button>
      </div>
      <button className="h-9 bg-white rounded-[10px] outline-1 outline-gray-200 flex justify-center items-center gap-2 text-slate-900 text-sm font-medium">
        <MessageSquare size={14} stroke="#0F172A" /> Chat
      </button>
    </div>
  </div>
);

const JobsPage = () => {
  const { pathname } = useLocation();
  const basePath = pathname.startsWith("/recruiter") ? "/recruiter" : "/dashboard";
  const [searchQuery, setSearchQuery] = useState("");
  const [activeType, setActiveType] = useState("Full-Time");
  const [industry, setIndustry] = useState("Technology");
  const [category, setCategory] = useState("HR");
  const [location, setLocation] = useState("HR");

  const computedStats = useMemo(() => {
    const openVacancies = jobs.filter((j) => j.status === "Active").length;
    const matching = vacancyCards.length;
    const activeBids = candidates.filter((c) => c.status === "Offer Sent" || c.status === "Under Review").length;
    const nearby = jobs.filter((j) => j.location === "Remote").length;
    const total = Math.max(jobs.length, 1);
    return [
      { label: "Open Vacancies", value: openVacancies, change: `+${Math.round(openVacancies * 0.1)}`, pct: `${Math.round((openVacancies / total) * 100)}%`, iconColor: "#6366F1", bgColor: "bg-indigo-500/10" },
      { label: "Matching Vacancies", value: matching, change: `+${matching}`, pct: `${Math.round((matching / total) * 100)}%`, iconColor: "#EC4899", bgColor: "bg-pink-500/10" },
      { label: "Active Bids", value: activeBids, change: `+${activeBids}`, pct: `${Math.round((activeBids / total) * 100)}%`, iconColor: "#10B981", bgColor: "bg-emerald-500/10" },
      { label: "Nearby Jobs", value: nearby, change: `+${nearby}`, pct: `${Math.round((nearby / total) * 100)}%`, iconColor: "#F59E0B", bgColor: "bg-amber-500/10" },
    ];
  }, []);

  const filteredCards = useMemo(() => {
    if (!searchQuery.trim()) return vacancyCards;
    const q = searchQuery.toLowerCase();
    return vacancyCards.filter(
      (card) =>
        card.company.toLowerCase().includes(q) ||
        card.title.toLowerCase().includes(q) ||
        card.location.toLowerCase().includes(q) ||
        card.type.toLowerCase().includes(q),
    );
  }, [searchQuery]);

  return (
    <div className="flex flex-col gap-6">
      {/* Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {computedStats.map((stat, i) => (
          <StatCard key={i} stat={stat} Icon={statIcons[i]} className="w-full" />
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl outline-[1.5px] outline-gray-200 px-4 sm:px-6 pt-4 sm:pt-6 pb-4 sm:pb-6 flex flex-col gap-4">
        {/* Search */}
        <div className="h-12 px-4 py-3 rounded-[10px] outline-[1.5px] outline-gray-200 flex items-center overflow-hidden">
          <input
            type="text"
            placeholder="Search job, company"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-sm font-normal outline-none placeholder:text-neutral-950/50"
          />
        </div>

        {/* Dropdowns row */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-5">
          <DropdownFilter label="Industry" value={industry} onChange={setIndustry} options={["All Industries", "Technology", "Finance", "Health Care", "Consulting"]} />
          <DropdownFilter label="Category" value={category} onChange={setCategory} options={["All Categories", "HR", "Consultancy", "Sales", "Marketing", "Engineering"]} />
          <DropdownFilter label="Location" value={location} onChange={setLocation} options={["All Locations", "Gujarat", "Mumbai", "Delhi", "Bangalore"]} />
        </div>

        {/* Salary, Rating, Employment Type */}
        <div className="flex flex-col md:flex-row gap-4 w-full">
          {/* Salary Range */}
          <div className="flex-1 flex gap-2">
            <div className="flex-1 flex flex-col gap-1.5">
              <span className="text-gray-500 text-xs font-medium leading-5">Min Salary (€)</span>
              <div className="h-10 px-3 py-2 rounded-lg outline-[1.5px] outline-gray-200 flex items-center overflow-hidden">
                <input type="number" placeholder="Min" className="w-full text-[10px] outline-none placeholder:text-neutral-950/50" />
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-1.5">
              <span className="text-gray-500 text-xs font-medium leading-5">Max Salary (€)</span>
              <div className="h-10 px-3 py-2 rounded-lg outline-[1.5px] outline-gray-200 flex items-center overflow-hidden">
                <input type="number" placeholder="Max" className="w-full text-[10px] outline-none placeholder:text-neutral-950/50" />
              </div>
            </div>
          </div>

          {/* Minimum Rating */}
          <div className="flex-1 flex flex-col gap-2">
            <span className="text-gray-500 text-xs font-medium leading-5">Minimum Rating</span>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <FilterStarButton key={i} />
              ))}
            </div>
          </div>

          {/* Employment Type */}
          <div className="flex-1 flex flex-col gap-2">
            <span className="text-gray-500 text-xs font-medium leading-5">Employment Type</span>
            <div className="flex gap-2">
              {["Full-Time", "Part-Time", "Full-Time/Part-Time"].map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveType(type)}
                  className={`${type === "Full-Time/Part-Time" ? "w-36" : "w-20"} h-8 rounded-lg text-center text-sm font-medium leading-5 ${
                    activeType === type
                      ? "bg-cyan-900 text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Distance Slider */}
        <div className="w-full sm:w-80 flex flex-col gap-4">
          <span className="text-slate-900 text-sm font-medium leading-5">Distance (km): 0 - 1000</span>
          <div className="w-full sm:w-80 h-2 bg-linear-to-r from-slate-900/20 via-blue-900/20 to-gray-200/20 rounded-[10px] relative">
            <div className="w-[90%] sm:w-72 h-2 bg-linear-to-r from-slate-900 via-blue-900 to-gray-200 rounded-[10px]" />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          <button className="flex-1 sm:flex-none sm:w-40 h-11 bg-cyan-900 rounded-lg flex items-center justify-center gap-2 text-white text-sm font-medium">
            <Search size={17} stroke="white" /> Apply Filters
          </button>
          <button
            onClick={() => setSearchQuery("")}
            className="flex-1 sm:flex-none sm:w-32 h-11 bg-white rounded-lg outline-[1.5px] outline-gray-200 flex items-center justify-center gap-2 text-gray-600 text-sm font-medium"
          >
            <X size={17} stroke="#4A5565" /> Clear All
          </button>
        </div>
      </div>

      {/* Job Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredCards.map((card) => (
          <VacancyCard key={card.id} card={card} basePath={basePath} />
        ))}
        {filteredCards.length === 0 && (
          <div className="col-span-full text-center text-gray-400 text-sm py-12">
            No jobs found matching your search.
          </div>
        )}
      </div>
    </div>
  );
};

export default JobsPage;
