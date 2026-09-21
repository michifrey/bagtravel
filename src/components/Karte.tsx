import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { karte } from '../data/trip'
import Section from './Section'

/**
 * Marker als divIcon statt Leaflets Standard-PNG: so muss kein Bildpfad
 * durch den Bundler aufgelöst werden und die Farben folgen dem Farbschema.
 */
function markerIcon(istStart: boolean) {
  return L.divIcon({
    className: '',
    html: `<span class="marker ${istStart ? 'marker--start' : 'marker--burg'}"></span>`,
    iconSize: [18, 18],
    iconAnchor: [9, 9],
    popupAnchor: [0, -10],
  })
}

export default function Karte() {
  const container = useRef<HTMLDivElement>(null)

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

    const marker = karte.orte.map((ort) =>
      L.marker([ort.lat, ort.lng], { icon: markerIcon(ort.istStart ?? false) })
        .addTo(map)
        .bindPopup(
          `<strong>${ort.name}</strong>${ort.beschreibung ? `<br>${ort.beschreibung}` : ''}`,
        ),
    )

    // Alle Orte ins Bild holen, egal wie das Fenster gerade aussieht.
    if (marker.length > 0) {
      map.fitBounds(L.featureGroup(marker).getBounds(), { padding: [40, 40] })
    }

    return () => {
      map.remove()
    }
  }, [])

  return (
    <Section id="karte" nummer="03" titel="Karte">
      <p className="hinweis hinweis--block">
        Die Standorte sind ungefähr gesetzt – zum Orientieren reicht es, für die
        genaue Route gilt die Wanderkarte.
      </p>
      <div ref={container} className="karte-flaeche" role="application" aria-label="Karte der drei Burgen" />
    </Section>
  )
}
