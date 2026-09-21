import { infoBloecke } from '../data/trip'
import { ui } from '../data/ui'
import { useSprache } from '../i18n'
import Section from './Section'

export default function Infos() {
  const { t } = useSprache()
  if (infoBloecke.length === 0) return null

  return (
    <Section id="infos" nummer="06" titel={ui.titel.infos}>
      <div className="karten">
        {infoBloecke.map((block) => (
          <article key={block.titel.de} className="karte">
            <h3 className="karte__titel">{t(block.titel)}</h3>
            {block.inhalt.map((absatz, i) => (
              <p key={i} className="karte__text">
                {t(absatz)}
              </p>
            ))}
          </article>
        ))}
      </div>
    </Section>
  )
}
