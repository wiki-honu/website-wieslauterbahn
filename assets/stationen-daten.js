/**
 * ============================================================================
 *  STATIONEN-FOTOS — die zwei historischen Fotos (Januar 2022, kurz vor
 *  Wiederaufnahme des Betriebs) je Haltepunkt auf die-stationen.html.
 *  Reihenfolge hier MUSS zur Reihenfolge der Stationskarten in
 *  die-stationen.html passen (data-index 0-7 auf den "gallery-trigger"-
 *  Buttons dort zeigt genau auf den Eintrag mit demselben Index hier).
 * ============================================================================
 *
 * SO FÜGST DU EIN WEITERES FOTO ZU EINER STATION HINZU:
 *   Einfach einen weiteren Pfad in die "bilder"-Liste des betreffenden
 *   Eintrags einfügen — die Lightbox zeigt bei mehreren Bildern automatisch
 *   Pfeil-Schaltflächen links/rechts an (auch mit den Pfeiltasten der
 *   Tastatur bedienbar).
 *
 * DIE FELDER IM EINZELNEN:
 *   bilder   Liste von Bild-Pfaden (siehe landschaft-daten.js für Details).
 *   titel    Name der Station, wird in der Lightbox als Bildunterschrift gezeigt.
 *   datum    Optionales Datum — hier bewusst leer gelassen.
 *   urheber  Optionale Quellenangabe — hier bewusst leer gelassen.
 *   alt      Alt-Text für Screenreader.
 *
 * WICHTIG BEI ZWEI DESIGN-VARIANTEN:
 *   Diese Datei muss identisch in prototyp/assets/ UND prototyp-rot/assets/
 *   vorliegen (siehe Hinweis in status-daten.js).
 * ============================================================================
 */

var WLB_STATIONEN_BILDER = [
  { bilder: ["assets/stationen/hinterweidenthal-ost.jpg", "assets/stationen/hinterweidenthal-ost-2.jpg"], titel: "Hinterweidenthal Ost", datum: "", urheber: "", alt: "Bahnsteig und Gleise am Haltepunkt Hinterweidenthal Ost" },
  { bilder: ["assets/stationen/hinterweidenthal-ort.jpg", "assets/stationen/hinterweidenthal-ort-2.jpg"], titel: "Hinterweidenthal Ort", datum: "", urheber: "", alt: "Haltepunkt Hinterweidenthal Ort mit Stationsschild und Empfangsgebäude" },
  { bilder: ["assets/stationen/moosbachtal.jpg", "assets/stationen/moosbachtal-2.jpg"], titel: "Moosbachtal", datum: "", urheber: "", alt: "Haltepunkt Moosbachtal mit Wartehäuschen und Gleisverlauf durchs Tal" },
  { bilder: ["assets/stationen/dahn.jpg", "assets/stationen/dahn-2.jpg"], titel: "Dahn", datum: "", urheber: "", alt: "Haltepunkt Dahn mit Gleis entlang der Ortsdurchfahrt" },
  { bilder: ["assets/stationen/dahn-sued.jpg", "assets/stationen/dahn-sued-2.jpg"], titel: "Dahn Süd", datum: "", urheber: "", alt: "Bahnhof Dahn Süd mit Bahnsteig, Parkschild P2 und Ortsdurchfahrt" },
  { bilder: ["assets/stationen/busenberg-schindhard.jpg", "assets/stationen/busenberg-schindhard-2.jpg"], titel: "Busenberg-Schindhard", datum: "", urheber: "", alt: "Haltepunkt Busenberg-Schindhard mit historischem Wagen und Empfangsgebäude" },
  { bilder: ["assets/stationen/bruchweiler-baerenbach.jpg", "assets/stationen/bruchweiler-baerenbach-2.jpg"], titel: "Bruchweiler-Bärenbach", datum: "", urheber: "", alt: "Bahnsteig Bruchweiler-Bärenbach mit Gleisverlauf durch den Ort" },
  { bilder: ["assets/stationen/bundenthal-rumbach.jpg", "assets/stationen/bundenthal-rumbach-2.jpg"], titel: "Bundenthal-Rumbach", datum: "", urheber: "", alt: "Gleisanlage am Endbahnhof Bundenthal-Rumbach" }
];
