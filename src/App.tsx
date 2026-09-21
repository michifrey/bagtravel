import Hero from './components/Hero'
import Infos from './components/Infos'
import Karte from './components/Karte'
import Kontakte from './components/Kontakte'
import Nav from './components/Nav'
import Packliste from './components/Packliste'
import Programm from './components/Programm'
import Teilnehmende from './components/Teilnehmende'
import Wanderung from './components/Wanderung'
import { trip } from './data/trip'

export default function App() {
  return (
    <>
      <Hero />
      <Nav />
      <main className="inhalt">
        <Wanderung />
        <Programm />
        <Karte />
        <Infos />
        <Packliste />
        <Teilnehmende />
        <Kontakte />
      </main>
      <footer className="fuss">
        <p>
          {trip.organisation} · {trip.untertitel} · {trip.zeitraum}
        </p>
      </footer>
    </>
  )
}
