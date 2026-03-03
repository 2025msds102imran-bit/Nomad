import { useState, useRef, useEffect } from "react";
import {
  Search,
  Paperclip,
  Smile,
  Send,
  Phone,
  Video,
  MoreVertical,
  AlertCircle,
  Clock,
  CheckCheck,
  Menu,
  Coins,
  Zap,
  Award,
  CreditCard,
  X,
  CircleAlert,
  Check,
  Crown,
} from "lucide-react";

const contacts = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "HR Manager at TechCorp",
    lastMessage: "Thanks for the candidate profile!",
    time: "2 mins ago",
    unread: 2,
    online: true,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 1,
    name: "Sarah Johnson",
    role: "HR Manager at TechCorp",
    lastMessage: "Thanks for the candidate profile!",
    time: "2 mins ago",
    unread: 2,
    online: true,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 1,
    name: "Sarah Johnson",
    role: "HR Manager at TechCorp",
    lastMessage: "Thanks for the candidate profile!",
    time: "2 mins ago",
    unread: 2,
    online: true,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 1,
    name: "Sarah Johnson",
    role: "HR Manager at TechCorp",
    lastMessage: "Thanks for the candidate profile!",
    time: "2 mins ago",
    unread: 2,
    online: true,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 1,
    name: "Sarah Johnson",
    role: "HR Manager at TechCorp",
    lastMessage: "Thanks for the candidate profile!",
    time: "2 mins ago",
    unread: 2,
    online: true,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 1,
    name: "Sarah Johnson",
    role: "HR Manager at TechCorp",
    lastMessage: "Thanks for the candidate profile!",
    time: "2 mins ago",
    unread: 2,
    online: true,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 1,
    name: "Sarah Johnson",
    role: "HR Manager at TechCorp",
    lastMessage: "Thanks for the candidate profile!",
    time: "2 mins ago",
    unread: 2,
    online: true,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Recruiter at Elite Agency",
    lastMessage: "When can we schedule the interview?",
    time: "15 mins ago",
    unread: 0,
    online: true,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "Hiring Lead at StartupX",
    lastMessage: "Perfect, I will review the CVs",
    time: "1 hour ago",
    unread: 0,
    online: false,
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 4,
    name: "David Martinez",
    role: "Talent Acquisition",
    lastMessage: "Can you send more candidates?",
    time: "3 hours ago",
    unread: 1,
    online: false,
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: 5,
    name: "Lisa Anderson",
    role: "Company Representative",
    lastMessage: "Great! Let's move forward",
    time: "Yesterday",
    unread: 0,
    online: false,
    avatar: "https://randomuser.me/api/portraits/women/90.jpg",
  },
];

const initialMessages = {
  1: [
    { id: 1, sender: "them", text: "Hi! I reviewed the candidate profile you sent", time: "10:30 AM" },
    { id: 2, sender: "me", text: "Great! What do you think?", time: "10:32 AM" },
    { id: 3, sender: "them", text: "Very impressive background. Can we schedule an interview?", time: "10:35 AM" },
  ],
  2: [
    { id: 1, sender: "them", text: "Hello, do you have any candidates for the senior dev role?", time: "9:00 AM" },
    { id: 2, sender: "me", text: "Yes, I have 3 strong candidates. Let me share their profiles.", time: "9:05 AM" },
    { id: 3, sender: "them", text: "When can we schedule the interview?", time: "9:15 AM" },
  ],
  3: [
    { id: 1, sender: "me", text: "Hi Emma, I've sent over 5 CVs for the product manager role.", time: "Yesterday" },
    { id: 2, sender: "them", text: "Perfect, I will review the CVs", time: "Yesterday" },
  ],
  4: [
    { id: 1, sender: "them", text: "We need more frontend developers.", time: "3 hours ago" },
    { id: 2, sender: "me", text: "I'll start sourcing right away.", time: "3 hours ago" },
    { id: 3, sender: "them", text: "Can you send more candidates?", time: "3 hours ago" },
  ],
  5: [
    { id: 1, sender: "me", text: "The offer letter has been sent to the candidate.", time: "Yesterday" },
    { id: 2, sender: "them", text: "Great! Let's move forward", time: "Yesterday" },
  ],
};

const CREDIT_PACKAGES = [
  { id: "50", credits: 50, price: 9.99, bonus: 0, total: 50 },
  { id: "100", credits: 100, price: 17.99, bonus: 10, total: 110 },
  { id: "250", credits: 250, price: 39.99, bonus: 50, total: 300, popular: true },
  { id: "500", credits: 500, price: 69.99, bonus: 100, total: 600 },
];

const BuyCreditsModal = ({ isOpen, onClose, onSelectPackage }) => {
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleConfirm = () => {
    if (!selectedId) return;
    const pkg = CREDIT_PACKAGES.find((p) => p.id === selectedId);
    onSelectPackage?.(pkg);
    setSelectedId(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={onClose}>
      <div
        className="w-full max-w-[896px] max-h-[90vh] overflow-y-auto scrollbar-hide bg-white rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="h-24 px-6 flex justify-between items-center bg-gradient-to-b from-slate-900 to-blue-900 rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="size-12 rounded-2xl bg-white/20 flex items-center justify-center">
              <Coins size={24} stroke="white" />
            </div>
            <div>
              <h2 className="text-white text-2xl font-bold leading-8">Buy Chat Credits</h2>
              <p className="text-white/80 text-sm leading-5">Choose a package to continue chatting</p>
            </div>
          </div>
          <button type="button" onClick={onClose} className="size-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30">
            <X size={20} stroke="white" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 flex flex-col gap-6">
          {/* Alert */}
          <div className="px-4 pt-4 pb-1 bg-gradient-to-b from-blue-50 to-blue-100 rounded-2xl outline outline-1 outline-offset-[-1px] outline-blue-500 flex gap-3">
            <CircleAlert size={20} stroke="#3B82F6" className="shrink-0 mt-0.5" />
            <div>
              <p className="text-blue-800 text-sm font-semibold leading-5">💬 1 Credit = 1 Message</p>
              <p className="text-blue-800 text-xs font-normal leading-5 mt-0.5">
                Each message you send costs 1 credit. Purchase credits now and never miss an important conversation with potential clients!
              </p>
            </div>
          </div>

          {/* Packages */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {CREDIT_PACKAGES.map((pkg) => (
              <button
                key={pkg.id}
                type="button"
                onClick={() => setSelectedId(pkg.id)}
                className={`relative w-full min-w-0 h-80 px-5 pt-5 pb-1 rounded-2xl flex flex-col items-center text-left transition-all outline outline-1 outline-offset-[-1px] ${
                  selectedId === pkg.id
                    ? "ring-2 ring-cyan-900 ring-offset-2"
                    : ""
                } ${
                  pkg.popular
                    ? "bg-gradient-to-b from-amber-100 to-amber-200 outline-amber-500"
                    : "bg-white outline-gray-200"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-24 h-10 px-2 py-1 bg-gradient-to-b from-amber-500 to-amber-600 rounded-full shadow-lg flex items-center justify-center gap-1">
                    <Crown size={8} stroke="white" className="shrink-0" />
                    <span className="text-white text-xs font-bold uppercase tracking-tight">Most Popular</span>
                  </div>
                )}
                <div className="flex flex-col items-center gap-1 mt-1">
                  <Coins size={32} stroke={pkg.popular ? "#D97706" : "#4A90E2"} className="mb-2" />
                  <span className="text-slate-900 text-3xl font-bold">{pkg.credits}</span>
                  <span className="text-gray-500 text-xs font-semibold uppercase tracking-tight">Credits</span>
                </div>
                {pkg.bonus > 0 ? (
                  <div className="mt-2 px-3.5 py-2 bg-emerald-100 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-emerald-500 flex items-center gap-1">
                    <Zap size={12} stroke="#059669" />
                    <span className="text-emerald-800 text-xs font-bold">+{pkg.bonus} Bonus Credits!</span>
                  </div>
                ) : (
                  <div className="mt-2 min-h-[36px]" />
                )}
                <div className="mt-auto pt-3 flex flex-col items-center">
                  <span className="text-slate-900 text-2xl font-bold">${pkg.price.toFixed(2)}</span>
                  <span className="text-gray-500 text-xs">one-time payment</span>
                </div>
                <div className="w-full pt-3.5 mt-2 border-t border-gray-200">
                  <p className="text-center text-xs">
                    <span className="text-gray-500 font-semibold">Total: </span>
                    <span className="text-slate-900 font-semibold">{pkg.total}</span>
                    <span className="text-gray-500 font-semibold"> credits</span>
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Why Buy Credits */}
          <div className="px-5 pt-5 pb-4 bg-gray-50 rounded-2xl flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Award size={20} stroke="#F59E0B" />
              <h3 className="text-slate-900 text-sm font-bold leading-5">Why Buy Credits?</h3>
            </div>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-start gap-2 min-w-[200px]">
                <div className="size-6 rounded-[10px] bg-emerald-100 flex items-center justify-center shrink-0">
                  <Check size={16} stroke="#10B981" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-slate-900 text-xs font-semibold">Unlimited Access</p>
                  <p className="text-gray-500 text-xs">Chat with all companies</p>
                </div>
              </div>
              <div className="flex items-start gap-2 min-w-[200px]">
                <div className="size-6 rounded-[10px] bg-emerald-100 flex items-center justify-center shrink-0">
                  <Check size={16} stroke="#10B981" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-slate-900 text-xs font-semibold">Never Expire</p>
                  <p className="text-gray-500 text-xs">Credits last forever</p>
                </div>
              </div>
              <div className="flex items-start gap-2 min-w-[200px]">
                <div className="size-6 rounded-[10px] bg-emerald-100 flex items-center justify-center shrink-0">
                  <Check size={16} stroke="#10B981" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-slate-900 text-xs font-semibold">Close More Deals</p>
                  <p className="text-gray-500 text-xs">Respond instantly</p>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleConfirm}
              disabled={!selectedId}
              className={`flex-1 h-14 rounded-2xl bg-gradient-to-b from-slate-900 to-blue-900 text-white text-base font-bold flex items-center justify-center gap-2 ${
                !selectedId ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <CreditCard size={20} stroke="white" /> Select a Package
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-28 h-14 rounded-2xl bg-gray-100 outline outline-1 outline-offset-[-1px] outline-gray-200 text-slate-900 text-base font-semibold"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ChatPage = () => {
  const [activeContact, setActiveContact] = useState(1);
  const [messages, setMessages] = useState(initialMessages);
  const [searchQuery, setSearchQuery] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [credits] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showBuyCreditsModal, setShowBuyCreditsModal] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages, activeContact]);

  const currentContact = contacts.find((c) => c.id === activeContact);
  const currentMessages = messages[activeContact] || [];

  const filteredContacts = contacts.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSend = () => {
    if (!newMessage.trim() || credits === 0) return;
    const msg = {
      id: Date.now(),
      sender: "me",
      text: newMessage.trim(),
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages((prev) => ({
      ...prev,
      [activeContact]: [...(prev[activeContact] || []), msg],
    }));
    setNewMessage("");
  };

  const handleContactSelect = (id) => {
    setActiveContact(id);
    setShowSidebar(false);
  };

  return (
    <div className="flex flex-col flex-1 min-h-0 bg-white overflow-hidden">
      <div className="flex flex-1 overflow-hidden relative">
        {/* Mobile overlay */}
        {showSidebar && (
          <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setShowSidebar(false)} />
        )}
        {/* Left sidebar */}
        <div className={`fixed inset-y-0 left-0 z-50 w-80 sm:w-96 bg-white border-r border-gray-200 flex flex-col shrink-0 min-h-0 transform transition-transform duration-200 md:static md:translate-x-0 ${showSidebar ? 'translate-x-0' : '-translate-x-full'}`}>
          {/* Messages header */}
          <div className="px-4 pt-4 pb-1 border-b border-gray-200 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h2 className="text-slate-900 text-xl font-bold leading-7">Messages</h2>
              <button className="h-9 pl-3 pr-2 bg-linear-to-b from-slate-900 to-blue-900 rounded-[10px] flex items-center gap-2">
                <Clock size={16} className="text-white" />
                <span className="text-white text-sm font-bold leading-5">0</span>
              </button>
            </div>

            {/* No credits banner */}
            <button
              onClick={() => setShowBuyCreditsModal(true)}
              className="w-full pl-4 pr-3 pt-3 pb-3 bg-linear-to-b from-red-100 to-red-200 rounded-[10px] border-l-4 border-red-500 flex items-start gap-2 text-left hover:opacity-90 transition"
            >
              <AlertCircle size={16} className="text-red-600 mt-0.5 shrink-0" />
              <div className="flex flex-col gap-1">
                <span className="text-red-800 text-xs font-semibold leading-4">No Credits Available</span>
                <span className="text-red-900 text-xs font-normal leading-4">Purchase credits to send messages.</span>
              </div>
            </button>

            {/* Search */}
            <div className="relative mb-3">
              <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search contacts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-11 pl-10 pr-4 py-2.5 rounded-[10px] outline-[1.3px] outline-gray-200 text-sm placeholder:text-neutral-950/50"
              />
            </div>
          </div>

          {/* Contact list */}
          <div className="flex-1 overflow-y-auto">
            {filteredContacts.map((contact) => (
              <button
                key={contact.id}
                onClick={() => handleContactSelect(contact.id)}
                className={`w-full px-4 pt-4 pb-1 border-b border-gray-100 text-left transition-colors ${
                  activeContact === contact.id ? "bg-gray-50" : "hover:bg-gray-50/50"
                }`}
              >
                <div className="flex gap-3">
                  {/* Avatar */}
                  <div className="relative shrink-0">
                    <img
                      src={contact.avatar}
                      alt={contact.name}
                      className="size-12 rounded-full object-cover"
                    />
                    {contact.online && (
                      <div className="absolute bottom-0 right-0 size-3.5 bg-emerald-500 rounded-full border-2 border-white" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-900 text-sm font-semibold leading-5 truncate">
                        {contact.name}
                      </span>
                      <span className="text-gray-500 text-xs font-normal leading-4 shrink-0 ml-2">
                        {contact.time}
                      </span>
                    </div>
                    <p className="text-gray-500 text-xs font-normal leading-4 truncate">{contact.role}</p>
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-gray-600 text-sm font-normal leading-5 truncate">{contact.lastMessage}</p>
                      {contact.unread > 0 && (
                        <span className="size-5 bg-cyan-900 rounded-full flex justify-center items-center shrink-0 ml-2">
                          <span className="text-white text-xs font-bold leading-4">{contact.unread}</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right chat area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Chat header */}
          <div className="px-4 h-20 border-b border-gray-200 flex justify-between items-center shrink-0">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowSidebar(true)}
                className="md:hidden size-9 rounded-[10px] flex items-center justify-center hover:bg-gray-100 transition-colors shrink-0"
              >
                <Menu size={20} className="text-gray-500" />
              </button>
              <div className="relative">
                <img
                  src={currentContact?.avatar}
                  alt={currentContact?.name}
                  className="size-10 rounded-full object-cover"
                />
                {currentContact?.online && (
                  <div className="absolute bottom-0 right-0 size-3 bg-emerald-500 rounded-full border-2 border-white" />
                )}
              </div>
              <div>
                <h3 className="text-slate-900 text-sm font-semibold leading-5">{currentContact?.name}</h3>
                <p className="text-gray-500 text-xs font-normal leading-4">
                  {currentContact?.online ? "Online" : "Offline"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="size-9 rounded-[10px] flex items-center justify-center hover:bg-gray-100 transition-colors">
                <Phone size={20} className="text-gray-500" />
              </button>
              <button className="size-9 rounded-[10px] flex items-center justify-center hover:bg-gray-100 transition-colors">
                <Video size={20} className="text-gray-500" />
              </button>
              <button className="size-9 rounded-[10px] flex items-center justify-center hover:bg-gray-100 transition-colors">
                <MoreVertical size={20} className="text-gray-500" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 px-4 pt-4 bg-gray-50 overflow-y-auto flex flex-col gap-4">
            {currentMessages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-md px-4 py-2.5 rounded-2xl flex flex-col gap-1 ${
                    msg.sender === "me"
                      ? "bg-cyan-900 text-white"
                      : "bg-white outline-[1.3px] outline-gray-200 text-slate-900"
                  }`}
                >
                  <p className="text-sm font-normal leading-5">{msg.text}</p>
                  <div className="flex justify-end items-center gap-1">
                    <span
                      className={`text-xs font-normal leading-4 ${
                        msg.sender === "me" ? "text-white/70" : "text-gray-500"
                      }`}
                    >
                      {msg.time}
                    </span>
                    {msg.sender === "me" && <CheckCheck size={14} className="text-emerald-500" />}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Message input */}
          <div className="px-4 pt-4 pb-4 bg-white border-t border-gray-200 flex flex-col gap-3 shrink-0">
            {/* Credits warning */}
            <div className="border-b border-gray-100 pb-2 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-amber-500" />
                <span className="text-red-500 text-xs font-bold leading-4">No credits available</span>
              </div>
              <button
                onClick={() => setShowBuyCreditsModal(true)}
                className="text-blue-500 text-xs font-semibold leading-4 cursor-pointer hover:underline"
              >
                Buy Credits
              </button>
            </div>

            {/* Input area */}
            <div className="flex items-center gap-2">
              <button className="size-9 rounded-[10px] flex items-center justify-center hover:bg-gray-100 transition-colors shrink-0">
                <Paperclip size={20} className="text-gray-500" />
              </button>
              <input
                type="text"
                placeholder={credits > 0 ? "Type your message..." : "Purchase credits to send messages..."}
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 h-12 px-4 py-3 rounded-[10px] outline-[1.3px] outline-gray-200 text-sm placeholder:text-neutral-950/50"
              />
              <button className="size-9 rounded-[10px] flex items-center justify-center hover:bg-gray-100 transition-colors shrink-0">
                <Smile size={20} className="text-gray-500" />
              </button>
              <button
                onClick={handleSend}
                disabled={credits === 0 || !newMessage.trim()}
                className={`w-12 h-11 rounded-[10px] flex items-center justify-center shrink-0 transition-colors ${
                  credits > 0 && newMessage.trim()
                    ? "bg-cyan-900 hover:bg-cyan-800 cursor-pointer"
                    : "bg-cyan-900 opacity-50 cursor-not-allowed"
                }`}
              >
                <Send size={20} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <BuyCreditsModal
        isOpen={showBuyCreditsModal}
        onClose={() => setShowBuyCreditsModal(false)}
        onSelectPackage={(pkg) => {
          // TODO: API call to purchase credits
          setShowBuyCreditsModal(false);
        }}
      />
    </div>
  );
};

export default ChatPage;
