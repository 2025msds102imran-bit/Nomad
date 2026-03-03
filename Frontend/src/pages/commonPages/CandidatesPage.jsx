import React, { useState, useRef, useEffect, useMemo } from "react";
import {
  Search,
  X,
  Plus,
  Users,
  UserCheck,
  CheckCircle,
  Clock,
  EyeOff,
  MoreVertical,
  Eye,
  Download,
  SquarePen,
  Briefcase,
  Mail,
  ClipboardList,
  TrendingUp,
  Trash2,
} from "lucide-react";
import { candidates, candidateTableData } from "../../data/dummyData";
import { StatCard } from "../../global";

const statIcons = [Users, UserCheck, CheckCircle, Clock];

const dropdownActions = [
  { label: "Download CV", icon: Download },
  { label: "Edit", icon: SquarePen },
  { label: "View Bid", icon: Briefcase },
  { label: "View Received Bid", icon: Mail },
  { label: "View Vacancies", icon: ClipboardList },
  { label: "Boost", icon: TrendingUp },
  { label: "Delete", icon: Trash2 },
];

const ActionDropdown = ({ rowId, openId, setOpenId, isHiddenView, onToggleHide }) => {
  const ref = useRef(null);
  const isOpen = openId === rowId;

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpenId(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [setOpenId]);

  return (
    <div className="flex items-center gap-2">
      <div className="relative" ref={ref}>
        <MoreVertical
          size={20}
          stroke="#4A5565"
          className="cursor-pointer"
          onClick={() => setOpenId(isOpen ? null : rowId)}
        />
        {isOpen && (
          <div className="absolute right-0 top-full mt-1 w-52 p-2 bg-white rounded-2xl outline-[0.7px] outline-gray-600 flex flex-col gap-1 z-50 overflow-hidden">
            <button className="h-8 rounded-md flex items-center gap-2.5 px-3 text-gray-600 text-sm font-normal leading-5 hover:bg-cyan-900 hover:text-white [&:hover_svg]:stroke-white! transition-colors">
              <Eye size={16} stroke="#4A5565" className="transition-colors" />
              View Details
            </button>
            <div className="flex flex-col">
              {dropdownActions.map((action) => {
                const Icon = action.icon;
                return (
                  <button
                    key={action.label}
                    className="h-8 px-3 rounded-md flex items-center gap-3 text-gray-600 text-sm font-normal leading-5 hover:bg-cyan-900 hover:text-white [&:hover_svg]:stroke-white! transition-colors"
                  >
                    <Icon size={16} stroke="#4A5565" className="transition-colors" />
                    {action.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
      {isHiddenView ? (
        <button
          onClick={() => onToggleHide(rowId)}
          className="w-7 h-6 bg-emerald-500/10 rounded-md outline-[1.3px] outline-emerald-500/60 flex items-center justify-center"
        >
          <Eye size={16} stroke="#10B981" />
        </button>
      ) : (
        <button
          onClick={() => onToggleHide(rowId)}
          className="w-7 h-6 bg-red-50 rounded-md outline-[1.3px] outline-red-200 flex items-center justify-center"
        >
          <EyeOff size={16} stroke="#DC2626" />
        </button>
      )}
    </div>
  );
};

const CandidatesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showHidden, setShowHidden] = useState(false);
  const [hiddenIds, setHiddenIds] = useState(new Set());

  const computedStats = useMemo(() => {
    const total = candidateTableData.length;
    const submitted = candidates.filter((c) => c.status !== "Under Review").length;
    const interviewing = candidates.filter((c) => c.status === "Interview").length;
    const underReview = candidates.filter((c) => c.status === "Under Review").length;
    return [
      { label: "Total Candidates", value: total, change: `+${Math.round(total * 0.1)}`, pct: `${Math.round((total / Math.max(total, 1)) * 12)}%`, iconColor: "#6366F1", bgColor: "bg-indigo-500/10" },
      { label: "Candidates Submitted", value: submitted, change: `+${submitted}`, pct: `${Math.round((submitted / Math.max(total, 1)) * 100)}%`, iconColor: "#EC4899", bgColor: "bg-pink-500/10" },
      { label: "Active Interviews", value: interviewing, change: `+${interviewing}`, pct: `${Math.round((interviewing / Math.max(total, 1)) * 100)}%`, iconColor: "#10B981", bgColor: "bg-emerald-500/10" },
      { label: "Under Review", value: underReview, change: `+${underReview}`, pct: `${Math.round((underReview / Math.max(total, 1)) * 100)}%`, iconColor: "#F59E0B", bgColor: "bg-amber-500/10" },
    ];
  }, []);

  const toggleHide = (id) => {
    setHiddenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
    setOpenDropdown(null);
  };

  const filterBySearch = (rows) => {
    if (!searchQuery.trim()) return rows;
    const q = searchQuery.toLowerCase();
    return rows.filter(
      (r) =>
        r.jobName.toLowerCase().includes(q) ||
        r.candidateName.toLowerCase().includes(q) ||
        r.timePeriod.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q),
    );
  };

  const activeCandidates = candidateTableData.filter((r) => !hiddenIds.has(r.id));
  const hiddenCandidates = candidateTableData.filter((r) => hiddenIds.has(r.id));
  const displayedRows = filterBySearch(showHidden ? hiddenCandidates : activeCandidates);

  return (
    <div className="flex flex-col gap-6">
      {/* Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {computedStats.map((stat, i) => (
          <StatCard key={i} stat={stat} Icon={statIcons[i]} className="w-full" />
        ))}
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-2xl outline-[1.38px] outline-gray-100 px-4 sm:px-6 pt-4 sm:pt-6 pb-4 sm:pb-6">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="flex-1 relative">
            <Search
              size={20}
              stroke="#4A5565"
              className="absolute left-4 top-1/2 -translate-y-1/2"
            />
            <input
              type="text"
              placeholder="Search candidates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 pl-12 pr-4 py-3 rounded-[10px] outline-[1.38px] outline-gray-200 text-base font-normal text-neutral-950 placeholder:text-neutral-950/50"
            />
          </div>
          <div className="flex gap-3">
            <button className="flex-1 sm:flex-none sm:w-32 h-12 bg-cyan-900 rounded-[10px] flex items-center justify-center gap-2 text-white text-base font-normal">
              <Search size={20} stroke="white" />
              Search
            </button>
            <button
              onClick={() => setSearchQuery("")}
              className="flex-1 sm:flex-none sm:w-28 h-12 bg-white rounded-[10px] outline-[1.38px] outline-gray-200 flex items-center justify-center gap-2 text-slate-900 text-base font-normal"
            >
              <X size={20} stroke="#0F172A" />
              Clear
            </button>
          </div>
        </div>
      </div>

      {/* Action Row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-slate-900 text-xl font-semibold leading-7">
            Candidates
          </span>
          <span className="w-24 h-9 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-800 text-base font-medium leading-4">
            {activeCandidates.length} Active
          </span>
          <span className="w-24 h-9 bg-red-100 rounded-full flex items-center justify-center text-red-800 text-base font-medium leading-6">
            {hiddenCandidates.length} Hidden
          </span>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-end gap-3">
          {showHidden ? (
            <button
              onClick={() => setShowHidden(false)}
              className="h-12 sm:w-60 bg-emerald-500 rounded-[10px] flex items-center justify-center sm:justify-start gap-3 px-4"
            >
              <Eye size={20} stroke="white" />
              <span className="text-white text-base font-normal leading-6">
                Show Active Candidates
              </span>
            </button>
          ) : (
            <button
              onClick={() => setShowHidden(true)}
              className="h-12 sm:w-72 bg-cyan-900 rounded-[10px] flex items-center justify-center sm:justify-start gap-3 px-4"
            >
              <EyeOff size={16} stroke="white" />
              <span className="text-white text-base font-normal leading-6">
                View Hidden Candidates ({hiddenCandidates.length})
              </span>
            </button>
          )}
          <button className="h-12 sm:w-44 bg-cyan-900 rounded-[10px] flex items-center justify-center gap-2 px-4">
            <Plus size={20} stroke="white" />
            <span className="text-white text-base font-normal leading-6">
              Add Candidate
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="flex flex-col gap-4 xl:hidden">
        {displayedRows.length === 0 ? (
          <div className="bg-white rounded-2xl outline-[1.3px] outline-gray-100 py-12 text-center text-gray-400 text-sm">
            {showHidden ? "No hidden candidates" : "No active candidates"}
          </div>
        ) : (
          displayedRows.map((row) => (
            <div key={row.id} className="bg-white rounded-2xl outline-[1.3px] outline-gray-100 p-4 sm:p-5 flex flex-col gap-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex flex-col gap-1 min-w-0">
                  <span className="text-slate-900 text-base font-semibold leading-6 truncate">{row.candidateName}</span>
                  <span className="text-gray-500 text-sm font-normal leading-5">{row.jobName}</span>
                </div>
                <ActionDropdown
                  rowId={row.id}
                  openId={openDropdown}
                  setOpenId={setOpenDropdown}
                  isHiddenView={showHidden}
                  onToggleHide={toggleHide}
                />
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`inline-flex items-center justify-center px-3 h-6 rounded-full text-xs font-medium leading-4 ${row.seen ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"}`}>
                  Seen: {row.seen ? "Yes" : "No"}
                </span>
                <span className={`inline-flex items-center justify-center px-3 h-6 rounded-full text-xs font-medium leading-4 ${row.spoke ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"}`}>
                  Spoke: {row.spoke ? "Yes" : "No"}
                </span>
                <span className="inline-flex items-center px-3 h-6 rounded-full bg-gray-100 text-gray-600 text-xs font-medium leading-4">
                  {row.timePeriod}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="flex flex-col">
                  <span className="text-gray-400 text-xs font-medium leading-4">Hourly</span>
                  <span className="text-slate-900 text-sm font-semibold leading-5">{row.hourlyPrice}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-400 text-xs font-medium leading-4">Hiring</span>
                  <span className="text-slate-900 text-sm font-semibold leading-5">{row.hiringPrice}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-400 text-xs font-medium leading-4">Salary</span>
                  <span className="text-slate-900 text-sm font-semibold leading-5">{row.expectedSalary}</span>
                </div>
              </div>
              {row.description && (
                <p className="text-gray-500 text-sm font-normal leading-5 line-clamp-2">{row.description}</p>
              )}
            </div>
          ))
        )}
      </div>

      {/* Desktop Table View */}
      <div className="bg-white rounded-2xl outline-[1.3px] outline-gray-100 overflow-hidden hidden xl:block">
        <table className="w-full table-fixed">
          <colgroup>
            <col className="w-[11%]" />
            <col className="w-[13%]" />
            <col className="w-[6%]" />
            <col className="w-[7%]" />
            <col className="w-[8%]" />
            <col className="w-[7%]" />
            <col className="w-[8%]" />
            <col className="w-[9%]" />
            <col className="w-[24%]" />
            <col className="w-[7%]" />
          </colgroup>
          <thead>
            <tr className="bg-gray-200 h-14">
              <th className="text-left pl-6 pr-2 text-slate-900/70 text-xs font-semibold leading-4">
                Job Name
              </th>
              <th className="text-left px-3 text-slate-900/70 text-xs font-semibold leading-4">
                {showHidden ? "Employee Name" : "Candidate Name"}
              </th>
              <th className="text-left px-2 text-slate-900/70 text-xs font-semibold leading-4">
                Seen
              </th>
              <th className="text-left px-2 text-slate-900/70 text-xs font-semibold leading-4">
                Spoke
              </th>
              <th className="text-left px-2 text-slate-900/70 text-xs font-semibold leading-4">
                Time period
              </th>
              <th className="text-left px-2 text-slate-900/70 text-xs font-semibold leading-4">
                Hourly Price
              </th>
              <th className="text-left px-2 text-slate-900/70 text-xs font-semibold leading-4">
                Hiring Price
              </th>
              <th className="text-left px-2 text-slate-900/70 text-xs font-semibold leading-4">
                Expected Salary
              </th>
              <th className="text-left px-2 text-slate-900/70 text-xs font-semibold leading-4">
                Description of the Employee
              </th>
              <th className="text-left px-2 text-slate-900 text-sm font-semibold leading-5">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {displayedRows.length === 0 ? (
              <tr className="h-16">
                <td colSpan={10} className="text-center text-gray-400 text-sm py-8">
                  {showHidden ? "No hidden candidates" : "No active candidates"}
                </td>
              </tr>
            ) : (
              displayedRows.map((row) => (
                <tr
                  key={row.id}
                  className="h-16 border-b-[1.30px] border-gray-100"
                >
                  <td className="pl-6 pr-2">
                    <div className="text-gray-600 text-sm font-normal leading-5">
                      {row.jobName}
                    </div>
                  </td>
                  <td className="px-3 overflow-hidden">
                    <div className="truncate text-slate-900 text-sm font-medium leading-5">
                      {row.candidateName}
                    </div>
                  </td>
                  <td className="px-2">
                    <span className={`inline-flex items-center justify-center w-10 h-6 rounded-full text-xs font-normal leading-4 ${row.seen ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"}`}>
                      {row.seen ? "Yes" : "No"}
                    </span>
                  </td>
                  <td className="px-2">
                    <span className={`inline-flex items-center justify-center w-10 h-6 rounded-full text-xs font-normal leading-4 ${row.spoke ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"}`}>
                      {row.spoke ? "Yes" : "No"}
                    </span>
                  </td>
                  <td className="px-2 overflow-hidden">
                    <div className="truncate text-gray-600 text-sm font-normal leading-5">
                      {row.timePeriod}
                    </div>
                  </td>
                  <td className="px-2 text-gray-600 text-sm font-normal leading-5">
                    {row.hourlyPrice}
                  </td>
                  <td className="px-2 text-gray-600 text-sm font-normal leading-5">
                    {row.hiringPrice}
                  </td>
                  <td className="px-2 text-gray-600 text-sm font-normal leading-5">
                    {row.expectedSalary}
                  </td>
                  <td className="px-2 overflow-hidden">
                    <div className="truncate text-gray-600 text-sm font-normal leading-5">
                      {row.description}
                    </div>
                  </td>
                  <td className="px-2">
                    <ActionDropdown
                      rowId={row.id}
                      openId={openDropdown}
                      setOpenId={setOpenDropdown}
                      isHiddenView={showHidden}
                      onToggleHide={toggleHide}
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CandidatesPage;
