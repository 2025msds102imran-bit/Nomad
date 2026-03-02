import { useState } from "react";
import {
  Plus, Search, ChevronDown, Clock, AlertCircle, CheckCircle,
  MessageSquare, Calendar, X, Send,
} from "lucide-react";

const initialTickets = [
  {
    id: 1,
    title: "Platform fee calculation question",
    description: "I need clarification on how platform fees are calculated for Pro plan members.",
    status: "open",
    priority: "medium",
    category: "Billing",
    createdAt: "2024-02-12 11:00 AM",
    replies: [],
  },
];

const statusOptions = ["All Status", "Open", "In Progress", "Resolved"];
const priorityOptions = ["All Priorities", "Low", "Medium", "High", "Urgent"];
const categoryOptions = ["General", "Technical", "Billing", "Account"];

const statusStyles = {
  open: { bg: "bg-blue-500", text: "text-white", label: "Open", Icon: Clock },
  in_progress: { bg: "bg-amber-500", text: "text-white", label: "In Progress", Icon: AlertCircle },
  resolved: { bg: "bg-emerald-500", text: "text-white", label: "Resolved", Icon: CheckCircle },
};

const priorityStyles = {
  low: { bg: "bg-gray-100", text: "text-gray-500" },
  medium: { bg: "bg-blue-100", text: "text-blue-500" },
  high: { bg: "bg-orange-100", text: "text-orange-500" },
  urgent: { bg: "bg-red-100", text: "text-red-500" },
};

const StatCard = ({ label, value, iconBg, iconStroke, Icon }) => (
  <div className="flex-1 bg-white rounded-2xl outline-[1.1px] outline-gray-200 px-4 pt-4 pb-4">
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-1">
        <span className="text-gray-500 text-sm font-normal leading-5">{label}</span>
        <span className="text-slate-900 text-2xl font-bold leading-8">{value}</span>
      </div>
      <div className={`size-12 ${iconBg} rounded-2xl flex items-center justify-center`}>
        <Icon size={24} stroke={iconStroke} strokeWidth={2} />
      </div>
    </div>
  </div>
);

const TicketCard = ({ ticket, isSelected, onClick }) => {
  const status = statusStyles[ticket.status];
  const priority = priorityStyles[ticket.priority];
  const StatusIcon = status.Icon;

  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-2xl outline-[1.1px] outline-gray-200 px-5 pt-5 pb-4 flex flex-col gap-3 cursor-pointer transition-all hover:shadow-md ${
        isSelected ? "outline-cyan-900 shadow-md" : ""
      }`}
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-slate-900 text-base font-semibold leading-6">{ticket.title}</h3>
        <p className="text-gray-500 text-sm font-normal leading-5 line-clamp-2">{ticket.description}</p>
      </div>
      <div className="flex items-center gap-2">
        <span className={`h-6 px-3 ${status.bg} rounded-full flex items-center gap-1`}>
          <StatusIcon size={12} stroke="white" strokeWidth={2} />
          <span className={`${status.text} text-xs font-bold leading-4`}>{status.label}</span>
        </span>
        <span className={`h-6 px-3 ${priority.bg} rounded-full`}>
          <span className={`${priority.text} text-xs font-bold leading-4 capitalize`}>{ticket.priority}</span>
        </span>
        <span className="h-6 px-3 bg-gray-100 rounded-full">
          <span className="text-gray-500 text-xs font-bold leading-4">{ticket.category}</span>
        </span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Calendar size={14} stroke="#6B7280" strokeWidth={1.17} />
          <span className="text-gray-500 text-xs font-normal leading-4">{ticket.createdAt}</span>
        </div>
        <div className="flex items-center gap-1">
          <MessageSquare size={14} stroke="#6B7280" strokeWidth={1.17} />
          <span className="text-gray-500 text-xs font-normal leading-4">{ticket.replies.length} replies</span>
        </div>
      </div>
    </div>
  );
};

const TicketDetail = ({ ticket, onReply }) => {
  const [replyText, setReplyText] = useState("");
  const status = statusStyles[ticket.status];
  const priority = priorityStyles[ticket.priority];

  const handleSend = () => {
    if (!replyText.trim()) return;
    onReply(ticket.id, replyText.trim());
    setReplyText("");
  };

  return (
    <div className="bg-white rounded-2xl outline-[1.1px] outline-gray-200 flex flex-col h-full">
      <div className="px-6 py-5 border-b border-gray-100 flex flex-col gap-3">
        <div className="flex items-start justify-between">
          <h2 className="text-slate-900 text-lg font-semibold leading-7 flex-1">{ticket.title}</h2>
          <div className="flex items-center gap-2 shrink-0 ml-4">
            <span className={`h-6 px-3 ${status.bg} rounded-full flex items-center gap-1`}>
              <status.Icon size={12} stroke="white" strokeWidth={2} />
              <span className={`${status.text} text-xs font-bold leading-4`}>{status.label}</span>
            </span>
            <span className={`h-6 px-3 ${priority.bg} rounded-full`}>
              <span className={`${priority.text} text-xs font-bold leading-4 capitalize`}>{ticket.priority}</span>
            </span>
          </div>
        </div>
        <p className="text-gray-500 text-sm font-normal leading-5">{ticket.description}</p>
        <div className="flex items-center gap-4 text-gray-400 text-xs">
          <div className="flex items-center gap-1">
            <Calendar size={14} stroke="#9CA3AF" />
            <span>{ticket.createdAt}</span>
          </div>
          <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-500 text-xs font-medium">{ticket.category}</span>
        </div>
      </div>

      <div className="flex-1 px-6 py-4 overflow-y-auto flex flex-col gap-4">
        {ticket.replies.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-gray-400 text-sm">No replies yet. Send the first message.</p>
          </div>
        ) : (
          ticket.replies.map((reply, i) => (
            <div
              key={i}
              className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-5 ${
                reply.from === "user"
                  ? "bg-cyan-900 text-white self-end rounded-br-sm"
                  : "bg-gray-100 text-gray-700 self-start rounded-bl-sm"
              }`}
            >
              <p>{reply.text}</p>
              <p className={`text-xs mt-1 ${reply.from === "user" ? "text-white/60" : "text-gray-400"}`}>{reply.time}</p>
            </div>
          ))
        )}
      </div>

      <div className="px-6 py-4 border-t border-gray-100 flex items-center gap-3">
        <input
          type="text"
          placeholder="Type your reply..."
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 h-11 px-4 rounded-[10px] outline-[1.1px] outline-gray-200 text-sm placeholder:text-gray-400"
        />
        <button
          onClick={handleSend}
          className="h-11 px-5 bg-cyan-900 rounded-[10px] flex items-center gap-2 text-white text-sm font-semibold hover:bg-cyan-800 transition-colors cursor-pointer"
        >
          <Send size={16} />
          <span>Send</span>
        </button>
      </div>
    </div>
  );
};

const EmptyDetail = () => (
  <div className="bg-white rounded-2xl outline-[1.1px] outline-gray-200 flex items-center justify-center h-full">
    <div className="flex flex-col items-center gap-4">
      <MessageSquare size={64} stroke="#D1D5DB" strokeWidth={1.5} />
      <p className="text-gray-500 text-lg font-normal leading-7">Select a ticket to view details</p>
    </div>
  </div>
);

const NewTicketModal = ({ onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");
  const [category, setCategory] = useState("General");
  const [catOpen, setCatOpen] = useState(false);
  const [priOpen, setPriOpen] = useState(false);

  const handleSubmit = () => {
    if (!title.trim() || !description.trim()) return;
    onSubmit({ title: title.trim(), description: description.trim(), priority, category });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-2xl w-full max-w-[672px] mx-4 sm:mx-0 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="h-20 px-6 bg-linear-to-b from-slate-900 to-blue-900 flex items-center justify-between">
          <h2 className="text-white text-2xl font-semibold leading-8">Create New Ticket</h2>
          <button onClick={onClose} className="size-10 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
            <X size={20} stroke="white" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 pt-6 pb-6 flex flex-col gap-4">
          {/* Subject */}
          <div className="flex flex-col gap-2">
            <label className="text-slate-900 text-sm font-semibold leading-5">Subject *</label>
            <input
              type="text"
              placeholder="Brief summary of your issue"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="h-12 px-4 py-3 rounded-[10px] outline-[1.1px] outline-gray-200 text-base placeholder:text-neutral-950/50"
            />
          </div>

          {/* Category + Priority */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-slate-900 text-sm font-semibold leading-5">Category *</label>
              <div className="relative">
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full h-11 px-4 rounded-[10px] outline-[1.1px] outline-gray-200 text-base appearance-none bg-white cursor-pointer text-neutral-950/50"
                >
                  {categoryOptions.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                <ChevronDown size={16} stroke="#4A5565" className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-slate-900 text-sm font-semibold leading-5">Priority *</label>
              <div className="relative">
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="w-full h-11 px-4 rounded-[10px] outline-[1.1px] outline-gray-200 text-base appearance-none bg-white cursor-pointer text-neutral-950/50"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="urgent">Urgent</option>
                </select>
                <ChevronDown size={16} stroke="#4A5565" className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-2">
            <label className="text-slate-900 text-sm font-semibold leading-5">Description *</label>
            <textarea
              placeholder="Describe your issue in detail..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={6}
              className="px-4 py-3 rounded-[10px] outline-[1.1px] outline-gray-200 text-base placeholder:text-neutral-950/50 leading-6 resize-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              onClick={handleSubmit}
              className="flex-1 h-12 bg-cyan-900 rounded-[10px] text-white text-base font-semibold leading-6 hover:bg-cyan-800 transition-colors cursor-pointer"
            >
              Create Ticket
            </button>
            <button
              onClick={onClose}
              className="w-24 h-12 bg-gray-100 rounded-2xl outline-[1.1px] outline-gray-200 text-slate-900 text-base font-semibold leading-6 hover:bg-gray-200 transition-colors cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const SupportPage = () => {
  const [tickets, setTickets] = useState(initialTickets);
  const [selectedId, setSelectedId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [priorityFilter, setPriorityFilter] = useState("All Priorities");

  const openCount = tickets.filter((t) => t.status === "open").length;
  const inProgressCount = tickets.filter((t) => t.status === "in_progress").length;
  const resolvedCount = tickets.filter((t) => t.status === "resolved").length;

  const filtered = tickets.filter((t) => {
    if (searchQuery && !t.title.toLowerCase().includes(searchQuery.toLowerCase()) && !t.description.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    if (statusFilter !== "All Status" && t.status !== statusFilter.toLowerCase().replace(" ", "_")) return false;
    if (priorityFilter !== "All Priorities" && t.priority !== priorityFilter.toLowerCase()) return false;
    return true;
  });

  const selectedTicket = tickets.find((t) => t.id === selectedId);

  const createTicket = ({ title, description, priority, category }) => {
    const now = new Date();
    const formatted = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")} ${now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true })}`;
    const newTicket = {
      id: Date.now(),
      title,
      description,
      status: "open",
      priority,
      category,
      createdAt: formatted,
      replies: [],
    };
    setTickets((prev) => [newTicket, ...prev]);
    setSelectedId(newTicket.id);
  };

  const addReply = (ticketId, text) => {
    const now = new Date();
    const timeStr = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
    setTickets((prev) =>
      prev.map((t) =>
        t.id === ticketId
          ? { ...t, replies: [...t.replies, { from: "user", text, time: timeStr }] }
          : t
      )
    );
  };

  return (
    <div className="flex flex-col gap-6">
      {/* New Ticket button */}
      <div className="flex justify-end">
        <button
          onClick={() => setShowModal(true)}
          className="px-6 py-2.5 bg-cyan-900 rounded-[10px] flex items-center gap-2 text-white text-base font-bold leading-6 hover:bg-cyan-800 transition-colors cursor-pointer"
        >
          <Plus size={20} />
          <span>New Ticket</span>
        </button>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
        <StatCard label="Open Tickets" value={openCount} iconBg="bg-blue-100" iconStroke="#3B82F6" Icon={Clock} />
        <StatCard label="In Progress" value={inProgressCount} iconBg="bg-amber-100" iconStroke="#F59E0B" Icon={AlertCircle} />
        <StatCard label="Resolved" value={resolvedCount} iconBg="bg-emerald-100" iconStroke="#10B981" Icon={CheckCircle} />
        <StatCard label="Total Tickets" value={tickets.length} iconBg="bg-purple-100" iconStroke="#8B5CF6" Icon={MessageSquare} />
      </div>

      {/* Search + Filters */}
      <div className="bg-white rounded-2xl outline-[1.1px] outline-gray-200 p-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6">
          <div className="w-full sm:w-64 h-12 relative shrink-0">
            <Search size={20} stroke="#6B7280" className="absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tickets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-full pl-10 pr-4 rounded-[10px] outline-[1.1px] outline-gray-200 text-base placeholder:text-neutral-950/50"
            />
          </div>
          <div className="flex-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <div className="relative flex-1">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full h-11 px-5 rounded-[10px] outline-[1.1px] outline-gray-200 text-base appearance-none bg-white cursor-pointer text-neutral-950/50"
              >
                {statusOptions.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <ChevronDown size={16} stroke="#4A5565" className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
            <div className="relative flex-1">
              <select
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
                className="w-full h-11 px-5 rounded-[10px] outline-[1.1px] outline-gray-200 text-base appearance-none bg-white cursor-pointer text-neutral-950/50"
              >
                {priorityOptions.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
              <ChevronDown size={16} stroke="#4A5565" className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Tickets grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-[360px]">
        {/* Left: ticket list */}
        <div className="flex flex-col gap-4">
          {filtered.length > 0 ? (
            filtered.map((ticket) => (
              <TicketCard
                key={ticket.id}
                ticket={ticket}
                isSelected={selectedId === ticket.id}
                onClick={() => setSelectedId(ticket.id)}
              />
            ))
          ) : (
            <div className="bg-white rounded-2xl outline-[1.1px] outline-gray-200 flex items-center justify-center py-16">
              <p className="text-gray-400 text-sm">No tickets found.</p>
            </div>
          )}
        </div>

        {/* Right: ticket detail */}
        {selectedTicket ? (
          <TicketDetail ticket={selectedTicket} onReply={addReply} />
        ) : (
          <EmptyDetail />
        )}
      </div>

      {/* New Ticket Modal */}
      {showModal && (
        <NewTicketModal onClose={() => setShowModal(false)} onSubmit={createTicket} />
      )}
    </div>
  );
};

export default SupportPage;
