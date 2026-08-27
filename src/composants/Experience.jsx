import { BriefcaseIcon, ArrowUpRightIcon, MapPinIcon } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

function GithubIcon({ size = 15, className = "" }) {
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
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function ExperienceCard({ job, index }) {
  const ref = useReveal();
  return (
    <article
      ref={ref}
      className={`glass-card p-6 group hover:-translate-y-1 hover:border-brand-500/40 transition-all duration-300`}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-4">
          <div className="shrink-0 flex items-center justify-center w-11 h-11 rounded-2xl bg-brand-500/10 dark:bg-brand-500/15 text-brand-600 dark:text-brand-400">
            <BriefcaseIcon size={20} />
          </div>
          <div>
            <p className="text-lg font-semibold text-neutral-900 dark:text-white">{job.role}</p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 flex items-center gap-1 mt-0.5">
              <span>{job.company}</span>
              <span className="text-neutral-400 dark:text-neutral-600">•</span>
              <MapPinIcon size={12} className="inline" />
              <span>{job.location}</span>
            </p>
          </div>
        </div>
        <span className="badge badge-outline shrink-0">{job.period}</span>
      </div>

      <ul className="mt-5 space-y-2 pl-2">
        {job.highlights.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-neutral-600 dark:text-neutral-400">
            <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-brand-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {job.link && (
        <a
          href={job.link}
          target="_blank"
          rel="noreferrer"
          className="mt-5 btn-primary btn-sm inline-flex items-center gap-2 w-fit group/btn"
        >
          <GithubIcon size={15} />
          <span>Découvrir le projet</span>
          <ArrowUpRightIcon size={14} className="opacity-70 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </a>
      )}
    </article>
  );
}

export default function Experience({ experiences }) {
  return (
    <section id="experience" className="py-20">
      <div className="section-heading">
        <span />
        <h2 className="section-title">Expériences</h2>
        <span />
      </div>

      <div className="space-y-5">
        {experiences.map((job, i) => (
          <ExperienceCard key={`${job.company}-${job.period}`} job={job} index={i} />
        ))}
      </div>
    </section>
  );
}
