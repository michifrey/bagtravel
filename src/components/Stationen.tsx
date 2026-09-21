import { stationen } from '../data/trip'
import type { Station } from '../data/trip'
import { ui } from '../data/ui'
import { useSprache } from '../i18n'
import Section from './Section'

function Bild({ station }: { station: Station }) {
  const { t } = useSprache()

  if (station.bild === '') {
    return (
      <div className="station__platzhalter" aria-hidden="true">
        <span>{t(ui.station.platzhalter)}</span>
      </div>
    )
  }

  // Bilder in public/ liegen unter der konfigurierten Basis (z. B. /bagtravel/).
  return (
    <figure className="station__figur">
      <img
        className="station__bild"
        src={`${import.meta.env.BASE_URL}${station.bild}`}
        alt={t(station.bildnachweis ?? station.name)}
        loading="lazy"
        decoding="async"
      />
      {station.bildnachweis && (
        <figcaption className="station__nachweis">{t(station.bildnachweis)}</figcaption>
      )}
    </figure>
  )
}

export default function Stationen() {
  const { t } = useSprache()
  if (stationen.length === 0) return null

  return (
    <Section id="stationen" nummer="03" titel={ui.titel.stationen}>
      <ol className="stationen">
        {stationen.map((station, i) => (
          <li key={station.name.de} className="station">
            <div className="station__medium">
              <Bild station={station} />
            </div>

            <div className="station__text">
              <p className="station__zaehler">
                {String(i + 1).padStart(2, '0')}
                {station.zeit && <span className="station__zeit">{t(station.zeit)}</span>}
              </p>

              <h3 className="station__name">{t(station.name)}</h3>
              {station.unterzeile && (
                <p className="station__unterzeile">{t(station.unterzeile)}</p>
              )}

              {station.text.map((absatz, k) => (
                <p key={k} className="station__absatz">
                  {t(absatz)}
                </p>
              ))}

              {station.lat !== undefined && station.lng !== undefined && (
                <a className="station__link" href="#karte">
                  {t(ui.station.kartenLink)}
                </a>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
