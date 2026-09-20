import { useLang } from '../lang'

export default function Experience() {
  const { t, c } = useLang()
  return (
    <div className="tl">
      {c.experience.map(e => (
        <div className={`item${e.current ? ' now' : ''}`} key={e.title + e.when}>
          <div className="when">{e.when}</div>
          <h3>{e.title}</h3>
          <div className="where">{e.where}</div>
          <p>{e.body}</p>
          {e.link && <a href={e.link} target="_blank" rel="noreferrer">{t.readEdition} →</a>}
        </div>
      ))}
    </div>
  )
}
