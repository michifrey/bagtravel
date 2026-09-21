import { kontakte, teilnehmende } from '../data/trip'
import { ui } from '../data/ui'
import { useSprache } from '../i18n'
import Sprachwahl from './Sprachwahl'

const eintraege = [
  { id: 'wanderung', label: ui.nav.wanderung },
  { id: 'programm', label: ui.nav.programm },
  { id: 'stationen', label: ui.nav.stationen },
  { id: 'galerie', label: ui.nav.galerie },
  { id: 'karte', label: ui.nav.karte },
  { id: 'infos', label: ui.nav.infos },
  { id: 'packliste', label: ui.nav.packliste },
  ...(teilnehmende.length > 0
    ? [{ id: 'teilnehmende', label: ui.nav.teilnehmende }]
    : []),
  ...(kontakte.length > 0 ? [{ id: 'kontakte', label: ui.nav.kontakte }] : []),
]

export default function Nav() {
  const { t } = useSprache()

  return (
    <nav className="nav" aria-label={t(ui.nav.bereiche)}>
      <div className="nav__inner">
        <ul className="nav__list">
          {eintraege.map((e) => (
            <li key={e.id}>
              <a href={`#${e.id}`}>{t(e.label)}</a>
            </li>
          ))}
        </ul>
        <Sprachwahl />
      </div>
    </nav>
  )
}
