import { teilnehmende } from '../data/trip'
import { ui } from '../data/ui'
import { useSprache } from '../i18n'
import Section from './Section'

export default function Teilnehmende() {
  const { t } = useSprache()
  if (teilnehmende.length === 0) return null

  return (
    <Section
      id="teilnehmende"
      nummer="08"
      titel={ui.titel.teilnehmende}
      zusatz={`(${teilnehmende.length})`}
    >
      <ul className="personen">
        {teilnehmende.map((person) => (
          <li key={person.name} className="person">
            <span className="person__name">{person.name}</span>
            {person.rolle && <span className="person__rolle">{t(person.rolle)}</span>}
          </li>
        ))}
      </ul>
    </Section>
  )
}
