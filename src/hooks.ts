import { useEffect, useRef, useState } from 'react'

export type Theme = 'dark' | 'light'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const saved = localStorage.getItem('theme')
      if (saved === 'dark' || saved === 'light') return saved
    } catch { /* private mode */ }
    return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('theme', theme) } catch { /* private mode */ }
  }, [theme])

  return { theme, toggle: () => setTheme(t => (t === 'dark' ? 'light' : 'dark')) }
}

export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? '')

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] },
    )
    ids.forEach(id => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [ids])

  return active
}

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.rv')
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 },
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}


/** Cuenta desde 0 hasta el valor cuando el elemento entra en pantalla. */
export function useCountUp(raw: string) {
  const ref = useRef<HTMLElement | null>(null)
  const [out, setOut] = useState(raw)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // separa prefijo numérico de sufijo: "2,075" -> 2075 ; "20k" -> 20 + "k"
    const m = raw.match(/^([\d.,]+)(.*)$/)
    if (!m) return
    const target = parseFloat(m[1].replace(/,/g, ''))
    const suffix = m[2]
    if (!isFinite(target) || target === 0) return
    const grouped = m[1].includes(',')

    const fmt = (n: number) => {
      const v = Math.round(n)
      return (grouped ? v.toLocaleString('en-US') : String(v)) + suffix
    }

    let raf = 0
    const obs = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting) return
      obs.disconnect()
      const dur = 1100
      const t0 = performance.now()
      const tick = (t: number) => {
        const p = Math.min((t - t0) / dur, 1)
        const eased = 1 - Math.pow(1 - p, 3)
        setOut(fmt(target * eased))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      setOut(fmt(0))
      raf = requestAnimationFrame(tick)
    }, { threshold: 0.4 })

    obs.observe(el)
    return () => { obs.disconnect(); cancelAnimationFrame(raf) }
  }, [raw])

  return { ref, out }
}

/** Sigue el puntero para mover el resplandor de la portada. */
export function usePointerGlow() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const hero = document.querySelector<HTMLElement>('.hero')
    if (!hero) return
    const on = (e: PointerEvent) => {
      const r = hero.getBoundingClientRect()
      hero.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`)
      hero.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`)
    }
    hero.addEventListener('pointermove', on)
    return () => hero.removeEventListener('pointermove', on)
  }, [])
}
