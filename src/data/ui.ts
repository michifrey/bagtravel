/**
 * Beschriftungen der Oberfläche – alles, was nicht Reiseinhalt ist.
 * Reisetexte stehen in trip.ts.
 */
import type { Text } from '../i18n'

export const ui = {
  nav: {
    wanderung: { de: 'Wanderung', en: 'Hike' },
    programm: { de: 'Programm', en: 'Itinerary' },
    stationen: { de: 'Stationen', en: 'Stops' },
    galerie: { de: 'Bilder', en: 'Photos' },
    karte: { de: 'Karte', en: 'Map' },
    infos: { de: 'Infos', en: 'Info' },
    packliste: { de: 'Packliste', en: 'Packing' },
    teilnehmende: { de: 'Wer mitkommt', en: "Who's Coming" },
    kontakte: { de: 'Kontakte', en: 'Contacts' },
    bereiche: { de: 'Seitenabschnitte', en: 'Page sections' },
  },

  titel: {
    wanderung: { de: 'Die Wanderung', en: 'The Hike' },
    programm: { de: 'Programm', en: 'Itinerary' },
    stationen: { de: 'Die Stationen', en: 'The Stops' },
    galerie: { de: 'Bilder vom Tag', en: 'Photos from the Day' },
    karte: { de: 'Karte', en: 'Map' },
    infos: { de: 'Gut zu wissen', en: 'Good to Know' },
    packliste: { de: 'Packliste', en: 'Packing List' },
    teilnehmende: { de: 'Wer mitkommt', en: "Who's Coming" },
    kontakte: { de: 'Kontakte', en: 'Contacts' },
  },

  kennzahl: {
    schwierigkeit: { de: 'Schwierigkeit', en: 'Difficulty' },
    dauer: { de: 'Gehzeit', en: 'Walking time' },
    distanz: { de: 'Distanz', en: 'Distance' },
    aufstieg: { de: 'Aufstieg', en: 'Ascent' },
  },

  countdown: {
    tagEinzahl: { de: 'Tag bis zur Abreise', en: 'day to go' },
    tagMehrzahl: { de: 'Tage bis zur Abreise', en: 'days to go' },
    heute: { de: 'Heute geht’s los!', en: 'Today’s the day!' },
    vorbei: { de: 'Die Reise liegt hinter uns.', en: 'The trip is behind us.' },
  },

  station: {
    platzhalter: { de: 'Foto folgt', en: 'Photo to come' },
    kartenLink: { de: 'Auf der Karte ansehen', en: 'See on the map' },
  },

  karte: {
    hinweis: {
      de: 'Die Standorte sind ungefähr gesetzt – zum Orientieren reicht es, für die genaue Route gilt die Wanderkarte.',
      en: 'The markers are approximate – fine for orientation; for the exact route use the hiking map.',
    },
    beschriftung: { de: 'Karte der drei Burgen', en: 'Map of the three castles' },
  },

  packliste: {
    hinweis: {
      de: 'Abgehakte Einträge werden nur in deinem Browser gespeichert.',
      en: 'Ticked items are stored in your browser only.',
    },
  },

  sprache: {
    beschriftung: { de: 'Sprache', en: 'Language' },
    de: { de: 'Deutsch', en: 'German' },
    en: { de: 'Englisch', en: 'English' },
  },

  seitentitel: {
    de: 'Bergauer AG – Reise',
    en: 'Bergauer AG – Trip',
  },
  beschreibung: {
    de: 'Reiseprogramm, Infos und Packliste für die Reise der Bergauer AG.',
    en: 'Itinerary, information and packing list for the Bergauer AG trip.',
  },
} satisfies Record<string, Text | Record<string, Text>>
