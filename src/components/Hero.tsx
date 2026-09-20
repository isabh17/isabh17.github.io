import { profile } from '../data/content'
import { useLang } from '../lang'

export default function Hero() {
  const { t, c } = useLang()
  return (
    <header className="hero" id="top">
      <div className="wrap hero-in">
        <div className="mono eyebrow">{profile.location} · {c.available}</div>
        <h1>Isabel<br /><span className="accent">Masaya</span></h1>
        <p className="hero-sub">{t.hero.sub}</p>
        <div className="pills">
          <span className="pill"><b>◆</b> {profile.timezone}</span>
          <span className="pill"><b>◆</b> {profile.languages}</span>
          <span className="pill"><b>◆</b> {profile.specialty}</span>
        </div>
        <div className="cta">
          <a className="btn btn-1" href="#work">{t.hero.cta1}</a>
          <a className="btn btn-2" href={`mailto:${profile.email}`}>{t.hero.cta2}</a>
        </div>
      </div>
    </header>
  )
}
