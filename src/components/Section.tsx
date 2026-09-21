import type { ReactNode } from 'react'

type Props = {
  id: string
  titel: string
  children: ReactNode
}

export default function Section({ id, titel, children }: Props) {
  return (
    <section id={id} className="section">
      <h2 className="section__title">{titel}</h2>
      {children}
    </section>
  )
}
