import React from "react";
import {
  Users,
  TrendingUp,
  DollarSign,
  Shield,
  AlertCircle,
  Star,
  CheckCircle,
  Bell,
  Globe,
} from "lucide-react";

const STATS = [
  { label: "Total Platform Users", value: "1,450", pct: "18%", change: "+89 this month", icon: Users, iconBg: "bg-indigo-500/10", iconColor: "text-indigo-500" },
  { label: "Active Marketplace Deals", value: "186", pct: "12%", change: "+24 this week", icon: TrendingUp, iconBg: "bg-pink-500/10", iconColor: "text-pink-500" },
  { label: "Platform Revenue", value: "€142K", pct: "15%", change: "+€18K", icon: DollarSign, iconBg: "bg-emerald-500/10", iconColor: "text-emerald-500" },
  { label: "Total Escrow Funds", value: "€640K", pct: "22%", change: "€85K pending", icon: Shield, iconBg: "bg-amber-500/10", iconColor: "text-amber-500" },
  { label: "Pending Verifications", value: "28", pct: "0%", change: "Urgent", icon: AlertCircle, iconBg: "bg-red-500/10", iconColor: "text-red-500" },
];

const PLATFORM_GROWTH = { companies: [45, 52, 68, 95, 110, 125], recruiters: [38, 55, 72, 85, 98, 145] };
const GMV = [120, 180, 220, 280, 380, 450];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

const PENDING_APPROVALS = [
  { type: "Company", urgent: true, name: "TechCorp NL", desc: "Verify Registration Number" },
  { type: "Agency", urgent: false, name: "Global Talent Ltd", desc: "Awaiting Profile Review" },
  { type: "Flagged User", urgent: true, name: "User #4523", desc: "Reported for CV Dumping" },
];

const TOP_AGENCIES = [
  { rank: 1, name: "Elite Recruitment", placements: "45 Placements", rating: 4.9 },
  { rank: 2, name: "Digital Talents", placements: "32 Placements", rating: 4.7 },
  { rank: 3, name: "Ace Hiring", placements: "28 Placements", rating: 4.8 },
];

const RECENT_PAYOUTS = [
  { name: "Elite Recruitment", amount: "€8,500", status: "Successful", date: "2026-02-09" },
  { name: "Digital Talents", amount: "€6,200", status: "Successful", date: "2026-02-08" },
  { name: "Ace Hiring", amount: "€5,800", status: "Successful", date: "2026-02-07" },
];

const PLATFORM_ALERTS = [
  { type: "warning", text: "New dispute raised: TechCorp NL vs Elite Recruitment", time: "1 hour ago" },
  { type: "success", text: "System Update: Stripe API v3 integrated", time: "3 hours ago" },
  { type: "info", text: "Server Load: 12% - All systems operational", time: "5 hours ago" },
];

const GLOBAL_ACTIVITY = [
  { text: "Company TechCorp NL just posted a €15k Job", time: "10 mins ago" },
  { text: "Recruiter Sarah Johnson just joined the platform", time: "25 mins ago" },
  { text: "Meeting confirmed for 12 different roles today", time: "45 mins ago" },
];

const AdminDashboardHome = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {STATS.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white rounded-2xl outline outline-1 outline-gray-200/60 p-5 flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <div className={`size-9 rounded-[10px] ${stat.iconBg} flex items-center justify-center`}>
                  <Icon size={20} className={stat.iconColor} />
                </div>
                <span className="bg-emerald-50 px-2 py-0.5 rounded-sm text-[10px] font-bold text-emerald-600">{stat.pct}</span>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 leading-8">{stat.value}</p>
                <p className="text-xs font-medium text-gray-600 leading-4 mt-1">{stat.label}</p>
                <p className="text-[10px] text-gray-500 leading-4 mt-1">{stat.change}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Platform Growth */}
        <div className="bg-white rounded-2xl outline outline-1 outline-gray-200 p-6 flex flex-col gap-6">
          <div>
            <h3 className="text-base font-semibold text-gray-900">Platform Growth</h3>
            <p className="text-xs text-gray-500">New Companies vs New Recruiters</p>
          </div>
          <div className="h-72 flex items-end justify-between gap-2 px-4">
            {MONTHS.map((m, i) => (
              <div key={m} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full flex gap-1 justify-center items-end h-48">
                  <div
                    className="flex-1 max-w-4 bg-indigo-500 rounded-t"
                    style={{ height: `${(PLATFORM_GROWTH.companies[i] / 160) * 100}%`, minHeight: 4 }}
                  />
                  <div
                    className="flex-1 max-w-4 bg-amber-500 rounded-t"
                    style={{ height: `${(PLATFORM_GROWTH.recruiters[i] / 160) * 100}%`, minHeight: 4 }}
                  />
                </div>
                <span className="text-xs font-bold text-slate-400">{m}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-6 justify-center">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-indigo-500" />
              <span className="text-xs text-indigo-500">Companies</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <span className="text-xs text-amber-500">Recruiters</span>
            </div>
          </div>
        </div>

        {/* Transaction Volume */}
        <div className="bg-white rounded-2xl outline outline-1 outline-gray-200 p-6 flex flex-col gap-6">
          <div>
            <h3 className="text-base font-semibold text-gray-900">Transaction Volume</h3>
            <p className="text-xs text-gray-500">Monthly Gross Merchandise Value (GMV)</p>
          </div>
          <div className="h-72 flex items-end justify-between gap-2 px-4">
            {MONTHS.map((m, i) => (
              <div key={m} className="flex-1 flex flex-col items-center gap-2">
                <div
                  className="w-full max-w-8 mx-auto bg-indigo-500 rounded-t"
                  style={{ height: `${(GMV[i] / 600) * 100}%`, minHeight: 8 }}
                />
                <span className="text-xs font-bold text-slate-400">{m}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pending Approvals + Top Agencies */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Pending Approvals */}
        <div className="bg-white rounded-2xl outline outline-1 outline-gray-200 p-6 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <AlertCircle size={20} className="text-red-500" />
            <h3 className="text-base font-semibold text-gray-900">Pending Approvals / Flags</h3>
          </div>
          <div className="flex flex-col gap-3">
            {PENDING_APPROVALS.map((item) => (
              <div key={item.name} className="px-4 py-4 bg-gray-50 rounded-[10px] outline outline-1 outline-gray-200 flex justify-between items-start">
                <div>
                  <div className="flex gap-2 flex-wrap mb-1">
                    <span className={`px-2 py-0.5 rounded-sm text-[10px] font-bold ${item.type === "Company" ? "bg-indigo-50 text-indigo-500" : item.type === "Agency" ? "bg-emerald-50 text-emerald-500" : "bg-red-50 text-red-500"}`}>
                      {item.type}
                    </span>
                    {item.urgent && <span className="bg-red-50 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-sm">URGENT</span>}
                  </div>
                  <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
                <button className="w-16 h-7 bg-indigo-500 rounded-[10px] text-white text-xs font-semibold">Review</button>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performing Agencies */}
        <div className="bg-white rounded-2xl outline outline-1 outline-gray-200 p-6 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Star size={20} className="text-amber-500" />
            <h3 className="text-base font-semibold text-gray-900">Top Performing Agencies</h3>
          </div>
          <div className="flex flex-col gap-3">
            {TOP_AGENCIES.map((a) => (
              <div key={a.rank} className="px-4 py-4 bg-gray-50 rounded-[10px] outline outline-1 outline-gray-200 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="size-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[10px] flex items-center justify-center text-white text-sm font-bold">
                    #{a.rank}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{a.name}</p>
                    <p className="text-xs text-gray-500">{a.placements}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 bg-yellow-100 rounded-sm">
                  <Star size={12} fill="#F59E0B" stroke="#F59E0B" />
                  <span className="text-xs font-bold text-yellow-800">{a.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Payouts + Platform Alerts + Global Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Payouts */}
        <div className="bg-white rounded-2xl outline outline-1 outline-gray-200 p-6 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <CheckCircle size={20} className="text-emerald-500" />
            <h3 className="text-base font-semibold text-gray-900">Recent Payouts</h3>
          </div>
          <div className="flex flex-col gap-3">
            {RECENT_PAYOUTS.map((p) => (
              <div key={p.name} className="pb-3 border-b border-slate-100">
                <p className="text-sm font-semibold text-gray-900">{p.name}</p>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-xs text-gray-500">{p.amount}</span>
                  <span className="bg-emerald-50 text-emerald-500 text-[10px] font-semibold px-2 py-0.5 rounded-sm">{p.status}</span>
                </div>
                <p className="text-[10px] text-slate-400 mt-0.5">{p.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Alerts */}
        <div className="bg-white rounded-2xl outline outline-1 outline-gray-200 p-6 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Bell size={20} className="text-indigo-500" />
            <h3 className="text-base font-semibold text-gray-900">Platform Alerts</h3>
          </div>
          <div className="flex flex-col gap-3">
            {PLATFORM_ALERTS.map((a, i) => (
              <div key={i} className="pb-3 border-b border-slate-100">
                <div className="flex gap-2">
                  <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${a.type === "warning" ? "bg-amber-500" : a.type === "success" ? "bg-emerald-500" : "bg-indigo-500"}`} />
                  <div>
                    <p className={`text-xs ${a.type === "warning" ? "text-amber-500" : a.type === "success" ? "text-emerald-500" : "text-indigo-500"}`}>{a.text}</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">{a.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Activity */}
        <div className="bg-white rounded-2xl outline outline-1 outline-gray-200 p-6 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Globe size={20} className="text-pink-500" />
            <h3 className="text-base font-semibold text-gray-900">Global Activity</h3>
          </div>
          <div className="flex flex-col gap-3">
            {GLOBAL_ACTIVITY.map((a, i) => (
              <div key={i} className="pb-3 border-b border-slate-100">
                <p className="text-xs text-gray-600">{a.text}</p>
                <p className="text-[10px] text-slate-400 mt-0.5">{a.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardHome;
