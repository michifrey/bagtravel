import { wanderung } from '../data/trip'
import Section from './Section'

const kennzahlen = [
  { label: 'Schwierigkeit', wert: wanderung.schwierigkeit },
  { label: 'Gehzeit', wert: wanderung.dauer },
  { label: 'Distanz', wert: wanderung.distanz },
  { label: 'Aufstieg', wert: wanderung.aufstieg },
]

export default function Wanderung() {
  return (
    <Section id="wanderung" titel="Die Wanderung">
      <p className="lead">{wanderung.beschreibung}</p>

      <dl className="kennzahlen">
        {kennzahlen.map((k) => (
          <div key={k.label} className="kennzahl">
            <dt className="kennzahl__label">{k.label}</dt>
            <dd className="kennzahl__wert">{k.wert}</dd>
          </div>
        ))}
      </dl>

      <p className="hinweis hinweis--block">{wanderung.hinweis}</p>

      {wanderung.hoehepunkte.length > 0 && (
        <ul className="hoehepunkte">
          {wanderung.hoehepunkte.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      )}
    </Section>
  )
}
