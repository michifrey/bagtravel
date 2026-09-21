import type { ReactNode } from 'react'
import { useSprache } from '../i18n'
import type { Text } from '../i18n'

type Props = {
  id: string
  /** Laufende Nummer für die Kopfzeile, z. B. «02». */
  nummer: string
  titel: Text
  /** Wird an den Titel gehängt, z. B. die Anzahl Teilnehmender. */
  zusatz?: string
  children: ReactNode
}

export default function Section({ id, nummer, titel, zusatz, children }: Props) {
  const { t } = useSprache()

  return (
    <section id={id} className="section">
      <header className="section__kopf">
        <span className="section__nummer">{nummer}</span>
        <h2 className="section__titel">
          {t(titel)}
          {zusatz && ` ${zusatz}`}
        </h2>
      </header>
      <div className="section__inhalt">{children}</div>
    </section>
  )
}
