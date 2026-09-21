import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { karte } from '../data/trip'
import { ui } from '../data/ui'
import { useSprache } from '../i18n'
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

/** Popup-Inhalt als DOM statt HTML-String – so kann nichts aus den Daten ausbrechen. */
function popupInhalt(name: string, beschreibung?: string) {
  const wurzel = document.createElement('div')
  const stark = document.createElement('strong')
  stark.textContent = name
  wurzel.append(stark)

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

    const marker = karte.orte.map((ort) =>
      L.marker([ort.lat, ort.lng], { icon: markerIcon(ort.istStart ?? false) })
        .addTo(map)
        .bindPopup(
          popupInhalt(ort.name[sprache], ort.beschreibung?.[sprache]),
        ),
    )

    // Alle Orte ins Bild holen, egal wie das Fenster gerade aussieht.
    if (marker.length > 0) {
      map.fitBounds(L.featureGroup(marker).getBounds(), { padding: [40, 40] })
    }

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
