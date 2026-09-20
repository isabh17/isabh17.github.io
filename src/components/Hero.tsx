import { profile } from '../data/content'
import { useLang } from '../lang'

export default function Hero() {
  const { t, c } = useLang()
  return (
    <header className="hero" id="top">
      <div className="wrap hero-in">
        <div className="mono eyebrow">{profile.location} · {c.available}</div>
        <h1>Isabel <span className="accent">Masaya</span></h1>
        <p className="hero-sub">{t.hero.sub}</p>
      </div>
      <a className="scroll" href="#work" aria-label={t.hero.cta1}>
        <span>{t.hero.cta1}</span>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none"
          stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 4v15M6 13l6 6 6-6" />
        </svg>
      </a>
    </header>
  )
}
