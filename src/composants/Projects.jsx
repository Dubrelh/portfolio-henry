import { ArrowUpRightIcon } from 'lucide-react';
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

const projectGradients = [
  'from-brand-500/20 to-amber-400/10',
  'from-violet-500/20 to-brand-500/10',
  'from-sky-500/20 to-emerald-500/10',
  'from-pink-500/20 to-brand-500/10',
];

function ProjectCard({ project, index }) {
  const ref = useReveal();
  const gradient = projectGradients[index % projectGradients.length];

  return (
    <article
      ref={ref}
      className={`glass-card overflow-hidden group hover:-translate-y-1 hover:border-brand-500/40 transition-all duration-300 flex flex-col`}
    >
      {/* Card header image / fallback gradient */}
      <div className={`h-48 w-full bg-gradient-to-br ${gradient} flex items-center justify-center relative overflow-hidden`}>
        {project.image_url ? (
          <img
            src={project.image_url}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              if (e.currentTarget.nextElementSibling) {
                e.currentTarget.nextElementSibling.style.display = 'flex';
              }
            }}
          />
        ) : null}

        {/* Fallback displayed if no image_url or if image fails to load */}
        <div
          className={`absolute inset-0 flex items-center justify-center ${
            project.image_url ? 'hidden' : 'flex'
          }`}
        >
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
              backgroundSize: '20px 20px',
            }}
          />
          <span className="text-2xl font-black text-neutral-800 dark:text-white/90 tracking-tight">
            {project.name}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white">{project.name}</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">{project.tagline}</p>
          </div>
          <span className="badge badge-solid shrink-0">{project.status}</span>
        </div>

        <p className="text-xs font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wider">{project.role}</p>
        <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-400 flex-1">{project.description}</p>

        {/* Stack badges */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span key={item} className="badge badge-outline text-[11px]">
              {item}
            </span>
          ))}
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="btn-primary btn-sm inline-flex items-center gap-2 w-fit mt-auto group/btn"
          >
            <GithubIcon size={16} />
            <span>Voir le projet</span>
            <ArrowUpRightIcon size={14} className="opacity-70 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>
        )}
      </div>
    </article>
  );
}

export default function Projects({ projects }) {
  return (
    <section id="projects" className="py-20">
      <div className="section-heading">
        <span />
        <h2 className="section-title">Projets</h2>
        <span />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
