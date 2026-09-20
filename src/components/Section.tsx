import type { ReactNode } from 'react'

export default function Section(
  { id, num, title, children }: { id: string; num: string; title: string; children: ReactNode },
) {
  return (
    <section id={id} className="rv">
      <div className="wrap">
        <div className="head">
          <span className="num">{num}</span>
          <h2>{title}</h2>
          <span className="rule" />
        </div>
        {children}
      </div>
    </section>
  )
}
