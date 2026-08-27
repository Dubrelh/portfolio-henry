import { Layers3Icon, Code2Icon, WrenchIcon } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const categoryConfig = {
  domaines: {
    label: 'Domaines',
    Icon: Layers3Icon,
    color: 'text-brand-600 dark:text-brand-400',
    bg: 'bg-brand-500/10 dark:bg-brand-500/15',
  },
  frameworks: {
    label: 'Frameworks & Libs',
    Icon: Code2Icon,
    color: 'text-violet-600 dark:text-violet-400',
    bg: 'bg-violet-500/10 dark:bg-violet-500/15',
  },
  outils: {
    label: 'Outils',
    Icon: WrenchIcon,
    color: 'text-sky-600 dark:text-sky-400',
    bg: 'bg-sky-500/10 dark:bg-sky-500/15',
  },
};

function SkillCard({ categoryKey, values, index }) {
  const ref = useReveal();
  const config = categoryConfig[categoryKey] || {
    label: categoryKey,
    Icon: Layers3Icon,
    color: 'text-brand-600 dark:text-brand-400',
    bg: 'bg-brand-500/10 dark:bg-brand-500/15',
  };

  return (
    <div
      ref={ref}
      className={`glass-card p-6 hover:-translate-y-1 hover:border-brand-500/40 transition-all duration-300`}
    >
      <div className="flex items-center gap-3 mb-5">
        <div className={`flex items-center justify-center w-10 h-10 rounded-2xl ${config.bg} ${config.color}`}>
          <config.Icon size={18} />
        </div>
        <h3 className="font-semibold text-neutral-900 dark:text-white capitalize">{config.label}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {values.map((item) => (
          <span key={item} className="badge badge-outline text-xs">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills({ skills }) {
  return (
    <section id="skills" className="py-20">
      <div className="section-heading">
        <span />
        <h2 className="section-title">Compétences</h2>
        <span />
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {Object.entries(skills).map(([key, values], i) => (
          <SkillCard key={key} categoryKey={key} values={values} index={i} />
        ))}
      </div>
    </section>
  );
}
