import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

function GithubIcon({ size = 18, className = "" }) {
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

function LinkedinIcon({ size = 18, className = "" }) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Contact({ contact }) {
  const ref = useReveal();

  const socialLinks = [
    contact.github && {
      label: 'GitHub',
      href: contact.github,
      Icon: GithubIcon,
      color: 'hover:text-neutral-900 dark:hover:text-white hover:border-neutral-400 dark:hover:border-white/40',
    },
    contact.linkedin && {
      label: 'LinkedIn',
      href: contact.linkedin,
      Icon: LinkedinIcon,
      color: 'hover:text-sky-600 dark:hover:text-sky-400 hover:border-sky-400/40',
    },
  ].filter(Boolean);

  return (
    <section id="contact" className="py-20">
      <div className="section-heading">
        <span />
        <h2 className="section-title">Contact</h2>
        <span />
      </div>

      <div ref={ref} className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
        {/* Info card */}
        <div className="glass-card p-8 flex flex-col gap-5">
          <h3 className="text-xl font-bold text-neutral-900 dark:text-white">Travaillons ensemble </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Je suis disponible pour des missions freelance, des opportunités professionnelles, ou des projets collaboratifs.
            N'hésitez pas à me contacter !
          </p>

          <div className="flex flex-col gap-4 mt-2">
            <a
              href={`tel:${contact.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-3 text-sm text-neutral-700 dark:text-neutral-300 hover:text-brand-500 transition-colors group"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-brand-500/10 dark:bg-brand-500/15 text-brand-600 dark:text-brand-400 group-hover:bg-brand-500/20 transition-colors">
                <PhoneIcon size={16} />
              </span>
              <span>{contact.phone}</span>
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-3 text-sm text-neutral-700 dark:text-neutral-300 hover:text-brand-500 transition-colors group"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-brand-500/10 dark:bg-brand-500/15 text-brand-600 dark:text-brand-400 group-hover:bg-brand-500/20 transition-colors">
                <MailIcon size={16} />
              </span>
              <span>{contact.email}</span>
            </a>
            <span className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400">
              <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-brand-500/10 dark:bg-brand-500/15 text-brand-600 dark:text-brand-400">
                <MapPinIcon size={16} />
              </span>
              <span>{contact.location}</span>
            </span>
          </div>
        </div>

        {/* Social links */}
        <div className="glass-card p-8 flex flex-col justify-center gap-4">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Réseaux</h3>
          <div className="flex flex-col gap-3">
            {socialLinks.map(({ label, href, Icon, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-3 px-4 py-3 rounded-xl border border-neutral-200 dark:border-white/10 text-neutral-600 dark:text-neutral-400 text-sm font-medium transition-all duration-200 ${color} hover:bg-neutral-100/80 dark:hover:bg-white/5`}
              >
                <Icon size={18} />
                <span>{label}</span>
              </a>
            ))}
            {socialLinks.length === 0 && (
              <p className="text-sm text-neutral-400">Aucun réseau configuré.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}