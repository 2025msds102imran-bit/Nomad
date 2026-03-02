import React, { useState, useEffect, useRef } from 'react'
import logo from "../assets/logo.png";
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('English');
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!langOpen) return;
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [langOpen]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav className="flex justify-between items-center border-b-[1.30px] border-white/10 h-28">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 w-64">
          <div className="relative size-12 shrink-0">
            <svg className="absolute -left-4 -top-4" width="80" height="80" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_f_nav_logo)">
                <path d="M32 55.9997C32 42.745 42.745 32 55.9997 32C69.2544 32 79.9994 42.745 79.9994 55.9997C79.9994 69.2544 69.2544 79.9994 55.9997 79.9994C42.745 79.9994 32 69.2544 32 55.9997Z" fill="white" fillOpacity="0.2"/>
              </g>
              <defs>
                <filter id="filter0_f_nav_logo" x="0" y="0" width="111.999" height="111.999" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feGaussianBlur stdDeviation="16" result="effect1_foregroundBlur"/>
                </filter>
              </defs>
            </svg>
            <img src={logo} alt="Nomad Recruitment" className="relative size-12 shadow-[0px_25px_50px_0px_rgba(0,0,0,0.15)]" />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-7">
          <div className="flex items-center gap-10">
            <Link to="/" className="text-white/90 text-sm font-normal leading-5 hover:text-white transition">Home</Link>
            <Link to="/about" className="text-white/90 text-sm font-normal leading-5 hover:text-white transition">About Us</Link>
            <Link to="/contact" className="text-white/90 text-sm font-normal leading-5 hover:text-white transition">Contact Us</Link>
          </div>

          {/* Language selector */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="pl-5 pr-3.5 py-3 rounded-2xl flex items-center gap-1"
            >
              <span className="text-white text-xs font-medium leading-5">{ selectedLang }</span>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.53222 5.53222C5.39157 5.67282 5.20084 5.75181 5.00197 5.75181C4.80309 5.75181 4.61236 5.67282 4.47172 5.53222L0.228966 1.28947C0.157334 1.22028 0.100197 1.13752 0.0608901 1.04602C0.0215834 0.954517 0.00089368 0.856102 2.83173e-05 0.756517C-0.000837045 0.656933 0.0181394 0.558173 0.0558501 0.466001C0.0935608 0.373829 0.149251 0.290089 0.21967 0.21967C0.29009 0.14925 0.373828 0.0935604 0.466001 0.0558497C0.558173 0.0181391 0.656933 -0.000837044 0.756517 2.83178e-05C0.856102 0.00089368 0.954516 0.0215834 1.04602 0.0608901C1.13752 0.100197 1.22028 0.157333 1.28947 0.228966L5.00197 3.94147L8.71447 0.228966C8.85592 0.0923474 9.04537 0.0167516 9.24202 0.0184605C9.43866 0.0201693 9.62677 0.0990458 9.76583 0.238102C9.90489 0.377158 9.98376 0.565268 9.98547 0.761915C9.98718 0.958563 9.91158 1.14801 9.77497 1.28947L5.53222 5.53222Z" fill="white"/>
              </svg>
            </button>

            {langOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded-xl border border-gray-200 shadow-2xl bg-white z-50 py-1 divide-y divide-gray-100">
                {["English","Dutch","Spanish","German","French","Arabic","Portuguese","Russian","Chinese"].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => { setSelectedLang(lang); setLangOpen(false); }}
                    className={`w-full text-center px-4 py-2 text-sm text-gray-700 ${lang === selectedLang ? 'font-semibold text-[#0F172A]' : ''}`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Sign In */}
          <button
            onClick={() => navigate('/auth/login')}
            className="w-24 h-11 bg-white/95 rounded-2xl flex items-center justify-center hover:bg-white transition"
          >
            <span className="text-slate-900 text-sm font-medium leading-5">Sign In</span>
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(true)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute top-0 right-0 h-full w-[280px] bg-[#0F172A] p-6 transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex justify-between items-center mb-10">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              <img className="w-10 h-10" src={logo} alt="logo" />
            </Link>
            <button className="text-white" onClick={() => setMenuOpen(false)}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>

          <div className="flex flex-col gap-6 text-lg text-white">
            <Link to="/" onClick={() => setMenuOpen(false)} className="text-white/90 text-sm font-normal leading-5">Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)} className="text-white/90 text-sm font-normal leading-5">About Us</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="text-white/90 text-sm font-normal leading-5">Contact Us</Link>

            {/* Mobile Language Selector */}
            <div>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center justify-between w-full text-white/90 text-sm"
              >
                {selectedLang}
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.53222 5.53222C5.39157 5.67282 5.20084 5.75181 5.00197 5.75181C4.80309 5.75181 4.61236 5.67282 4.47172 5.53222L0.228966 1.28947C0.157334 1.22028 0.100197 1.13752 0.0608901 1.04602C0.0215834 0.954517 0.00089368 0.856102 2.83173e-05 0.756517C-0.000837045 0.656933 0.0181394 0.558173 0.0558501 0.466001C0.0935608 0.373829 0.149251 0.290089 0.21967 0.21967C0.29009 0.14925 0.373828 0.0935604 0.466001 0.0558497C0.558173 0.0181391 0.656933 -0.000837044 0.756517 2.83178e-05C0.856102 0.00089368 0.954516 0.0215834 1.04602 0.0608901C1.13752 0.100197 1.22028 0.157333 1.28947 0.228966L5.00197 3.94147L8.71447 0.228966C8.85592 0.0923474 9.04537 0.0167516 9.24202 0.0184605C9.43866 0.0201693 9.62677 0.0990458 9.76583 0.238102C9.90489 0.377158 9.98376 0.565268 9.98547 0.761915C9.98718 0.958563 9.91158 1.14801 9.77497 1.28947L5.53222 5.53222Z" fill="white"/>
                </svg>
              </button>

              {langOpen && (
                <div className="mt-3 ml-4 flex flex-col gap-2 text-gray-300">
                  {["English","Dutch","Spanish","German","French","Arabic","Portuguese","Russian","Chinese"].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => { setSelectedLang(lang); setLangOpen(false); }}
                      className={`text-left text-sm transition ${lang === selectedLang ? 'text-white font-semibold' : 'hover:text-white'}`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => { navigate('/auth/login'); setMenuOpen(false); }}
              className="mt-6 w-full h-11 bg-white/95 rounded-2xl flex items-center justify-center"
            >
              <span className="text-slate-900 text-sm font-medium leading-5">Sign In</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
