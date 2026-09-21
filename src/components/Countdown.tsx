import { useEffect, useState } from 'react'

/** Ganze Tage von heute bis zum Abreisedatum, oder null wenn kein Datum gesetzt ist. */
function tageBis(abreiseDatum: string): number | null {
  if (!abreiseDatum) return null
  const ziel = new Date(`${abreiseDatum}T00:00:00`)
  if (Number.isNaN(ziel.getTime())) return null

  const heute = new Date()
  heute.setHours(0, 0, 0, 0)
  return Math.round((ziel.getTime() - heute.getTime()) / 86_400_000)
}

export default function Countdown({ abreiseDatum }: { abreiseDatum: string }) {
  const [tage, setTage] = useState(() => tageBis(abreiseDatum))

  // Über Mitternacht hinweg aktuell halten, ohne sekündlich zu rechnen.
  useEffect(() => {
    const id = setInterval(() => setTage(tageBis(abreiseDatum)), 60_000)
    return () => clearInterval(id)
  }, [abreiseDatum])

  if (tage === null) return null

  if (tage > 0) {
    return (
      <p className="countdown">
        <strong>{tage}</strong> {tage === 1 ? 'Tag' : 'Tage'} bis zur Abreise
      </p>
    )
  }
  if (tage === 0) return <p className="countdown">Heute geht’s los!</p>
  return <p className="countdown">Die Reise liegt hinter uns.</p>
}
