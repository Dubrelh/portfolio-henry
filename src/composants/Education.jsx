import { GraduationCapIcon } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import SectionHeader from './SectionHeader';

function EducationItem({ item, isLast }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal flex gap-3.5 sm:gap-5">
      {/* Timeline */}
      <div className="flex flex-col items-center shrink-0">
        <div className="w-3 h-3 rounded-full bg-[#DEB887] ring-4 ring-[#F5EDE1] shrink-0 mt-1" />
        {!isLast && <div className="w-px flex-1 bg-slate-200 mt-2 min-h-[40px]" />}
      </div>

      {/* Contenu */}
      <div
        className={`card flex-1 p-4 sm:p-5 flex items-start gap-3.5 ${
          isLast ? '' : 'mb-4'
        }`}
      >
        <span className="shrink-0 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FAF6F0] text-[#7E5B31] border border-[#E8D5B7]/60 mt-0.5">
          <GraduationCapIcon size={18} />
        </span>
        <div>
          <span className="badge badge-muted mb-1.5">{item.period}</span>
          <h3 className="font-bold text-slate-900 text-sm sm:text-base mt-1">
            {item.degree}
          </h3>
          <p className="text-slate-500 text-xs sm:text-sm mt-0.5">{item.school}</p>
        </div>
      </div>
    </div>
  );
}

export default function Education({ education }) {
  return (
    <section id="education" className="py-16 sm:py-20">
      <SectionHeader label="// ma formation" title="Éducation" />
      <div>
        {education.map((item, i) => (
          <EducationItem
            key={`${item.degree}-${item.period}`}
            item={item}
            isLast={i === education.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
