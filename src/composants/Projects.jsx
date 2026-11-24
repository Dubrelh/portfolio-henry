import { ArrowUpRightIcon, Globe } from 'lucide-react';
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

// Motif grille dots sobre
const dotPattern = {
  backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)',
  backgroundSize: '18px 18px',
  backgroundColor: '#FAF8F5',
};

function FeaturedProject({ project }) {
  const ref = useReveal();
  const isGithub = project.link && project.link.includes('github.com');

  return (
    <div ref={ref} className="reveal card overflow-hidden mb-6">
      {/* Header image / dot pattern */}
      <div
        className="h-44 sm:h-56 w-full relative overflow-hidden"
        style={project.image_url ? {} : dotPattern}
      >
        {project.image_url ? (
          <img
            src={project.image_url}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono font-bold text-xl sm:text-2xl text-slate-400">
              {project.name}
            </span>
          </div>
        )}
        {/* Featured badge couleur bois */}
        <span className="absolute top-3 left-3 bg-[#DEB887] text-white font-mono text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full shadow-xs tracking-wider uppercase">
          ✦ Projet phare
        </span>
      </div>

      <div className="p-5 sm:p-7 flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h3 className="font-bold text-base sm:text-lg text-slate-900">{project.name}</h3>
            <span className="badge badge-status md:hidden">{project.status}</span>
          </div>
          <p className="text-slate-500 text-xs sm:text-sm italic mb-2">
            {project.tagline}
          </p>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((item) => (
              <span key={item} className="badge badge-brand">{item}</span>
            ))}
          </div>
        </div>

        <div className="flex md:flex-col items-center md:items-end justify-between md:justify-start gap-2 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
          <span className="badge badge-status hidden md:inline-flex">{project.status}</span>
          <span className="text-slate-400 text-xs font-mono">{project.role}</span>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="btn-outline btn-sm inline-flex items-center gap-1.5 mt-2"
            >
              {isGithub ? <GithubIcon size={13} /> : <Globe size={13} />}
              <span>{isGithub ? 'Voir le code' : 'Visiter le site'}</span>
              <ArrowUpRightIcon size={12} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  const ref = useReveal();
  const isGithub = project.link && project.link.includes('github.com');

  return (
    <article
      ref={ref}
      className="reveal card overflow-hidden flex flex-col justify-between"
    >
      <div>
        {/* Header visuel */}
        <div
          className="h-36 sm:h-44 w-full relative overflow-hidden"
          style={project.image_url ? {} : dotPattern}
        >
          {project.image_url ? (
            <img
              src={project.image_url}
              alt={project.name}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-mono font-bold text-lg text-slate-400">
                {project.name}
              </span>
            </div>
          )}
        </div>

        {/* Corps */}
        <div className="p-4 sm:p-5">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">{project.name}</h3>
            <span className="badge badge-status shrink-0 text-[10px]">{project.status}</span>
          </div>

          <p className="text-slate-400 font-mono text-[11px] mb-2">{project.role}</p>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.stack.map((item) => (
              <span key={item} className="badge badge-brand">{item}</span>
            ))}
          </div>
        </div>
      </div>

      {project.link && (
        <div className="px-4 pb-4 sm:px-5 sm:pb-5">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="btn-outline btn-sm inline-flex items-center gap-1.5 w-fit"
          >
            {isGithub ? <GithubIcon size={13} /> : <Globe size={13} />}
            <span>{isGithub ? 'Voir le projet' : 'Visiter le site'}</span>
            <ArrowUpRightIcon size={12} />
          </a>
        </div>
      )}
    </article>
  );
}

export default function Projects({ projects }) {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="py-16 sm:py-20">
      <SectionHeader label="// mes réalisations" title="Projets" />

      {/* Projet phare */}
      {featured && <FeaturedProject project={featured} />}

      {/* Autres projets */}
      <div className="grid gap-5 sm:grid-cols-2">
        {rest.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
