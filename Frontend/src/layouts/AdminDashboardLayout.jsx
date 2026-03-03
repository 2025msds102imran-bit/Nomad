import React, { useState, useRef, useEffect } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { NotificationProvider, useNotifications } from '../context/NotificationContext';
import { useAuth } from '../context/AuthContext';
import {
  LayoutDashboard,
  Building2,
  Users,
  Building,
  Briefcase,
  UserCheck,
  CreditCard,
  FileText,
  MessageSquare,
  Settings,
  Headphones,
  LogOut,
  Menu,
  X,
  Bell,
  ChevronDown,
  Languages,
} from 'lucide-react';
import logo from '../assets/logo.png';

const BASE = '/admin';

const sidebarLinks = [
  { to: BASE, icon: LayoutDashboard, label: 'Dashboard' },
  { to: `${BASE}/companies`, icon: Building2, label: 'Company' },
  { to: `${BASE}/recruiters`, icon: Users, label: 'Recruiter' },
  { to: `${BASE}/recruiter-companies`, icon: Building, label: 'Recruiter Company' },
  { to: `${BASE}/company-jobs`, icon: Briefcase, label: 'Company Job' },
  { to: `${BASE}/recruiter-employees`, icon: UserCheck, label: 'Recruiter Employee' },
  { to: `${BASE}/subscription-plans`, icon: CreditCard, label: 'Subscription Plan' },
  { to: `${BASE}/pages`, icon: FileText, label: 'Page' },
  { to: `${BASE}/chat`, icon: MessageSquare, label: 'Chat' },
  { to: `${BASE}/configuration`, icon: Settings, label: 'Configuration' },
  { to: `${BASE}/support`, icon: Headphones, label: 'Support' },
];

const langOptions = ['English', 'Spanish', 'French', 'German', 'Arabic'];

const AdminDashboardLayoutInner = () => {
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

  const isActive = (path) => {
    if (path === BASE) return location.pathname === BASE;
    return location.pathname.startsWith(path);
  };

  return (
    <div className="bg-gray-50 flex min-w-0 overflow-x-hidden min-h-screen w-full">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-slate-900 via-cyan-900 to-blue-950 flex flex-col transform transition-transform duration-200 lg:translate-x-0 lg:static lg:inset-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="w-64 h-24 px-6 pt-6 pb-[1.3px] border-b-[1.3px] border-white/10 flex flex-col">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img className="w-9 h-9 rounded-[10px]" src={logo} alt="logo" />
              <div className="flex flex-col">
                <span className="text-white text-xl font-semibold leading-7">Nomad Admin</span>
                <span className="text-white/60 text-xs font-normal leading-4">Admin</span>
              </div>
            </Link>
            <button className="lg:hidden text-white" onClick={() => setSidebarOpen(false)}>
              <X size={20} />
            </button>
          </div>
        </div>

        <nav className="flex-1 px-4 pt-4 flex flex-col gap-2 overflow-y-auto">
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
          >
            <LogOut size={20} strokeWidth={1.67} />
            <span className="text-base font-medium leading-6">Logout</span>
          </button>
        </div>
      </aside>

      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      <div className="flex-1 flex flex-col min-w-0 overflow-x-hidden min-h-screen">
        <header className="h-20 px-8 py-4 bg-white border-b border-gray-200 flex items-center justify-between sticky top-0 z-30">
          <div>
            <h1 className="text-slate-900 text-lg font-semibold leading-7">Dashboard</h1>
            <p className="text-gray-600 text-sm font-normal leading-5">Admin overview and statistics</p>
          </div>
          <div className="flex items-center gap-3">
            <Link to={`${BASE}/notifications`} className="size-9 relative rounded-[10px] flex items-center justify-center">
              <Bell size={20} stroke="#4A5565" />
              {unreadCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full ring-2 ring-white" />
              )}
            </Link>
            <div className="relative" ref={langRef}>
              <button
                className="w-28 h-10 pl-4 bg-white rounded-[10px] outline outline-[1.3px] outline-gray-200 flex items-center gap-2"
                onClick={() => setLangOpen(!langOpen)}
              >
                <Languages size={16} stroke="#0F172A" />
                <span className="text-slate-900 text-sm font-medium leading-5">{language.slice(0, 3)}</span>
                <ChevronDown size={16} stroke="#0F172A" className={`transition-transform ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              {langOpen && (
                <div className="absolute top-full right-0 mt-1 w-40 p-3 bg-white rounded-[20px] shadow-lg z-50 flex flex-col gap-3.5">
                  {langOptions.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => { setLanguage(lang); setLangOpen(false); }}
                      className={`text-left text-base font-normal ${language === lang ? 'text-neutral-950' : 'text-neutral-950/50'}`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </header>

        <main className="flex-1 min-w-0 overflow-x-hidden bg-gray-50">
          <div className="px-8 pt-8 pb-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

const AdminDashboardLayout = () => (
  <NotificationProvider>
    <AdminDashboardLayoutInner />
  </NotificationProvider>
);

export default AdminDashboardLayout;
