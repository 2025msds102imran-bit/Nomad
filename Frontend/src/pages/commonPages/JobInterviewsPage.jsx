import React, { useState, useMemo, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  MessageCircle,
  CalendarCheck,
  CheckCircle,
  Clock,
  Eye,
  Calendar,
  Phone,
  FileText,
  ChevronDown,
  X,
  Check,
  CircleAlert,
} from "lucide-react";
import { interviews, vacancyCards } from "../../data/dummyData";
import { StatCard, StarRating } from "../../global";

const InterviewStatIcons = {
  total: MessageCircle,
  scheduled: CalendarCheck,
  completed: CheckCircle,
  pending: Clock,
};

const statusColors = {
  Scheduled: "bg-blue-50 text-cyan-900",
  Completed: "bg-emerald-50 text-emerald-700",
  Pending: "bg-amber-50 text-amber-700",
  Cancelled: "bg-red-50 text-red-600",
};

const STATUS_OPTIONS = ["All Statuses", "Scheduled", "Completed", "Cancelled", "Pending"];

const StatusDropdown = ({ value, onChange, className }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full min-w-0 h-12 px-4 rounded-[10px] border border-gray-200 text-left text-gray-600 text-sm bg-white flex items-center justify-between cursor-pointer hover:border-gray-300"
      >
        <span className={value === "All Statuses" ? "text-blue-500 font-medium" : ""}>{value}</span>
        <ChevronDown size={16} stroke="#4A5565" className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 w-48 py-1 px-0.5 bg-white rounded-[10px] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10),0px_10px_15px_-3px_rgba(0,0,0,0.10),0px_4px_6px_-2px_rgba(0,0,0,0.05)] border border-gray-200 z-50">
          {STATUS_OPTIONS.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className="w-full h-9 px-4 text-left text-sm flex items-center hover:bg-gray-50 rounded-md transition-colors"
            >
              <span className={value === opt ? "text-blue-500 font-medium" : "text-slate-900 font-normal"}>
                {opt}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const AcceptInterviewModal = ({ isOpen, onClose, interview, company, onConfirm }) => {
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm?.(notes);
    setNotes("");
    onClose();
  };

  const handleClose = () => {
    setNotes("");
    onClose();
  };

  const companyLabel = company?.company || "—";
  const roleLabel = company?.title || "—";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={handleClose}>
      <div
        className="w-full max-w-[512px] bg-white rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="h-16 px-6 pt-4 bg-gradient-to-b from-emerald-500 to-emerald-600 rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-white/20 flex items-center justify-center">
              <Check size={24} stroke="white" strokeWidth={2} />
            </div>
            <h3 className="text-white text-xl font-bold leading-7">Accept Interview</h3>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 flex flex-col gap-6">
          <p className="text-gray-600 text-base leading-6">Are you sure you want to accept this interview?</p>

          {/* Interview summary */}
          <div className="w-full px-4 pt-4 pb-1.5 bg-gray-50 rounded-[10px] border border-gray-200 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-gradient-to-b from-slate-900 to-blue-900 flex items-center justify-center text-white text-xs font-bold shrink-0">
                {(company?.company || "C").slice(0, 2).toUpperCase()}
              </div>
              <div>
                <p className="text-slate-900 text-sm font-semibold leading-5">{companyLabel || "—"}</p>
                <p className="text-gray-500 text-xs leading-4">{roleLabel}</p>
              </div>
            </div>
            <div className="flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-1 text-gray-500 text-xs">
                <Calendar size={12} stroke="#6B7280" />
                <span>{interview?.date || "—"}</span>
              </div>
              <div className="flex items-center gap-1 text-gray-500 text-xs">
                <Clock size={12} stroke="#6B7280" />
                <span>{interview?.time?.split(" - ")[0] || interview?.time || "—"}</span>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="flex flex-col gap-2">
            <label className="text-slate-900 text-sm font-medium leading-5">Notes to Company (Optional)</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add any notes or comments for the company..."
              rows={4}
              className="w-full px-4 py-3 rounded-[10px] border border-gray-200 text-sm text-gray-900 placeholder:text-neutral-950/50 resize-none outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
            />
            <p className="text-gray-500 text-xs leading-4">These notes will be shared with the company</p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 h-12 rounded-[10px] border border-gray-200 bg-white text-gray-600 text-base font-semibold"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleConfirm}
              className="flex-1 h-12 rounded-[10px] bg-emerald-500 text-white text-base font-semibold flex items-center justify-center gap-2"
            >
              <Check size={16} stroke="white" strokeWidth={2} /> Confirm Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CancelInterviewModal = ({ isOpen, onClose, interview, company, onConfirm }) => {
  const [reason, setReason] = useState("");

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleConfirm = () => {
    if (!reason.trim()) return;
    onConfirm?.(reason.trim());
    setReason("");
    onClose();
  };

  const handleClose = () => {
    setReason("");
    onClose();
  };

  const companyLabel = company?.company || "—";
  const roleLabel = company?.title || "—";
  const canConfirm = reason.trim().length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={handleClose}>
      <div
        className="w-full max-w-[512px] bg-white rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="h-16 px-6 pt-4 bg-gradient-to-b from-red-500 to-red-600 rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-white/20 flex items-center justify-center">
              <CircleAlert size={24} stroke="white" strokeWidth={2} />
            </div>
            <h3 className="text-white text-xl font-bold leading-7">Cancel Interview</h3>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 flex flex-col gap-6">
          <p className="text-gray-600 text-base leading-6">
            Are you sure you want to cancel this interview? This action cannot be undone and the company will be notified.
          </p>

          {/* Interview summary */}
          <div className="w-full px-4 pt-4 pb-1.5 bg-red-100 rounded-[10px] border border-red-200 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-gradient-to-b from-red-500 to-red-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
                {(company?.company || "C").slice(0, 2).toUpperCase()}
              </div>
              <div>
                <p className="text-red-900 text-sm font-semibold leading-5">{companyLabel}</p>
                <p className="text-red-800 text-xs leading-4">{roleLabel}</p>
              </div>
            </div>
            <div className="flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-1 text-red-800 text-xs">
                <Calendar size={12} stroke="#991B1B" />
                <span>{interview?.date || "—"}</span>
              </div>
              <div className="flex items-center gap-1 text-red-800 text-xs">
                <Clock size={12} stroke="#991B1B" />
                <span>{interview?.time?.split(" - ")[0] || interview?.time || "—"}</span>
              </div>
            </div>
          </div>

          {/* Reason (required) */}
          <div className="flex flex-col gap-2">
            <label className="text-slate-900 text-sm font-medium leading-5">
              Reason for Cancellation <span className="text-red-500">*</span>
            </label>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Please provide a reason for cancelling this interview..."
              rows={4}
              className="w-full px-4 py-3 rounded-[10px] border border-gray-200 text-sm text-gray-900 placeholder:text-neutral-950/50 resize-none outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
            />
            <p className="text-red-500 text-xs leading-4">This reason will be shared with the company</p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 h-12 rounded-[10px] border border-gray-200 bg-white text-gray-600 text-base font-semibold"
            >
              Go Back
            </button>
            <button
              type="button"
              onClick={handleConfirm}
              disabled={!canConfirm}
              className={`flex-1 h-12 rounded-[10px] bg-red-500 text-white text-base font-semibold flex items-center justify-center gap-2 ${!canConfirm ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <X size={16} stroke="white" strokeWidth={2} /> Cancel Interview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const RequestNewDateModal = ({ isOpen, onClose, interview, company, onConfirm }) => {
  const [preferredDate, setPreferredDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleConfirm = () => {
    if (!preferredDate || !startTime || !endTime) return;
    onConfirm?.({ preferredDate, startTime, endTime, notes });
    setPreferredDate("");
    setStartTime("");
    setEndTime("");
    setNotes("");
    onClose();
  };

  const handleClose = () => {
    setPreferredDate("");
    setStartTime("");
    setEndTime("");
    setNotes("");
    onClose();
  };

  const companyLabel = company?.company || "—";
  const roleLabel = company?.title || "—";
  const currentSchedule = interview ? `${interview.date} at ${(interview.time || "").split(" - ")[0] || interview.time}` : "—";
  const canConfirm = preferredDate && startTime && endTime;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={handleClose}>
      <div
        className="w-full max-w-[512px] max-h-[90vh] overflow-y-auto scrollbar-hide bg-white rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 h-16 px-6 pt-4 pb-4 bg-gradient-to-b from-slate-900 to-blue-900 rounded-t-2xl flex flex-col justify-center">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-white/20 flex items-center justify-center">
                <Calendar size={24} stroke="white" strokeWidth={2} />
              </div>
              <h3 className="text-white text-xl font-bold leading-7">Request New Date</h3>
            </div>
            <button type="button" onClick={handleClose} className="size-6 flex items-center justify-center text-white/80 hover:text-white">
              <X size={24} stroke="currentColor" strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 flex flex-col gap-6">
          <p className="text-gray-600 text-base leading-6">
            Request a new date and time for this interview. The company will be notified and can accept or suggest another time.
          </p>

          {/* Interview summary */}
          <div className="w-full px-4 pt-4 pb-1.5 bg-gray-50 rounded-[10px] border border-gray-200 flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-gradient-to-b from-slate-900 to-blue-900 flex items-center justify-center text-white text-xs font-bold shrink-0">
                {(company?.company || "C").slice(0, 2).toUpperCase()}
              </div>
              <div>
                <p className="text-slate-900 text-sm font-semibold leading-5">{companyLabel}</p>
                <p className="text-gray-500 text-xs leading-4">{roleLabel}</p>
              </div>
            </div>
            <div className="pt-2 border-t border-gray-200">
              <p className="text-gray-500 text-xs">
                <span className="font-medium">Current Schedule:</span> {currentSchedule}
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-slate-900 text-sm font-medium leading-5">
                Preferred Date <span className="text-blue-500">*</span>
              </label>
              <input
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="h-12 px-4 rounded-[10px] border border-gray-200 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
            </div>

            <div className="flex gap-4 flex-wrap sm:flex-nowrap">
              <div className="flex-1 min-w-0 flex flex-col gap-2">
                <label className="text-slate-900 text-sm font-medium leading-5">
                  Start Time <span className="text-blue-500">*</span>
                </label>
                <input
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  className="h-12 px-4 rounded-[10px] border border-gray-200 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
              </div>
              <div className="flex-1 min-w-0 flex flex-col gap-2">
                <label className="text-slate-900 text-sm font-medium leading-5">
                  End Time <span className="text-blue-500">*</span>
                </label>
                <input
                  type="time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  className="h-12 px-4 rounded-[10px] border border-gray-200 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-slate-900 text-sm font-medium leading-5">Notes to Company (Optional)</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Explain why you need to reschedule or add any additional information..."
                rows={4}
                className="w-full px-4 py-3 rounded-[10px] border border-gray-200 text-sm text-gray-900 placeholder:text-neutral-950/50 resize-none outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
              <p className="text-gray-500 text-xs leading-4">These notes will help the company understand your request</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 h-12 rounded-[10px] border border-gray-200 bg-white text-gray-600 text-base font-semibold"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleConfirm}
              disabled={!canConfirm}
              className={`flex-1 h-12 rounded-[10px] bg-gradient-to-b from-slate-900 to-blue-900 text-white text-base font-semibold flex items-center justify-center gap-2 ${!canConfirm ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <Calendar size={16} stroke="white" strokeWidth={2} /> Send Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const InterviewCard = ({ interview, company, basePath, onAccept, onCancel, onRequestNewDate }) => {
  return (
    <div className="w-full max-w-sm min-w-0 bg-white rounded-xl border border-gray-200 px-5 pt-5 pb-1 flex flex-col gap-3">
      <div className="flex items-start gap-2.5">
        <div className="size-10 shrink-0 rounded-full bg-gradient-to-b from-cyan-900 to-blue-500 flex items-center justify-center text-white text-sm font-bold overflow-hidden">
          {company.company?.[0] || "C"}
        </div>
        <div className="flex-1 min-w-0 relative">
          <div className="flex justify-between items-start gap-2">
            <div className="min-w-0 flex flex-col gap-0.5">
              <h3 className="text-slate-900 text-sm font-semibold leading-5 truncate">{company.company}</h3>
              <StarRating rating={company.rating ?? 4} size={11} />
            </div>
            <div className="flex gap-1.5 shrink-0">
              <button type="button" className="h-6 w-20 rounded-md border border-gray-200 bg-white text-slate-900 text-[9.5px] font-medium inline-flex items-center justify-center gap-1 shrink-0">
                <Eye size={10} stroke="#0F172A" /> View Job
              </button>
              <Link
                to={`${basePath}/company/${company.id}`}
                className="h-6 w-20 rounded-md bg-amber-500 text-white text-[9.5px] font-medium inline-flex items-center justify-center shrink-0"
              >
                View Details
              </Link>
            </div>
          </div>
          <span className={`inline-block mt-2 px-2.5 py-1 rounded-full text-[9.5px] font-medium ${statusColors[interview.status] || statusColors.Scheduled}`}>
            {interview.status}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        <div className="flex items-center gap-1.5 text-gray-600 text-xs">
          <Calendar size={16} stroke="#4A5565" className="shrink-0" />
          <span>{interview.date}</span>
        </div>
        <div className="h-[0.79px] bg-gray-100" />
        <div className="flex items-center gap-1.5 text-gray-600 text-xs">
          <Clock size={16} stroke="#4A5565" className="shrink-0" />
          <span>{interview.time}</span>
        </div>
        <div className="h-[0.79px] bg-gray-100" />
        <div className="flex items-center gap-1.5 text-gray-600 text-xs font-medium">
          <Phone size={16} stroke="#4A5565" className="shrink-0" />
          <span>{interview.type || "Phone"}</span>
        </div>
        <div className="h-[0.79px] bg-gray-100" />
        <div className="flex items-start gap-1.5">
          <FileText size={16} stroke="#4A5565" className="shrink-0 mt-0.5" />
          <div className="text-xs min-w-0">
            <span className="text-gray-600 font-medium">Notes:</span>
            <span className="text-gray-600 ml-1">{interview.notes || "Prepare technical questions"}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="flex justify-between gap-2">
          <button type="button" onClick={() => onAccept?.(interview)} className="flex-1 max-w-40 h-8 rounded-[10px] bg-emerald-500 text-white text-[9.5px] font-medium flex items-center justify-center gap-1.5">
            <CheckCircle size={13} stroke="white" /> Accept
          </button>
          <button type="button" onClick={() => onRequestNewDate?.(interview)} className="flex-1 max-w-40 h-8 rounded-md border border-gray-200 bg-white text-slate-900 text-[9.5px] font-medium flex items-center justify-center gap-1.5">
            <Calendar size={11} stroke="#0F172A" /> Request New Date
          </button>
        </div>
        <button type="button" onClick={() => onCancel?.(interview)} className="w-full h-8 rounded-md border border-red-500 bg-white text-red-500 text-[9.5px] font-medium flex items-center justify-center gap-1.5">
          <X size={13} stroke="#EF4444" /> Cancel
        </button>
      </div>
    </div>
  );
};

const JobInterviewsPage = () => {
  const location = useLocation();
  const basePath = location.pathname.startsWith("/recruiter") ? "/recruiter" : "/dashboard";
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [acceptModal, setAcceptModal] = useState({ open: false, interview: null, company: null });
  const [cancelModal, setCancelModal] = useState({ open: false, interview: null, company: null });
  const [requestNewDateModal, setRequestNewDateModal] = useState({ open: false, interview: null, company: null });

  const interviewStats = useMemo(() => {
    const total = interviews.length;
    const scheduled = interviews.filter((i) => i.status === "Scheduled").length;
    const completed = interviews.filter((i) => i.status === "Completed").length;
    const pending = interviews.filter((i) => i.status === "Pending").length;
    return [
      { label: "Total Interviews", value: 47, change: "+5", pct: "12%", iconColor: "#6366F1", bgColor: "bg-indigo-500/10", key: "total" },
      { label: "Scheduled", value: 29, change: "+156", pct: "14%", iconColor: "#EC4899", bgColor: "bg-pink-500/10", key: "scheduled" },
      { label: "Completed", value: 14, change: "+23", pct: "23%", iconColor: "#10B981", bgColor: "bg-emerald-500/10", key: "completed" },
      { label: "Pending", value: 11, change: "+€67K", pct: "15%", iconColor: "#F59E0B", bgColor: "bg-amber-500/10", key: "pending" },
    ];
  }, []);

  const enrichedInterviews = useMemo(() => {
    return interviews.map((i, idx) => ({
      ...i,
      companyId: (idx % vacancyCards.length) + 1,
      notes: "Prepare technical questions",
      type: "Phone",
    }));
  }, []);

  const filteredInterviews = useMemo(() => {
    let list = enrichedInterviews;
    if (statusFilter !== "All Statuses") {
      list = list.filter((i) => i.status === statusFilter);
    }
    return list;
  }, [enrichedInterviews, statusFilter]);

  return (
    <div className="flex flex-col gap-6 sm:gap-8 w-full min-w-0 overflow-x-hidden">
      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full min-w-0">
        {interviewStats.map((stat) => {
          const Icon = InterviewStatIcons[stat.key];
          return <StatCard key={stat.key} stat={stat} Icon={Icon} className="w-full" />;
        })}
      </div>

      {/* Filters */}
      <div className="self-stretch p-4 sm:p-6 bg-white rounded-2xl border border-gray-100 w-full min-w-0">
        <div className="flex flex-col lg:flex-row lg:flex-wrap gap-4 lg:gap-6 lg:items-end w-full min-w-0">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 lg:gap-6 flex-1 min-w-0 basis-full lg:basis-0">
            <div className="flex flex-col gap-2 flex-1 min-w-0 sm:min-w-40">
              <label className="text-slate-900 text-sm font-medium leading-5">From Date</label>
              <div className="w-full min-w-0 h-12 px-3 rounded-[10px] border border-gray-200 flex items-center">
                <input
                  type="text"
                  placeholder="dd/mm/yy"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  className="w-full min-w-0 text-gray-600 text-sm outline-none placeholder:text-gray-400 bg-transparent"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 flex-1 min-w-0 sm:min-w-40">
              <label className="text-slate-900 text-sm font-medium leading-5">To Date</label>
              <div className="w-full min-w-0 h-12 px-3 rounded-[10px] border border-gray-200 flex items-center">
                <input
                  type="text"
                  placeholder="dd/mm/yy"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                  className="w-full min-w-0 text-gray-600 text-sm outline-none placeholder:text-gray-400 bg-transparent"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 flex-1 min-w-0 sm:min-w-40">
              <label className="text-slate-900 text-sm font-medium leading-5">Status</label>
              <StatusDropdown value={statusFilter} onChange={setStatusFilter} className="w-full min-w-0" />
            </div>
          </div>
          <div className="flex gap-2 shrink-0 w-full sm:w-auto">
            <button type="button" className="flex-1 sm:flex-none sm:w-32 h-12 bg-cyan-900 rounded-[10px] text-white text-base font-medium leading-6">
              Search
            </button>
            <button
              type="button"
              onClick={() => {
                setFromDate("");
                setToDate("");
                setStatusFilter("All Statuses");
              }}
              className="flex-1 sm:flex-none sm:w-32 h-12 bg-white rounded-[10px] border border-gray-200 text-gray-600 text-base font-medium leading-6"
            >
              Clear
            </button>
          </div>
        </div>
      </div>

      {/* Interview cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 w-full min-w-0">
        {filteredInterviews.map((interview) => {
          const company = vacancyCards.find((v) => v.id === interview.companyId) || vacancyCards[0];
          return (
            <InterviewCard
              key={interview.id}
              interview={interview}
              company={company}
              basePath={basePath}
              onAccept={(i) => setAcceptModal({ open: true, interview: i, company: vacancyCards.find((v) => v.id === i.companyId) || vacancyCards[0] })}
              onCancel={(i) => setCancelModal({ open: true, interview: i, company: vacancyCards.find((v) => v.id === i.companyId) || vacancyCards[0] })}
              onRequestNewDate={(i) => setRequestNewDateModal({ open: true, interview: i, company: vacancyCards.find((v) => v.id === i.companyId) || vacancyCards[0] })}
            />
          );
        })}
        {filteredInterviews.length === 0 && (
          <div className="col-span-full text-center text-gray-500 text-sm py-12">
            No interviews found.
          </div>
        )}
      </div>

      <AcceptInterviewModal
        isOpen={acceptModal.open}
        onClose={() => setAcceptModal({ open: false, interview: null, company: null })}
        interview={acceptModal.interview}
        company={acceptModal.company}
        onConfirm={(notes) => {
          // TODO: API call to accept interview with notes
        }}
      />

      <CancelInterviewModal
        isOpen={cancelModal.open}
        onClose={() => setCancelModal({ open: false, interview: null, company: null })}
        interview={cancelModal.interview}
        company={cancelModal.company}
        onConfirm={(reason) => {
          // TODO: API call to cancel interview with reason
        }}
      />

      <RequestNewDateModal
        isOpen={requestNewDateModal.open}
        onClose={() => setRequestNewDateModal({ open: false, interview: null, company: null })}
        interview={requestNewDateModal.interview}
        company={requestNewDateModal.company}
        onConfirm={(data) => {
          // TODO: API call to request new date with preferredDate, startTime, endTime, notes
        }}
      />
    </div>
  );
};

export default JobInterviewsPage;
