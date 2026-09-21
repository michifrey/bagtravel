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
      de: 'Die Wegpunkte sind in der Reihenfolge des Tages nummeriert. Die gestrichelte Linie verbindet sie nur – sie zeigt nicht den tatsächlichen Wegverlauf. Die Standorte sind ungefähr gesetzt.',
      en: 'The waypoints are numbered in the order we walked them. The dashed line merely connects them – it does not show the actual trail. Positions are approximate.',
    },
    beschriftung: { de: 'Karte der drei Burgen', en: 'Map of the three castles' },
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
    de: 'Programm, Stationen und Bilder vom Wandertag der Bergauer AG.',
    en: 'Itinerary, stops and photos from the Bergauer AG hiking day.',
  },
} satisfies Record<string, Text | Record<string, Text>>
