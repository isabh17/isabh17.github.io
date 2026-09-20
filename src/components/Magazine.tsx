import { magazineCover, magazineLink } from '../data/content'
import { useLang } from '../lang'

export default function Magazine() {
  const { t, c } = useLang()
  const m = c.magazine
  return (
    <div className="mag">
      <a className="cover" href={magazineLink} target="_blank" rel="noreferrer">
        <img src={magazineCover} alt={m.title} loading="lazy" />
      </a>
      <div>
        <h3>{m.title}</h3>
        <div className="mono magmeta">{m.role} · {m.published}</div>
        <div className="theme">{m.theme}</div>
        <ul>{m.topics.map(x => <li key={x}>{x}</li>)}</ul>
        <p className="lead magbody">{m.body}</p>
        <div className="plinks">
          <a href={magazineLink} target="_blank" rel="noreferrer">→ {t.readEdition}</a>
        </div>
      </div>
    </div>
  )
}
