import { wanderung } from '../data/trip'
import { ui } from '../data/ui'
import { useSprache } from '../i18n'
import Section from './Section'

const kennzahlen = [
  { label: ui.kennzahl.schwierigkeit, wert: wanderung.schwierigkeit },
  { label: ui.kennzahl.dauer, wert: wanderung.dauer },
  { label: ui.kennzahl.distanz, wert: wanderung.distanz },
  { label: ui.kennzahl.aufstieg, wert: wanderung.aufstieg },
]

export default function Wanderung() {
  const { t } = useSprache()

  return (
    <Section id="wanderung" nummer="01" titel={ui.titel.wanderung}>
      <p className="lead">{t(wanderung.beschreibung)}</p>

      <dl className="kennzahlen">
        {kennzahlen.map((k) => (
          <div key={k.wert} className="kennzahl">
            <dt className="kennzahl__label">{t(k.label)}</dt>
            <dd className="kennzahl__wert">{k.wert}</dd>
          </div>
        ))}
      </dl>

      <p className="notiz">{t(wanderung.hinweis)}</p>

      {wanderung.hoehepunkte.length > 0 && (
        <ul className="hoehepunkte">
          {wanderung.hoehepunkte.map((h) => (
            <li key={h.de}>{t(h)}</li>
          ))}
        </ul>
      )}
    </Section>
  )
}
