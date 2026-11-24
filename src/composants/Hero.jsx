import { DownloadIcon, ArrowRightIcon } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function Hero({ identity }) {
  const ref1 = useReveal();
  const ref2 = useReveal();

  const initials = identity.full_name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  const cvUrl = encodeURI(identity.cv_url || '/CV Henry Kemeni.pdf');
  const photoUrl = identity.photo_url || '/ppprofile.jpg';

  return (
    <section
      id="home"
      className="relative min-h-[90vh] md:min-h-screen flex items-center pt-24 pb-12 sm:pt-28 sm:pb-16"
    >
      {/* Background tech image /background.jpg étiré en pleine largeur avec fondu progressif */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-[550px] sm:h-[650px] md:h-[720px] pointer-events-none z-0 overflow-hidden">
        <img
          src="/background.jpg"
          alt=""
          className="w-full h-full object-cover object-top"
          style={{
            opacity: 0.65,
            WebkitMaskImage: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 50%, rgba(0,0,0,0) 100%)',
            maskImage: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 50%, rgba(0,0,0,0) 100%)',
          }}
        />
        {/* Voile dégradé doux pour transition fluide vers le blanc pur */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.55) 75%, #FFFFFF 100%)',
          }}
        />
      </div>

      {/* Contenu principal étiré naturellement */}
      <div className="relative z-10 w-full grid gap-10 lg:gap-14 md:grid-cols-[1.1fr_0.9fr] items-center">
        {/* Left — texte */}
        <div ref={ref1} className="reveal text-left">
          <span className="section-label">{'// développeur logiciel'}</span>

          <h1
            className="tracking-tight text-slate-900 leading-[1.08] mt-2 mb-4"
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)',
              fontWeight: 800,
            }}
          >
            Fotso Kemeni<br />
            <span style={{ color: '#DEB887' }}>Dubrel Henry</span>
          </h1>

          <p className="text-slate-600 font-medium text-base sm:text-lg mb-2">
            Développeur logiciel — Full-Stack &amp; Mobile
          </p>

          <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-lg mb-6 sm:mb-8">
            {identity.tagline}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a href="#projects" className="btn-primary w-full sm:w-auto shadow-sm">
              <span>Voir mes projets</span>
              <ArrowRightIcon size={15} />
            </a>
            <a
              href={cvUrl}
              download="CV_Henry_Kemeni.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-outline w-full sm:w-auto"
            >
              <DownloadIcon size={15} />
              <span>Télécharger mon CV</span>
            </a>
          </div>

          {/* Mini stack tags */}
          <div className="flex flex-wrap gap-2 mt-6 sm:mt-8">
            {['React', 'Next.js', 'Node.js', 'NestJS', 'React Native'].map((tech) => (
              <span key={tech} className="badge badge-brand">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right — Cadre photo original : Fenêtre IDE épurée avec contour bois décalé */}
        <div ref={ref2} className="reveal reveal-delay-2 flex justify-center md:justify-end">
          <div className="relative group">
            {/* Cadre arrière décalé couleur bois #DEB887 pour effet de profondeur */}
            <div
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border-2 border-[#DEB887]/80 bg-[#FAF6F0]/60 transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4"
              style={{ zIndex: 0 }}
            />

            {/* Fenêtre principale style composant de code / IDE */}
            <div
              className="relative z-10 w-64 sm:w-80 md:w-[340px] bg-white rounded-2xl border border-slate-200/90 shadow-[0_16px_40px_rgba(15,23,42,0.08)] overflow-hidden transition-transform duration-300 group-hover:-translate-y-1"
            >
              {/* Barre de titre de fenêtre */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-50/90 border-b border-slate-100">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#DEB887]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono font-medium text-slate-500">
                  <span className="text-[#A67C48] font-bold">&lt;/&gt;</span>
                  <span>henry.tsx</span>
                </div>
                <div className="w-6 flex justify-end">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Disponible" />
                </div>
              </div>

              {/* Photo du profil agrandie */}
              <div className="h-80 sm:h-[400px] md:h-[430px] w-full overflow-hidden bg-slate-100">
                <img
                  src={photoUrl}
                  alt={identity.full_name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-5xl font-black text-[#A67C48] bg-[#FAF6F0]">${initials}</div>`;
                  }}
                />
              </div>

              {/* Barre basse discrète type status bar */}
              <div className="flex items-center justify-between px-3.5 py-1.5 bg-white border-t border-slate-100/90 text-[10px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#DEB887]" />
                  <span>status: ready</span>
                </span>
                <span className="text-[#A67C48] font-medium">Full-Stack Dev</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
