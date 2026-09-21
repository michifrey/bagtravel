import { SPRACHEN, useSprache } from '../i18n'
import { ui } from '../data/ui'

export default function Sprachwahl() {
  const { sprache, waehle, t } = useSprache()

  return (
    <div className="sprachwahl" role="group" aria-label={t(ui.sprache.beschriftung)}>
      {SPRACHEN.map((s) => (
        <button
          key={s}
          type="button"
          className={`sprachwahl__knopf ${s === sprache ? 'sprachwahl__knopf--aktiv' : ''}`}
          aria-pressed={s === sprache}
          onClick={() => waehle(s)}
        >
          {s.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
