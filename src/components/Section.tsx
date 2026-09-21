import type { ReactNode } from 'react'

type Props = {
  id: string
  /** Laufende Nummer für die Kopfzeile, z. B. «02». */
  nummer: string
  titel: string
  children: ReactNode
}

export default function Section({ id, nummer, titel, children }: Props) {
  return (
    <section id={id} className="section">
      <header className="section__kopf">
        <span className="section__nummer">{nummer}</span>
        <h2 className="section__titel">{titel}</h2>
      </header>
      <div className="section__inhalt">{children}</div>
    </section>
  )
}
