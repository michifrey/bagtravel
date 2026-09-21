import { infoBloecke } from '../data/trip'
import Section from './Section'

export default function Infos() {
  if (infoBloecke.length === 0) return null

  return (
    <Section id="infos" titel="Gut zu wissen">
      <div className="karten">
        {infoBloecke.map((block) => (
          <article key={block.titel} className="karte">
            <h3 className="karte__titel">{block.titel}</h3>
            {block.inhalt.map((absatz, i) => (
              <p key={i} className="karte__text">
                {absatz}
              </p>
            ))}
          </article>
        ))}
      </div>
    </Section>
  )
}
