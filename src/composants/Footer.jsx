export default function Footer({ displayName }) {
  return (
    <footer className="border-t border-neutral-200/80 dark:border-white/5 bg-neutral-100/50 dark:bg-neutral-900/50 mt-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 py-6 text-sm text-neutral-500 dark:text-neutral-400">
        <span>
          © {new Date().getFullYear()} <span className="text-brand-600 dark:text-brand-400 font-medium">{displayName}</span>
        </span>
        <a href="#home" className="hover:text-brand-500 transition-colors">
          ↑ Retour en haut
        </a>
      </div>
    </footer>
  );
}
