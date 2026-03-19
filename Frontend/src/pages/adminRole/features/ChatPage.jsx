import { useState, useCallback } from "react";
import { chatContacts, chatMessages } from "../../../data/dummyData";

const getTimeStr = () => {
  const d = new Date();
  return d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
};

function Avatar({ name, size = 12 }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
  const px = size * 4;
  return (
    <div
      className="rounded-full bg-cyan-900/20 flex items-center justify-center text-cyan-900 font-semibold shrink-0"
      style={{ width: px, height: px, fontSize: Math.max(10, px * 0.4) }}
    >
      {initials}
    </div>
  );
}

export default function ChatPage() {
  const [selectedContact, setSelectedContact] = useState(chatContacts[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [messagesByContact, setMessagesByContact] = useState(() => ({ ...chatMessages }));

  const messages = (messagesByContact[selectedContact?.id] || []);
  const nextId = messages.length > 0 ? Math.max(...messages.map((m) => m.id)) + 1 : 1;

  const handleSend = useCallback(() => {
    const text = messageInput.trim();
    if (!text || !selectedContact) return;
    setMessagesByContact((prev) => {
      const list = prev[selectedContact.id] || [];
      return {
        ...prev,
        [selectedContact.id]: [
          ...list,
          { id: nextId, text, time: getTimeStr(), isMe: true },
        ],
      };
    });
    setMessageInput("");
  }, [messageInput, selectedContact, nextId]);
  const filteredContacts = chatContacts.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      data-layer="Main Content"
      className="MainContent w-full self-stretch flex flex-col justify-start items-center overflow-hidden bg-gray-50 flex-1"
    >
      {/* Header */}
      <div data-layer="Header" className="Header w-full h-auto min-h-24 px-4 sm:px-8 pt-4 pb-[1.30px] bg-white border-b-[1.30px] border-gray-200 flex flex-col justify-start items-start shrink-0">
        <div data-layer="Container" className="Container self-stretch h-auto min-h-12 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4">
          <div data-layer="Container" className="Container w-full sm:w-72 h-auto flex justify-start items-center">
            <div data-layer="Container" className="Container w-full flex-1 h-auto flex flex-col justify-start items-start gap-0.5">
              <div data-layer="Heading 2" className="Heading2 self-stretch h-7 relative">
                <div data-layer="Chat" className="Chat left-0 top-[-0.41px] absolute justify-start text-slate-900 text-lg font-semibold font-['Inter'] leading-7">Chat</div>
              </div>
              <div data-layer="Paragraph" className="Paragraph self-stretch h-5 relative">
                <div data-layer="Manage your conversation with company" className="ManageYourConversationWithCompany left-0 top-[0.30px] absolute justify-start text-gray-600 text-sm font-normal font-['Inter'] leading-5">Manage your conversation with company</div>
              </div>
            </div>
          </div>
          <div data-layer="Container" className="Container w-full sm:w-40 h-10 mt-4 sm:mt-0 relative flex justify-start sm:justify-end">
            <div data-layer="Button" className="Button size-9 relative sm:absolute sm:left-0 sm:top-[1.30px] rounded-[10px] mr-3 sm:mr-0">
              <div data-svg-wrapper data-layer="Icon" className="Icon left-[8px] top-[8px] absolute">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_905_87)">
                    <path d="M8.54883 17.4834C8.69498 17.7365 8.90517 17.9467 9.15829 18.0928C9.41141 18.2389 9.69853 18.3159 9.9908 18.3159C10.2831 18.3159 10.5702 18.2389 10.8233 18.0928C11.0764 17.9467 11.2866 17.7365 11.4328 17.4834" stroke="#4A5565" strokeWidth="1.6651" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2.71557 12.7596C2.60681 12.8788 2.53503 13.027 2.50897 13.1863C2.48292 13.3455 2.5037 13.5089 2.56879 13.6566C2.63389 13.8042 2.74049 13.9298 2.87563 14.018C3.01077 14.1062 3.16862 14.1532 3.32999 14.1533H16.6508C16.8121 14.1533 16.97 14.1065 17.1052 14.0185C17.2405 13.9305 17.3472 13.8051 17.4125 13.6575C17.4777 13.51 17.4987 13.3466 17.4729 13.1874C17.447 13.0281 17.3755 12.8798 17.2669 12.7604C16.1596 11.619 14.9857 10.406 14.9857 6.66034C14.9857 5.3355 14.4594 4.06493 13.5226 3.12813C12.5858 2.19133 11.3152 1.66504 9.99039 1.66504C8.66555 1.66504 7.39498 2.19133 6.45818 3.12813C5.52138 4.06493 4.99509 5.3355 4.99509 6.66034C4.99509 10.406 3.82036 11.619 2.71557 12.7596Z" stroke="#4A5565" strokeWidth="1.6651" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_905_87">
                      <rect width="19.9812" height="19.9812" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div data-svg-wrapper data-layer="Text" className="Text left-[23.99px] top-[3.99px] absolute">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 3.99826C0 1.79008 1.79008 0 3.99826 0C6.20644 0 7.99653 1.79008 7.99653 3.99826C7.99653 6.20644 6.20644 7.99653 3.99826 7.99653C1.79008 7.99653 0 6.20644 0 3.99826Z" fill="#4A90E2" />
                </svg>
              </div>
            </div>
            <div data-layer="Button" className="Button w-28 h-10 pl-4 relative sm:absolute sm:left-[51.97px] sm:top-0 bg-white rounded-[10px] outline outline-[1.30px] outline-offset-[-1.30px] outline-gray-200 flex justify-start items-center gap-2">
              <div data-svg-wrapper data-layer="Icon" className="Icon relative">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_905_92)">
                    <path d="M3.33203 5.33105L7.33029 9.32932" stroke="#4A5565" strokeWidth="1.33275" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2.66602 9.32943L6.66428 5.33116L7.99703 3.33203" stroke="#4A5565" strokeWidth="1.33275" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1.33203 3.33203H9.32856" stroke="#4A5565" strokeWidth="1.33275" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4.66406 1.33301H5.33044" stroke="#4A5565" strokeWidth="1.33275" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14.6599 14.6599L11.328 7.99609L7.99609 14.6599" stroke="#4A5565" strokeWidth="1.33275" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9.33008 11.9951H13.3283" stroke="#4A5565" strokeWidth="1.33275" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_905_92">
                      <rect width="15.9931" height="15.9931" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div data-layer="Text" className="Text w-6 h-5 relative">
                <div data-layer="Eng" className="Eng left-0 top-[0.30px] absolute text-center justify-start text-gray-600 text-sm font-medium font-['Inter'] leading-5">Eng</div>
              </div>
              <div data-svg-wrapper data-layer="Icon" className="Icon relative">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.6613 5.99707L7.99669 10.6617L3.33203 5.99707" stroke="#4A5565" strokeWidth="1.33275" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        data-layer="Container"
        className="Container w-full self-stretch flex-1 min-h-[500px] relative bg-white flex flex-col md:flex-row mx-auto overflow-hidden shrink-0"
      >
        {/* Left sidebar - Contacts */}
        <div className="Container w-full md:w-80 lg:w-96 flex-1 md:flex-none border-r border-gray-200 flex flex-col shrink-0 min-h-0 md:h-full">
          <div className="px-4 pt-4 pb-3 border-b border-gray-200 flex flex-col gap-4">
            <h2 className="text-xl font-bold text-slate-900">Messages</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Search contacts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-80 h-11 pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-900/20 focus:border-cyan-900"
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9.16 15.82a6.32 6.32 0 100-12.64 6.32 6.32 0 000 12.64z" />
                  <path d="M17.48 17.48l-3.58-3.58" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto flex flex-col">
            {filteredContacts.map((contact) => (
              <button
                key={contact.id}
                onClick={() => setSelectedContact(contact)}
                className={`w-full px-4 py-4 text-left border-b border-gray-100 flex items-start gap-3 hover:bg-gray-50 transition-colors ${selectedContact?.id === contact.id ? "bg-gray-50" : ""
                  }`}
              >
                <Avatar name={contact.name} size={12} />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-sm font-semibold text-slate-900 truncate">
                      {contact.name}
                    </span>
                    <span className="text-xs text-gray-500 shrink-0">
                      {contact.time}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 truncate">{contact.role}</p>
                  <div className="flex justify-between items-center gap-1">
                    <p className="text-sm text-gray-600 truncate flex-1">
                      {contact.lastMessage}
                    </p>
                    {contact.unread > 0 && (
                      <span className="size-5 bg-cyan-900 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">
                        {contact.unread}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right panel - Chat */}
        <div className="flex-1 flex flex-col min-w-0 h-[500px] md:h-full shrink-0 md:shrink border-t md:border-t-0 border-gray-200">
          {/* Chat header */}
          <div className="h-20 px-4 border-b border-gray-200 flex justify-between items-center shrink-0">
            <div className="flex items-center gap-3">
              <Avatar name={selectedContact?.name} size={10} />
              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  {selectedContact?.name}
                </h3>
                <p className="text-xs text-gray-500">
                  {selectedContact?.online ? "Online" : "Offline"}
                </p>
              </div>
              {selectedContact?.online && (
                <span className="size-2 rounded-full bg-emerald-500" />
              )}
            </div>
            <button className="p-2 rounded-lg hover:bg-gray-100">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#667085" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="10" cy="4.16" r="1.25" />
                <circle cx="10" cy="10" r="1.25" />
                <circle cx="10" cy="15.84" r="1.25" />
              </svg>
            </button>
          </div>

          {/* Messages area */}
          <div className="flex-1 px-4 pt-4 bg-gray-50 overflow-y-auto flex flex-col gap-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.isMe ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[24rem] px-4 py-3 rounded-2xl ${msg.isMe
                      ? "bg-cyan-900 text-white"
                      : "bg-white border border-gray-200"
                    }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  <div className={`flex justify-end items-center gap-1 mt-1 ${msg.isMe ? "text-white/70" : "text-gray-500"}`}>
                    <span className="text-xs">{msg.time}</span>
                    {msg.isMe && (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#10B981" strokeWidth="1.17" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10.49 3.5L4.08 9.91L1.17 6.99" />
                        <path d="M12.82 5.83L8.45 10.2l-.87-.87" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Message input */}
          <div className="h-20 px-4 pt-4 bg-white border-t border-gray-200 shrink-0">
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg hover:bg-gray-100 shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#667085" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11.02 16.86l6.46-6.62" />
                  <path d="M13.32 5l-7 7.15a1.18 1.18 0 000 1.18c.31.31.73.48 1.17.48.45 0 .88-.18 1.18-.48l7-7.15a2.5 2.5 0 10-3.54-3.54l-7 7.15-2.91-2.91" />
                </svg>
              </button>
              <input
                type="text"
                placeholder="Type your message..."
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 h-12 px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-900/20 focus:border-cyan-900"
              />
              <button className="p-2 rounded-lg hover:bg-gray-100 shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#667085" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="10" cy="10" r="8.33" />
                  <path d="M6.66 11.66c0 0 1.25 1.67 3.33 1.67 2.08 0 3.33-1.67 3.33-1.67" />
                  <path d="M7.5 7.5h.01" />
                  <path d="M12.5 7.5h.01" />
                </svg>
              </button>
              <button
                type="button"
                onClick={handleSend}
                disabled={!messageInput.trim()}
                className="h-11 w-12 flex items-center justify-center bg-cyan-900 rounded-lg hover:opacity-90 disabled:opacity-50 shrink-0"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="white" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12.1 18.05c.03.08.09.14.16.19.07.05.15.07.24.07.08 0 .17-.02.24-.08.07-.05.12-.12.14-.19l5.41-15.82c.03-.07.04-.15.02-.23a.47.47 0 00-.11-.2.47.47 0 00-.2-.11.46.46 0 00-.23.02l-15.82 5.41a.47.47 0 00-.18.14.47.47 0 00-.08.24c0 .09.03.17.08.24.05.07.12.12.2.16l6.6 2.65c.21.08.4.21.55.39.15.16.27.37.31.58l2.65 6.6z" />
                  <path d="M18.2 1.79l-9.11 9.11" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
