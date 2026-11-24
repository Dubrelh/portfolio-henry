import { Code2Icon, Layers3Icon, RocketIcon } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import SectionHeader from './SectionHeader';

const stats = [
  { value: '2', unit: 'ans', label: "d'expérience" },
  { value: '4', unit: '', label: 'projets majeurs' },
  { value: 'BTS', unit: '', label: 'Génie Logiciel' },
];

const specialties = [
  {
    icon: Code2Icon,
    title: 'Full-Stack & Mobile',
    desc: 'React, Next.js, Node.js, React Native, Expo',
  },
  {
    icon: Layers3Icon,
    title: 'Architecture & SI',
    desc: 'APIs robustes, bases relationnelles, modélisation',
  },
  {
    icon: RocketIcon,
    title: 'Orientation Produit',
    desc: 'Du prototype au déploiement et monitoring',
  },
];

export default function About({ about }) {
  const ref = useReveal();

  return (
    <section id="about" className="py-16 sm:py-20">
      <SectionHeader label="// ce que je fais" title="À propos" />

      <div ref={ref} className="reveal">
        <div className="card p-6 sm:p-8 md:p-10">
          <div className="grid gap-8 md:gap-10 md:grid-cols-[1.3fr_0.7fr]">
            {/* Gauche — texte + spécialités */}
            <div className="flex flex-col justify-between">
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                {about}
              </p>

              <div className="space-y-4">
                {specialties.map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl transition-colors hover:bg-[#FAF6F0]/60"
                  >
                    <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-[#FAF6F0] text-[#7E5B31] border border-[#E8D5B7]/60 mt-0.5">
                      <Icon size={16} />
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900 text-xs sm:text-sm">{title}</p>
                      <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Droite — Stats */}
            <div className="grid grid-cols-3 md:grid-cols-1 gap-2.5 sm:gap-4 md:justify-center">
              {stats.map(({ value, unit, label }) => (
                <div
                  key={label}
                  className="bg-[#FAF8F5] border border-[#EAE6DF] rounded-xl p-3.5 sm:p-5 text-center flex flex-col justify-center items-center transition-all duration-200 hover:bg-white hover:border-[#D6CBBF]"
                >
                  <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#C99E6B] tracking-tight flex items-baseline justify-center gap-0.5">
                    {value}
                    {unit && <span className="text-xs sm:text-sm font-semibold">{unit}</span>}
                  </p>
                  <p className="text-slate-500 text-[11px] sm:text-xs mt-1 font-medium">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
