import { Layers3Icon, Code2Icon, WrenchIcon } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import SectionHeader from './SectionHeader';

const categoryConfig = {
  domaines: {
    label: 'Domaines',
    Icon: Layers3Icon,
  },
  frameworks: {
    label: 'Frameworks & Libs',
    Icon: Code2Icon,
  },
  outils: {
    label: 'Outils & Cloud',
    Icon: WrenchIcon,
  },
};

function SkillColumn({ categoryKey, values }) {
  const ref = useReveal();
  const config = categoryConfig[categoryKey] || { label: categoryKey, Icon: Layers3Icon };
  const { Icon } = config;

  return (
    <div ref={ref} className="reveal card p-5 sm:p-6">
      {/* En-tête */}
      <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#FAF6F0] text-[#7E5B31] border border-[#E8D5B7]/60 shrink-0">
          <Icon size={16} />
        </span>
        <span className="font-mono text-xs font-semibold text-[#7E5B31] tracking-wider uppercase">
          {config.label}
        </span>
      </div>

      {/* Liste */}
      <ul className="space-y-2.5">
        {values.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium py-1 px-2 rounded-lg transition-colors hover:bg-[#FAF6F0]/60"
          >
            <span className="text-[#DEB887] font-bold shrink-0">›</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills({ skills }) {
  return (
    <section id="skills" className="py-16 sm:py-20">
      <SectionHeader label="// ma boîte à outils" title="Compétences" />
      <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 md:grid-cols-3">
        {Object.entries(skills).map(([key, values]) => (
          <SkillColumn key={key} categoryKey={key} values={values} />
        ))}
      </div>
    </section>
  );
}
