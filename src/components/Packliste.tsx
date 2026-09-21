import { useEffect, useState } from 'react'
import { packliste } from '../data/trip'
import { ui } from '../data/ui'
import { useSprache } from '../i18n'
import Section from './Section'

const SPEICHER_KEY = 'bagtravel:packliste'

/** Abgehakte Einträge aus dem Browser lesen; im Privatmodus kann das fehlschlagen. */
function ladeErledigt(): string[] {
  try {
    const roh = localStorage.getItem(SPEICHER_KEY)
    const wert: unknown = roh ? JSON.parse(roh) : []
    return Array.isArray(wert) ? wert.filter((e): e is string => typeof e === 'string') : []
  } catch {
    return []
  }
}

export default function Packliste() {
  const [erledigt, setErledigt] = useState<string[]>(ladeErledigt)
  const { t } = useSprache()

  useEffect(() => {
    try {
      localStorage.setItem(SPEICHER_KEY, JSON.stringify(erledigt))
    } catch {
      // Speichern nicht möglich – die Liste funktioniert trotzdem, nur ohne Merken.
    }
  }, [erledigt])

  if (packliste.length === 0) return null

  // Gemerkt wird die deutsche Fassung als Schlüssel, damit ein Sprachwechsel
  // die Haken nicht verliert.
  const umschalten = (schluessel: string) =>
    setErledigt((alt) =>
      alt.includes(schluessel) ? alt.filter((e) => e !== schluessel) : [...alt, schluessel],
    )

  return (
    <Section id="packliste" nummer="06" titel={ui.titel.packliste}>
      <p className="hinweis">{t(ui.packliste.hinweis)}</p>
      <ul className="packliste">
        {packliste.map((eintrag) => (
          <li key={eintrag.de}>
            <label className="packliste__eintrag">
              <input
                type="checkbox"
                checked={erledigt.includes(eintrag.de)}
                onChange={() => umschalten(eintrag.de)}
              />
              <span>{t(eintrag)}</span>
            </label>
          </li>
        ))}
      </ul>
    </Section>
  )
}
