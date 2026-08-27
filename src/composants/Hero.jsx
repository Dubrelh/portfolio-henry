import { MapPinIcon, MailIcon, PhoneIcon, DownloadIcon } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function Hero({ identity, contact }) {
  const ref1 = useReveal();
  const ref2 = useReveal();

  const initials = identity.full_name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  const cvUrl = encodeURI(identity.cv_url || '/cv henry kemeni.pdf');
  const photoUrl = identity.photo_url || '/ppprofile.jpg';

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="w-full grid gap-12 py-16 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        {/* Left */}
        <div ref={ref1} className="reveal">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-brand-500">
            Bonjour, je suis
          </p>
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl text-neutral-900 dark:text-white leading-tight">
            {identity.full_name}
          </h1>
          <h2 className="mt-3 text-xl font-semibold text-neutral-600 dark:text-neutral-400 sm:text-2xl">
            {identity.role}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-300/90">
            {identity.tagline}
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              Voir mes projets
            </a>
            <a
              href={cvUrl}
              download="CV_Henry_Kemeni.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              <DownloadIcon size={16} />
              Télécharger mon CV
            </a>
            <a href="#contact" className="btn-outline">
              Me contacter
            </a>
          </div>

          {/* Info badges */}
          <div className="mt-8 flex flex-wrap gap-2">
            <span className="badge badge-outline">
              <MapPinIcon size={12} />
              {identity.location}
            </span>
            <span className="badge badge-outline">
              <MailIcon size={12} />
              {contact.email}
            </span>
            <span className="badge badge-outline">
              <PhoneIcon size={12} />
              {contact.phone}
            </span>
          </div>
        </div>

        {/* Right — Profile Card */}
        <div ref={ref2} className="reveal reveal-delay-2 flex justify-center">
          <div className="relative">
              {/* Photo Frame */}
              <div className="relative w-60 h-80 rounded-2xl overflow-hidden p-1 shadow-xl">
                <img
                  src={photoUrl}
                  alt={identity.full_name}
                  className="w-full h-full object-cover rounded-xl"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-4xl font-black text-white bg-neutral-900">${initials}</div>`;
                  }}
                />
              </div>

          </div>
        </div>
      </div>
    </section>
  );
}
