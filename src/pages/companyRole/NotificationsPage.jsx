import { useState, useEffect } from "react";
import { Bell, Calendar, CreditCard, Briefcase, FileText, Clock, X } from "lucide-react";
import { useNotifications } from "../../context/NotificationContext";

const notificationsData = [
  { id: 1, type: "schedule", message: "You have schedule a job interview.", time: "11/29/2025 5:22:02 AM", read: false, color: "amber" },
  { id: 2, type: "subscription", message: "You have purchased a subscription plan.", time: "11/29/2025 4:58:33 AM", read: false, color: "emerald" },
  { id: 3, type: "applied", message: "You have applied for an employee position.", time: "11/29/2025 4:53:53 AM", read: false, color: "indigo" },
  { id: 4, type: "applied", message: "You have applied for an employee position.", time: "11/29/2025 4:52:15 AM", read: true },
  { id: 5, type: "schedule", message: "You have schedule a job interview.", time: "11/28/2025 6:25:52 AM", read: true },
  { id: 6, type: "schedule", message: "You have schedule a job interview.", time: "11/28/2025 6:25:36 AM", read: true },
  { id: 7, type: "schedule", message: "You have schedule a job interview.", time: "11/28/2025 6:25:34 AM", read: true },
  { id: 8, type: "updated_job", message: "You have updated the job.", time: "11/27/2025 5:59:59 AM", read: true },
  { id: 9, type: "updated_job", message: "You have updated the job.", time: "11/27/2025 5:59:44 AM", read: true },
  { id: 10, type: "subscription", message: "You have purchased a subscription plan.", time: "11/27/2025 5:16:57 AM", read: true },
  { id: 11, type: "subscription", message: "You have purchased a subscription plan.", time: "11/27/2025 4:26:02 AM", read: true },
  { id: 12, type: "subscription", message: "You have purchased a subscription plan.", time: "11/27/2025 4:05:35 AM", read: true },
  { id: 13, type: "meeting_status", message: "You have updated the meeting status.", time: "11/21/2025 6:31:31 AM", read: true },
  { id: 14, type: "approved_interview", message: "You approved a candidate interview for a job.", time: "11/21/2025 6:30:58 AM", read: true },
  { id: 15, type: "meeting_status", message: "You have updated the meeting status.", time: "11/20/2025 3:08:38 PM", read: true },
  { id: 16, type: "meeting_status", message: "You have updated the meeting status.", time: "11/20/2025 3:08:29 PM", read: true },
  { id: 17, type: "approved_interview", message: "You approved a candidate interview for a job.", time: "11/20/2025 3:06:30 PM", read: true },
  { id: 18, type: "approved_interview", message: "You approved a candidate interview for a job.", time: "11/20/2025 1:59:59 PM", read: true },
  { id: 19, type: "approved_interview", message: "You approved a candidate interview for a job.", time: "11/20/2025 1:57:55 PM", read: true },
  { id: 20, type: "approved_interview", message: "You approved a candidate interview for a job.", time: "11/20/2025 1:56:50 PM", read: true },
  { id: 21, type: "approved_interview", message: "You approved a candidate interview for a job.", time: "11/20/2025 1:49:47 PM", read: true },
  { id: 22, type: "approved_interview", message: "You approved a candidate interview for a job.", time: "11/20/2025 1:47:15 PM", read: true },
  { id: 23, type: "approved_interview", message: "You approved a candidate interview for a job.", time: "11/20/2025 1:44:11 PM", read: true },
  { id: 24, type: "approved_interview", message: "You approved a candidate interview for a job.", time: "11/20/2025 1:41:59 PM", read: true },
  { id: 25, type: "approved_interview", message: "You approved a candidate interview for a job.", time: "11/20/2025 1:37:21 PM", read: true },
  { id: 26, type: "approved_interview", message: "You approved a candidate interview for a job.", time: "11/20/2025 1:34:41 PM", read: true },
  { id: 27, type: "approved_interview", message: "You approved a candidate interview for a job.", time: "11/20/2025 1:30:26 PM", read: true },
  { id: 28, type: "meeting_status", message: "You have updated the meeting status.", time: "11/20/2025 1:20:10 PM", read: true },
  { id: 29, type: "approved_interview", message: "You approved a candidate interview for a job.", time: "11/20/2025 1:19:31 PM", read: true },
  { id: 30, type: "meeting_status", message: "You have updated the meeting status.", time: "11/20/2025 1:08:24 PM", read: true },
  { id: 31, type: "approved_interview", message: "You approved a candidate interview for a job.", time: "11/20/2025 12:27:21 PM", read: true },
  { id: 32, type: "approved_interview", message: "You approved a candidate interview for a job.", time: "11/20/2025 12:11:03 PM", read: true },
  { id: 33, type: "approved_interview", message: "You approved a candidate interview for a job.", time: "11/20/2025 12:09:36 PM", read: true },
  { id: 34, type: "approved_interview", message: "You approved a candidate interview for a job.", time: "11/20/2025 12:09:34 PM", read: true },
  { id: 35, type: "approved_interview", message: "You approved a candidate interview for a job.", time: "11/20/2025 12:09:04 PM", read: true },
  { id: 36, type: "approved_interview", message: "You approved a candidate interview for a job.", time: "11/20/2025 12:07:43 PM", read: true },
  { id: 37, type: "approved_interview", message: "You approved a candidate interview for a job.", time: "11/20/2025 11:21:04 AM", read: true },
  { id: 38, type: "approved_interview", message: "You approved a candidate interview for a job.", time: "11/20/2025 10:51:39 AM", read: true },
  { id: 39, type: "recruiter_meeting", message: "The recruiter company has updated the meeting status.", time: "11/18/2025 12:50:10 PM", read: true },
  { id: 40, type: "schedule", message: "You have schedule a job interview.", time: "11/18/2025 12:49:56 PM", read: true },
  { id: 41, type: "schedule", message: "You have schedule a job interview.", time: "11/18/2025 12:48:43 PM", read: true },
  { id: 42, type: "approved_interview", message: "You approved a candidate interview for a job.", time: "11/18/2025 12:42:29 PM", read: true },
  { id: 43, type: "approved_interview", message: "You approved a candidate interview for a job.", time: "11/18/2025 12:40:57 PM", read: true },
  { id: 44, type: "recruiter_meeting", message: "The recruiter company has updated the meeting status.", time: "11/18/2025 12:40:13 PM", read: true },
  { id: 45, type: "recruiter_meeting", message: "The recruiter company has updated the meeting status.", time: "11/18/2025 12:40:09 PM", read: true },
  { id: 46, type: "schedule", message: "You have schedule a job interview.", time: "11/18/2025 12:39:50 PM", read: true },
  { id: 47, type: "schedule", message: "You have schedule a job interview.", time: "11/18/2025 12:39:50 PM", read: true },
  { id: 48, type: "updated_job", message: "You have updated the job.", time: "11/18/2025 12:39:23 PM", read: true },
  { id: 49, type: "approved_interview", message: "You approved a candidate interview for a job.", time: "11/18/2025 12:36:26 PM", read: true },
  { id: 50, type: "recruiter_meeting", message: "The recruiter company has updated the meeting status.", time: "11/18/2025 12:35:47 PM", read: true },
  { id: 51, type: "schedule", message: "You have schedule a job interview.", time: "11/18/2025 12:35:34 PM", read: true },
  { id: 52, type: "schedule", message: "You have schedule a job interview.", time: "11/18/2025 12:35:31 PM", read: true },
  { id: 53, type: "schedule", message: "You have schedule a job interview.", time: "11/18/2025 12:35:27 PM", read: true },
  { id: 54, type: "schedule", message: "You have schedule a job interview.", time: "11/18/2025 12:33:50 PM", read: true },
  { id: 55, type: "schedule", message: "You have schedule a job interview.", time: "11/18/2025 12:31:58 PM", read: true },
  { id: 56, type: "approved_interview", message: "You approved a candidate interview for a job.", time: "11/18/2025 12:24:25 PM", read: true },
  { id: 57, type: "recruiter_meeting", message: "The recruiter company has updated the meeting status.", time: "11/18/2025 12:23:26 PM", read: true },
  { id: 58, type: "schedule", message: "You have schedule a job interview.", time: "11/18/2025 12:22:32 PM", read: true },
  { id: 59, type: "meeting_status", message: "You have updated the meeting status.", time: "11/18/2025 7:38:46 AM", read: true },
  { id: 60, type: "approved_interview", message: "You approved a candidate interview for a job.", time: "11/18/2025 7:28:33 AM", read: true },
  { id: 61, type: "recruiter_meeting", message: "The recruiter company has updated the meeting status.", time: "11/18/2025 7:28:16 AM", read: true },
  { id: 62, type: "schedule", message: "You have schedule a job interview.", time: "11/18/2025 7:28:02 AM", read: true },
  { id: 63, type: "approved_interview", message: "You approved a candidate interview for a job.", time: "11/18/2025 7:11:32 AM", read: true },
  { id: 64, type: "recruiter_meeting", message: "The recruiter company has updated the meeting status.", time: "11/18/2025 7:10:52 AM", read: true },
  { id: 65, type: "schedule", message: "You have schedule a job interview.", time: "11/18/2025 7:09:09 AM", read: true },
  { id: 66, type: "updated_schedule", message: "You have updated a schedule for job interview.", time: "11/18/2025 7:08:26 AM", read: true },
  { id: 67, type: "approved_interview", message: "You approved a candidate interview for a job.", time: "11/14/2025 6:09:03 AM", read: true },
  { id: 68, type: "approved_interview", message: "You approved a candidate interview for a job.", time: "11/14/2025 5:17:27 AM", read: true },
  { id: 69, type: "updated_schedule", message: "You have updated a schedule for job interview.", time: "11/14/2025 5:17:08 AM", read: true },
  { id: 70, type: "approved_interview", message: "You approved a candidate interview for a job.", time: "11/14/2025 5:14:15 AM", read: true },
  { id: 71, type: "approved_interview", message: "You approved a candidate interview for a job.", time: "11/14/2025 5:14:02 AM", read: true },
  { id: 72, type: "approved_interview", message: "You approved a candidate interview for a job.", time: "11/14/2025 5:12:46 AM", read: true },
  { id: 73, type: "approved_interview", message: "You approved a candidate interview for a job.", time: "11/14/2025 5:09:54 AM", read: true },
  { id: 74, type: "approved_interview", message: "You approved a candidate interview for a job.", time: "11/14/2025 5:09:19 AM", read: true },
  { id: 75, type: "approved_interview", message: "You approved a candidate interview for a job.", time: "11/14/2025 5:07:59 AM", read: true },
  { id: 76, type: "approved_interview", message: "You approved a candidate interview for a job.", time: "11/14/2025 5:07:20 AM", read: true },
  { id: 77, type: "approved_interview", message: "You approved a candidate interview for a job.", time: "11/14/2025 4:59:44 AM", read: true },
  { id: 78, type: "approved_interview", message: "You approved a candidate interview for a job.", time: "11/14/2025 4:57:52 AM", read: true },
  { id: 79, type: "subscription", message: "You have purchased a subscription plan.", time: "11/13/2025 6:06:28 AM", read: true },
  { id: 80, type: "subscription", message: "You have purchased a subscription plan.", time: "11/12/2025 6:52:58 AM", read: true },
  { id: 81, type: "subscription", message: "You have purchased a subscription plan.", time: "11/12/2025 5:48:11 AM", read: true },
  { id: 82, type: "subscription", message: "You have purchased a subscription plan.", time: "11/12/2025 5:38:41 AM", read: true },
  { id: 83, type: "applied", message: "You have applied for an employee position.", time: "11/12/2025 5:38:12 AM", read: true },
];

const typeConfig = {
  schedule: {
    Icon: Calendar,
    unreadBorder: "outline-amber-500",
    unreadIconBorder: "outline-amber-500",
    unreadIconStroke: "#F59E0B",
    unreadDotColor: "bg-amber-500",
    readBg: "bg-gradient-to-b from-blue-500 to-blue-900",
    readIconStroke: "white",
    isGradientRead: true,
  },
  subscription: {
    Icon: CreditCard,
    unreadBorder: "outline-emerald-500",
    unreadIconBorder: "outline-emerald-500",
    unreadIconStroke: "#10B981",
    unreadDotColor: "bg-emerald-500",
    readBg: "bg-gradient-to-b from-blue-900 to-slate-900",
    readIconStroke: "white",
    isGradientRead: true,
  },
  applied: {
    Icon: Briefcase,
    unreadBorder: "outline-indigo-500",
    unreadIconBorder: "outline-indigo-500",
    unreadIconStroke: "#6366F1",
    unreadDotColor: "bg-indigo-500",
    readBg: "bg-gradient-to-b from-blue-500 to-blue-900",
    readIconStroke: "white",
    isGradientRead: true,
  },
  updated_job: {
    Icon: FileText,
    readBg: "",
    readIconBorder: "outline-cyan-900",
    readIconStroke: "#2A4870",
    isGradientRead: false,
  },
  meeting_status: {
    Icon: FileText,
    readBg: "bg-gradient-to-b from-blue-900 to-blue-500",
    readIconStroke: "white",
    isGradientRead: true,
  },
  approved_interview: {
    Icon: Calendar,
    readBg: "bg-gradient-to-b from-blue-500 to-blue-900",
    readIconStroke: "white",
    isGradientRead: true,
  },
  recruiter_meeting: {
    Icon: FileText,
    readBg: "bg-gradient-to-b from-blue-900 to-blue-500",
    readIconStroke: "white",
    isGradientRead: true,
  },
  updated_schedule: {
    Icon: Calendar,
    readBg: "bg-gradient-to-b from-blue-500 to-blue-900",
    readIconStroke: "white",
    isGradientRead: true,
  },
};

const NotificationCard = ({ notification, onToggleRead, onDelete }) => {
  const config = typeConfig[notification.type];
  const IconComponent = config.Icon;
  const isUnread = !notification.read;

  const cardBorder = isUnread
    ? config.unreadBorder
    : "outline-gray-100";

  const cardShadow = isUnread
    ? "shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.10)] shadow-md"
    : "";

  const iconWrapperClass = isUnread
    ? `rounded-2xl shadow-lg outline outline-1 outline-offset-[-1px] ${config.unreadIconBorder} flex items-center justify-center`
    : config.isGradientRead
      ? `${config.readBg} rounded-2xl shadow-lg flex items-center justify-center`
      : `rounded-2xl shadow-lg outline outline-1 outline-offset-[-1px] ${config.readIconBorder || "outline-cyan-900"} flex items-center justify-center`;

  const iconStroke = isUnread ? config.unreadIconStroke : config.readIconStroke || "#2A4870";

  return (
    <div
      onClick={() => onToggleRead(notification.id)}
      className={`self-stretch px-4 sm:px-6 pt-4 sm:pt-6 pb-4 sm:pb-5 bg-white rounded-2xl outline-[1.3px] outline-offset-[-1.3px] ${cardBorder} ${cardShadow} flex items-start gap-3 sm:gap-4 overflow-hidden cursor-pointer hover:bg-gray-50/50 transition-all group`}
    >
      <div className={`size-12 shrink-0 ${iconWrapperClass}`}>
        <IconComponent size={24} stroke={iconStroke} strokeWidth={2} fill="none" />
      </div>
      <div className="flex-1 flex flex-col gap-2 min-w-0">
        <div className="flex items-center justify-between">
          <span className={`text-sm leading-6 ${isUnread ? "text-slate-900 font-medium" : "text-gray-600 font-normal"}`}>
            {notification.message}
          </span>
          <div className="flex items-center gap-2 shrink-0 ml-2">
            {isUnread && (
              <span className={`size-2.5 rounded-full ${config.unreadDotColor}`} />
            )}
            <button
              onClick={(e) => { e.stopPropagation(); onDelete(notification.id); }}
              className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-red-500"
              title="Delete notification"
            >
              <X size={16} />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={14} stroke="#94A3B8" strokeWidth={1.17} />
          <span className="text-slate-400 text-xs font-normal leading-4">{notification.time}</span>
        </div>
      </div>
    </div>
  );
};

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState(notificationsData);
  const [filter, setFilter] = useState("all");
  const { setUnreadCount } = useNotifications();

  const unreadCount = notifications.filter((n) => !n.read).length;
  const readCount = notifications.filter((n) => n.read).length;
  const totalCount = notifications.length;

  useEffect(() => {
    setUnreadCount(unreadCount);
  }, [unreadCount, setUnreadCount]);

  const filtered = filter === "unread"
    ? notifications.filter((n) => !n.read)
    : filter === "read"
      ? notifications.filter((n) => n.read)
      : notifications;

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const toggleRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: !n.read } : n))
    );
  };

  const deleteNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const tabs = [
    { id: "all", label: `All (${totalCount})` },
    { id: "unread", label: `Unread (${unreadCount})` },
    { id: "read", label: `Read (${readCount})` },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* Filter bar */}
      <div className="px-4 sm:px-6 pt-4 sm:pt-6 bg-white rounded-2xl outline-[1.3px] outline-offset-[-1.3px] outline-gray-100">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 pb-4 sm:pb-5">
          <div className="flex items-center gap-2 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`h-10 px-4 rounded-2xl text-sm sm:text-base font-medium leading-6 transition-colors cursor-pointer ${
                  filter === tab.id
                    ? "bg-linear-to-b from-slate-900 to-blue-900 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          {unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              className="text-cyan-900 text-sm font-medium leading-5 hover:underline cursor-pointer whitespace-nowrap"
            >
              Mark all as read
            </button>
          )}
        </div>
      </div>

      {/* Notification list */}
      <div className="flex flex-col gap-4">
        {filtered.length > 0 ? (
          filtered.map((notification) => (
            <NotificationCard
              key={notification.id}
              notification={notification}
              onToggleRead={toggleRead}
              onDelete={deleteNotification}
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-16 bg-white rounded-2xl outline-[1.3px] outline-gray-100">
            <Bell size={48} stroke="#94A3B8" strokeWidth={1.5} />
            <p className="mt-4 text-gray-500 text-base font-medium">No notifications</p>
            <p className="mt-1 text-gray-400 text-sm">
              {filter === "unread" ? "You're all caught up!" : filter === "read" ? "No read notifications yet." : "Your notification list is empty."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationsPage;
