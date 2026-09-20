import type { ReactNode } from 'react'

export default function Section(
  { id, title, children }: { id: string; title: string; children: ReactNode },
) {
  return (
    <section id={id} className="rv">
      <div className="wrap">
        <div className="flower" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="18" height="18">
            <g fill="currentColor">
              <ellipse cx="12" cy="6.4" rx="2.6" ry="3.9" />
              <ellipse cx="16" cy="9.5" rx="2.6" ry="3.9" transform="rotate(72 16 9.5)" />
              <ellipse cx="14.5" cy="14.3" rx="2.6" ry="3.9" transform="rotate(144 14.5 14.3)" />
              <ellipse cx="9.5" cy="14.3" rx="2.6" ry="3.9" transform="rotate(216 9.5 14.3)" />
              <ellipse cx="8" cy="9.5" rx="2.6" ry="3.9" transform="rotate(288 8 9.5)" />
            </g>
            <circle cx="12" cy="11" r="1.9" fill="var(--bg)" />
          </svg>
        </div>
        <h2 className="sechead">{title}</h2>
        {children}
      </div>
    </section>
  )
}
