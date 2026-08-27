import { SparklesIcon, Code2Icon, Layers3Icon, RocketIcon } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function About({ about }) {
  const ref = useReveal();

  const highlights = [
    {
      icon: Code2Icon,
      title: 'Full-Stack & Mobile',
      desc: 'Conception web (React, Next.js, Node.js) & mobile (React Native, Expo)',
    },
    {
      icon: Layers3Icon,
      title: 'Architecture & SI',
      desc: 'Modélisation rigoureuse, APIs robustes et bases relationnelles',
    },
    {
      icon: RocketIcon,
      title: 'Orientation Produit',
      desc: 'Du prototypage rapide jusqu’au déploiement et monitoring',
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="section-heading">
        <span />
        <h2 className="section-title">À propos</h2>
        <span />
      </div>

      <div ref={ref} className="space-y-6">
        {/* Soft background glow */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-brand-500/5 blur-3xl pointer-events-none rounded-full" />

        {/* Main story card - soft & sleek */}
        <div className="relative rounded-3xl bg-white/90 dark:bg-neutral-900/40 border border-neutral-200/80 dark:border-white/5 backdrop-blur-md p-8 md:p-10 shadow-sm dark:shadow-none transition-all duration-300 hover:border-brand-500/30">
          <div className="flex items-center gap-3 mb-6">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400">
              <SparklesIcon size={16} />
            </span>
            <span className="text-xs uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold">
              Profil & Philosophie
            </span>
          </div>

          <p className="text-base sm:text-lg leading-relaxed text-neutral-700 dark:text-neutral-300 font-normal">
            {about}
          </p>
        </div>

        {/* 3 mini highlight cards */}
        <div className="grid gap-4 sm:grid-cols-3">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white/80 dark:bg-neutral-900/30 border border-neutral-200/70 dark:border-white/5 p-5 shadow-xs dark:shadow-none hover:border-brand-500/30 hover:bg-white dark:hover:bg-neutral-900/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 group-hover:scale-110 group-hover:bg-brand-500/20 transition-all duration-300">
                    <Icon size={16} />
                  </span>
                  <h4 className="text-sm font-semibold text-neutral-900 dark:text-white group-hover:text-brand-500 dark:group-hover:text-brand-300 transition-colors">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed pl-1">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
