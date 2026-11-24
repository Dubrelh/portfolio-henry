import { PhoneIcon, MailIcon, MapPinIcon } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import SectionHeader from './SectionHeader';

function GithubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    },
    contact.linkedin && {
      label: 'LinkedIn',
      href: contact.linkedin,
      Icon: LinkedinIcon,
    },
  ].filter(Boolean);

  const infoItems = [
    { Icon: PhoneIcon, label: contact.phone, href: `tel:${contact.phone.replace(/\s+/g, '')}` },
    { Icon: MailIcon, label: contact.email, href: `mailto:${contact.email}` },
    { Icon: MapPinIcon, label: contact.location, href: null },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20">
      <SectionHeader label="// parlons-en" title="Contact" />

      <div ref={ref} className="reveal grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
        {/* Info card */}
        <div className="card p-6 sm:p-8 flex flex-col justify-between gap-6">
          <div>
            <h3 className="font-bold text-base sm:text-lg text-slate-900 mb-2">
              Construisons quelque chose ensemble
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              Disponible pour des projets ambitieux, missions freelance ou opportunités en ingénierie logicielle.
            </p>
          </div>

          <div className="space-y-3">
            {infoItems.map(({ Icon, label, href }) =>
              href ? (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-3 p-2 rounded-xl text-slate-600 hover:text-[#7E5B31] hover:bg-[#FAF6F0]/60 transition-colors"
                >
                  <span className="shrink-0 flex items-center justify-center w-9 h-9 rounded-lg bg-[#FAF6F0] text-[#7E5B31] border border-[#E8D5B7]/60">
                    <Icon size={16} />
                  </span>
                  <span className="text-xs sm:text-sm font-medium">{label}</span>
                </a>
              ) : (
                <div
                  key={label}
                  className="flex items-center gap-3 p-2 text-slate-600"
                >
                  <span className="shrink-0 flex items-center justify-center w-9 h-9 rounded-lg bg-[#FAF6F0] text-[#7E5B31] border border-[#E8D5B7]/60">
                    <Icon size={16} />
                  </span>
                  <span className="text-xs sm:text-sm font-medium">{label}</span>
                </div>
              )
            )}
          </div>
        </div>

        {/* Réseaux sociaux */}
        <div className="card p-6 sm:p-8 flex flex-col justify-center gap-4">
          <h3 className="font-semibold text-sm sm:text-base text-slate-900">Réseaux &amp; Profils</h3>
          <div className="space-y-2.5">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-slate-200 text-slate-700 text-xs sm:text-sm font-medium transition-all duration-200 hover:border-[#DEB887] hover:bg-[#FAF6F0]/60 hover:shadow-xs"
              >
                <Icon size={18} />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
