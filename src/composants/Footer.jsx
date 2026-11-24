export default function Footer({ displayName }) {
  return (
    <footer className="border-t border-[#EAE6DF] bg-[#FAF8F5]/80 mt-16 pb-20 md:pb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 py-6 text-xs sm:text-sm text-slate-400">
        <span>
          © {new Date().getFullYear()}{' '}
          <span className="font-semibold text-slate-800" style={{ fontFamily: 'Syne, sans-serif' }}>
            {displayName}
          </span>
          {' '}— Développeur Logiciel
        </span>
        <a
          href="#home"
          className="font-mono text-xs text-slate-400 hover:text-[#7E5B31] transition-colors"
        >
          ↑ Haut de page
        </a>
      </div>
    </footer>
  );
}
