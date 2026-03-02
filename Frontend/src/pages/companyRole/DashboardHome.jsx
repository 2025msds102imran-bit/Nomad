import React, { useMemo, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Briefcase,
  Users,
  CheckCircle,
  DollarSign,
  Clock,
  UserCheck,
  MapPin,
  Building2,
  Eye,
  Download,
  ChevronRight,
  Activity,
  Zap,
  Globe,
} from "lucide-react";
import {
  jobs,
  candidates,
  payments,
  placements,
  interviews,
  performanceMetrics,
  revenueData,
  topCountries as countriesList,
  dashboardActivity,
} from "../../data/dummyData";

const CATEGORY_COLORS = [
  { color: "bg-indigo-500", textColor: "text-indigo-500" },
  { color: "bg-pink-500", textColor: "text-pink-500" },
  { color: "bg-emerald-500", textColor: "text-emerald-500" },
  { color: "bg-amber-500", textColor: "text-amber-500" },
  { color: "bg-violet-500", textColor: "text-violet-500" },
];

const COUNTRY_BAR_COLORS = ["bg-indigo-400", "bg-pink-500", "bg-emerald-500", "bg-amber-500", "bg-violet-500"];

const STAT_CARD_CONFIG = [
  { key: "vacancies", label: "Open Vacancies", icon: Briefcase, iconColor: "text-indigo-500", bg: "bg-indigo-500/10" },
  { key: "candidates", label: "Active Candidates", icon: Users, iconColor: "text-pink-500", bg: "bg-pink-500/10" },
  { key: "placements", label: "Placements", icon: CheckCircle, iconColor: "text-emerald-500", bg: "bg-emerald-500/10" },
  { key: "revenue", label: "Revenue", icon: DollarSign, iconColor: "text-amber-500", bg: "bg-amber-500/10" },
  { key: "bids", label: "Pending Bids", icon: Clock, iconColor: "text-violet-500", bg: "bg-violet-500/10" },
  { key: "interviews", label: "Interviews", icon: UserCheck, iconColor: "text-cyan-500", bg: "bg-cyan-500/10" },
];

function getInitials(name) {
  return name.split(" ").map((n) => n[0]).join("").toUpperCase();
}

function formatCurrency(amount) {
  if (amount >= 1000) return `€${Math.round(amount / 1000)}K`;
  return `€${amount}`;
}

function StatCard({ label, value, change, pct, icon: Icon, iconColor, bg }) {
  return (
    <div className="bg-white rounded-2xl outline-1 outline-gray-200/60 h-40 p-[17px] flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <div className={`size-9 rounded-[10px] ${bg} flex items-center justify-center`}>
          <Icon size={20} className={iconColor} />
        </div>
        <span className="bg-emerald-50 px-2 py-0.5 rounded-sm text-[10px] font-bold text-emerald-600 leading-4 tracking-tight">
          {pct}
        </span>
      </div>
      <div>
        <p className="text-2xl font-bold text-gray-900 leading-8 tracking-tight">{value}</p>
        <p className="text-xs font-medium text-gray-600 leading-4 mt-1">{label}</p>
        <p className="text-[10px] font-normal text-gray-500 leading-4 tracking-tight mt-1">{change}</p>
      </div>
    </div>
  );
}

function PerformanceBar({ label, value, color, textColor, shadow }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <span className="text-xs font-semibold text-gray-700 leading-4">{label}</span>
        <span className={`text-xs font-bold leading-4 ${textColor}`}>{value}%</span>
      </div>
      <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
        <div className={`h-2.5 ${color} rounded-full ${shadow}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function VacancyCard({ title, level, location, budget }) {
  return (
    <div className="h-20 px-3 pt-3 pb-px bg-gray-50/50 rounded-[10px] outline-1 outline-gray-200/60">
      <div className="flex justify-between items-start">
        <div className="flex-1 flex flex-col gap-1.5">
          <h4 className="text-sm font-bold text-gray-900 leading-5">{title}</h4>
          <div className="flex items-center gap-3 text-xs text-gray-600 leading-4">
            <span className="flex items-center gap-1">
              <Building2 size={12} className="text-gray-400" />
              {level}
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={12} className="text-gray-400" />
              {location}
            </span>
          </div>
        </div>
        <span className="text-base font-semibold text-indigo-600 leading-6">{budget}</span>
      </div>
    </div>
  );
}

function CandidateCard({ name, initials, role, salary }) {
  return (
    <div className="h-24 px-3 pt-3 pb-px bg-gray-50/50 rounded-[10px] outline-1 outline-gray-200/60">
      <div className="flex items-start gap-3">
        <div className="size-9 bg-linear-to-br from-indigo-500 to-purple-600 rounded-[10px] flex items-center justify-center shrink-0">
          <span className="text-white text-xs font-bold leading-4">{initials}</span>
        </div>
        <div className="flex-1 flex flex-col gap-1">
          <div className="flex justify-between items-center">
            <span className="text-sm font-bold text-gray-900 leading-5">{name}</span>
            <div className="flex items-center gap-1.5">
              <button className="w-8 h-6 rounded-lg outline-1 outline-cyan-900 flex items-center justify-center">
                <Download size={12} className="text-cyan-900" />
              </button>
              <button className="w-24 h-6 bg-cyan-900 rounded-lg flex items-center justify-center gap-1.5">
                <Eye size={12} className="text-white" />
                <span className="text-white text-[9.36px] leading-3">View Details</span>
              </button>
            </div>
          </div>
          <p className="text-xs text-gray-600 leading-4">{role}</p>
          <span className="bg-indigo-50 rounded-sm px-2 py-0.5 text-[9.9px] font-semibold text-indigo-700 leading-4 tracking-tight w-fit">
            Expected Salary: {salary}
          </span>
        </div>
      </div>
    </div>
  );
}

function PlacementCard({ name, role, company, salary, time }) {
  return (
    <div className="h-20 px-3 pt-3 pb-px bg-gray-50/50 rounded-lg outline-1 outline-gray-200/60">
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-0.5">
          <p className="text-xs font-semibold text-gray-900 leading-6">{name}</p>
          <p className="text-xs font-normal text-gray-600 leading-5">{role}</p>
        </div>
        <span className="bg-emerald-50 rounded-lg outline-[0.72px] outline-emerald-200 px-1.5 py-1 text-[9.27px] font-semibold text-emerald-700 leading-3">
          Completed
        </span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-[9.27px] font-normal text-gray-500 leading-5">{company}</span>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-gray-900 leading-5">{salary}</span>
          <span className="text-xs font-normal text-gray-400 leading-5">•</span>
          <span className="text-xs font-normal text-gray-500 leading-5">{time}</span>
        </div>
      </div>
    </div>
  );
}

function InterviewCard({ name, initials, color, date, time }) {
  return (
    <div className="h-20 px-3 pt-3 pb-px bg-gray-50/50 rounded-lg outline-1 outline-gray-200/60">
      <div className="flex items-start gap-2.5">
        <div className={`size-7 ${color} rounded-[10px] flex items-center justify-center shrink-0`}>
          <span className="text-white text-[9.27px] font-bold leading-3 tracking-tight">{initials}</span>
        </div>
        <div className="flex-1 flex flex-col gap-0.5">
          <p className="text-xs font-semibold text-gray-900 leading-4">{name}</p>
          <p className="text-[10px] font-normal text-gray-600 leading-3 tracking-tight">{date}</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <Clock size={11} className="text-gray-500" />
              <span className="text-[10px] font-normal text-gray-500 leading-3 tracking-tight">{time}</span>
            </div>
            <span className="bg-indigo-700/10 rounded-sm px-1 py-0.5 text-[8.34px] font-semibold text-indigo-700 leading-3 tracking-tight">
              Scheduled
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CategoryBar({ name, count, newCount, color, textColor, maxCount }) {
  const pct = maxCount > 0 ? (count / maxCount) * 100 : 0;
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex justify-between items-center">
        <span className="text-xs font-semibold text-gray-900 leading-4">{name}</span>
        <div className="flex items-center gap-1.5">
          {newCount > 0 && (
            <span className="bg-rose-100 rounded-sm px-1 py-0.5 text-[7.86px] font-bold text-pink-500 leading-3 tracking-tight">
              {newCount}
            </span>
          )}
          <span className={`text-xs font-bold leading-4 ${textColor}`}>{count}</span>
        </div>
      </div>
      <div className="h-1.5 bg-gray-100 rounded-full">
        <div className={`h-1.5 ${color} rounded-full`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

function CountryBar({ flag, name, open, pct, color, maxOpen }) {
  const barPct = maxOpen > 0 ? (open / maxOpen) * 100 : 0;
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1.5">
          <span className="text-lg leading-6">{flag}</span>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-gray-900 leading-3">{name}</span>
            <span className="text-[8.74px] font-normal text-gray-500 tracking-tight leading-3">{open} open</span>
          </div>
        </div>
        <span className="bg-emerald-600/5 rounded-sm px-1.5 py-0.5 text-[8.74px] font-bold text-emerald-600 leading-3 tracking-tight">
          {pct}
        </span>
      </div>
      <div className="h-1.5 bg-gray-100 rounded-full">
        <div className={`h-1.5 ${color} rounded-full`} style={{ width: `${Math.max(barPct, 5)}%` }} />
      </div>
    </div>
  );
}

const DashboardHome = () => {
  const activeJobs = useMemo(() => jobs.filter((j) => j.status === "Active"), []);
  const interviewCandidates = useMemo(() => candidates.filter((c) => c.status === "Interview"), []);
  const hiredCandidates = useMemo(() => candidates.filter((c) => c.status === "Hired"), []);
  const pendingBids = useMemo(() => candidates.filter((c) => c.status === "Under Review" || c.status === "Offer Sent"), []);
  const completedPayments = useMemo(() => payments.filter((p) => p.status === "Completed"), []);
  const totalRevenue = useMemo(() => completedPayments.reduce((sum, p) => sum + p.rawAmount, 0), [completedPayments]);

  const statsData = useMemo(() => ({
    vacancies: { value: activeJobs.length.toLocaleString(), change: `+${Math.floor(activeJobs.length * 0.1)}`, pct: `${Math.round((activeJobs.length / Math.max(jobs.length, 1)) * 100)}%` },
    candidates: { value: candidates.length.toLocaleString(), change: `+${Math.floor(candidates.length * 0.2)}`, pct: `${Math.round((candidates.filter((c) => c.status === "Active" || c.status === "Interview").length / Math.max(candidates.length, 1)) * 100)}%` },
    placements: { value: hiredCandidates.length + placements.length, change: `+${placements.length}`, pct: `${Math.round(((hiredCandidates.length + placements.length) / Math.max(candidates.length, 1)) * 100)}%` },
    revenue: (() => {
      const prev = revenueData.length >= 2 ? revenueData[revenueData.length - 2].value : 0;
      const curr = revenueData.length >= 1 ? revenueData[revenueData.length - 1].value : 0;
      const growth = prev > 0 ? Math.round(((curr - prev) / prev) * 100) : 0;
      return { value: formatCurrency(totalRevenue), change: `+${formatCurrency(curr - prev)}`, pct: `${growth}%` };
    })(),
    bids: { value: pendingBids.length.toString(), change: `${Math.floor(pendingBids.length * 0.6)}`, pct: `${Math.round((pendingBids.length / Math.max(candidates.length, 1)) * 100)}%` },
    interviews: { value: interviewCandidates.length + interviews.length, change: `+${interviews.length}`, pct: `${Math.round(((interviewCandidates.length + interviews.length) / Math.max(candidates.length, 1)) * 100)}%` },
  }), [activeJobs, hiredCandidates, interviewCandidates, pendingBids, totalRevenue, completedPayments]);

  const categoryData = useMemo(() => {
    const counts = {};
    jobs.forEach((j) => {
      if (j.category) counts[j.category] = (counts[j.category] || 0) + 1;
    });
    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    const activeByCategory = {};
    activeJobs.forEach((j) => {
      if (j.category) activeByCategory[j.category] = (activeByCategory[j.category] || 0) + 1;
    });
    return sorted.map(([name, count], i) => ({
      name,
      count,
      newCount: activeByCategory[name] || 0,
      ...CATEGORY_COLORS[i % CATEGORY_COLORS.length],
    }));
  }, [activeJobs]);

  const maxCategoryCount = useMemo(() => Math.max(...categoryData.map((c) => c.count), 1), [categoryData]);

  const countryData = useMemo(() => {
    const jobsByCountry = {};
    activeJobs.forEach((j) => {
      if (j.country) jobsByCountry[j.country] = (jobsByCountry[j.country] || 0) + 1;
    });
    return countriesList.map((c, i) => ({
      flag: c.flag,
      name: c.name,
      open: jobsByCountry[c.name] || 0,
      pct: c.growthPct,
      color: COUNTRY_BAR_COLORS[i % COUNTRY_BAR_COLORS.length],
    }));
  }, [activeJobs]);

  const maxCountryOpen = useMemo(() => Math.max(...countryData.map((c) => c.open), 1), [countryData]);

  const overallScore = useMemo(
    () => Math.round(performanceMetrics.reduce((s, m) => s + m.value, 0) / performanceMetrics.length),
    [],
  );

  const chartMax = useMemo(() => {
    if (revenueData.length === 0) return 80000;
    const raw = Math.max(...revenueData.map((d) => d.value));
    const step = Math.pow(10, Math.floor(Math.log10(raw)));
    return Math.ceil(raw / step) * step;
  }, []);

  const chartYLabels = useMemo(() => {
    const steps = 5;
    return Array.from({ length: steps }, (_, i) => Math.round((chartMax / (steps - 1)) * i));
  }, [chartMax]);

  const chartPath = useMemo(() => {
    if (revenueData.length === 0) return { area: "", line: "", points: [] };
    const xStart = 65, xEnd = 704, yTop = 36, yBottom = 195;
    const xStep = (xEnd - xStart) / (revenueData.length - 1);
    const points = revenueData.map((d, i) => ({
      x: xStart + i * xStep,
      y: yBottom - ((d.value / chartMax) * (yBottom - yTop)),
      value: d.value,
      month: d.month,
    }));
    const line = points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x} ${p.y}`).join(" ");
    const area = `${line} L${xEnd} ${yBottom} L${xStart} ${yBottom}Z`;
    return { area, line, points };
  }, [chartMax]);

  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [chartAnimated, setChartAnimated] = useState(false);
  const lineRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setChartAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleChartMouseMove = (e) => {
    if (!svgRef.current || chartPath.points.length === 0) return;
    const rect = svgRef.current.getBoundingClientRect();
    const svgX = ((e.clientX - rect.left) / rect.width) * 710;
    let closest = null;
    let minDist = Infinity;
    chartPath.points.forEach((p, i) => {
      const dist = Math.abs(svgX - p.x);
      if (dist < minDist) {
        minDist = dist;
        closest = { ...p, index: i };
      }
    });
    if (closest && minDist < 60) setHoveredPoint(closest);
    else setHoveredPoint(null);
  };

  return (
    <>
      {/* Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-[13px]">
        {STAT_CARD_CONFIG.map((cfg) => {
          const data = statsData[cfg.key];
          return (
            <StatCard
              key={cfg.key}
              label={cfg.label}
              value={data.value}
              change={data.change}
              pct={data.pct}
              icon={cfg.icon}
              iconColor={cfg.iconColor}
              bg={cfg.bg}
            />
          );
        })}
      </div>

      {/* Revenue Overview + Performance */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 h-80 sm:h-96 px-4 sm:px-6 pt-4 sm:pt-6 pb-2 sm:pb-px bg-white rounded-2xl shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.10),0px_1px_3px_0px_rgba(0,0,0,0.10)] outline-1 outline-gray-200/60 flex flex-col gap-5">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-base font-semibold text-gray-900 leading-6">Revenue Overview</h3>
              <p className="text-xs font-normal text-gray-500 leading-4">Monthly performance tracking</p>
            </div>
            <div className="flex gap-1.5">
              <button className="flex-1 h-7 px-3 bg-indigo-50 rounded-[10px] text-xs font-semibold text-indigo-700 leading-4">6M</button>
              <button className="w-9 h-7 rounded-[10px] text-xs font-medium text-gray-600 leading-4">1Y</button>
            </div>
          </div>
          <div className="flex-1 w-full overflow-hidden relative">
            <svg
              ref={svgRef}
              viewBox="0 0 710 220"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid meet"
              onMouseMove={handleChartMouseMove}
              onMouseLeave={() => setHoveredPoint(null)}
            >
              {chartYLabels.map((_, i) => {
                const y = 195 - (i / (chartYLabels.length - 1)) * (195 - 5);
                return <line key={i} x1="65" y1={y} x2="704" y2={y} stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3 3" />;
              })}
              {chartYLabels.map((label, i) => {
                const y = 195 - (i / (chartYLabels.length - 1)) * (195 - 5);
                return (
                  <text key={label} x="60" y={y + 4} textAnchor="end" className="fill-slate-400 text-[12px] font-bold">
                    {label.toLocaleString()}
                  </text>
                );
              })}
              {revenueData.map((d, i) => (
                <text key={d.month} x={65 + i * ((704 - 65) / (revenueData.length - 1))} y={212} textAnchor="middle" className="fill-slate-400 text-[12px] font-bold">
                  {d.month}
                </text>
              ))}
              <defs>
                <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0.05" stopColor="#6366F1" stopOpacity="0.4" />
                  <stop offset="0.95" stopColor="#6366F1" stopOpacity="0.05" />
                </linearGradient>
                <clipPath id="areaClip">
                  <rect x="65" y="0" width={chartAnimated ? 639 : 0} height="220" style={{ transition: "width 1.5s ease-out" }} />
                </clipPath>
              </defs>

              {/* Animated area */}
              <g clipPath="url(#areaClip)">
                <path d={chartPath.area} fill="url(#areaGrad)" />
              </g>

              {/* Animated line */}
              <path
                ref={lineRef}
                d={chartPath.line}
                fill="none"
                stroke="#6366F1"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="2000"
                strokeDashoffset={chartAnimated ? 0 : 2000}
                style={{ transition: "stroke-dashoffset 1.5s ease-out" }}
              />

              {/* Data point dots */}
              {chartPath.points.map((p, i) => (
                <circle
                  key={i}
                  cx={p.x}
                  cy={p.y}
                  r={hoveredPoint?.index === i ? 6 : 0}
                  fill="white"
                  stroke="#6366F1"
                  strokeWidth="3"
                  style={{ transition: "r 0.15s ease" }}
                />
              ))}

              {/* Hover guideline */}
              {hoveredPoint && (
                <line
                  x1={hoveredPoint.x}
                  y1={hoveredPoint.y}
                  x2={hoveredPoint.x}
                  y2={195}
                  stroke="#6366F1"
                  strokeWidth="1"
                  strokeDasharray="4 3"
                  opacity="0.5"
                />
              )}

              {/* Hover invisible hit areas */}
              {chartPath.points.map((p, i) => (
                <rect
                  key={`hit-${i}`}
                  x={p.x - 30}
                  y={0}
                  width={60}
                  height={220}
                  fill="transparent"
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredPoint({ ...p, index: i })}
                />
              ))}
            </svg>

            {/* Tooltip */}
            {hoveredPoint && svgRef.current && (() => {
              const rect = svgRef.current.getBoundingClientRect();
              const xPct = (hoveredPoint.x / 710) * 100;
              const yPct = (hoveredPoint.y / 220) * 100;
              return (
                <div
                  className="absolute pointer-events-none z-10 -translate-x-1/2 -translate-y-full"
                  style={{ left: `${xPct}%`, top: `calc(${yPct}% - 12px)` }}
                >
                  <div className="bg-slate-900 text-white px-3 py-1.5 rounded-lg shadow-lg text-center whitespace-nowrap">
                    <p className="text-xs font-medium opacity-70">{hoveredPoint.month}</p>
                    <p className="text-sm font-bold">€{hoveredPoint.value.toLocaleString()}</p>
                  </div>
                  <div className="w-2 h-2 bg-slate-900 rotate-45 mx-auto -mt-1" />
                </div>
              );
            })()}
          </div>
        </div>

        <div className="w-full lg:w-80 px-4 sm:px-6 pt-4 sm:pt-6 pb-4 lg:pb-px bg-white rounded-2xl shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.10),0px_1px_3px_0px_rgba(0,0,0,0.10)] outline-1 outline-gray-200/60 flex flex-col gap-5">
          <div>
            <h3 className="text-base font-semibold text-gray-900 leading-6">Performance</h3>
            <p className="text-xs font-normal text-gray-500 leading-4">Key metrics overview</p>
          </div>
          <div className="flex flex-col gap-4">
            {performanceMetrics.map((m) => (
              <PerformanceBar key={m.label} {...m} />
            ))}
          </div>
          <div className="pt-5 border-t border-gray-100">
            <div className="px-3 h-12 bg-linear-to-r from-indigo-50 to-purple-50 rounded-xl flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Zap size={20} className="text-indigo-600" />
                <span className="text-sm font-semibold text-gray-700 leading-5">Overall Score</span>
              </div>
              <span className="text-xl font-bold text-indigo-600 leading-7">{overallScore}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Open Vacancies + My Candidates */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 h-auto md:h-96 px-4 sm:px-5 pt-4 sm:pt-5 pb-4 md:pb-px bg-white rounded-xl outline-1 outline-gray-200/60 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-base font-semibold text-gray-900 leading-6">Open Vacancies</h3>
              <p className="text-xs font-normal text-gray-500 leading-4">{activeJobs.length} active positions</p>
            </div>
            <button className="text-xs font-semibold text-indigo-600 leading-4">View All →</button>
          </div>
          <div className="flex flex-col gap-3">
            {activeJobs.slice(0, 3).map((j) => (
              <VacancyCard key={j.id} title={j.title} level={j.level} location={j.location} budget={j.budget} />
            ))}
          </div>
        </div>
        <div className="flex-1 h-auto md:h-96 px-4 sm:px-5 pt-4 sm:pt-5 pb-4 md:pb-px bg-white rounded-xl outline-1 outline-gray-200/60 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-base font-semibold text-gray-900 leading-6">My Candidates</h3>
              <p className="text-xs font-normal text-gray-500 leading-4">Best matches</p>
            </div>
            <button className="text-xs font-semibold text-indigo-600 leading-4">View All →</button>
          </div>
          <div className="flex flex-col gap-3">
            {candidates.slice(0, 3).map((c) => (
              <CandidateCard
                key={c.id}
                name={c.name}
                initials={getInitials(c.name)}
                role={c.role}
                salary={c.expectedSalary}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Recent Placements + Upcoming Interviews + Activity */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
        <div className="h-auto xl:h-96 px-4 sm:px-6 pt-4 sm:pt-6 pb-4 xl:pb-px bg-white rounded-2xl outline-1 outline-gray-200 flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <h3 className="text-base font-semibold text-gray-900 leading-6">Recent Placements</h3>
              <p className="text-xs font-normal text-gray-500 leading-5">Latest successes</p>
            </div>
            <Link to="/dashboard/placements" className="flex items-center gap-0.5 text-xs font-semibold cursor-pointer text-cyan-900 leading-5">
              View All <ChevronRight size={15} />
            </Link>
          </div>
          <div className="flex flex-col gap-3.5">
            {placements.slice(0, 3).map((p) => (
              <PlacementCard
                key={p.id}
                name={p.candidateName}
                role={p.role}
                company={p.company}
                salary={p.salary}
                time={p.time}
              />
            ))}
          </div>
        </div>

        <div className="h-auto xl:h-96 px-4 sm:px-5 pt-4 sm:pt-5 pb-4 xl:pb-px bg-white rounded-xl outline-1 outline-gray-200/60 flex flex-col gap-3.5">
          <div>
            <h3 className="text-base font-semibold text-gray-900 leading-6">Upcoming Interviews</h3>
            <p className="text-xs font-normal text-gray-500 leading-4">This week</p>
          </div>
          <div className="flex flex-col gap-2.5">
            {interviews.slice(0, 4).map((iv) => (
              <InterviewCard
                key={iv.id}
                name={iv.candidateName}
                initials={iv.initials}
                color={iv.avatarColor}
                date={iv.date}
                time={iv.time}
              />
            ))}
          </div>
        </div>

        <div className="h-auto xl:h-96 md:col-span-2 xl:col-span-1 px-4 sm:px-6 pt-4 sm:pt-6 pb-4 xl:pb-px bg-white rounded-xl outline-1 outline-gray-200/80 flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <Activity size={19} className="text-gray-800" />
            <h3 className="text-base font-semibold text-gray-900 leading-6">Activity</h3>
          </div>
          <div className="flex flex-col gap-3">
            {dashboardActivity.map((a) => (
              <div key={a.id} className="h-14 px-3 pt-3 pb-px bg-gray-50/50 rounded-lg outline-1 outline-gray-200/60 flex flex-col">
                <p className="text-xs font-normal text-gray-900 leading-5">{a.text}</p>
                <p className="text-xs font-normal text-gray-500 leading-4">{a.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* By Category + Top Countries */}
      <div className="flex flex-col md:flex-row gap-5 md:h-80">
        <div className="flex-1 px-4 sm:px-5 pt-4 sm:pt-5 pb-4 md:pb-px bg-white rounded-xl outline-1 outline-gray-200/60 flex flex-col gap-3.5">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 leading-5">By Category</h3>
            <p className="text-xs font-normal text-gray-500 leading-3">Job distribution</p>
          </div>
          <div className="flex flex-col gap-2.5">
            {categoryData.map((c) => (
              <CategoryBar key={c.name} {...c} maxCount={maxCategoryCount} />
            ))}
          </div>
        </div>
        <div className="flex-1 px-4 sm:px-5 pt-4 sm:pt-5 pb-4 md:pb-px bg-white rounded-xl outline-1 outline-gray-200/60 flex flex-col gap-3.5">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 leading-5">Top Countries</h3>
              <p className="text-xs font-normal text-gray-500 leading-3">By performance</p>
            </div>
            <Globe size={14} className="text-gray-400" />
          </div>
          <div className="flex flex-col gap-2.5">
            {countryData.map((c) => (
              <CountryBar key={c.name} {...c} maxOpen={maxCountryOpen} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
