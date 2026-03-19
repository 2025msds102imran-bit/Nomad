import React, { useEffect, useRef, useState } from "react";

const STATS = [
  { label: "Open", count: 1, icon: "blue", bg: "bg-blue-100" },
  { label: "In Progress", count: 1, icon: "amber", bg: "bg-amber-100" },
  { label: "Resolved", count: 1, icon: "emerald", bg: "bg-emerald-100" },
  { label: "Urgent", count: 0, icon: "red", bg: "bg-red-100" },
  { label: "Total", count: 3, icon: "purple", bg: "bg-purple-100" },
];

const TICKETS = [
  {
    id: "TKT-001",
    title: "Unable to post new job",
    company: "TechCorp NL",
    email: "contact@techcorp.nl",
    excerpt: "I am getting an error when trying to post a new job opening. The submit button is not working.",
    status: "In Progress",
    statusColor: "bg-amber-500",
    priority: "High",
    priorityColor: "bg-amber-100 text-amber-500",
    category: "Technical",
    categoryIcon: "tag",
    date: "2024-02-10 10:30 AM",
    messages: 3,
    userType: "Company",
    userTypeBg: "bg-blue-100",
    userTypeColor: "text-blue-500",
  },
  {
    id: "TKT-002",
    title: "Question about subscription billing",
    company: "StartupX",
    email: "info@startupx.com",
    excerpt: "I was charged twice for my subscription this month. Can you please check?",
    status: "Resolved",
    statusColor: "bg-emerald-500",
    priority: "Medium",
    priorityColor: "bg-blue-100 text-blue-500",
    category: "Billing",
    categoryIcon: "tag",
    date: "2024-02-08 09:15 AM",
    messages: 2,
    userType: "Company",
    userTypeBg: "bg-blue-100",
    userTypeColor: "text-blue-500",
  },
  {
    id: "TKT-003",
    title: "Platform fee calculation question",
    company: "John Doe",
    email: "john@recruiter.com",
    excerpt: "I need clarification on how platform fees are calculated for Pro plan members.",
    status: "Open",
    statusColor: "bg-blue-500",
    priority: "Medium",
    priorityColor: "bg-blue-100 text-blue-500",
    category: "Billing",
    categoryIcon: "tag",
    date: "2024-02-12 11:00 AM",
    messages: 1,
    userType: "Recruiter",
    userTypeBg: "bg-purple-100",
    userTypeColor: "text-violet-500",
  },
];

const CompanyIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_company)">
      <path d="M2.99609 10.9888V1.998C2.99609 1.73306 3.10134 1.47896 3.28869 1.29162C3.47603 1.10427 3.73013 0.999023 3.99507 0.999023H7.99098C8.25593 0.999023 8.51002 1.10427 8.69736 1.29162C8.88471 1.47896 8.98996 1.73306 8.98996 1.998V10.9888H2.99609Z" stroke="#3B82F6" strokeWidth="0.999" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.99414 2.99707H6.9921" stroke="#3B82F6" strokeWidth="0.999" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.99414 4.99512H6.9921" stroke="#3B82F6" strokeWidth="0.999" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.99414 6.99316H6.9921" stroke="#3B82F6" strokeWidth="0.999" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.99414 8.99121H6.9921" stroke="#3B82F6" strokeWidth="0.999" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs><clipPath id="clip0_company"><rect width="12" height="12" fill="white" /></clipPath></defs>
  </svg>
);

const RecruiterIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_recruiter)">
      <path d="M7.99089 10.4891V9.49014C7.99089 8.96025 7.78039 8.45206 7.4057 8.07738C7.03101 7.70269 6.52282 7.49219 5.99293 7.49219H2.996C2.46611 7.49219 1.95792 7.70269 1.58323 8.07738C1.20855 8.45206 0.998047 8.96025 0.998047 9.49014V10.4891" stroke="#8B5CF6" strokeWidth="0.999" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.496 5.49396C5.59944 5.49396 6.49396 4.59944 6.49396 3.496C6.49396 2.39256 5.59944 1.49805 4.496 1.49805C3.39256 1.49805 2.49805 2.39256 2.49805 3.496C2.49805 4.59944 3.39256 5.49396 4.496 5.49396Z" stroke="#8B5CF6" strokeWidth="0.999" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs><clipPath id="clip0_recruiter"><rect width="12" height="12" fill="white" /></clipPath></defs>
  </svg>
);

const TagIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_tag)">
      <path d="M6.28563 1.29172C6.09833 1.10437 5.84428 0.99908 5.57936 0.999023H1.99702C1.73208 0.999023 1.47799 1.10427 1.29064 1.29162C1.1033 1.47896 0.998047 1.73306 0.998047 1.998V5.58033C0.998103 5.84526 1.10339 6.09931 1.29075 6.28661L5.6383 10.6342C5.86532 10.8598 6.17237 10.9864 6.49242 10.9864C6.81247 10.9864 7.11952 10.8598 7.34655 10.6342L10.6332 7.34753C10.8588 7.1205 10.9854 6.81345 10.9854 6.4934C10.9854 6.17335 10.8588 5.8663 10.6332 5.63927L6.28563 1.29172Z" stroke="#6B7280" strokeWidth="0.999" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.74584 3.99558C3.88377 3.99558 3.99558 3.88377 3.99558 3.74584C3.99558 3.60791 3.88377 3.49609 3.74584 3.49609C3.60791 3.49609 3.49609 3.60791 3.49609 3.74584C3.49609 3.88377 3.60791 3.99558 3.74584 3.99558Z" fill="#6B7280" stroke="#6B7280" strokeWidth="0.999" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs><clipPath id="clip0_tag"><rect width="12" height="12" fill="white" /></clipPath></defs>
  </svg>
);

const StatIcon = ({ type }) => {
  const icons = {
    blue: (<><path d="M11.9969 21.9929C17.5181 21.9929 21.9938 17.5171 21.9938 11.9959C21.9938 6.4748 17.5181 1.99902 11.9969 1.99902C6.47577 1.99902 2 6.4748 2 11.9959C2 17.5171 6.47577 21.9929 11.9969 21.9929Z" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.9961 5.99805V11.9962L15.9949 13.9956" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></>),
    amber: (<><path d="M11.9969 21.9929C17.5181 21.9929 21.9938 17.5171 21.9938 11.9959C21.9938 6.4748 17.5181 1.99902 11.9969 1.99902C6.47577 1.99902 2 6.4748 2 11.9959C2 17.5171 6.47577 21.9929 11.9969 21.9929Z" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.9961 7.99707V11.9958" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.9961 15.9951H12.0061" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></>),
    emerald: (<><path d="M21.7945 9.99704C22.2511 12.2376 21.9257 14.5671 20.8726 16.5968C19.8196 18.6265 18.1025 20.2339 16.0078 21.1509C13.9131 22.0679 11.5673 22.2391 9.36164 21.6358C7.156 21.0326 5.22381 19.6914 3.88731 17.836C2.5508 15.9806 1.89077 13.7231 2.01727 11.44C2.14377 9.15683 3.04917 6.98605 4.58247 5.28966C6.11577 3.59326 8.18429 2.47378 10.4431 2.11792C12.7019 1.76205 15.0144 2.1913 16.995 3.33409" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.99805 10.9969L11.9971 13.9959L21.994 3.99902" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></>),
    red: (<><path d="M11.9969 21.9929C17.5181 21.9929 21.9938 17.5171 21.9938 11.9959C21.9938 6.4748 17.5181 1.99902 11.9969 1.99902C6.47577 1.99902 2 6.4748 2 11.9959C2 17.5171 6.47577 21.9929 11.9969 21.9929Z" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.9961 7.99707V11.9958" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.9961 15.9951H12.0061" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></>),
    purple: <path d="M20.9945 14.9953C20.9945 15.5256 20.7838 16.0341 20.4089 16.4091C20.0339 16.7841 19.5253 16.9947 18.9951 16.9947H6.99877L3 20.9935V4.99841C3 4.46814 3.21065 3.95959 3.58561 3.58463C3.96056 3.20967 4.46911 2.99902 4.99938 2.99902H18.9951C19.5253 2.99902 20.0339 3.20967 20.4089 3.58463C20.7838 3.95959 20.9945 4.46814 20.9945 4.99841V14.9953Z" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />,
  };
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {icons[type] || icons.blue}
    </svg>
  );
};

import InProgressBtn from './InProgressBtn';

const SupportPage = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [userFilter, setUserFilter] = useState("All users");
  const [isUserFilterOpen, setIsUserFilterOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState("All status");
  const [isStatusFilterOpen, setIsStatusFilterOpen] = useState(false);
  const [priorityFilter, setPriorityFilter] = useState("All priority");
  const [isPriorityFilterOpen, setIsPriorityFilterOpen] = useState(false);
  const userFilterRef = useRef(null);
  const statusFilterRef = useRef(null);
  const priorityFilterRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userFilterRef.current && !userFilterRef.current.contains(e.target)) {
        setIsUserFilterOpen(false);
      }
      if (
        statusFilterRef.current &&
        !statusFilterRef.current.contains(e.target)
      ) {
        setIsStatusFilterOpen(false);
      }
      if (
        priorityFilterRef.current &&
        !priorityFilterRef.current.contains(e.target)
      ) {
        setIsPriorityFilterOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredTickets = TICKETS.filter((t) => {
    const matchesSearch =
      !searchQuery.trim() ||
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.id.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesUserType =
      userFilter === "All users" ||
      (userFilter === "Companies" && t.userType === "Company") ||
      (userFilter === "Recruiters" && t.userType === "Recruiter");

    const matchesStatus =
      statusFilter === "All status" ||
      (statusFilter === "open" && t.status === "Open") ||
      (statusFilter === "in progress" && t.status === "In Progress") ||
      (statusFilter === "resolved" && t.status === "Resolved") ||
      (statusFilter === "closed" && t.status === "Closed");

    const matchesPriority =
      priorityFilter === "All priority" ||
      (priorityFilter === "low" && t.priority === "Low") ||
      (priorityFilter === "medium" && t.priority === "Medium") ||
      (priorityFilter === "high" && t.priority === "High") ||
      (priorityFilter === "urgent" && t.priority === "Urgent");

    return matchesSearch && matchesUserType && matchesStatus && matchesPriority;
  });

  return (
    <div data-layer="Main Content" className="MainContent w-full self-stretch pr-4 flex flex-col justify-start items-start overflow-hidden">
      {/* Header */}
      <div
        data-layer="Header"
        className="Header w-full h-auto min-h-24 px-4 sm:px-8 pt-4 pb-[1.30px] bg-white border-b-[1.30px] border-gray-200 flex flex-col justify-start items-start shrink-0"
      >
        <div data-layer="Container" className="Container self-stretch h-auto min-h-12 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4">
          <div data-layer="Container" className="Container w-full sm:w-72 h-auto flex justify-start items-center">
            <div data-layer="Container" className="Container w-full flex-1 h-auto flex flex-col justify-start items-start gap-0.5">
              <div
                data-layer="Heading 2"
                className="Heading2 self-stretch text-black text-base font-semibold font-['Poppins'] capitalize leading-6"
              >
                Support
              </div>
              <div
                data-layer="Paragraph"
                className="Paragraph self-stretch text-gray-500 text-sm font-normal font-['Inter'] leading-6 w-full lg:max-w-[500px]"
              >
                Find assistance for managing platform settings, pricing plans, and subscription limits
              </div>
            </div>
          </div>

          <div data-layer="Container" className="Container h-10 w-full sm:w-auto flex items-center justify-start sm:justify-end gap-3 mt-4 sm:mt-0">
            <button
              type="button"
              data-layer="Button"
              className="Button size-9 relative inline-flex items-center justify-center rounded-[10px] hover:bg-gray-100"
              title="Notifications"
            >
              <span data-svg-wrapper data-layer="Icon" className="Icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_956_479)">
                    <path d="M8.54883 17.4834C8.69498 17.7365 8.90517 17.9467 9.15829 18.0928C9.41141 18.2389 9.69853 18.3159 9.9908 18.3159C10.2831 18.3159 10.5702 18.2389 10.8233 18.0928C11.0764 17.9467 11.2866 17.7365 11.4328 17.4834" stroke="#4A5565" strokeWidth="1.6651" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2.71557 12.7596C2.60681 12.8788 2.53503 13.027 2.50897 13.1863C2.48292 13.3455 2.5037 13.5089 2.56879 13.6566C2.63389 13.8042 2.74049 13.9298 2.87563 14.018C3.01077 14.1062 3.16862 14.1532 3.32999 14.1533H16.6508C16.8121 14.1533 16.97 14.1065 17.1052 14.0185C17.2405 13.9305 17.3472 13.8051 17.4125 13.6575C17.4777 13.51 17.4987 13.3466 17.4729 13.1874C17.447 13.0281 17.3755 12.8798 17.2669 12.7604C16.1596 11.619 14.9857 10.406 14.9857 6.66034C14.9857 5.3355 14.4594 4.06493 13.5226 3.12813C12.5858 2.19133 11.3152 1.66504 9.99039 1.66504C8.66555 1.66504 7.39498 2.19133 6.45818 3.12813C5.52138 4.06493 4.99509 5.3355 4.99509 6.66034C4.99509 10.406 3.82036 11.619 2.71557 12.7596Z" stroke="#4A5565" strokeWidth="1.6651" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_956_479">
                      <rect width="19.9812" height="19.9812" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span data-svg-wrapper data-layer="Text" className="Text absolute right-1.5 top-1.5">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 3.99826C0 1.79008 1.79008 0 3.99826 0C6.20644 0 7.99653 1.79008 7.99653 3.99826C7.99653 6.20644 6.20644 7.99653 3.99826 7.99653C1.79008 7.99653 0 6.20644 0 3.99826Z" fill="#4A90E2"/>
                </svg>
              </span>
            </button>

            <button
              type="button"
              data-layer="Button"
              className="Button w-28 h-10 pl-4 bg-white rounded-[10px] outline outline-[1.30px] outline-offset-[-1.30px] outline-gray-200 flex justify-start items-center gap-2 hover:bg-gray-50"
            >
              <span data-svg-wrapper data-layer="Icon" className="Icon relative">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_956_484)">
                    <path d="M3.33203 5.33105L7.33029 9.32932" stroke="#4A5565" strokeWidth="1.33275" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2.66602 9.32943L6.66428 5.33116L7.99703 3.33203" stroke="#4A5565" strokeWidth="1.33275" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1.33203 3.33203H9.32856" stroke="#4A5565" strokeWidth="1.33275" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.66406 1.33301H5.33044" stroke="#4A5565" strokeWidth="1.33275" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14.6599 14.6599L11.328 7.99609L7.99609 14.6599" stroke="#4A5565" strokeWidth="1.33275" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.33008 11.9951H13.3283" stroke="#4A5565" strokeWidth="1.33275" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_956_484">
                      <rect width="15.9931" height="15.9931" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span data-layer="Text" className="Text text-gray-600 text-sm font-medium font-['Inter'] leading-5">Eng</span>
              <span data-svg-wrapper data-layer="Icon" className="Icon relative">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.6613 5.99707L7.99669 10.6617L3.33203 5.99707" stroke="#4A5565" strokeWidth="1.33275" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full min-h-0 px-8 pt-8 bg-gray-50 flex flex-col gap-8">
        <div className="flex flex-col gap-8">
          {/* Stats row */}
          <div className="flex flex-wrap gap-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="w-52 h-24 px-4 pt-4 pb-px bg-white rounded-2xl border border-gray-200 flex flex-col justify-start"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-gray-500 text-sm font-normal">{stat.label}</div>
                    <div className="text-slate-900 text-2xl font-bold leading-8">{stat.count}</div>
                  </div>
                  <div className={`size-12 rounded-2xl flex justify-center items-center ${stat.bg}`}>
                    <StatIcon type={stat.icon} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Filters bar */}
          <div className="w-full h-20 bg-white rounded-2xl border border-gray-200 px-4 flex flex-wrap items-center gap-4">
            <div className="relative w-64 h-12">
              <input
                type="text"
                placeholder="Search tickets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-12 pl-10 pr-4 rounded-[10px] border border-gray-200 text-base placeholder:text-neutral-950/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.16557 15.8311C12.8469 15.8311 15.8311 12.8469 15.8311 9.16557C15.8311 5.48428 12.8469 2.5 9.16557 2.5C5.48428 2.5 2.5 5.48428 2.5 9.16557C2.5 12.8469 5.48428 15.8311 9.16557 15.8311Z" stroke="#6B7280" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M17.4968 17.4968L13.9141 13.9141" stroke="#6B7280" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className="relative" ref={userFilterRef}>
              <button
                type="button"
                onClick={() => setIsUserFilterOpen((v) => !v)}
                className="w-64 h-12 rounded-[10px] border border-gray-200 px-4 text-base font-normal focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white flex items-center justify-between"
              >
                <span className={userFilter === "All users" ? "text-neutral-950/50" : "text-neutral-950"}>
                  {userFilter}
                </span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 6L8 10L12 6" stroke="#6B7280" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {isUserFilterOpen && (
                <div
                  data-layer="Frame 1597884136"
                  className="Frame1597884136 absolute left-0 top-full mt-2 w-56 p-3 bg-white rounded-[20px] shadow-lg border border-gray-200 inline-flex justify-start items-start gap-2.5 overflow-hidden z-50"
                >
                  <div
                    data-layer="Frame 1597884130"
                    className="Frame1597884130 flex-1 inline-flex flex-col justify-start items-start gap-3.5"
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setUserFilter("All users");
                        setIsUserFilterOpen(false);
                      }}
                      data-layer="All users"
                      className={`AllUsers w-full text-left justify-start text-base font-normal font-['Inter'] ${
                        userFilter === "All users" ? "text-neutral-950" : "text-neutral-950/50"
                      }`}
                    >
                      All users
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setUserFilter("Companies");
                        setIsUserFilterOpen(false);
                      }}
                      data-layer="Companies"
                      className={`Companies w-full text-left self-stretch justify-start text-base font-normal font-['Inter'] ${
                        userFilter === "Companies" ? "text-neutral-950" : "text-neutral-950/50"
                      }`}
                    >
                      Companies
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setUserFilter("Recruiters");
                        setIsUserFilterOpen(false);
                      }}
                      data-layer="Recruiters"
                      className={`Recruiters w-full text-left justify-start text-base font-normal font-['Inter'] ${
                        userFilter === "Recruiters" ? "text-neutral-950" : "text-neutral-950/50"
                      }`}
                    >
                      Recruiters
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="relative" ref={statusFilterRef}>
              <button
                type="button"
                onClick={() => setIsStatusFilterOpen((v) => !v)}
                className="w-64 h-12 rounded-[10px] border border-gray-200 px-4 text-base font-normal focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white flex items-center justify-between"
              >
                <span
                  className={
                    statusFilter === "All status"
                      ? "text-neutral-950/50"
                      : "text-neutral-950"
                  }
                >
                  {statusFilter}
                </span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="#6B7280"
                    strokeWidth="1.33"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {isStatusFilterOpen && (
                <div
                  data-layer="Frame 1597884137"
                  className="Frame1597884137 absolute left-0 top-full mt-2 w-56 p-3 bg-white rounded-[20px] shadow-lg border border-gray-200 inline-flex justify-start items-start gap-2.5 overflow-hidden z-50"
                >
                  <div
                    data-layer="Frame 1597884130"
                    className="Frame1597884130 flex-1 inline-flex flex-col justify-start items-start gap-3.5"
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setStatusFilter("All status");
                        setIsStatusFilterOpen(false);
                      }}
                      data-layer="All status"
                      className={`AllStatus w-full text-left justify-start text-base font-normal font-['Inter'] ${
                        statusFilter === "All status"
                          ? "text-neutral-950"
                          : "text-neutral-950/50"
                      }`}
                    >
                      All status
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setStatusFilter("open");
                        setIsStatusFilterOpen(false);
                      }}
                      data-layer="open"
                      className={`Open w-full text-left self-stretch justify-start text-base font-normal font-['Inter'] ${
                        statusFilter === "open"
                          ? "text-neutral-950"
                          : "text-neutral-950/50"
                      }`}
                    >
                      open
                    </button>
                    <InProgressBtn statusFilter={statusFilter} onClick={() => {
                        setStatusFilter("in progress");
                        setIsStatusFilterOpen(false);
                      }} />
                    <button
                      type="button"
                      onClick={() => {
                        setStatusFilter("resolved");
                        setIsStatusFilterOpen(false);
                      }}
                      data-layer="resolved"
                      className={`Resolved w-full text-left justify-start text-base font-normal font-['Inter'] ${
                        statusFilter === "resolved"
                          ? "text-neutral-950"
                          : "text-neutral-950/50"
                      }`}
                    >
                      resolved
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setStatusFilter("closed");
                        setIsStatusFilterOpen(false);
                      }}
                      data-layer="closed"
                      className={`Closed w-full text-left justify-start text-base font-normal font-['Inter'] ${
                        statusFilter === "closed"
                          ? "text-neutral-950"
                          : "text-neutral-950/50"
                      }`}
                    >
                      closed
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="relative" ref={priorityFilterRef}>
              <button
                type="button"
                onClick={() => setIsPriorityFilterOpen((v) => !v)}
                className="w-64 h-12 rounded-[10px] border border-gray-200 px-4 text-base font-normal focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white flex items-center justify-between"
              >
                <span
                  className={
                    priorityFilter === "All priority"
                      ? "text-neutral-950/50"
                      : "text-neutral-950"
                  }
                >
                  {priorityFilter}
                </span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="#6B7280"
                    strokeWidth="1.33"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {isPriorityFilterOpen && (
                <div
                  data-layer="Frame 1597884138"
                  className="Frame1597884138 absolute left-0 top-full mt-2 w-56 p-3 bg-white rounded-[20px] shadow-lg border border-gray-200 inline-flex justify-start items-start gap-2.5 overflow-hidden z-50"
                >
                  <div
                    data-layer="Frame 1597884130"
                    className="Frame1597884130 flex-1 inline-flex flex-col justify-start items-start gap-3.5"
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setPriorityFilter("All priority");
                        setIsPriorityFilterOpen(false);
                      }}
                      data-layer="All priority"
                      className={`AllPriority w-full text-left justify-start text-base font-normal font-['Inter'] ${
                        priorityFilter === "All priority"
                          ? "text-neutral-950"
                          : "text-neutral-950/50"
                      }`}
                    >
                      All priority
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setPriorityFilter("low");
                        setIsPriorityFilterOpen(false);
                      }}
                      data-layer="low"
                      className={`Low w-full text-left self-stretch justify-start text-base font-normal font-['Inter'] ${
                        priorityFilter === "low"
                          ? "text-neutral-950"
                          : "text-neutral-950/50"
                      }`}
                    >
                      low
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setPriorityFilter("medium");
                        setIsPriorityFilterOpen(false);
                      }}
                      data-layer="medium"
                      className={`Medium w-full text-left justify-start text-base font-normal font-['Inter'] ${
                        priorityFilter === "medium"
                          ? "text-neutral-950"
                          : "text-neutral-950/50"
                      }`}
                    >
                      medium
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setPriorityFilter("high");
                        setIsPriorityFilterOpen(false);
                      }}
                      data-layer="high"
                      className={`High w-full text-left justify-start text-base font-normal font-['Inter'] ${
                        priorityFilter === "high"
                          ? "text-neutral-950"
                          : "text-neutral-950/50"
                      }`}
                    >
                      high
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setPriorityFilter("urgent");
                        setIsPriorityFilterOpen(false);
                      }}
                      data-layer="urgent"
                      className={`Urgent w-full text-left justify-start text-base font-normal font-['Inter'] ${
                        priorityFilter === "urgent"
                          ? "text-neutral-950"
                          : "text-neutral-950/50"
                      }`}
                    >
                      urgent
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Two columns: ticket list + detail */}
          <div className="flex flex-col lg:flex-row gap-4 flex-1 min-h-0 w-full">
            <div className="w-full lg:w-1/3 lg:max-w-[540px] flex flex-col gap-4 overflow-y-auto">
              {filteredTickets.map((ticket) => (
                <TicketCard
                  key={ticket.id}
                  ticket={ticket}
                  isSelected={selectedTicket === ticket.id}
                  onSelect={() => setSelectedTicket(ticket.id)}
                />
              ))}
            </div>
            <div className="flex-1 w-full lg:w-2/3 flex justify-center items-center min-h-[400px]">
              {selectedTicket ? (
                <TicketDetail ticket={filteredTickets.find(t => t.id === selectedTicket)} />
              ) : (
                <div className="bg-white rounded-2xl border border-gray-200 w-full h-full flex flex-col justify-center items-center gap-4">
                  <div className="overflow-hidden">
                    <svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M63.3221 43.3264C63.3221 45.0942 62.6199 46.7896 61.3698 48.0397C60.1198 49.2897 58.4244 49.992 56.6566 49.992H16.6632L3.33203 63.3231V9.99857C3.33203 8.23076 4.03429 6.53534 5.28433 5.28531C6.53437 4.03527 8.22978 3.33301 9.9976 3.33301H56.6566C58.4244 3.33301 60.1198 4.03527 61.3698 5.28531C62.6199 6.53534 63.3221 8.23076 63.3221 9.99857V43.3264Z" stroke="#D1D5DB" strokeWidth="6.67" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="text-gray-500 text-lg font-normal text-center">Select a ticket to view details</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function TicketCard({ ticket, isSelected, onSelect }) {
  const UserIcon = ticket.userType === "Recruiter" ? RecruiterIcon : CompanyIcon;
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full h-60 px-5 pt-5 pb-px bg-white rounded-2xl border flex flex-col gap-3 text-left transition-colors hover:border-blue-300 ${isSelected ? "border-blue-500 ring-2 ring-blue-500/20" : "border-gray-200"}`}
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 bg-gray-100 rounded-sm text-gray-500 text-xs font-bold">{ticket.id}</span>
          <span className={`px-2 py-0.5 rounded-sm inline-flex items-center gap-1 ${ticket.userTypeBg}`}>
            <UserIcon />
            <span className={`text-xs font-bold ${ticket.userTypeColor}`}>{ticket.userType}</span>
          </span>
        </div>
        <h3 className="text-slate-900 text-base font-semibold leading-6">{ticket.title}</h3>
        <div className="text-gray-500 text-sm">{ticket.company} • {ticket.email}</div>
        <p className="text-gray-500 text-sm line-clamp-2">{ticket.excerpt}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        <span className={`h-6 px-3 rounded-full inline-flex items-center gap-1.5 text-white text-xs font-bold ${ticket.statusColor}`}>
          {ticket.status === "In Progress" && (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M7.99188 14.6517C11.67 14.6517 14.6517 11.67 14.6517 7.99188C14.6517 4.31375 11.67 1.33203 7.99188 1.33203C4.31375 1.33203 1.33203 4.31375 1.33203 7.99188C1.33203 11.67 4.31375 14.6517 7.99188 14.6517Z" stroke="white" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7.99219 5.32812V7.99206" stroke="white" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7.99219 10.6553H7.99885" stroke="white" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
          {ticket.status === "Resolved" && (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M14.5196 6.66023C14.8237 8.1529 14.607 9.70473 13.9055 11.0569C13.2039 12.4091 12.06 13.4799 10.6645 14.0908C9.26906 14.7017 7.70632 14.8157 6.23694 14.4139C4.76756 14.012 3.48035 13.1185 2.58999 11.8825C1.69962 10.6464 1.25991 9.14251 1.34419 7.6215C1.42846 6.10049 2.03163 4.65434 3.0531 3.52422C4.07457 2.3941 5.45259 1.64831 6.95738 1.41124C8.46216 1.17416 10.0027 1.46012 11.3222 2.22144" stroke="white" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5.99414 7.32596L7.9921 9.32391L14.6519 2.66406" stroke="white" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
          {ticket.status === "Open" && (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M7.99188 14.6517C11.67 14.6517 14.6517 11.67 14.6517 7.99188C14.6517 4.31375 11.67 1.33203 7.99188 1.33203C4.31375 1.33203 1.33203 4.31375 1.33203 7.99188C1.33203 11.67 4.31375 14.6517 7.99188 14.6517Z" stroke="white" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7.99219 3.99609V7.992L10.6561 9.32397" stroke="white" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
          {ticket.status}
        </span>
        <span className={`h-6 px-3 rounded-full text-xs font-bold ${ticket.priorityColor}`}>{ticket.priority}</span>
        <span className="h-6 px-3 rounded-full bg-gray-100 inline-flex items-center gap-1.5 text-gray-500 text-xs font-bold">
          <TagIcon />
          {ticket.category}
        </span>
      </div>
      <div className="flex justify-between items-center text-xs text-gray-500">
        <div className="flex items-center gap-1">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M4.66406 1.16602V3.49839" stroke="#6B7280" strokeWidth="1.17" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.33008 1.16602V3.49839" stroke="#6B7280" strokeWidth="1.17" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.0795 2.33203H2.91619C2.27212 2.33203 1.75 2.85415 1.75 3.49822V11.6615C1.75 12.3056 2.27212 12.8277 2.91619 12.8277H11.0795C11.7236 12.8277 12.2457 12.3056 12.2457 11.6615V3.49822C12.2457 2.85415 11.7236 2.33203 11.0795 2.33203Z" stroke="#6B7280" strokeWidth="1.17" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M1.75 5.83105H12.2457" stroke="#6B7280" strokeWidth="1.17" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {ticket.date}
        </div>
        <div className="flex items-center gap-1">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M12.2457 8.74615C12.2457 9.05545 12.1228 9.35207 11.9041 9.57077C11.6854 9.78948 11.3888 9.91234 11.0795 9.91234H4.08238L1.75 12.2447V2.91521C1.75 2.60592 1.87287 2.30929 2.09157 2.09059C2.31027 1.87189 2.6069 1.74902 2.91619 1.74902H11.0795C11.3888 1.74902 11.6854 1.87189 11.9041 2.09059C12.1228 2.30929 12.2457 2.60592 12.2457 2.91521V8.74615Z" stroke="#6B7280" strokeWidth="1.17" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {ticket.messages} messages
        </div>
      </div>
    </button>
  );
}

export default SupportPage;

function TicketDetail({ ticket }) {
  if (!ticket) return null;
  const UserIcon = ticket.userType === "Recruiter" ? RecruiterIcon : CompanyIcon;

  return (
    <div className="w-full h-full bg-white rounded-2xl outline outline-1 outline-offset-[-1.10px] outline-gray-200 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="w-full px-5 pt-5 pb-5 border-b border-gray-200 flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 bg-gray-100 rounded-sm text-gray-500 text-xs font-bold leading-4">{ticket.id}</span>
            <span className={`px-2 py-1 rounded-sm inline-flex items-center gap-1 ${ticket.userTypeBg}`}>
              <UserIcon />
              <span className={`text-xs font-bold leading-4 ${ticket.userTypeColor}`}>{ticket.userType}</span>
            </span>
          </div>
          <h2 className="text-slate-900 text-xl font-semibold leading-7">{ticket.title}</h2>
          <div className="text-gray-500 text-sm font-normal leading-5">{ticket.company} • {ticket.email}</div>
        </div>

        {/* Status Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <span className={`px-3 py-1 rounded-full inline-flex items-center gap-1.5 text-white text-xs font-bold leading-4 ${ticket.statusColor}`}>
            {ticket.status === "In Progress" && (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M7.99188 14.6517C11.67 14.6517 14.6517 11.67 14.6517 7.99188C14.6517 4.31375 11.67 1.33203 7.99188 1.33203C4.31375 1.33203 1.33203 4.31375 1.33203 7.99188C1.33203 11.67 4.31375 14.6517 7.99188 14.6517Z" stroke="white" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.99219 5.32812V7.99206" stroke="white" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.99219 10.6553H7.99885" stroke="white" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
            {ticket.status === "Resolved" && (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M14.5196 6.66023C14.8237 8.1529 14.607 9.70473 13.9055 11.0569C13.2039 12.4091 12.06 13.4799 10.6645 14.0908C9.26906 14.7017 7.70632 14.8157 6.23694 14.4139C4.76756 14.012 3.48035 13.1185 2.58999 11.8825C1.69962 10.6464 1.25991 9.14251 1.34419 7.6215C1.42846 6.10049 2.03163 4.65434 3.0531 3.52422C4.07457 2.3941 5.45259 1.64831 6.95738 1.41124C8.46216 1.17416 10.0027 1.46012 11.3222 2.22144" stroke="white" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5.99414 7.32596L7.9921 9.32391L14.6519 2.66406" stroke="white" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
            {ticket.status === "Open" && (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M7.99188 14.6517C11.67 14.6517 14.6517 11.67 14.6517 7.99188C14.6517 4.31375 11.67 1.33203 7.99188 1.33203C4.31375 1.33203 1.33203 4.31375 1.33203 7.99188C1.33203 11.67 4.31375 14.6517 7.99188 14.6517Z" stroke="white" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.99219 3.99609V7.992L10.6561 9.32397" stroke="white" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
            {ticket.status}
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-bold leading-4 ${ticket.priorityColor}`}>{ticket.priority}</span>
          <span className="px-3 py-1 rounded-full bg-gray-100 inline-flex items-center gap-1 text-gray-500 text-xs font-semibold leading-4">
            <TagIcon />
            {ticket.category}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2 mt-1">
          <button type="button" className={`px-4 py-1.5 rounded-[10px] text-xs font-bold leading-4 transition-colors ${ticket.status === 'In Progress' ? 'bg-amber-100 text-amber-500 opacity-50 cursor-default' : 'bg-amber-100 text-amber-500 hover:bg-amber-200'}`}>
            Mark In Progress
          </button>
          <button type="button" className={`px-4 py-1.5 rounded-[10px] text-xs font-bold leading-4 transition-colors ${ticket.status === 'Resolved' ? 'bg-emerald-100 text-emerald-500 opacity-50 cursor-default' : 'bg-emerald-100 text-emerald-500 hover:bg-emerald-200'}`}>
            Mark Resolved
          </button>
          <button type="button" className="px-4 py-1.5 rounded-[10px] bg-gray-100 text-gray-500 text-xs font-bold leading-4 hover:bg-gray-200 transition-colors">
            Close
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 w-full p-5 overflow-y-auto flex flex-col gap-4 bg-gray-50/50">
        
        {/* Customer Message */}
        <div className="w-full flex justify-start">
          <div className="w-full max-w-[85%] sm:max-w-md lg:max-w-lg px-4 py-3 bg-gray-100 rounded-2xl flex flex-col gap-1">
            <div className="text-slate-900 text-xs font-semibold leading-4">{ticket.company}</div>
            <div className="text-slate-900 text-sm font-normal leading-5">{ticket.excerpt}</div>
            <div className="text-gray-500 text-xs font-normal leading-4 mt-1">{ticket.date}</div>
          </div>
        </div>

        {/* Admin Reply 1 */}
        <div className="w-full flex justify-end">
          <div className="w-full max-w-[85%] sm:max-w-md lg:max-w-lg px-4 py-3 bg-gradient-to-b from-slate-900 to-blue-900 rounded-2xl flex flex-col gap-1">
            <div className="text-white text-xs font-semibold leading-4">You</div>
            <div className="text-white text-sm font-normal leading-5">Thank you for reporting this issue. Our technical team is investigating the problem.</div>
            <div className="text-white/70 text-xs font-normal leading-4 mt-1">2024-02-10 11:00 AM</div>
          </div>
        </div>

        {/* Admin Reply 2 */}
        <div className="w-full flex justify-end">
          <div className="w-full max-w-[85%] sm:max-w-md lg:max-w-lg px-4 py-3 bg-gradient-to-b from-slate-900 to-blue-900 rounded-2xl flex flex-col gap-1">
            <div className="text-white text-xs font-semibold leading-4">You</div>
            <div className="text-white text-sm font-normal leading-5">We have identified the issue and deployed a fix. Please try again and let us know if the problem persists.</div>
            <div className="text-white/70 text-xs font-normal leading-4 mt-1">2024-02-10 02:15 PM</div>
          </div>
        </div>

      </div>

      {/* Input area */}
      <div className="w-full p-5 border-t border-gray-200 flex sm:flex-row flex-col items-end sm:items-center gap-3 bg-white">
        <textarea 
          placeholder="Type your reply..."
          className="flex-1 w-full min-h-[44px] max-h-[120px] px-4 py-3 rounded-[10px] outline outline-1 outline-offset-[-1.10px] outline-gray-200 text-base placeholder:text-neutral-950/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-y"
          rows={1}
        />
        <button type="button" className="h-11 px-6 bg-cyan-900 hover:bg-cyan-800 text-white text-base font-bold rounded-[10px] flex justify-center items-center gap-2 whitespace-nowrap transition-colors">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
            <g clipPath="url(#clip0_send_2275)">
              <path d="M9.68069 14.4423C9.70599 14.5054 9.74998 14.5592 9.80674 14.5965C9.86351 14.6339 9.93034 14.6529 9.99826 14.6512C10.0662 14.6495 10.1319 14.627 10.1867 14.5868C10.2415 14.5466 10.2827 14.4906 10.3047 14.4263L14.6336 1.77262C14.6549 1.71361 14.659 1.64975 14.6453 1.58851C14.6317 1.52728 14.6009 1.47119 14.5565 1.42683C14.5121 1.38246 14.4561 1.35165 14.3948 1.338C14.3336 1.32434 14.2697 1.32841 14.2107 1.34972L1.557 5.67863C1.49273 5.70067 1.43674 5.74184 1.39655 5.79662C1.35636 5.8514 1.33388 5.91716 1.33214 5.98508C1.3304 6.05301 1.34948 6.11983 1.38682 6.1766C1.42415 6.23337 1.47796 6.27735 1.54102 6.30265L6.82228 8.42049C6.98924 8.48733 7.14092 8.58729 7.2682 8.71434C7.39548 8.84139 7.49571 8.9929 7.56286 9.15973L9.68069 14.4423Z" stroke="white" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14.5554 1.42969L7.26953 8.7149" stroke="white" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs><clipPath id="clip0_send_2275"><rect width="16" height="16" fill="white" /></clipPath></defs>
          </svg>
          Send
        </button>
      </div>
    </div>
  );
}
