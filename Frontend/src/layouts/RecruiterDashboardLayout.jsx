import React, { useState, useRef, useEffect } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { NotificationProvider, useNotifications } from '../context/NotificationContext';
import { useAuth } from '../context/AuthContext';
import {
  LayoutDashboard,
  ClipboardList,
  Briefcase,
  UserCheck,
  User,
  MessageSquare,
  Calendar,
  CreditCard,
  Headphones,
  LogOut,
  CheckCircle,
  Menu,
  X,
  Bell,
  ChevronDown,
  Star,
  Languages,
} from 'lucide-react';
import logo from '../assets/images/logo.png';
import { currentUser } from '../data/dummyData';

const BASE = '/recruiter';

const sidebarLinks = [
  { to: BASE, icon: LayoutDashboard, label: 'Dashboard' },
  { to: `${BASE}/jobs`, icon: ClipboardList, label: 'Jobs' },
  { to: `${BASE}/bids`, icon: Briefcase, label: 'My Bid' },
  { to: `${BASE}/candidates`, icon: UserCheck, label: 'Candidates' },
  { to: `${BASE}/placements`, icon: CheckCircle, label: 'Placements' },
  { to: `${BASE}/profile`, icon: User, label: 'Profile' },
  { to: `${BASE}/chat`, icon: MessageSquare, label: 'Chat' },
  { to: `${BASE}/interviews`, icon: Calendar, label: 'Interviews' },
  { to: `${BASE}/payments`, icon: CreditCard, label: 'Payments' },
  { to: `${BASE}/notifications`, icon: Bell, label: 'Notifications' },
  { to: `${BASE}/support`, icon: Headphones, label: 'Support' },
];

const staticPageTitles = {
  [BASE]: { title: 'Dashboard', subtitle: 'Recruiter overview' },
  [`${BASE}/jobs`]: { title: 'Jobs', subtitle: 'Browse and apply to available job opportunities' },
  [`${BASE}/candidates`]: { title: 'Candidates', subtitle: 'Manage and track your candidates' },
  [`${BASE}/placements`]: { title: 'Placements', subtitle: 'Recent successes' },
  [`${BASE}/bids`]: { title: 'My Bid', subtitle: 'View and manage your submitted bids' },
  [`${BASE}/profile`]: { title: 'Profile', subtitle: 'Manage your recruiter profile' },
  [`${BASE}/chat`]: { title: 'Chat', subtitle: 'Conversations with companies' },
  [`${BASE}/interviews`]: { title: 'Interviews', subtitle: 'Schedule and track interviews' },
  [`${BASE}/payments`]: { title: 'Payments', subtitle: 'Subscription and payments' },
  [`${BASE}/notifications`]: { title: 'Notifications', subtitle: 'Your notifications' },
  [`${BASE}/support`]: { title: 'Support', subtitle: 'Get help and support' },
};

const langOptions = ['English', 'Spanish', 'French', 'German', 'Arabic'];

const RecruiterDashboardLayoutInner = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [language, setLanguage] = useState('English');
  const langRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { unreadCount } = useNotifications();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigate('/auth/login', { replace: true });
  };

  useEffect(() => {
    const handler = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const isFullWidth = location.pathname === `${BASE}/chat`;

  const pageTitles = {
    [BASE]: { title: `Welcome back, ${user?.name || user?.email || 'Recruiter'}`, subtitle: "Here's your recruitment performance overview.", rating: currentUser?.rating },
    ...staticPageTitles,
  };

  const currentPage = pageTitles[location.pathname]
    || (location.pathname.startsWith(`${BASE}/company/`) ? { title: 'Company Profile', subtitle: 'View company details' } : { title: 'Dashboard', subtitle: '' });

  const isActive = (path) => {
    if (path === BASE) return location.pathname === BASE;
    return location.pathname.startsWith(path);
  };

  return (
    <div className={`bg-slate-50 flex min-w-0 overflow-x-hidden ${isFullWidth ? 'h-screen overflow-hidden' : 'min-h-screen w-full'}`}>
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-linear-to-b from-slate-900 via-cyan-900 to-blue-950 flex flex-col transform transition-transform duration-200 lg:translate-x-0 lg:static lg:inset-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="w-64 h-24 px-6 pt-6 pb-[1.3px] border-b-[1.3px] border-white/10 flex flex-col">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img className="w-9 h-9 rounded-[10px]" src={logo} alt="logo" />
              <div className="flex flex-col">
                <span className="text-white text-xl font-semibold leading-7">Nomad</span>
                <span className="text-white/60 text-xs font-normal leading-4">{user?.role || user?.user?.role || 'Recruiter'}</span>
              </div>
            </Link>
            <button className="lg:hidden text-white" onClick={() => setSidebarOpen(false)} type="button">
              <X size={20} />
            </button>
          </div>
        </div>

        <nav className="flex-1 px-4 pt-4 flex flex-col gap-2 overflow-hidden">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            const active = isActive(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setSidebarOpen(false)}
                className={`h-12 pl-4 rounded-[10px] inline-flex items-center gap-3 transition ${
                  active ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/5 hover:text-white'
                }`}
              >
                <Icon size={20} strokeWidth={1.67} />
                <span className="text-base font-medium leading-6">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="w-64 h-20 px-4 pt-4 border-t-[1.3px] border-white/10">
          <button
            onClick={handleLogout}
            className="h-12 pl-4 rounded-[10px] inline-flex items-center gap-3 text-white/70 hover:bg-white/5 hover:text-white transition cursor-pointer w-full"
            type="button"
          >
            <LogOut size={20} strokeWidth={1.67} />
            <span className="text-base font-medium leading-6">Logout</span>
          </button>
        </div>
      </aside>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
          onKeyDown={() => {}}
          role="button"
          tabIndex={0}
          aria-label="Close menu"
        />
      )}

      <div className={`flex-1 flex flex-col min-w-0 overflow-x-hidden ${isFullWidth ? 'h-screen overflow-hidden' : 'min-h-screen'}`}>
        <header className="h-auto min-h-16 lg:h-24 px-4 sm:px-6 lg:px-8 py-3 lg:py-0 bg-white/80 shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.10),0px_1px_3px_0px_rgba(0,0,0,0.10)] border-b border-gray-200/60 flex items-center justify-between sticky top-0 z-30">
          <div className="h-16 flex flex-col justify-center">
            <div className="h-7 flex items-center gap-3">
              <button
                className="lg:hidden text-gray-600"
                onClick={() => setSidebarOpen(true)}
                type="button"
              >
                <Menu size={22} />
              </button>
              <span className={`text-base sm:text-lg font-semibold leading-7 sm:leading-9 tracking-tight ${currentPage?.rating ? 'text-cyan-900' : 'text-slate-900'}`}>
                {currentPage?.title}
              </span>
              {currentPage?.rating && (
                <div className="hidden sm:flex h-4 items-center gap-0.5">
                  <div className="flex items-center gap-[2.5px]">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        size={i <= Math.round(currentPage.rating) ? 16 : 15}
                        fill={i <= Math.round(currentPage.rating) ? '#FDC700' : '#D1D5DC'}
                        stroke={i <= Math.round(currentPage.rating) ? '#FDC700' : '#D1D5DC'}
                        strokeWidth={1.27}
                      />
                    ))}
                  </div>
                  <span className="text-gray-900 text-xs font-semibold leading-4">{currentPage.rating}</span>
                </div>
              )}
            </div>
            {currentPage?.subtitle && (
              <p className="hidden sm:block text-gray-500 text-sm font-normal leading-6">{currentPage.subtitle}</p>
            )}
          </div>

          <div className="flex items-center gap-3">
            <Link to={`${BASE}/notifications`} className="size-10 relative rounded-xl flex items-center justify-center">
              <Bell size={20} stroke="#4A5565" />
              {unreadCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-[#FF2056] rounded-full ring-2 ring-white" />
              )}
            </Link>
            <div className="relative" ref={langRef}>
              <button
                className="hidden sm:flex w-28 h-10 pl-4 bg-white rounded-[10px] outline-[1.3px] outline-gray-200 items-center gap-2"
                onClick={() => setLangOpen(!langOpen)}
                type="button"
              >
                <Languages size={16} stroke="#0F172A" />
                <span className="text-slate-900 text-sm font-medium leading-5">{language.slice(0, 3)}</span>
                <ChevronDown size={16} stroke="#0F172A" className={`transition-transform ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              {langOpen && (
                <div className="absolute top-full right-0 mt-1 w-40 p-3 bg-white rounded-[20px] shadow-lg z-50 flex flex-col gap-3.5 overflow-hidden">
                  {langOptions.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => { setLanguage(lang); setLangOpen(false); }}
                      className={`text-left text-base font-normal ${language === lang ? 'text-neutral-950' : 'text-neutral-950/50'}`}
                      type="button"
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </header>

        <main className={`flex-1 min-w-0 bg-linear-to-b from-slate-50 via-slate-100 to-slate-200 ${isFullWidth ? 'flex flex-col overflow-hidden' : 'overflow-x-hidden'}`}>
          <div className={`flex flex-col min-w-0 ${isFullWidth ? 'flex-1 min-h-0' : 'gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-8 pb-4 sm:pb-6 lg:pb-8'}`}>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

const RecruiterDashboardLayout = () => (
  <NotificationProvider>
    <RecruiterDashboardLayoutInner />
  </NotificationProvider>
);

export default RecruiterDashboardLayout;
