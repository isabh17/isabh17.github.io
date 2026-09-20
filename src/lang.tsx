import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import type { Lang } from './data/i18n'
import { ui } from './data/i18n'
import type { Ui } from './data/i18n'
import { content } from './data/content'

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Ui; c: typeof content['en'] }
const LangCtx = createContext<Ctx | null>(null)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      const saved = localStorage.getItem('lang')
      if (saved === 'en' || saved === 'es') return saved
    } catch { /* private mode */ }
    return 'es'
  })

  useEffect(() => {
    document.documentElement.lang = lang
    try { localStorage.setItem('lang', lang) } catch { /* private mode */ }
  }, [lang])

  return (
    <LangCtx.Provider value={{ lang, setLang, t: ui[lang], c: content[lang] }}>
      {children}
    </LangCtx.Provider>
  )
}

export function useLang() {
  const v = useContext(LangCtx)
  if (!v) throw new Error('useLang must be used inside LangProvider')
  return v
}
