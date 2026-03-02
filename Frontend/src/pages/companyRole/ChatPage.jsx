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

const ChatPage = () => {
  const [activeContact, setActiveContact] = useState(1);
  const [messages, setMessages] = useState(initialMessages);
  const [searchQuery, setSearchQuery] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [credits] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);
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
            <div className="pl-4 pr-3 pt-3 pb-3 bg-linear-to-b from-red-100 to-red-200 rounded-[10px] border-l-4 border-red-500 flex items-start gap-2">
              <AlertCircle size={16} className="text-red-600 mt-0.5 shrink-0" />
              <div className="flex flex-col gap-1">
                <span className="text-red-800 text-xs font-semibold leading-4">No Credits Available</span>
                <span className="text-red-900 text-xs font-normal leading-4">Purchase credits to send messages.</span>
              </div>
            </div>

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
              <button className="text-blue-500 text-xs font-semibold leading-4 cursor-pointer hover:underline">
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
    </div>
  );
};

export default ChatPage;
