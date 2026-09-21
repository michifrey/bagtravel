import { reisetage } from '../data/trip'
import { ui } from '../data/ui'
import { useSprache } from '../i18n'
import Section from './Section'

export default function Programm() {
  const { t } = useSprache()
  if (reisetage.length === 0) return null

  return (
    <Section id="programm" nummer="02" titel={ui.titel.programm}>
      <ol className="tage">
        {reisetage.map((tag) => (
          <li key={tag.datum.de} className="tag">
            <div className="tag__kopf">
              <span className="tag__datum">{t(tag.datum)}</span>
              <h3 className="tag__titel">{t(tag.titel)}</h3>
            </div>

            <ol className="zeitachse">
              {tag.programm.map((punkt, i) => (
                <li key={`${punkt.titel.de}-${i}`} className="punkt">
                  <span className="punkt__zeit">{t(punkt.zeit)}</span>
                  <div className="punkt__text">
                    <h4 className="punkt__titel">{t(punkt.titel)}</h4>
                    {punkt.ort && <p className="punkt__ort">{t(punkt.ort)}</p>}
                    {punkt.beschreibung && (
                      <p className="punkt__beschreibung">{t(punkt.beschreibung)}</p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </Section>
  )
}
