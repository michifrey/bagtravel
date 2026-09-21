import { galerie } from '../data/trip'
import { ui } from '../data/ui'
import { useSprache } from '../i18n'
import Section from './Section'

export default function Galerie() {
  const { t } = useSprache()
  if (galerie.length === 0) return null

  return (
    <Section id="galerie" nummer="04" titel={ui.titel.galerie}>
      <ul className="galerie">
        {galerie.map((bild) => (
          <li key={bild.datei} className="galerie__eintrag">
            <figure className="galerie__figur">
              {/* Bilder in public/ liegen unter der konfigurierten Basis. */}
              <img
                className="galerie__bild"
                src={`${import.meta.env.BASE_URL}${bild.datei}`}
                alt={bild.nachweis ? t(bild.nachweis) : ''}
                loading="lazy"
                decoding="async"
              />
              {bild.nachweis && (
                <figcaption className="galerie__nachweis">{t(bild.nachweis)}</figcaption>
              )}
            </figure>
          </li>
        ))}
      </ul>
    </Section>
  )
}
