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
| Tagesprogramm                | `reisetage`      |
| Infokarten «Gut zu wissen»   | `infoBloecke`    |
| Packliste                    | `packliste`      |
| Teilnehmerliste              | `teilnehmende`   |
| Kontakte                     | `kontakte`       |

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
stellen.

Der Pfad `/bagtravel/` ist in `vite.config.ts` als `base` gesetzt. Läuft die
Seite später unter einer eigenen Domain, kann das über die Umgebungsvariable
`VITE_BASE=/` übersteuert werden.
