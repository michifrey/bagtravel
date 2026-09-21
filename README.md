# Bergauer AG – Reise-Website

Website zur Wanderung von Bellinzona zu den drei Burgen.

Live: <https://michifrey.github.io/bagtravel/> (sobald GitHub Pages aktiviert ist)

## Inhalte ändern

Sämtliche Texte, das Programm, die Infoblöcke und die Packliste stehen in
**einer einzigen Datei**:

```
src/data/trip.ts
```

Dort anpassen – an den Komponenten muss nichts geändert werden. Leere Listen
blenden den jeweiligen Abschnitt automatisch aus.

| Was                          | Wo in `trip.ts`  |
| ---------------------------- | ---------------- |
| Titel, Untertitel, Zeitraum  | `trip`           |
| Countdown-Datum              | `trip.abreiseDatum` (`YYYY-MM-DD`, leer = aus) |
| Kennzahlen & Burgen          | `wanderung`      |
| Hero-Bild & Bildnachweis     | `trip.bild`, `trip.bildnachweis` |
| Kartenmitte, Zoom, Marker    | `karte`          |
| Tagesprogramm                | `reisetage`      |
| Infokarten «Gut zu wissen»   | `infoBloecke`    |
| Packliste                    | `packliste`      |
| Teilnehmerliste              | `teilnehmende`   |
| Kontakte                     | `kontakte`       |

## Bilder

Bilder liegen in `public/` und werden über ihren Dateinamen referenziert
(z. B. `trip.bild = 'castelgrande.jpg'`). Vite stellt der URL automatisch die
konfigurierte Basis voran, im Code ist also kein Pfad nötig.

## Karte

Die Karte nutzt [Leaflet](https://leafletjs.com/) mit Kacheln von
OpenStreetMap – beides ohne API-Schlüssel. Die Marker stehen in `karte.orte`
in `src/data/trip.ts` und sind ungefähr gesetzt; Koordinaten lassen sich dort
direkt korrigieren.

## Lokal starten

```bash
npm install
npm run dev
```

## Bauen und prüfen

```bash
npm run build      # Typecheck + Produktionsbuild nach dist/
npm run preview    # gebaute Seite lokal ansehen
npm run typecheck  # nur Typen prüfen
```

## Deployment

Ein Push auf `main` baut die Seite und veröffentlicht sie über GitHub Pages
(`.github/workflows/deploy.yml`).

Einmalig nötig: unter **Settings → Pages** die Source auf **GitHub Actions**
stellen. Das muss von Hand passieren – der Workflow kann es nicht selbst tun,
weil der Standard-`GITHUB_TOKEN` keine Rechte hat, eine Pages-Site anzulegen
(`Resource not accessible by integration`).

Der Pfad `/bagtravel/` ist in `vite.config.ts` als `base` gesetzt. Läuft die
Seite später unter einer eigenen Domain, kann das über die Umgebungsvariable
`VITE_BASE=/` übersteuert werden.
