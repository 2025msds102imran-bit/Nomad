import React, { useState, useEffect, useRef } from 'react'
import logo from "../assets/logo.png";
import { Link, useNavigate } from 'react-router-dom';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';

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
      <div className="flex max-w-7xl mx-auto justify-between items-center border-b border-white/10 pb-6">
        <Link to="/"><img className="w-12 h-12 rounded-md" src={logo} alt="logo" /></Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 relative">
          <Link to='/' className="text-white transition">Home</Link>
          <Link to='/about' className="text-white transition">About Us</Link>
          <Link to='/contact' className="text-white transition">Contact Us</Link>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 text-white transition"
            >
              {selectedLang} <RiArrowDropDownLine size={22} />
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

          <button onClick={() => navigate('/auth/login')}  className="px-5 py-2 rounded-xl bg-white text-black font-semibold hover:scale-105 transition">
            Sign In
          </button>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-3xl text-white"
          onClick={() => setMenuOpen(true)}
        >
          <HiOutlineMenuAlt3 />
        </button>
      </div>

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
              <img className="w-10 h-10 rounded-md" src={logo} alt="logo" />
            </Link>
            <button className="text-3xl text-white" onClick={() => setMenuOpen(false)}>
              <HiX />
            </button>
          </div>

          <nav className="flex flex-col gap-6 text-lg text-white">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>

            {/* Mobile Language Selector */}
            <div>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center justify-between w-full"
              >
                {selectedLang}
                <RiArrowDropDownLine size={26} />
              </button>

              {langOpen && (
                <div className="mt-3 ml-4 flex flex-col gap-2 text-gray-300">
                  {["English","Dutch","Spanish","German","French","Arabic","Portuguese","Russian","Chinese"].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => { setSelectedLang(lang); setLangOpen(false); }}
                      className={`text-left transition ${lang === selectedLang ? 'text-white font-semibold' : 'hover:text-white'}`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button onClick={() => navigate('/auth/login')} className="mt-6 px-6 py-3 rounded-xl bg-white text-black font-semibold">
              Sign In
            </button>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Navbar
