import { trip, wanderung } from '../data/trip'
import Countdown from './Countdown'

export default function Hero() {
  const hatBild = trip.bild !== ''
  // Bilder in public/ liegen unter der konfigurierten Basis (z. B. /bagtravel/).
  const bildUrl = hatBild ? `${import.meta.env.BASE_URL}${trip.bild}` : undefined

  return (
    <header className={`hero ${hatBild ? 'hero--bild' : ''}`}>
      {hatBild && (
        <img
          className="hero__bild"
          src={bildUrl}
          alt={trip.bildnachweis}
          fetchPriority="high"
          decoding="async"
        />
      )}

      <div className="hero__inner">
        <p className="hero__org">{trip.organisation}</p>
        <h1 className="hero__titel">{trip.titel}</h1>

        <div className="hero__meta">
          <span>{trip.untertitel}</span>
          <span className="hero__punkt" aria-hidden="true" />
          <span>{trip.zeitraum}</span>
          <span className="hero__punkt" aria-hidden="true" />
          <span>
            {wanderung.distanz} · {wanderung.aufstieg}
          </span>
        </div>

        <p className="hero__intro">{trip.einleitung}</p>
        <Countdown abreiseDatum={trip.abreiseDatum} />
      </div>

      {hatBild && <p className="hero__nachweis">{trip.bildnachweis}</p>}
    </header>
  )
}
