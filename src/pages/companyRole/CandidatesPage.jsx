import React, { useState, useRef, useEffect } from "react";
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
import { candidateStats, candidateTableData } from "../../data/dummyData";
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
          <div className="absolute right-0 top-full mt-1 w-52 px-4 py-3 bg-white rounded-2xl outline-[0.7px] outline-gray-600 flex flex-col gap-3 z-50 overflow-hidden">
            <button className="h-7 bg-cyan-900 rounded-md flex items-center gap-2.5 px-3 text-white text-sm font-normal leading-5">
              <Eye size={16} stroke="white" />
              View Details
            </button>
            <div className="px-3 flex flex-col gap-3">
              {dropdownActions.map((action) => {
                const Icon = action.icon;
                return (
                  <button
                    key={action.label}
                    className="flex items-center gap-3 text-gray-600 text-sm font-normal leading-5 hover:text-gray-900"
                  >
                    <Icon size={16} stroke="#4A5565" />
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

  const toggleHide = (id) => {
    setHiddenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
    setOpenDropdown(null);
  };

  const activeCandidates = candidateTableData.filter((r) => !hiddenIds.has(r.id));
  const hiddenCandidates = candidateTableData.filter((r) => hiddenIds.has(r.id));
  const displayedRows = showHidden ? hiddenCandidates : activeCandidates;

  return (
    <div className="flex flex-col gap-6">
      {/* Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {candidateStats.map((stat, i) => (
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
            <button className="flex-1 sm:flex-none sm:w-28 h-12 bg-white rounded-[10px] outline-[1.38px] outline-gray-200 flex items-center justify-center gap-2 text-slate-900 text-base font-normal">
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

      {/* Data Table */}
      <div className="bg-white rounded-2xl outline-[1.3px] outline-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1100px]">
            <thead>
              <tr className="bg-gray-200 h-14">
                <th className="text-left px-6 text-slate-900/70 text-xs font-semibold leading-4 w-32">
                  Job Name
                </th>
                <th className="text-left px-6 text-slate-900/70 text-xs font-semibold leading-4 w-36">
                  {showHidden ? "Employee Name" : "Candidate Name"}
                </th>
                <th className="text-left px-3 text-slate-900/70 text-xs font-semibold leading-4 w-20">
                  Seen
                </th>
                <th className="text-left px-5 text-slate-900/70 text-xs font-semibold leading-4 w-24">
                  Spoke
                </th>
                <th className="text-left px-1 text-slate-900/70 text-xs font-semibold leading-4 w-20">
                  Time period
                </th>
                <th className="text-left px-1 text-slate-900/70 text-xs font-semibold leading-4 w-24">
                  Hourly Price
                </th>
                <th className="text-left px-2 text-slate-900/70 text-xs font-semibold leading-4 w-24">
                  Hiring Price
                </th>
                <th className="text-left px-2 text-slate-900/70 text-xs font-semibold leading-4 w-28">
                  Expected Salary
                </th>
                <th className="text-left px-2 text-slate-900/70 text-xs font-semibold leading-4 w-44">
                  Description of the Employee
                </th>
                <th className="text-left px-2 text-slate-900 text-sm font-semibold leading-5 w-20">
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
                    className="h-16 border-b border-gray-100"
                  >
                    <td className="px-6 text-gray-600 text-sm font-normal leading-5">
                      {row.jobName}
                    </td>
                    <td className="px-6 text-slate-900 text-sm font-medium leading-5">
                      {row.candidateName}
                    </td>
                    <td className="px-3">
                      <span className="inline-flex items-center justify-center w-10 h-6 bg-red-100 rounded-full text-red-800 text-xs font-normal leading-4">
                        No
                      </span>
                    </td>
                    <td className="px-5">
                      <span className="inline-flex items-center justify-center w-10 h-6 bg-red-100 rounded-full text-red-800 text-xs font-normal leading-4">
                        No
                      </span>
                    </td>
                    <td className="px-1 text-gray-600 text-sm font-normal leading-5">
                      {row.timePeriod}
                    </td>
                    <td className="px-1 text-gray-600 text-sm font-normal leading-5">
                      {row.hourlyPrice}
                    </td>
                    <td className="px-2 text-gray-600 text-sm font-normal leading-5">
                      {row.hiringPrice}
                    </td>
                    <td className="px-2 text-gray-600 text-sm font-normal leading-5">
                      {row.expectedSalary}
                    </td>
                    <td className="px-2 text-gray-600 text-sm font-normal leading-5 truncate max-w-[180px]">
                      {row.description}
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
    </div>
  );
};

export default CandidatesPage;
