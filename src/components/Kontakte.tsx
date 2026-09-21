import { kontakte } from '../data/trip'
import Section from './Section'

export default function Kontakte() {
  if (kontakte.length === 0) return null

  return (
    <Section id="kontakte" nummer="08" titel="Kontakte">
      <ul className="kontakte">
        {kontakte.map((kontakt) => (
          <li key={kontakt.name} className="kontakt">
            <span className="kontakt__name">{kontakt.name}</span>
            {kontakt.rolle && <span className="kontakt__rolle">{kontakt.rolle}</span>}
            {kontakt.telefon && (
              <a href={`tel:${kontakt.telefon.replace(/\s/g, '')}`}>{kontakt.telefon}</a>
            )}
            {kontakt.email && <a href={`mailto:${kontakt.email}`}>{kontakt.email}</a>}
          </li>
        ))}
      </ul>
    </Section>
  )
}
