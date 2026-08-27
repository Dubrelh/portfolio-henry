import { GraduationCapIcon } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

function EducationCard({ item, index }) {
  const ref = useReveal();
  return (
    <article
      ref={ref}
      className={`glass-card p-6 flex gap-4 items-start hover:-translate-y-1 hover:border-brand-500/40 transition-all duration-300`}
    >
      <div className="shrink-0 flex items-center justify-center w-11 h-11 rounded-2xl bg-brand-500/10 dark:bg-brand-500/15 text-brand-600 dark:text-brand-400">
        <GraduationCapIcon size={20} />
      </div>
      <div>
        <span className="badge badge-outline text-[11px] mb-2">{item.period}</span>
        <h3 className="text-lg font-bold text-neutral-900 dark:text-white">{item.degree}</h3>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">{item.school}</p>
      </div>
    </article>
  );
}

export default function Education({ education }) {
  return (
    <section id="education" className="py-20">
      <div className="section-heading">
        <span />
        <h2 className="section-title">Formation</h2>
        <span />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {education.map((item, i) => (
          <EducationCard key={`${item.degree}-${item.period}`} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
