import React, { useState, useMemo, useCallback } from "react";
import { Clock, ChevronDown, FileText, TrendingUp, CheckCircle, Check, RotateCcw, X, Info, AlertCircle, ArrowRight } from "lucide-react";
import { myBids as initialBids } from "../../data/dummyData";
import { StatCard, StarRating } from "../../global";

const PLATFORM_FEE_RATE = 0.05;

const STATUS_STYLES = {
  Pending: "bg-amber-100 text-amber-800",
  Active: "bg-blue-100 text-blue-800",
  Won: "bg-emerald-100 text-emerald-800",
  Declined: "bg-red-100 text-red-800",
};

const statIcons = [FileText, TrendingUp, CheckCircle, Clock];

const AcceptBidModal = ({ bid, onConfirm, onCancel }) => {
  const fee = Math.round(bid.rawAmount * PLATFORM_FEE_RATE);
  const youReceive = bid.rawAmount - fee;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onCancel} />
      <div className="relative w-full max-w-96 mx-4 sm:mx-0 bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Green header */}
        <div className="px-6 pt-4 pb-4 bg-linear-to-b from-emerald-500 to-emerald-600 flex items-center gap-3">
          <div className="size-10 bg-white/20 rounded-full flex items-center justify-center">
            <Check size={24} stroke="white" strokeWidth={2} />
          </div>
          <h3 className="text-white text-xl font-bold leading-7">Accept Bid?</h3>
        </div>

        {/* Content */}
        <div className="px-6 pt-6 pb-6 flex flex-col gap-4">
          <p className="text-gray-600 text-base font-normal leading-6">
            Are you sure you want to accept this bid? This action will confirm your agreement with the company.
          </p>

          {/* Bid details */}
          <div className="px-4 py-4 bg-gray-50 rounded-[10px] outline-1 outline-gray-200 flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-sm font-normal leading-5">Job Position</span>
              <span className="text-slate-900 text-sm font-semibold leading-5">{bid.title}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-sm font-normal leading-5">Company</span>
              <span className="text-slate-900 text-sm font-semibold leading-5">{bid.company}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-sm font-normal leading-5">Bid Amount</span>
              <span className="text-emerald-500 text-lg font-bold leading-7">{bid.amount}</span>
            </div>
          </div>

          {/* Payment breakdown */}
          <div className="px-4 py-4 bg-linear-to-b from-blue-50 to-blue-100 rounded-[10px] outline-1 outline-blue-500 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="size-8 bg-blue-500 rounded-full flex items-center justify-center">
                <Info size={20} stroke="white" />
              </div>
              <span className="text-slate-900 text-base font-bold leading-6">Payment Breakdown</span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm font-normal leading-5">Total Bid Amount</span>
                <span className="text-slate-900 text-sm font-semibold leading-5">{bid.amount}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm font-normal leading-5">Platform Fee ({PLATFORM_FEE_RATE * 100}%)</span>
                <span className="text-red-500 text-sm font-semibold leading-5">-€{fee.toLocaleString()}</span>
              </div>
              <div className="h-px bg-slate-300" />
              <div className="flex justify-between items-center">
                <span className="text-slate-900 text-base font-bold leading-6">You will receive</span>
                <span className="text-emerald-500 text-xl font-bold leading-7">€{youReceive.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3">
            <button
              onClick={onCancel}
              className="flex-1 h-12 bg-white rounded-[10px] outline-1 outline-gray-200 text-gray-600 text-base font-semibold leading-6 cursor-pointer hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="flex-1 h-12 bg-emerald-500 rounded-[10px] flex items-center justify-center gap-2 text-white text-base font-semibold leading-6 cursor-pointer hover:bg-emerald-600 transition"
            >
              <Check size={16} stroke="white" /> Accept Bid
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const DeclineBidModal = ({ bid, onConfirm, onCancel }) => {
  const fee = Math.round(bid.rawAmount * PLATFORM_FEE_RATE);
  const potentialEarnings = bid.rawAmount - fee;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onCancel} />
      <div className="relative w-full max-w-96 mx-4 sm:mx-0 bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Red header */}
        <div className="px-6 pt-4 pb-4 bg-linear-to-b from-red-500 to-red-600 flex items-center gap-3">
          <div className="size-10 bg-white/20 rounded-full flex items-center justify-center">
            <AlertCircle size={24} stroke="white" strokeWidth={2} />
          </div>
          <h3 className="text-white text-xl font-bold leading-7">Decline Bid?</h3>
        </div>

        {/* Content */}
        <div className="px-6 pt-6 pb-6 flex flex-col gap-4">
          <p className="text-gray-600 text-base font-normal leading-6">
            Are you sure you want to decline this bid? This action cannot be undone and the company will be notified.
          </p>

          {/* Bid details - red themed */}
          <div className="px-4 py-4 bg-red-100 rounded-[10px] outline-1 outline-red-200 flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-red-800 text-sm font-normal leading-5">Job Position</span>
              <span className="text-red-900 text-sm font-semibold leading-5">{bid.title}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-red-800 text-sm font-normal leading-5">Company</span>
              <span className="text-red-900 text-sm font-semibold leading-5">{bid.company}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-red-800 text-sm font-normal leading-5">Bid Amount</span>
              <span className="text-red-600 text-lg font-bold leading-7">{bid.amount}</span>
            </div>
          </div>

          {/* What you're declining - amber themed */}
          <div className="px-4 py-4 bg-linear-to-b from-amber-100 to-amber-200 rounded-[10px] outline-1 outline-amber-500 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <AlertCircle size={20} stroke="#F59E0B" strokeWidth={1.67} />
              <span className="text-slate-900 text-base font-bold leading-6">What You&apos;re Declining</span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="text-amber-900 text-sm font-normal leading-5">Bid Amount</span>
                <span className="text-slate-900 text-sm font-semibold leading-5">{bid.amount}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-amber-900 text-sm font-normal leading-5">Platform Fee ({PLATFORM_FEE_RATE * 100}%)</span>
                <span className="text-red-500 text-sm font-semibold leading-5">-€{fee.toLocaleString()}</span>
              </div>
              <div className="h-px bg-amber-400" />
              <div className="flex justify-between items-center">
                <span className="text-slate-900 text-base font-bold leading-6">Potential Earnings</span>
                <span className="text-amber-500 text-xl font-bold leading-7">€{potentialEarnings.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3">
            <button
              onClick={onCancel}
              className="flex-1 h-12 bg-white rounded-[10px] outline-1 outline-gray-200 text-gray-600 text-base font-semibold leading-6 cursor-pointer hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="flex-1 h-12 bg-red-500 rounded-[10px] flex items-center justify-center gap-2 text-white text-base font-semibold leading-6 cursor-pointer hover:bg-red-600 transition"
            >
              <X size={16} stroke="white" /> Decline Bid
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const RequestNewBidModal = ({ bid, onSubmit, onCancel }) => {
  const [newAmount, setNewAmount] = useState("");
  const fee = Math.round(bid.rawAmount * PLATFORM_FEE_RATE);
  const youReceive = bid.rawAmount - fee;

  const handleSubmit = () => {
    const parsed = parseFloat(newAmount.replace(/,/g, ""));
    if (!parsed || parsed <= 0) return;
    onSubmit(bid.id, parsed);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onCancel} />
      <div className="relative w-full max-w-96 mx-4 sm:mx-0 bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Dark gradient header */}
        <div className="px-6 pt-4 pb-3 bg-linear-to-b from-slate-900 to-blue-900 flex items-center justify-between">
          <h3 className="text-white text-xl font-bold leading-7">Request New Bid</h3>
          <button onClick={onCancel} className="cursor-pointer">
            <X size={24} stroke="white" strokeOpacity={0.8} strokeWidth={2} />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 pt-6 pb-6 flex flex-col gap-4">
          {/* Job Position */}
          <div className="flex flex-col gap-2">
            <span className="text-gray-500 text-sm font-normal leading-5">Job Position</span>
            <span className="text-slate-900 text-base font-semibold leading-6">{bid.title}</span>
          </div>

          {/* Current Bid Amount */}
          <div className="flex flex-col gap-2">
            <span className="text-gray-500 text-sm font-normal leading-5">Current Bid Amount</span>
            <span className="text-amber-500 text-xl font-bold leading-7">{bid.amount}</span>
          </div>

          {/* Current Offer Breakdown */}
          <div className="px-4 py-4 bg-linear-to-b from-amber-100 to-amber-200 rounded-[10px] outline-1 outline-amber-500 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <AlertCircle size={20} stroke="#F59E0B" strokeWidth={1.67} />
              <span className="text-slate-900 text-sm font-bold leading-5">Current Offer Breakdown</span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <span className="text-amber-900 text-xs font-normal leading-4">Current Bid</span>
                <span className="text-slate-900 text-xs font-semibold leading-4">{bid.amount}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-amber-900 text-xs font-normal leading-4">Platform Fee ({PLATFORM_FEE_RATE * 100}%)</span>
                <span className="text-red-500 text-xs font-semibold leading-4">-€{fee.toLocaleString()}</span>
              </div>
              <div className="h-px bg-amber-400" />
              <div className="flex justify-between items-center">
                <span className="text-slate-900 text-xs font-bold leading-4">You&apos;d receive</span>
                <span className="text-amber-500 text-sm font-bold leading-5">€{youReceive.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* New Bid Amount input */}
          <div className="flex flex-col gap-2">
            <label className="text-slate-900 text-sm font-medium leading-5">New Bid Amount</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg font-semibold leading-7">€</span>
              <input
                type="text"
                value={newAmount}
                onChange={(e) => setNewAmount(e.target.value)}
                placeholder="5,000"
                className="w-full h-12 pl-10 pr-4 py-3 rounded-[10px] outline-1 outline-gray-200 text-base font-normal placeholder:text-neutral-950/50"
              />
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3">
            <button
              onClick={onCancel}
              className="flex-1 h-12 bg-white rounded-[10px] outline-1 outline-gray-200 text-gray-600 text-base font-semibold leading-6 cursor-pointer hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="flex-1 h-12 bg-linear-to-b from-slate-900 to-blue-900 rounded-[10px] flex items-center justify-center gap-2 text-white text-base font-semibold leading-6 cursor-pointer hover:opacity-90 transition"
            >
              Send Request <ArrowRight size={16} stroke="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const BidCard = ({ bid, onAccept, onRequestNew, onDecline }) => {
  const showActions = bid.status === "Pending";

  return (
    <div className="bg-white rounded-2xl outline-[1.30px] outline-gray-200 overflow-hidden">
      <div className="px-4 sm:px-6 pt-6 pb-6 flex flex-col sm:flex-row sm:justify-between gap-4">
        <div className="flex flex-col gap-1 min-w-0">
          <h3 className="text-slate-900 text-xl font-semibold leading-7">{bid.title}</h3>
          <span className="text-slate-900/90 text-base font-medium leading-6">{bid.bidder}</span>
          <div className="flex items-center gap-3 mt-0.5">
            <span className="text-gray-500 text-base font-normal leading-6">{bid.company}</span>
            <StarRating rating={bid.rating} size={16} />
          </div>
          <div className="flex items-center gap-1.5 mt-2">
            <Clock size={14} stroke="#6A7282" strokeWidth={1.17} />
            <span className="text-gray-600 text-sm font-normal leading-5">
              {bid.type} / {bid.hours} Hours
            </span>
          </div>
        </div>
        <div className="flex flex-row sm:flex-col items-start sm:items-end gap-2 shrink-0">
          <span className="text-amber-500 text-2xl font-bold leading-8">{bid.amount}</span>
          <span className="text-gray-400 text-sm font-normal leading-5">Bid Amount</span>
          <span
            className={`px-4 h-9 rounded-full flex items-center justify-center text-base font-semibold leading-6 ${STATUS_STYLES[bid.status] || "bg-gray-100 text-gray-800"}`}
          >
            {bid.status}
          </span>
        </div>
      </div>

      {showActions && (
        <div className="border-t border-gray-200 px-4 sm:px-10 py-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => onAccept(bid)}
              className="flex-1 h-12 bg-emerald-500 rounded-[10px] shadow-sm flex items-center justify-center gap-2 text-white text-sm font-semibold cursor-pointer hover:bg-emerald-600 transition"
            >
              <Check size={16} stroke="white" /> Accept Bid
            </button>
            <button
              onClick={() => onRequestNew(bid)}
              className="flex-1 h-12 bg-linear-to-b from-slate-900 to-blue-900 rounded-[10px] shadow-sm flex items-center justify-center gap-2 text-white text-sm font-semibold cursor-pointer hover:opacity-90 transition"
            >
              <RotateCcw size={16} stroke="white" /> Request New Bid
            </button>
            <button
              onClick={() => onDecline(bid)}
              className="flex-1 h-12 bg-white rounded-[10px] outline-[1.30px] outline-red-500 flex items-center justify-center gap-2 text-red-500 text-sm font-semibold cursor-pointer hover:bg-red-50 transition"
            >
              <X size={16} stroke="#EF4444" /> Decline Bid
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const MyBidPage = () => {
  const [bids, setBids] = useState(() => initialBids.map((b) => ({ ...b })));
  const [filter, setFilter] = useState("All Bids");
  const [sort, setSort] = useState("Sort By");
  const [acceptingBid, setAcceptingBid] = useState(null);
  const [decliningBid, setDecliningBid] = useState(null);
  const [requestingBid, setRequestingBid] = useState(null);

  const handleAcceptClick = useCallback((bid) => {
    setAcceptingBid(bid);
  }, []);

  const handleAcceptConfirm = useCallback(() => {
    if (!acceptingBid) return;
    setBids((prev) => prev.map((b) => (b.id === acceptingBid.id ? { ...b, status: "Won" } : b)));
    setAcceptingBid(null);
  }, [acceptingBid]);

  const handleAcceptCancel = useCallback(() => {
    setAcceptingBid(null);
  }, []);

  const handleDeclineClick = useCallback((bid) => {
    setDecliningBid(bid);
  }, []);

  const handleDeclineConfirm = useCallback(() => {
    if (!decliningBid) return;
    setBids((prev) => prev.map((b) => (b.id === decliningBid.id ? { ...b, status: "Declined" } : b)));
    setDecliningBid(null);
  }, [decliningBid]);

  const handleDeclineCancel = useCallback(() => {
    setDecliningBid(null);
  }, []);

  const handleRequestNewClick = useCallback((bid) => {
    setRequestingBid(bid);
  }, []);

  const handleRequestNewSubmit = useCallback((id, newAmount) => {
    const formatted = `€${newAmount.toLocaleString()}`;
    setBids((prev) => prev.map((b) => (b.id === id ? { ...b, status: "Active", rawAmount: newAmount, amount: formatted } : b)));
    setRequestingBid(null);
  }, []);

  const handleRequestNewCancel = useCallback(() => {
    setRequestingBid(null);
  }, []);

  const computedStats = useMemo(() => {
    const total = bids.length;
    const active = bids.filter((b) => b.status === "Active").length;
    const won = bids.filter((b) => b.status === "Won").length;
    const pending = bids.filter((b) => b.status === "Pending").length;
    return [
      { label: "Total Bids", value: total, change: `+${total}`, pct: `${Math.round((total / Math.max(total, 1)) * 12)}%`, iconColor: "#6366F1", bgColor: "bg-indigo-500/10" },
      { label: "Active Bids", value: active, change: `+${active}`, pct: `${Math.round((active / Math.max(total, 1)) * 100)}%`, iconColor: "#EC4899", bgColor: "bg-pink-500/10" },
      { label: "Won Bids", value: won, change: `+${won}`, pct: `${Math.round((won / Math.max(total, 1)) * 100)}%`, iconColor: "#10B981", bgColor: "bg-emerald-500/10" },
      { label: "Pending Bids", value: pending, change: `+${pending}`, pct: `${Math.round((pending / Math.max(total, 1)) * 100)}%`, iconColor: "#F59E0B", bgColor: "bg-amber-500/10" },
    ];
  }, [bids]);

  const filteredBids = useMemo(() => {
    let result = bids;
    if (filter !== "All Bids") {
      result = result.filter((b) => b.status === filter);
    }
    if (sort === "Amount: High to Low") {
      result = [...result].sort((a, b) => b.rawAmount - a.rawAmount);
    } else if (sort === "Amount: Low to High") {
      result = [...result].sort((a, b) => a.rawAmount - b.rawAmount);
    }
    return result;
  }, [bids, filter, sort]);

  return (
    <div className="flex flex-col gap-6">
      {/* Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {computedStats.map((stat, i) => (
          <StatCard key={i} stat={stat} Icon={statIcons[i]} className="w-full" />
        ))}
      </div>

      {/* Filter Bar */}
      <div className="px-6 pt-6 pb-6 bg-white rounded-2xl outline-[1.30px] outline-gray-100">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full h-11 pl-3 pr-10 bg-white rounded-[10px] outline-[1.30px] outline-gray-200 text-gray-600 text-base font-normal appearance-none cursor-pointer"
            >
              <option>All Bids</option>
              <option>Pending</option>
              <option>Active</option>
              <option>Won</option>
              <option>Declined</option>
            </select>
            <ChevronDown size={16} stroke="#4A5565" className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
          <div className="flex-1 relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="w-full h-11 pl-3 pr-10 bg-white rounded-[10px] outline-[1.30px] outline-gray-200 text-gray-600 text-base font-normal appearance-none cursor-pointer"
            >
              <option>Sort By</option>
              <option>Amount: High to Low</option>
              <option>Amount: Low to High</option>
            </select>
            <ChevronDown size={16} stroke="#4A5565" className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Bid Cards */}
      <div className="flex flex-col gap-4">
        {filteredBids.length === 0 ? (
          <div className="text-center text-gray-400 text-sm py-12">No bids found.</div>
        ) : (
          filteredBids.map((bid) => (
            <BidCard
              key={bid.id}
              bid={bid}
              onAccept={handleAcceptClick}
              onRequestNew={handleRequestNewClick}
              onDecline={handleDeclineClick}
            />
          ))
        )}
      </div>

      {/* Accept Bid Confirmation Modal */}
      {acceptingBid && (
        <AcceptBidModal
          bid={acceptingBid}
          onConfirm={handleAcceptConfirm}
          onCancel={handleAcceptCancel}
        />
      )}

      {/* Decline Bid Confirmation Modal */}
      {decliningBid && (
        <DeclineBidModal
          bid={decliningBid}
          onConfirm={handleDeclineConfirm}
          onCancel={handleDeclineCancel}
        />
      )}

      {/* Request New Bid Modal */}
      {requestingBid && (
        <RequestNewBidModal
          bid={requestingBid}
          onSubmit={handleRequestNewSubmit}
          onCancel={handleRequestNewCancel}
        />
      )}
    </div>
  );
};

export default MyBidPage;
