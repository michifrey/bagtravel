import { reisetage } from '../data/trip'
import Section from './Section'

export default function Programm() {
  if (reisetage.length === 0) return null

  return (
    <Section id="programm" titel="Programm">
      <ol className="tage">
        {reisetage.map((tag) => (
          <li key={tag.datum} className="tag">
            <div className="tag__kopf">
              <span className="tag__datum">{tag.datum}</span>
              <h3 className="tag__titel">{tag.titel}</h3>
            </div>
            <ul className="punkte">
              {tag.programm.map((punkt, i) => (
                <li key={`${punkt.titel}-${i}`} className="punkt">
                  <span className="punkt__zeit">{punkt.zeit}</span>
                  <div className="punkt__text">
                    <h4 className="punkt__titel">{punkt.titel}</h4>
                    {punkt.ort && <p className="punkt__ort">{punkt.ort}</p>}
                    {punkt.beschreibung && (
                      <p className="punkt__beschreibung">{punkt.beschreibung}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}
