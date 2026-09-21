import { useEffect } from 'react'
import Hero from './components/Hero'
import Infos from './components/Infos'
import Karte from './components/Karte'
import Kontakte from './components/Kontakte'
import Nav from './components/Nav'
import Packliste from './components/Packliste'
import Programm from './components/Programm'
import Stationen from './components/Stationen'
import Teilnehmende from './components/Teilnehmende'
import Wanderung from './components/Wanderung'
import { trip } from './data/trip'
import { ui } from './data/ui'
import { SprachProvider, useSprache } from './i18n'

function Seite() {
  const { t } = useSprache()

  // Titel und Beschreibung stehen statisch im HTML; bei Sprachwechsel
  // müssen sie nachgeführt werden.
  useEffect(() => {
    document.title = t(ui.seitentitel)
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', t(ui.beschreibung))
  }, [t])

  return (
    <>
      <Hero />
      <Nav />
      <main className="inhalt">
        <Wanderung />
        <Programm />
        <Stationen />
        <Karte />
        <Infos />
        <Packliste />
        <Teilnehmende />
        <Kontakte />
      </main>
      <footer className="fuss">
        <p>
          {trip.organisation} · {t(trip.untertitel)} · {t(trip.zeitraum)}
        </p>
      </footer>
    </>
  )
}

export default function App() {
  return (
    <SprachProvider>
      <Seite />
    </SprachProvider>
  )
}
