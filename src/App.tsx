import { useEffect, useState } from 'react'
import { useTheme, useReveal } from './hooks'
import { LangProvider, useLang } from './lang'
import { profile, stackGroups } from './data/content'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Section from './components/Section'
import Projects from './components/Projects'
import Magazine from './components/Magazine'
import Experience from './components/Experience'

function Progress() {
  const [p, setP] = useState(0)
  useEffect(() => {
    const on = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      setP(h > 0 ? (window.scrollY / h) * 100 : 0)
    }
    on()
    window.addEventListener('scroll', on, { passive: true })
    window.addEventListener('resize', on)
    return () => { window.removeEventListener('scroll', on); window.removeEventListener('resize', on) }
  }, [])
  return <div className="progress" style={{ width: `${p}%` }} aria-hidden="true" />
}

function CopyMail() {
  const { t } = useLang()
  const [done, setDone] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setDone(true)
      setTimeout(() => setDone(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }
  return (
    <button className="btn btn-1" onClick={copy}>
      {done ? t.contact.copied : profile.email}
    </button>
  )
}

function Body() {
  const { theme, toggle } = useTheme()
  const { lang, t, c } = useLang()
  useReveal()

  return (
    <>
      <Progress />
      <div className="grain" aria-hidden="true" />
      <Nav theme={theme} onToggle={toggle} />
      <Hero />

      <Section id="about" num="01" title={t.sections.about}>
        {c.intro.map((x, i) => <p className="lead" key={i}>{x}</p>)}
        <p className="lead">{t.degreeLine(c.degree.degree, c.degree.school, c.degree.detail)}</p>
      </Section>

      <Section id="stack" num="02" title={t.sections.stack}>
        <div className="stack">
          {stackGroups.map(g => (
            <div className="srow" key={g.key}>
              <div className="cat">{c.stackLabels[g.key]}</div>
              <div className="chips">
                {g.items.map(i => <span className="chip" key={i}>{i}</span>)}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="work" num="03" title={t.sections.work}><Projects /></Section>
      <Section id="writing" num="04" title={t.sections.writing}><Magazine /></Section>
      <Section id="experience" num="05" title={t.sections.experience}><Experience /></Section>

      <section id="contact" className="rv">
        <div className="wrap">
          <div className="contact">
            <h2>{t.contact.title}</h2>
            <p>{t.contact.body}</p>
            <div className="cta" style={{ justifyContent: 'center' }}>
              <CopyMail />
              <a className="btn btn-2" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
              <a className="btn btn-2" href={`/cv-${lang}.pdf`} download target="_blank" rel="noreferrer">{t.cv}</a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap foot">
          <span>© {new Date().getFullYear()} Isabel Masaya</span>
          <span>Guatemala · {profile.languages}</span>
        </div>
      </footer>
    </>
  )
}

export default function App() {
  return <LangProvider><Body /></LangProvider>
}
