import { repos } from '../data/content'
import { useLang } from '../lang'
import Fact from './Fact'
import ErDiagram from './diagrams/ErDiagram'
import PipelineDiagram from './diagrams/PipelineDiagram'
import MlDiagram from './diagrams/MlDiagram'

const figures: Record<string, { el: JSX.Element; en: string; es: string }> = {
  databases: { el: <ErDiagram />, en: 'Banking schema — entities and foreign keys', es: 'Esquema bancario — entidades y claves foráneas' },
  distributed: { el: <PipelineDiagram />, en: 'How a vote travels through the system', es: 'El recorrido de un voto por el sistema' },
  chatbot: { el: <MlDiagram />, en: 'From raw text to a model running in the browser', es: 'Del texto crudo a un modelo corriendo en el navegador' },
}

export default function Projects() {
  const { lang, t, c } = useLang()
  return (
    <>
      {c.projects.map((p, i) => {
        const fig = figures[p.id]
        return (
          <article className="proj rv" key={p.id} style={{ transitionDelay: `${i * 90}ms` }}>
            <h3>{p.title}</h3>
            <div className="tagline">{p.tagline}</div>
            {fig && (
              <figure className="fig">
                {fig.el}
                <figcaption>{lang === 'es' ? fig.es : fig.en}</figcaption>
              </figure>
            )}
            {p.body.map((x, i) => <p key={i}>{x}</p>)}
            <div className="facts">
              {p.facts.map(f => <Fact key={f.label} value={f.value} label={f.label} />)}
            </div>
            <div className="tags">{p.tags.map((x, k) => <span className="tag" key={x} style={{ transitionDelay: `${k * 45}ms` }}>{x}</span>)}</div>
            <div className="plinks">
              <a href={repos[p.id]} target="_blank" rel="noreferrer">{t.repo}</a>
            </div>
          </article>
        )
      })}
    </>
  )
}
