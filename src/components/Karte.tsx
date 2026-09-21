import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { karte } from '../data/trip'
import { ui } from '../data/ui'
import { useSprache } from '../i18n'
import Section from './Section'

/**
 * Marker als divIcon statt Leaflets Standard-PNG: so muss kein Bildpfad
 * durch den Bundler aufgelöst werden, die Farben folgen dem Farbschema und
 * die Nummer des Wegpunkts steht direkt drin.
 */
function markerIcon(nummer: number, istStart: boolean) {
  return L.divIcon({
    className: '',
    html: `<span class="marker ${istStart ? 'marker--start' : 'marker--burg'}">${nummer}</span>`,
    iconSize: [26, 26],
    iconAnchor: [13, 13],
    popupAnchor: [0, -14],
  })
}

/** Popup-Inhalt als DOM statt HTML-String – so kann nichts aus den Daten ausbrechen. */
function popupInhalt(nummer: number, name: string, beschreibung?: string) {
  const wurzel = document.createElement('div')

  const kopf = document.createElement('strong')
  kopf.textContent = `${nummer}. ${name}`
  wurzel.append(kopf)

  if (beschreibung) {
    wurzel.append(document.createElement('br'))
    wurzel.append(document.createTextNode(beschreibung))
  }
  return wurzel
}

export default function Karte() {
  const container = useRef<HTMLDivElement>(null)
  const { sprache, t } = useSprache()

  // Bei Sprachwechsel neu aufbauen, damit die Popups mitziehen.
  useEffect(() => {
    if (!container.current) return

    const map = L.map(container.current, {
      center: [karte.zentrum.lat, karte.zentrum.lng],
      zoom: karte.zoom,
      scrollWheelZoom: false,
    })

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map)

    const punkte: L.LatLngExpression[] = karte.orte.map((ort) => [ort.lat, ort.lng])

    // Gestrichelt, weil sie die Wegpunkte nur verbindet und nicht den Weg zeigt.
    const linie = L.polyline(punkte, {
      className: 'route',
      weight: 2,
      dashArray: '6 7',
      opacity: 0.9,
    }).addTo(map)

    const marker = karte.orte.map((ort, i) =>
      L.marker([ort.lat, ort.lng], { icon: markerIcon(i + 1, ort.istStart ?? false) })
        .addTo(map)
        .bindPopup(
          popupInhalt(i + 1, ort.name[sprache], ort.beschreibung?.[sprache]),
        ),
    )

    // Alle Wegpunkte ins Bild holen, egal wie das Fenster gerade aussieht.
    const gruppe = L.featureGroup([linie, ...marker])
    map.fitBounds(gruppe.getBounds(), { padding: [45, 45] })

    return () => {
      map.remove()
    }
  }, [sprache])

  return (
    <Section id="karte" nummer="05" titel={ui.titel.karte}>
      <p className="hinweis hinweis--block">{t(ui.karte.hinweis)}</p>
      <div
        ref={container}
        className="karte-flaeche"
        role="application"
        aria-label={t(ui.karte.beschriftung)}
      />
    </Section>
  )
}
