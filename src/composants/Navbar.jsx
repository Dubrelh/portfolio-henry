import { useState, useEffect } from 'react';
import { HomeIcon, UserIcon, BriefcaseIcon, FolderIcon, WrenchIcon, MailIcon } from 'lucide-react';

const navLinks = [
  { href: '#about',      label: 'À propos' },
  { href: '#experience', label: 'Expérience' },
  { href: '#projects',   label: 'Projets' },
  { href: '#skills',     label: 'Compétences' },
  { href: '#contact',    label: 'Contact' },
];

const mobileLinks = [
  { href: '#home',       label: 'Accueil',    Icon: HomeIcon },
  { href: '#about',      label: 'Profil',     Icon: UserIcon },
  { href: '#experience', label: 'Expérience', Icon: BriefcaseIcon },
  { href: '#projects',   label: 'Projets',    Icon: FolderIcon },
  { href: '#skills',     label: 'Skills',     Icon: WrenchIcon },
  { href: '#contact',    label: 'Contact',    Icon: MailIcon },
];

export default function Navbar({ displayName }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Détection automatique de la section visible
  useEffect(() => {
    const sectionIds = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
    const handleScrollActive = () => {
      const scrollPos = window.scrollY + 160;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActive(`#${sectionIds[i]}`);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScrollActive);
    handleScrollActive();
    return () => window.removeEventListener('scroll', handleScrollActive);
  }, []);

  return (
    <>
      {/* ── DESKTOP : Navbar flottante centrée en haut ── */}
      <header className="hidden md:flex fixed top-4 inset-x-0 z-50 justify-center pointer-events-none px-4">
        <div
          className={`pointer-events-auto flex items-center gap-1.5 px-3 py-2 rounded-full border transition-all duration-300 ${
            scrolled
              ? 'bg-white/90 backdrop-blur-md border-slate-200/90 shadow-[0_6px_20px_rgba(15,23,42,0.06)]'
              : 'bg-white/80 backdrop-blur-sm border-slate-200/70 shadow-[0_2px_10px_rgba(15,23,42,0.04)]'
          }`}
        >
          {/* Logo / Nom en police Syne */}
          <a
            href="#home"
            className="px-3 py-1 text-sm font-extrabold text-slate-900 hover:text-[#A67C48] transition-colors tracking-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            {displayName}
            <span style={{ color: '#DEB887' }}>.</span>
          </a>

          <div className="w-px h-4 bg-slate-200 mx-1" />

          {/* Navigation Links */}
          <nav className="flex items-center gap-0.5">
            {navLinks.map(({ href, label }) => {
              const isCurrent = active === href;
              return (
                <a
                  key={href}
                  href={href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isCurrent
                      ? 'bg-[#FAF6F0] text-[#7E5B31] border border-[#E8D5B7]/60 shadow-xs'
                      : 'text-slate-600 hover:text-[#7E5B31] hover:bg-[#FAF6F0]/60'
                  }`}
                >
                  {label}
                </a>
              );
            })}
          </nav>
        </div>
      </header>

      {/* ── MOBILE : Dock flottant en bas d'écran avec icônes ── */}
      <nav
        className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1.5 px-2.5 py-2 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_8px_24px_rgba(15,23,42,0.12)] max-w-[92vw]"
      >
        {mobileLinks.map(({ href, label, Icon }) => {
          const isCurrent = active === href;
          return (
            <a
              key={href}
              href={href}
              aria-label={label}
              title={label}
              className={`flex flex-col items-center justify-center w-11 h-11 rounded-full transition-all duration-200 ${
                isCurrent
                  ? 'bg-[#FAF6F0] text-[#7E5B31] border border-[#E8D5B7]/80 scale-105 shadow-xs'
                  : 'text-slate-500 hover:text-slate-900 active:scale-95'
              }`}
            >
              <Icon size={18} strokeWidth={isCurrent ? 2.3 : 1.9} />
              <span className="text-[9px] font-medium leading-none mt-0.5 scale-90">
                {label}
              </span>
            </a>
          );
        })}
      </nav>
    </>
  );
}
