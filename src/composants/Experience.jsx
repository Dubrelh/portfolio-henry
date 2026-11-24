import { ArrowUpRightIcon, MapPinIcon, Globe } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import SectionHeader from './SectionHeader';

function GithubIcon({ size = 15 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function ExperienceItem({ job, isLast }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal flex gap-3.5 sm:gap-5">
      {/* Timeline — point + ligne */}
      <div className="flex flex-col items-center shrink-0">
        <div className="w-3 h-3 rounded-full bg-[#DEB887] ring-4 ring-[#F5EDE1] shrink-0 mt-1" />
        {!isLast && <div className="w-px flex-1 bg-slate-200 mt-2 min-h-[48px]" />}
      </div>

      {/* Carte expérience */}
      <div className={`card flex-1 p-5 sm:p-6 ${isLast ? '' : 'mb-5'}`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div>
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">{job.role}</h3>
            <p className="flex items-center gap-1.5 text-xs sm:text-sm mt-0.5">
              <span className="font-semibold text-[#7E5B31]">{job.company}</span>
              <span className="text-slate-300">•</span>
              <MapPinIcon size={12} className="text-slate-400" />
              <span className="text-slate-500">{job.location}</span>
            </p>
          </div>
          <span className="badge badge-muted self-start sm:self-auto">{job.period}</span>
        </div>

        <ul className="space-y-2 mb-4">
          {job.highlights.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[#DEB887] mt-2" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {job.link && (
          <a
            href={job.link}
            target="_blank"
            rel="noreferrer"
            className="btn-outline btn-sm inline-flex items-center gap-1.5 w-fit"
          >
            {job.link.includes('github.com') ? (
              <GithubIcon size={14} />
            ) : (
              <Globe size={14} />
            )}
            <span>{job.link.includes('github.com') ? 'Découvrir le projet' : 'Visiter le site'}</span>
            <ArrowUpRightIcon size={13} />
          </a>
        )}
      </div>
    </div>
  );
}

export default function Experience({ experiences }) {
  return (
    <section id="experience" className="py-16 sm:py-20">
      <SectionHeader label="// mon parcours" title="Expérience" />
      <div>
        {experiences.map((job, i) => (
          <ExperienceItem
            key={`${job.company}-${job.period}`}
            job={job}
            isLast={i === experiences.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
