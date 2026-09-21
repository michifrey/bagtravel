import { kontakte, teilnehmende } from '../data/trip'

const eintraege = [
  { id: 'wanderung', label: 'Wanderung' },
  { id: 'programm', label: 'Programm' },
  { id: 'infos', label: 'Infos' },
  { id: 'packliste', label: 'Packliste' },
  ...(teilnehmende.length > 0 ? [{ id: 'teilnehmende', label: 'Wer mitkommt' }] : []),
  ...(kontakte.length > 0 ? [{ id: 'kontakte', label: 'Kontakte' }] : []),
]

export default function Nav() {
  return (
    <nav className="nav" aria-label="Seitenabschnitte">
      <ul className="nav__list">
        {eintraege.map((e) => (
          <li key={e.id}>
            <a href={`#${e.id}`}>{e.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
