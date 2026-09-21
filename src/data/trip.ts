/**
 * Zentrale Inhaltsdatei der Reise-Website.
 *
 * Alles, was auf der Seite steht, kommt aus dieser Datei. Wer Inhalte
 * ändern will, bearbeitet nur hier – an den Komponenten muss nichts
 * angepasst werden. Leere Listen blenden den jeweiligen Abschnitt aus.
 *
 * Texte stehen zweisprachig als { de, en }. Beide Fassungen liegen
 * nebeneinander, damit beim Ändern keine vergessen geht. Was in beiden
 * Sprachen gleich ist (Zahlen, Uhrzeiten, Eigennamen), bleibt ein
 * einfacher String. Beschriftungen der Oberfläche stehen in ui.ts.
 */
import type { Text } from '../i18n'

export type Trip = {
  /** Firmen- bzw. Gruppenname, erscheint klein über dem Titel. */
  organisation: string
  titel: Text
  untertitel: Text
  /** Zeitraum als Anzeigetext. */
  zeitraum: Text
  /** Einleitender Text auf der Startseite (1–3 Sätze). */
  einleitung: Text
  /** Countdown-Ziel im Format YYYY-MM-DD. Leer lassen = kein Countdown. */
  abreiseDatum: string
  /** Hero-Bild aus public/, leer lassen = nur Farbverlauf. */
  bild: string
  bildnachweis: Text
}

export type Programmpunkt = {
  /** Uhrzeit oder Zeitfenster, z. B. «08:30» oder «nachmittags». */
  zeit: Text
  titel: Text
  beschreibung?: Text
  /** Ort oder Treffpunkt. */
  ort?: Text
}

export type Reisetag = {
  datum: Text
  /** Motto des Tages. */
  titel: Text
  programm: Programmpunkt[]
}

export type Wanderdaten = {
  /** Wanderskala des SAC, z. B. «T2» – in beiden Sprachen gleich. */
  schwierigkeit: string
  /** Reine Gehzeit, z. B. «03:10 h». */
  dauer: string
  distanz: string
  /** Aufstieg in Höhenmetern, z. B. «511 m». */
  aufstieg: string
  beschreibung: Text
  hoehepunkte: Text[]
  /** Kurzer Ausrüstungs-/Konditionshinweis unter den Kennzahlen. */
  hinweis: Text
}

export type Ort = {
  name: Text
  /** Kurze Einordnung, erscheint im Karten-Popup. */
  beschreibung?: Text
  /** Breitengrad (WGS84), z. B. 46.1925. */
  lat: number
  /** Längengrad (WGS84), z. B. 9.0186. */
  lng: number
  /** Startpunkt bzw. Bahnhof statt Burg – wird anders eingefärbt. */
  istStart?: boolean
}

export type Karte = {
  zentrum: { lat: number; lng: number }
  /** Zoomstufe beim Laden (höher = näher). */
  zoom: number
  orte: Ort[]
}

export type Station = {
  name: Text
  /** Uhrzeit oder Zeitfenster, passend zum Programm. */
  zeit?: Text
  /** Kurze Einordnung unter dem Namen. */
  unterzeile?: Text
  /** Fliesstext, ein Eintrag pro Absatz. */
  text: Text[]
  /** Dateiname in public/, z. B. 'sasso-corbaro.jpg'. Leer = Platzhalter. */
  bild: string
  bildnachweis?: Text
  /** Koordinaten; gesetzt erscheint ein Link auf die Karte. */
  lat?: number
  lng?: number
}

export type Galeriebild = {
  /** Dateiname in public/. */
  datei: string
  nachweis?: Text
}

export type Teilnehmer = {
  name: string
  /** Funktion oder Abteilung, optional. */
  rolle?: Text
}

export type Infoblock = {
  titel: Text
  /** Mehrere Absätze bzw. Stichpunkte. */
  inhalt: Text[]
}

export type Kontakt = {
  name: string
  rolle?: Text
  telefon?: string
  email?: string
}

// ---------------------------------------------------------------------------
// Inhalte – hier anpassen
// ---------------------------------------------------------------------------

export const trip: Trip = {
  organisation: 'Bergauer AG',
  titel: {
    de: 'Bellinzona – zu den drei Burgen',
    en: 'Bellinzona – the Three Castles',
  },
  untertitel: { de: 'Wandertag', en: 'Hiking day' },
  zeitraum: { de: '21. September 2026', en: '21 September 2026' },
  einleitung: {
    de:
      'Ein Tag im Tessin: von Bellinzona hinauf zu den drei mittelalterlichen ' +
      'Burgen und wieder zurück – mit Mittagessen im Grotto und genügend Zeit ' +
      'für die Aussicht.',
    en:
      'A day in Ticino: up from Bellinzona to the three medieval castles and ' +
      'back again – with lunch at the grotto and plenty of time for the view.',
  },
  abreiseDatum: '2026-09-21',
  bild: 'wehrgang-gruppe.jpg',
  bildnachweis: {
    de: 'Auf dem Wehrgang der Murata, im Rücken das Castelgrande',
    en: 'On the Murata rampart, Castelgrande behind',
  },
}

export const wanderung: Wanderdaten = {
  schwierigkeit: 'T2',
  dauer: '03:10 h',
  distanz: '9.6 km',
  aufstieg: '511 m',
  beschreibung: {
    de:
      'Wanderung von Bellinzona zu den drei mittelalterlichen Burgen ' +
      'Castelgrande, Ruinen Prada und Castello di Sasso Corbaro – und wenn die ' +
      'Zeit noch reicht zum Castello di Montebello. Danach zurück zum ' +
      'Ausgangspunkt.',
    en:
      'A hike from Bellinzona to the three medieval castles Castelgrande, the ' +
      'Prada ruins and Castello di Sasso Corbaro – and, if time allows, ' +
      'Castello di Montebello. Then back to where we started.',
  },
  hoehepunkte: [
    { de: 'Castelgrande', en: 'Castelgrande' },
    { de: 'Ruinen Prada', en: 'Prada ruins' },
    { de: 'Castello di Sasso Corbaro', en: 'Castello di Sasso Corbaro' },
    {
      de: 'Castello di Montebello (falls die Zeit reicht)',
      en: 'Castello di Montebello (if time allows)',
    },
  ],
  hinweis: {
    de:
      'Der Weg führt über Treppen, Wald- und Burgwege: gutes Schuhwerk und ' +
      'wetterfeste Kleidung sind Pflicht.',
    en:
      'The route runs over steps, forest paths and castle walkways: sturdy ' +
      'footwear and weatherproof clothing are essential.',
  },
}

export const karte: Karte = {
  zentrum: { lat: 46.1905, lng: 9.0235 },
  zoom: 14,
  orte: [
    {
      name: { de: 'Bahnhof Bellinzona', en: 'Bellinzona station' },
      beschreibung: {
        de: 'Start und Ziel der Wanderung.',
        en: 'Start and finish of the hike.',
      },
      lat: 46.1954,
      lng: 9.0172,
      istStart: true,
    },
    {
      name: { de: 'Castelgrande', en: 'Castelgrande' },
      beschreibung: {
        de: 'Die grösste und älteste der drei Burgen, direkt über der Altstadt.',
        en: 'The largest and oldest of the three castles, right above the old town.',
      },
      lat: 46.1925,
      lng: 9.0186,
    },
    {
      name: { de: 'Castello di Montebello', en: 'Castello di Montebello' },
      beschreibung: {
        de: 'Mittlere Burg auf dem Felssporn über der Stadt.',
        en: 'The middle castle, on the rocky spur above the town.',
      },
      lat: 46.1912,
      lng: 9.0248,
    },
    {
      name: { de: 'Castello di Sasso Corbaro', en: 'Castello di Sasso Corbaro' },
      beschreibung: {
        de: 'Die höchstgelegene der drei Burgen, rund 230 m über der Stadt.',
        en: 'The highest of the three castles, some 230 m above the town.',
      },
      lat: 46.1856,
      lng: 9.0283,
    },
  ],
}

export const reisetage: Reisetag[] = [
  {
    datum: {
      de: 'Montag, 21. September 2026',
      en: 'Monday, 21 September 2026',
    },
    titel: {
      de: 'Bellinzona und die drei Burgen',
      en: 'Bellinzona and the three castles',
    },
    programm: [
      {
        zeit: { de: '07:20', en: '07:20' },
        titel: { de: 'Treffpunkt', en: 'Meeting point' },
        ort: { de: 'Baden, Gleis 1', en: 'Baden, platform 1' },
        beschreibung: {
          de: 'Hier werden die Sandwiches und je ein Getränk pro Person verteilt.',
          en: 'Sandwiches and one drink per person are handed out here.',
        },
      },
      {
        zeit: { de: '07:38', en: '07:38' },
        titel: { de: 'Abfahrt nach Bellinzona', en: 'Departure for Bellinzona' },
        ort: { de: 'IR 16 Richtung Zürich', en: 'IR 16 towards Zurich' },
      },
      {
        zeit: { de: '09:42', en: '09:42' },
        titel: { de: 'Ankunft in Bellinzona', en: 'Arrival in Bellinzona' },
      },
      {
        zeit: { de: '10:00 – 16:00', en: '10:00 – 16:00' },
        titel: {
          de: 'Wanderung zu den drei Burgen',
          en: 'Hike to the three castles',
        },
        beschreibung: {
          de:
            'Castelgrande, Ruinen Prada und Castello di Sasso Corbaro, bei ' +
            'genügend Zeit auch Castello di Montebello – und zurück zum ' +
            'Ausgangspunkt.',
          en:
            'Castelgrande, the Prada ruins and Castello di Sasso Corbaro, plus ' +
            'Castello di Montebello if there is time – and back to the start.',
        },
      },
      {
        zeit: { de: 'ca. 13:00', en: 'approx. 13:00' },
        titel: { de: 'Mittagessen', en: 'Lunch' },
        ort: { de: 'Grotto die Pacifici', en: 'Grotto die Pacifici' },
      },
      {
        zeit: { de: 'nachmittags', en: 'afternoon' },
        titel: { de: 'Eigener Snack', en: 'Your own snack' },
        beschreibung: {
          de:
            'Für den Nachmittag bringt bitte jede und jeder selbst einen Snack ' +
            'und ein zusätzliches Getränk mit.',
          en:
            'For the afternoon, please bring your own snack and an extra drink.',
        },
      },
      {
        zeit: { de: '16:17', en: '16:17' },
        titel: {
          de: 'Rückreise ab Bellinzona',
          en: 'Return from Bellinzona',
        },
        ort: {
          de: 'IC 21 Richtung Arth-Goldau',
          en: 'IC 21 towards Arth-Goldau',
        },
      },
      {
        zeit: { de: '18:21', en: '18:21' },
        titel: { de: 'Ankunft in Baden', en: 'Arrival in Baden' },
      },
    ],
  },
]

export const stationen: Station[] = [
  {
    name: { de: 'Bahnhof Bellinzona', en: 'Bellinzona station' },
    zeit: { de: '09:42', en: '09:42' },
    unterzeile: { de: 'Ankunft und Start', en: 'Arrival and start' },
    text: [
      {
        de:
          'Vom Bahnhof geht es zu Fuss in die Altstadt – rund zehn Minuten nach ' +
          'Süden, vorbei an der Piazza Collegiata. Schon von unten sieht man ' +
          'die Mauern des Castelgrande über den Dächern liegen.',
        en:
          'From the station it is a ten-minute walk south into the old town, ' +
          'past Piazza Collegiata. Even from below you can see the walls of ' +
          'Castelgrande rising above the rooftops.',
      },
      {
        de: 'Hier endet der Tag auch wieder: Rückfahrt um 16:17 Uhr.',
        en: 'The day ends here too: the train back leaves at 16:17.',
      },
    ],
    bild: 'blick-bellinzona.jpg',
    bildnachweis: {
      de: 'Blick über Bellinzona und die Talebene',
      en: 'Looking out over Bellinzona and the valley floor',
    },
    lat: 46.1954,
    lng: 9.0172,
  },
  {
    name: { de: 'Castelgrande', en: 'Castelgrande' },
    zeit: { de: 'ab 10:00', en: 'from 10:00' },
    unterzeile: {
      de: 'Die älteste und grösste der drei Burgen',
      en: 'The oldest and largest of the three castles',
    },
    text: [
      {
        de:
          'Castelgrande steht auf einem Felshügel mitten in der Altstadt. Der ' +
          'Standort ist seit der Antike befestigt; was heute steht, wuchs über ' +
          'Jahrhunderte. Weithin sichtbar sind die beiden Türme: der Torre ' +
          'Bianca und der Torre Nera.',
        en:
          'Castelgrande sits on a rocky hill in the middle of the old town. ' +
          'The site has been fortified since antiquity; what stands today grew ' +
          'over centuries. Two towers are visible from afar: the Torre Bianca ' +
          'and the Torre Nera.',
      },
      {
        de:
          'In den 1980er- und 90er-Jahren baute der Tessiner Architekt Aurelio ' +
          'Galfetti die Anlage um und erschloss sie neu – ein viel beachtetes ' +
          'Stück Schweizer Architektur. Zusammen mit Montebello, Sasso Corbaro ' +
          'und der Stadtmauer gehört die Burg seit 2000 zum UNESCO-Welterbe.',
        en:
          'In the 1980s and 90s the Ticinese architect Aurelio Galfetti ' +
          'reworked the complex and opened it up anew – a much-noted piece of ' +
          'Swiss architecture. Together with Montebello, Sasso Corbaro and the ' +
          'town wall, it has been a UNESCO World Heritage Site since 2000.',
      },
    ],
    bild: 'castelgrande-hof.jpg',
    bildnachweis: {
      de: 'Im Hof des Castelgrande, dahinter der Torre Nera',
      en: 'In the Castelgrande courtyard, the Torre Nera behind',
    },
    lat: 46.1925,
    lng: 9.0186,
  },
  {
    name: { de: 'Ruinen Prada', en: 'Prada ruins' },
    unterzeile: { de: 'Zwischenstopp am Hang', en: 'A stop on the hillside' },
    text: [
      {
        de:
          'Auf dem Weg hinauf Richtung Sasso Corbaro liegen die Überreste einer ' +
          'älteren Befestigung am Hang oberhalb der Stadt. Ein kurzer Halt mit ' +
          'Blick zurück auf Bellinzona.',
        en:
          'On the way up towards Sasso Corbaro lie the remains of an older ' +
          'fortification on the slope above the town. A short stop, with a ' +
          'view back over Bellinzona.',
      },
    ],
    bild: '',
  },
  {
    name: { de: 'Castello di Sasso Corbaro', en: 'Castello di Sasso Corbaro' },
    unterzeile: {
      de: 'Die höchstgelegene der drei Burgen',
      en: 'The highest of the three castles',
    },
    text: [
      {
        de:
          'Sasso Corbaro liegt rund 230 Meter über der Stadt und ist der ' +
          'anstrengendste Teil des Aufstiegs – dafür entschädigt die Aussicht ' +
          'über die Magadinoebene bis zum Lago Maggiore.',
        en:
          'Sasso Corbaro stands some 230 metres above the town and is the ' +
          'hardest part of the climb – repaid by the view across the Magadino ' +
          'plain to Lake Maggiore.',
      },
      {
        de:
          'Gebaut wurde die quadratische Anlage 1478/79 in nur wenigen ' +
          'Monaten, im Auftrag von Mailand nach der Schlacht bei Giornico. Sie ' +
          'steht etwas abseits der beiden anderen Burgen, weil sie eine Lücke ' +
          'in der Verteidigung schliessen sollte.',
        en:
          'The square fortress was built in 1478/79 in a matter of months, on ' +
          'Milan’s orders after the battle of Giornico. It stands apart from ' +
          'the other two castles because it was meant to close a gap in the ' +
          'defences.',
      },
    ],
    bild: '',
    lat: 46.1856,
    lng: 9.0283,
  },
  {
    name: { de: 'Grotto die Pacifici', en: 'Grotto die Pacifici' },
    zeit: { de: 'ca. 13:00', en: 'approx. 13:00' },
    unterzeile: { de: 'Mittagessen', en: 'Lunch' },
    text: [
      {
        de:
          'Mittagspause im Grotto – die Tessiner Antwort auf den Berggasthof: ' +
          'Steintische im Schatten, einfache Küche, kein Grund zur Eile.',
        en:
          'Lunch at the grotto – Ticino’s answer to the mountain inn: stone ' +
          'tables in the shade, simple food, no reason to hurry.',
      },
    ],
    bild: '',
  },
  {
    name: { de: 'Castello di Montebello', en: 'Castello di Montebello' },
    unterzeile: { de: 'Falls die Zeit reicht', en: 'If time allows' },
    text: [
      {
        de:
          'Die mittlere der drei Burgen sitzt auf einem Felssporn östlich über ' +
          'der Altstadt. Ihr Kern stammt aus dem 13. Jahrhundert; die äusseren ' +
          'Ringmauern kamen später dazu. Von hier führt der Weg zurück ' +
          'hinunter zum Ausgangspunkt.',
        en:
          'The middle of the three castles sits on a rocky spur east above the ' +
          'old town. Its core dates from the 13th century; the outer curtain ' +
          'walls came later. From here the path leads back down to the start.',
      },
    ],
    bild: '',
    lat: 46.1912,
    lng: 9.0248,
  },
]

export const galerie: Galeriebild[] = [
  {
    datei: 'abstieg-stadt.jpg',
    nachweis: {
      de: 'Abstieg vom Castelgrande Richtung Stadt',
      en: 'Coming down from Castelgrande towards the town',
    },
  },
  {
    datei: 'abstieg-treppe.jpg',
    nachweis: {
      de: 'Die Treppe hinunter an der Mauer entlang',
      en: 'Down the steps along the wall',
    },
  },
  {
    datei: 'murata-wehrgang.jpg',
    nachweis: {
      de: 'Der Wehrgang der Murata',
      en: 'The Murata rampart walk',
    },
  },
  {
    datei: 'castelgrande-turm.jpg',
    nachweis: {
      de: 'Der Torre Nera über dem Hof',
      en: 'The Torre Nera above the courtyard',
    },
  },
]

export const teilnehmende: Teilnehmer[] = []

export const infoBloecke: Infoblock[] = [
  {
    titel: { de: 'Hinreise', en: 'Getting there' },
    inhalt: [
      {
        de: 'Treffpunkt: 07:20 Uhr, Baden Gleis 1.',
        en: 'Meeting point: 07:20, Baden platform 1.',
      },
      {
        de: 'Abfahrt 07:38 Uhr mit dem IR 16 Richtung Zürich.',
        en: 'Departure 07:38 on the IR 16 towards Zurich.',
      },
      {
        de: 'Ankunft in Bellinzona um 09:42 Uhr.',
        en: 'Arrival in Bellinzona at 09:42.',
      },
    ],
  },
  {
    titel: { de: 'Rückreise', en: 'Getting back' },
    inhalt: [
      {
        de: 'Abfahrt 16:17 Uhr ab Bellinzona mit dem IC 21 Richtung Arth-Goldau.',
        en: 'Departure 16:17 from Bellinzona on the IC 21 towards Arth-Goldau.',
      },
      {
        de: 'Ankunft in Baden um 18:21 Uhr.',
        en: 'Arrival in Baden at 18:21.',
      },
    ],
  },
  {
    titel: { de: 'Verpflegung', en: 'Food and drink' },
    inhalt: [
      {
        de:
          'Morgen-Snack: Wir bringen kleine Sandwiches für unterwegs und je ein ' +
          'Getränk (0.5 dl) pro Person mit. Verteilt wird am Treffpunkt in Baden.',
        en:
          'Morning snack: we bring small sandwiches for the way and one drink ' +
          '(0.5 dl) per person, handed out at the meeting point in Baden.',
      },
      {
        de: 'Mittagessen: ca. 13:00 Uhr im Grotto die Pacifici.',
        en: 'Lunch: around 13:00 at Grotto die Pacifici.',
      },
      {
        de:
          'Nachmittag: Bitte selbst einen Snack und ein zusätzliches Getränk ' +
          'mitnehmen.',
        en: 'Afternoon: please bring your own snack and an extra drink.',
      },
    ],
  },
]

export const packliste: Text[] = [
  { de: 'Wanderschuhe mit Profil', en: 'Hiking boots with grip' },
  { de: 'Wetterfeste Jacke', en: 'Weatherproof jacket' },
  {
    de: 'Sonnenschutz: Kappe, Sonnencreme, Sonnenbrille',
    en: 'Sun protection: cap, sunscreen, sunglasses',
  },
  {
    de: 'Nachmittags-Snack und zusätzliches Getränk',
    en: 'Afternoon snack and an extra drink',
  },
  { de: 'Trinkflasche', en: 'Water bottle' },
  { de: 'Rucksack', en: 'Backpack' },
  { de: 'Halbtax / GA bzw. Billett', en: 'Rail pass or ticket' },
  {
    de: 'Bargeld oder Karte fürs Mittagessen',
    en: 'Cash or card for lunch',
  },
  { de: 'Handy und Powerbank', en: 'Phone and power bank' },
  {
    de: 'Pflaster und persönliche Medikamente',
    en: 'Plasters and personal medication',
  },
]

export const kontakte: Kontakt[] = []
