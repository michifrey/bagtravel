import { trip } from '../data/trip'
import Countdown from './Countdown'

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero__inner">
        <p className="hero__org">{trip.organisation}</p>
        <h1 className="hero__title">{trip.titel}</h1>
        <p className="hero__subtitle">
          {trip.untertitel} · {trip.zeitraum}
        </p>
        <p className="hero__intro">{trip.einleitung}</p>
        <Countdown abreiseDatum={trip.abreiseDatum} />
      </div>
    </header>
  )
}
