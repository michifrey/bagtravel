import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

export type Sprache = 'de' | 'en'

/** Ein Textbaustein in allen Sprachen. */
export type Text = Record<Sprache, string>

export const SPRACHEN: readonly Sprache[] = ['de', 'en']

const SPEICHER_KEY = 'bagtravel:sprache'

function istSprache(wert: unknown): wert is Sprache {
  return wert === 'de' || wert === 'en'
}

/**
 * Gespeicherte Wahl schlägt die Browsersprache; deutschsprachige Browser
 * bekommen Deutsch, alle anderen Englisch.
 */
function startSprache(): Sprache {
  try {
    const gespeichert = localStorage.getItem(SPEICHER_KEY)
    if (istSprache(gespeichert)) return gespeichert
  } catch {
    // Privater Modus oder blockierter Speicher – dann zählt nur der Browser.
  }

  if (typeof navigator === 'undefined') return 'de'
  return navigator.language.toLowerCase().startsWith('de') ? 'de' : 'en'
}

type SprachWert = {
  sprache: Sprache
  waehle: (sprache: Sprache) => void
  /** Holt die passende Fassung eines Textbausteins. */
  t: (text: Text) => string
}

const SprachContext = createContext<SprachWert | null>(null)

export function SprachProvider({ children }: { children: ReactNode }) {
  const [sprache, setSprache] = useState<Sprache>(startSprache)

  useEffect(() => {
    document.documentElement.lang = sprache === 'de' ? 'de-CH' : 'en'
    try {
      localStorage.setItem(SPEICHER_KEY, sprache)
    } catch {
      // Speichern nicht möglich – die Wahl gilt dann nur für diesen Besuch.
    }
  }, [sprache])

  const t = useCallback((text: Text) => text[sprache], [sprache])
  const wert = useMemo<SprachWert>(
    () => ({ sprache, waehle: setSprache, t }),
    [sprache, t],
  )

  return <SprachContext.Provider value={wert}>{children}</SprachContext.Provider>
}

export function useSprache(): SprachWert {
  const wert = useContext(SprachContext)
  if (!wert) throw new Error('useSprache ausserhalb von SprachProvider benutzt')
  return wert
}
