/**
 * Zentrale Inhaltsdatei der Reise-Website.
 *
 * Alles, was auf der Seite steht, kommt aus dieser Datei. Wer Inhalte
 * ändern will, bearbeitet nur hier – an den Komponenten muss nichts
 * angepasst werden. Leere Listen blenden den jeweiligen Abschnitt aus.
 */

export type Trip = {
  /** Firmen- bzw. Gruppenname, erscheint klein über dem Titel. */
  organisation: string
  /** Haupttitel, z. B. das Reiseziel. */
  titel: string
  /** Kurzer Untertitel, z. B. «Firmenreise 2026». */
  untertitel: string
  /** Zeitraum als Anzeigetext, z. B. «12.–15. Juni 2026». */
  zeitraum: string
  /** Einleitender Text auf der Startseite (1–3 Sätze). */
  einleitung: string
  /** Countdown-Ziel im Format YYYY-MM-DD. Leer lassen = kein Countdown. */
  abreiseDatum: string
  /** Hero-Bild aus public/, leer lassen = nur Farbverlauf. */
  bild: string
  /** Bildnachweis, erscheint klein am Bildrand. */
  bildnachweis: string
}

export type Programmpunkt = {
  /** Uhrzeit oder Zeitfenster, z. B. «08:30» oder «nachmittags». */
  zeit: string
  titel: string
  beschreibung?: string
  /** Ort oder Treffpunkt. */
  ort?: string
}

export type Reisetag = {
  /** Datum als Anzeigetext, z. B. «Freitag, 12. Juni». */
  datum: string
  /** Motto des Tages, z. B. «Anreise & Ankommen». */
  titel: string
  programm: Programmpunkt[]
}

export type Wanderdaten = {
  /** Wanderskala des SAC, z. B. «T2». */
  schwierigkeit: string
  /** Reine Gehzeit, z. B. «03:10 h». */
  dauer: string
  distanz: string
  /** Aufstieg in Höhenmetern, z. B. «511 m». */
  aufstieg: string
  beschreibung: string
  hoehepunkte: string[]
  /** Kurzer Ausrüstungs-/Konditionshinweis unter den Kennzahlen. */
  hinweis: string
}

export type Ort = {
  name: string
  /** Kurze Einordnung, erscheint im Karten-Popup. */
  beschreibung?: string
  /** Breitengrad (WGS84), z. B. 46.1925. */
  lat: number
  /** Längengrad (WGS84), z. B. 9.0186. */
  lng: number
  /** Startpunkt bzw. Bahnhof statt Burg – wird anders eingefärbt. */
  istStart?: boolean
}

export type Karte = {
  /** Kartenmitte. */
  zentrum: { lat: number; lng: number }
  /** Zoomstufe beim Laden (höher = näher). */
  zoom: number
  orte: Ort[]
}

export type Teilnehmer = {
  name: string
  /** Funktion oder Abteilung, optional. */
  rolle?: string
}

export type Infoblock = {
  titel: string
  /** Mehrere Absätze bzw. Stichpunkte. */
  inhalt: string[]
}

export type Kontakt = {
  name: string
  rolle?: string
  telefon?: string
  email?: string
}

// ---------------------------------------------------------------------------
// Inhalte – hier anpassen
// ---------------------------------------------------------------------------

export const trip: Trip = {
  organisation: 'Bergauer AG',
  titel: 'Bellinzona – zu den drei Burgen',
  untertitel: 'Wandertag',
  zeitraum: '21. September 2026',
  einleitung:
    'Ein Tag im Tessin: von Bellinzona hinauf zu den drei mittelalterlichen ' +
    'Burgen und wieder zurück – mit Mittagessen im Grotto und genügend Zeit ' +
    'für die Aussicht.',
  abreiseDatum: '2026-09-21',
  bild: 'castelgrande.jpg',
  bildnachweis: 'Castelgrande, Bellinzona',
}

export const wanderung: Wanderdaten = {
  schwierigkeit: 'T2',
  dauer: '03:10 h',
  distanz: '9.6 km',
  aufstieg: '511 m',
  beschreibung:
    'Wanderung von Bellinzona zu den drei mittelalterlichen Burgen ' +
    'Castelgrande, Ruinen Prada und Castello di Sasso Corbaro – und wenn die ' +
    'Zeit noch reicht zum Castello di Montebello. Danach zurück zum ' +
    'Ausgangspunkt.',
  hoehepunkte: [
    'Castelgrande',
    'Ruinen Prada',
    'Castello di Sasso Corbaro',
    'Castello di Montebello (falls die Zeit reicht)',
  ],
  hinweis:
    'Der Weg führt über Treppen, Wald- und Burgwege: gutes Schuhwerk und ' +
    'wetterfeste Kleidung sind Pflicht.',
}

export const karte: Karte = {
  zentrum: { lat: 46.1905, lng: 9.0235 },
  zoom: 14,
  orte: [
    {
      name: 'Bahnhof Bellinzona',
      beschreibung: 'Start und Ziel der Wanderung.',
      lat: 46.1954,
      lng: 9.0172,
      istStart: true,
    },
    {
      name: 'Castelgrande',
      beschreibung: 'Die grösste und älteste der drei Burgen, direkt über der Altstadt.',
      lat: 46.1925,
      lng: 9.0186,
    },
    {
      name: 'Castello di Montebello',
      beschreibung: 'Mittlere Burg auf dem Felssporn über der Stadt.',
      lat: 46.1912,
      lng: 9.0248,
    },
    {
      name: 'Castello di Sasso Corbaro',
      beschreibung: 'Die höchstgelegene der drei Burgen, rund 230 m über der Stadt.',
      lat: 46.1856,
      lng: 9.0283,
    },
  ],
}

export const reisetage: Reisetag[] = [
  {
    datum: 'Montag, 21. September 2026',
    titel: 'Bellinzona und die drei Burgen',
    programm: [
      {
        zeit: '07:20',
        titel: 'Treffpunkt',
        ort: 'Baden, Gleis 1',
        beschreibung:
          'Hier werden die Sandwiches und je ein Getränk pro Person verteilt.',
      },
      {
        zeit: '07:38',
        titel: 'Abfahrt nach Bellinzona',
        ort: 'IR 16 Richtung Zürich',
      },
      {
        zeit: '09:42',
        titel: 'Ankunft in Bellinzona',
      },
      {
        zeit: '10:00 – 16:00',
        titel: 'Wanderung zu den drei Burgen',
        beschreibung:
          'Castelgrande, Ruinen Prada und Castello di Sasso Corbaro, bei ' +
          'genügend Zeit auch Castello di Montebello – und zurück zum ' +
          'Ausgangspunkt.',
      },
      {
        zeit: 'ca. 13:00',
        titel: 'Mittagessen',
        ort: 'Grotto die Pacifici',
      },
      {
        zeit: 'nachmittags',
        titel: 'Eigener Snack',
        beschreibung:
          'Für den Nachmittag bringt bitte jede und jeder selbst einen Snack ' +
          'und ein zusätzliches Getränk mit.',
      },
      {
        zeit: '16:17',
        titel: 'Rückreise ab Bellinzona',
        ort: 'IC 21 Richtung Arth-Goldau',
      },
      {
        zeit: '18:21',
        titel: 'Ankunft in Baden',
      },
    ],
  },
]

export const teilnehmende: Teilnehmer[] = []

export const infoBloecke: Infoblock[] = [
  {
    titel: 'Hinreise',
    inhalt: [
      'Treffpunkt: 07:20 Uhr, Baden Gleis 1.',
      'Abfahrt 07:38 Uhr mit dem IR 16 Richtung Zürich.',
      'Ankunft in Bellinzona um 09:42 Uhr.',
    ],
  },
  {
    titel: 'Rückreise',
    inhalt: [
      'Abfahrt 16:17 Uhr ab Bellinzona mit dem IC 21 Richtung Arth-Goldau.',
      'Ankunft in Baden um 18:21 Uhr.',
    ],
  },
  {
    titel: 'Verpflegung',
    inhalt: [
      'Morgen-Snack: Wir bringen kleine Sandwiches für unterwegs und je ein ' +
        'Getränk (0.5 dl) pro Person mit. Verteilt wird am Treffpunkt in Baden.',
      'Mittagessen: ca. 13:00 Uhr im Grotto die Pacifici.',
      'Nachmittag: Bitte selbst einen Snack und ein zusätzliches Getränk ' +
        'mitnehmen.',
    ],
  },
]

export const packliste: string[] = [
  'Wanderschuhe mit Profil',
  'Wetterfeste Jacke',
  'Sonnenschutz: Kappe, Sonnencreme, Sonnenbrille',
  'Nachmittags-Snack und zusätzliches Getränk',
  'Trinkflasche',
  'Rucksack',
  'Halbtax / GA bzw. Billett',
  'Bargeld oder Karte fürs Mittagessen',
  'Handy und Powerbank',
  'Pflaster und persönliche Medikamente',
]

export const kontakte: Kontakt[] = []
