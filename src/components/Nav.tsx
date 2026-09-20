import { useActiveSection } from '../hooks'
import { useLang } from '../lang'

const ids = ['about', 'stack', 'work', 'writing', 'experience', 'contact'] as const

export default function Nav({ theme, onToggle }: { theme: string; onToggle: () => void }) {
  const active = useActiveSection(ids as unknown as string[])
  const { lang, setLang, t } = useLang()

  return (
    <nav className="nav">
      <div className="wrap nav-in">
        <a className="brand" href="#top">Isabel <em>Masaya</em></a>
        <div className="nav-links">
          {ids.map(id => (
            <a key={id} href={`#${id}`} className={active === id ? 'on' : ''}>{t.nav[id]}</a>
          ))}
        </div>
        <div className="nav-tools">
          <button className="lang" onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
            aria-label={lang === 'en' ? 'Cambiar a español' : 'Switch to English'}>
            <span className={lang === 'en' ? 'on' : ''}>EN</span>
            <span className="sep">/</span>
            <span className={lang === 'es' ? 'on' : ''}>ES</span>
          </button>
          <button className="toggle" onClick={onToggle}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
            {theme === 'dark' ? (
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="4.2" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" />
              </svg>
            ) : (
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}
