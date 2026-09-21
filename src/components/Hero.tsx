import { trip } from '../data/trip'
import Countdown from './Countdown'

export default function Hero() {
  const hatBild = trip.bild !== ''
  // Bilder in public/ liegen unter der konfigurierten Basis (z. B. /bagtravel/).
  const bildUrl = hatBild ? `${import.meta.env.BASE_URL}${trip.bild}` : undefined

  return (
    <header className={`hero ${hatBild ? 'hero--bild' : ''}`}>
      {hatBild && (
        <div
          className="hero__bild"
          style={{ backgroundImage: `url(${bildUrl})` }}
          role="img"
          aria-label={trip.bildnachweis}
        />
      )}
      <div className="hero__inner">
        <p className="hero__org">{trip.organisation}</p>
        <h1 className="hero__title">{trip.titel}</h1>
        <p className="hero__subtitle">
          {trip.untertitel} · {trip.zeitraum}
        </p>
        <p className="hero__intro">{trip.einleitung}</p>
        <Countdown abreiseDatum={trip.abreiseDatum} />
      </div>
      {hatBild && <p className="hero__nachweis">{trip.bildnachweis}</p>}
    </header>
  )
}
