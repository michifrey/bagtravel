import { teilnehmende } from '../data/trip'
import Section from './Section'

export default function Teilnehmende() {
  if (teilnehmende.length === 0) return null

  return (
    <Section id="teilnehmende" titel={`Wer mitkommt (${teilnehmende.length})`}>
      <ul className="personen">
        {teilnehmende.map((person) => (
          <li key={person.name} className="person">
            <span className="person__name">{person.name}</span>
            {person.rolle && <span className="person__rolle">{person.rolle}</span>}
          </li>
        ))}
      </ul>
    </Section>
  )
}
