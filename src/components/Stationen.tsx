import { stationen } from '../data/trip'
import type { Station } from '../data/trip'
import Section from './Section'

function Bild({ station }: { station: Station }) {
  if (station.bild === '') {
    return (
      <div className="station__platzhalter" aria-hidden="true">
        <span>Foto folgt</span>
      </div>
    )
  }

  // Bilder in public/ liegen unter der konfigurierten Basis (z. B. /bagtravel/).
  return (
    <figure className="station__figur">
      <img
        className="station__bild"
        src={`${import.meta.env.BASE_URL}${station.bild}`}
        alt={station.bildnachweis ?? station.name}
        loading="lazy"
        decoding="async"
      />
      {station.bildnachweis && (
        <figcaption className="station__nachweis">{station.bildnachweis}</figcaption>
      )}
    </figure>
  )
}

export default function Stationen() {
  if (stationen.length === 0) return null

  return (
    <Section id="stationen" nummer="03" titel="Die Stationen">
      <ol className="stationen">
        {stationen.map((station, i) => (
          <li key={station.name} className="station">
            <div className="station__medium">
              <Bild station={station} />
            </div>

            <div className="station__text">
              <p className="station__zaehler">
                {String(i + 1).padStart(2, '0')}
                {station.zeit && <span className="station__zeit">{station.zeit}</span>}
              </p>

              <h3 className="station__name">{station.name}</h3>
              {station.unterzeile && (
                <p className="station__unterzeile">{station.unterzeile}</p>
              )}

              {station.text.map((absatz, k) => (
                <p key={k} className="station__absatz">
                  {absatz}
                </p>
              ))}

              {station.lat !== undefined && station.lng !== undefined && (
                <a className="station__link" href="#karte">
                  Auf der Karte ansehen
                </a>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
