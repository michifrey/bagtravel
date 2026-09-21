import { useEffect, useState } from 'react'
import { packliste } from '../data/trip'
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

  useEffect(() => {
    try {
      localStorage.setItem(SPEICHER_KEY, JSON.stringify(erledigt))
    } catch {
      // Speichern nicht möglich – die Liste funktioniert trotzdem, nur ohne Merken.
    }
  }, [erledigt])

  if (packliste.length === 0) return null

  const umschalten = (eintrag: string) =>
    setErledigt((alt) =>
      alt.includes(eintrag) ? alt.filter((e) => e !== eintrag) : [...alt, eintrag],
    )

  return (
    <Section id="packliste" titel="Packliste">
      <p className="hinweis">
        Abgehakte Einträge werden nur in deinem Browser gespeichert.
      </p>
      <ul className="packliste">
        {packliste.map((eintrag) => (
          <li key={eintrag}>
            <label className="packliste__eintrag">
              <input
                type="checkbox"
                checked={erledigt.includes(eintrag)}
                onChange={() => umschalten(eintrag)}
              />
              <span>{eintrag}</span>
            </label>
          </li>
        ))}
      </ul>
    </Section>
  )
}
