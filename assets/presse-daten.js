/**
 * ============================================================================
 *  PRESSEMITTEILUNGEN / AKTUELLES
 *  Wird an zwei Stellen verwendet:
 *    - presse.html   → zeigt ALLE Einträge (neueste zuerst)
 *    - index.html    → zeigt automatisch nur die 3 NEUESTEN Einträge
 *  Du musst also nur HIER etwas eintragen — beide Seiten aktualisieren sich
 *  von selbst.
 * ============================================================================
 *
 * SO FÜGST DU EINE NEUE MELDUNG HINZU:
 *   1. Ein neues { ... } - Objekt in die Liste WLB_PRESSE weiter unten einfügen
 *      (am besten ganz oben in der Liste, direkt nach "var WLB_PRESSE = [").
 *   2. Nach dem neuen Objekt ein Komma nicht vergessen, wenn danach noch
 *      weitere Einträge folgen.
 *   3. Die Reihenfolge in der Datei spielt KEINE Rolle — die Anzeige wird
 *      automatisch nach dem Feld "datum" sortiert (neueste zuerst).
 *
 * DIE FELDER IM EINZELNEN (bei einer normalen Meldung):
 *   datum        Datum im Format "TT.MM.JJJJ", z. B. "04.07.2026".
 *   kategorie    Kurzes Schlagwort, z. B. "Betrieb", "Sanierung", "Verein".
 *   titel        Überschrift der Meldung.
 *   teaser       Kurzer Anreißertext, 1-2 Sätze.
 *   bild         Zwei Möglichkeiten:
 *                  - Pfad zu einem Bild, z. B. "assets/news1.jpg"  → Meldung MIT Bild
 *                  - null (ohne Anführungszeichen!)                → Meldung OHNE Bild
 *   bildAlt      Kurze Bildbeschreibung fürs Screenreader (nur nötig, wenn bild
 *                gesetzt ist; sonst einfach leer lassen "").
 *   quelleName   Name der externen Quelle, z. B. "Die Rheinpfalz" — oder null,
 *                wenn es keinen externen Link gibt (z. B. eigene Vereinsmeldung).
 *   quelleUrl    Link zur externen Quelle — oder null.
 *
 * SONDERFALL "ZEITUNGSSCAN MIT ABSCHRIFT":
 *   Für abfotografierte/gescannte alte Zeitungsausschnitte gibt es zusätzlich:
 *     scanBild      Pfad zum Scan-Bild (wird als kleines Vorschaubild gezeigt,
 *                   Klick öffnet es vergrößert).
 *     scanBildAlt   Bildbeschreibung für das Scan-Vorschaubild.
 *     volltext      Liste von Textabschnitten (jeder Absatz ein eigener Eintrag
 *                   in eckigen Klammern), die sich per Klick aufklappen lassen.
 *     scanHinweis   Kleiner Hinweistext unter der Abschrift, z. B. dass sie noch
 *                   nicht gegengelesen wurde.
 *   Diese vier Felder brauchst du nur bei eingescannten Zeitungsausschnitten —
 *   bei ganz normalen Meldungen einfach weglassen.
 *
 * WICHTIG BEI ZWEI DESIGN-VARIANTEN:
 *   Diese Datei muss identisch in prototyp/assets/ UND prototyp-rot/assets/
 *   vorliegen (siehe Hinweis in status-daten.js).
 * ============================================================================
 */

var WLB_PRESSE = [
  {
    datum: "18.06.2026",
    kategorie: "Betrieb",
    titel: "Warum die Wieslauterbahn in dieser Saison erst mal nicht bis zur Endstation fährt",
    teaser: "Die Saison 2026 startet – wir informieren, ab wann und auf welchem Abschnitt gefahren wird.",
    bild: null,
    bildAlt: "",
    quelleName: "Die Rheinpfalz",
    quelleUrl: "https://www.rheinpfalz.de/lokal/pirmasens_artikel,-warum-die-wieslauterbahn-in-dieser-saison-erst-mal-nicht-bis-zur-endstation-f%C3%A4hrt-_arid,5900568.html"
  },
  {
    datum: "18.06.2026",
    kategorie: "Betrieb",
    titel: "Wieslauterbahn geht am 27. Juni wieder in Betrieb",
    teaser: "Startschuss für die Saison 2026 – der Fahrplan und die aktuellen Rahmenbedingungen im Überblick.",
    bild: null,
    bildAlt: "",
    quelleName: "lok-report.de",
    quelleUrl: "https://www.lok-report.de/news/deutschland/aus-den-laendern/rheinland-pfalz-wieslauterbahn-geht-am-27-juni-wieder-in-betrieb.html"
  },
  {
    datum: "20.03.2025",
    kategorie: "Sanierung",
    titel: "Sanierung der Wieslauterbahn in der Südwestpfalz beginnt",
    teaser: "Startschuss für die lang erwartete Streckensanierung – ein Überblick über Umfang und Dauer.",
    bild: null,
    bildAlt: "",
    quelleName: "SWR Aktuell",
    quelleUrl: "https://www.swr.de/swraktuell/rheinland-pfalz/kaiserslautern/sanierung-wieslauterbahn-beginnt-bahnstrecke-in-suedwestpfalz-soll-reaktiviert-werden-100.html"
  },
  {
    datum: "08.01.2024",
    kategorie: "Verein",
    titel: "Großer Bahnhof für den Wieslauterbahn-Förderbescheid",
    teaser: "Mit einem feierlichen Empfang wurde der Förderbescheid zur Sanierung der Strecke an den Verein übergeben.",
    bild: null,
    bildAlt: "",
    quelleName: "Die Rheinpfalz",
    quelleUrl: "https://www.rheinpfalz.de/lokal/kreis-suedwestpfalz_artikel,-gro%C3%9Fer-bahnhof-f%C3%BCr-den-wieslauterbahn-f%C3%B6rderbescheid-_arid,5597833.html"
  },
  {
    datum: "05.01.2024",
    kategorie: "Betrieb",
    titel: "Wieslauterbahn soll wieder regelmäßig verkehren",
    teaser: "Nach Jahren mit eingeschränktem Fahrplan gibt es gute Nachrichten für Fahrgäste und Eisenbahnfans.",
    bild: null,
    bildAlt: "",
    quelleName: "Wochenblatt Reporter",
    quelleUrl: "https://www.wochenblatt-reporter.de/dahn/c-lokales/wieslauterbahn-soll-wieder-regelmaessig-verkehren_a522336"
  },
  {
    datum: "04.01.2024",
    kategorie: "Verein",
    titel: "Sonderfahrten der Wieslauterbahn zur Übergabe des Förderbescheids",
    teaser: "Anlässlich der Übergabe des Förderbescheids fanden Sonderfahrten auf der Strecke statt.",
    bild: null,
    bildAlt: "",
    quelleName: "Die Rheinpfalz",
    quelleUrl: "https://www.rheinpfalz.de/lokal/kreis-suedwestpfalz_artikel,-sonderfahrten-der-wieslauterbahn-zur-%C3%BCbergabe-des-f%C3%B6rderbescheids-_arid,5596494.html"
  },
  {
    datum: "04.01.2024",
    kategorie: "Verein",
    titel: "Happy End im Dahner Felsenland",
    teaser: "Rückblick auf den langen Weg zur Sanierungszusage für die Wieslauterbahn.",
    bild: null,
    bildAlt: "",
    quelleName: "Die Rheinpfalz",
    quelleUrl: "https://www.rheinpfalz.de/pfalzleben/pf%C3%A4lzerwald_artikel,-wieslauterbahn-happy-end-im-dahner-felsenland-_arid,5596438.html"
  },
  {
    datum: "03.01.2024",
    kategorie: "Verein",
    titel: "Sonderfahrten anlässlich der Übergabe des Förderbescheids zur Sanierung der Wieslauterbahn",
    teaser: "Ausführlicher Bericht zu den Sonderfahrten und der Sanierungszusage.",
    bild: null,
    bildAlt: "",
    quelleName: "lok-report.de",
    quelleUrl: "https://www.lok-report.de/news/deutschland/aus-den-laendern/item/46613-rheinland-pfalz-sonderfahrten-anlaesslich-der-uebergabe-des-foerderbescheids-zur-sanierung-der-sanierung-der-wieslauterbahn.html"
  },
  {
    datum: "25.02.2022",
    kategorie: "Archiv · Presseecho",
    titel: "Die Rheinpfalz: „BUND: Schienenpolitischer Quantensprung“",
    teaser: "Kurzmeldung der Rheinpfalz zu den Überlegungen des BUND zur Reaktivierung stillgelegter Bahnstrecken in der Region.",
    bild: null,
    bildAlt: "",
    quelleName: null,
    quelleUrl: null,
    scanBild: "assets/presse/rheinpfalz-2022-02-25.jpg",
    scanBildAlt: "Zeitungsscan: Die Rheinpfalz, 25.02.2022, „BUND: Schienenpolitischer Quantensprung“",
    volltext: [
      "LANDAU. Der Bund für Umwelt und Naturschutz (BUND) begrüßt die Überlegungen des Landauer Mobilitätsdezernenten Lukas Hartmann (Grüne) zur Reaktivierung von Schienenstrecken im Stadtgebiet und in der Region.",
      "„Schienenpolitisch könnte Landau so zum Wohle des ganzen Umlandes zu einer echten Südpfalzmetropole werden“, meint Ulrich Mohr aus Hochstadt. Der BUND hatte bereits 2017 den damaligen rheinland-pfälzischen Verkehrsminister Volker Wissing aufgefordert, die beiden stillgelegten Bahnstrecken nach Germersheim und Offenbach/Herxheim nicht aufzugeben, sondern per Streckensicherungsvertrag für eine Reaktivierung vorzuhalten. Jetzt komme es darauf an, dass Berlin die Modalitäten für Kosten-Nutzen-Rechnungen für Schienenreaktivierungen überarbeite. Das hatte eigentlich schon bis zum Jahresende passieren sollen. Geplant war, ökologische Aspekte stärker zu berücksichtigen. Man könne belegen, dass Streckenreaktivierungen meist ein Vielfaches der prognostizierten Fahrgastzahlen erbracht hätten, so Mohr. Er verweist darauf, dass es allein in der Verbandsgemeinde Offenbach zwei stillgelegte Schienenstränge gebe, von denen aus zwei große Gewerbegebiete erschlossen werden könnten. Nicht erwähnt wird ein weiteres Industriegleis zum Gewerbegebiet Mörlheim an der Landkommissärstraße.",
      "Der BUND erinnert auch an Überlegungen, die Schienenverbindung Landau – Herxheim nicht nur zu reaktivieren, sondern bis Rülzheim zu verlängern. Nach unbestätigten Nachrichten sei allerdings in Rülzheim ein Neubaugebiet geplant, das dies verhindern würde. Alles in allem hofft der BUND auf einen „schienenpolitischen Quantensprung für die Südpfalz“. (rhp/boe)"
    ],
    scanHinweis: "Hinweis: Automatisierte Abschrift aus dem Zeitungsscan, vom Verein noch nicht redaktionell gegengeprüft."
  },
  {
    datum: "21.02.2022",
    kategorie: "Archiv · Presseecho",
    titel: "Die Rheinpfalz: „Kampf für Bahnstrecke“",
    teaser: "Bericht über die gemeinsame Initiative der Landräte und des Landauer Oberbürgermeisters zur Reaktivierung der Bahnstrecke Germersheim–Landau.",
    bild: null,
    bildAlt: "",
    quelleName: null,
    quelleUrl: null,
    scanBild: "assets/presse/rheinpfalz-2022-02-21.jpg",
    scanBildAlt: "Zeitungsscan: Die Rheinpfalz, 21.02.2022, „Kampf für Bahnstrecke“",
    volltext: [
      "Germersheim/Landau (BNN). Mit einem gemeinsamen Schreiben haben sich die Landräte Dietmar Seefeldt (Südliche Weinstraße) und Fritz Brechtel (Germersheim) sowie Landaus Oberbürgermeister Thomas Hirsch an Bundesverkehrsminister Volker Wissing (FDP) gewandt. Das Anliegen der drei CDU-Politiker: Der Minister möge sich der Reaktivierung der Bahnstrecke zwischen Germersheim und Landau annehmen.",
      "„Für die Südpfalz wäre die Reaktivierung der Strecke Germersheim-Landau ein wichtiger und möglicher Schritt bei der Bewältigung der Mobilitätswende“, sind die drei Verwaltungschefs überzeugt. Das Anliegen tragen sie nicht zum ersten Mal in Berlin vor, allerdings das erste Mal vor einem Bundesverkehrsminister, der selbst aus der Südpfalz kommt.",
      "Bereits im vergangenen Jahr hatten die Kreistage Südliche Weinstraße und Germersheim sowie der Landauer Stadtrat mit einer Resolution die Überarbeitung der Vorgaben für die sogenannten Standardisierten Bewertungen vom Bundesverkehrsministerium gefordert. Seefeldt, Brechtel und Hirsch wandten sich danach direkt an den damaligen Bundesverkehrsminister Andreas Scheuer (CSU). Und zwar mit der nun erneut vorgetragenen Bitte, die Bewertungskriterien für die Reaktivierung von Schienenstrecken anzupassen. Denn die Vorgaben zur Kosten-Nutzen-Rechnung müssten zunächst angepasst werden, damit Reaktivierungen von Bahnstrecken überhaupt in den Bereich des Möglichen kommen. Strecken wie zwischen Landau und Germersheim fallen nach den bestehenden Kriterien der sogenannten Standardisierten Bewertung aufgrund hoher Kosten durchs Raster.",
      "Zeitgemäße Kriterien für die Reaktivierung von Bahnstrecken hingegen würden, so sind die Südpfälzer Verwaltungschefs überzeugt, unter anderem den Nutzen positiver Umwelt- und Klimaeffekte infolge umweltfreundlicher Verkehrskonzepte und weitere Aspekte ausreichend berücksichtigen. Damit stünde mehr auf der Nutzen- als auf der Kostenseite und die Reaktivierung könnte angepackt werden."
    ],
    scanHinweis: "Hinweis: Automatisierte Abschrift aus dem Zeitungsscan, vom Verein noch nicht redaktionell gegengeprüft."
  },
  {
    datum: "27.07.2013",
    kategorie: "Archiv · Presseecho",
    titel: "SWR Eisenbahn-Romantik: „Zwischen Jungfernsprung und Drachenfels – die Renaissance des Bundenthalers“",
    teaser: "Der SWR begleitet in einer Fernsehreportage eine Zugfahrt mit dem „Bundenthaler“ durchs Dahner Felsenland, vorbei an Felsen mit klingenden Namen wie Jungfernsprung und Hexenpilz.",
    bild: null,
    bildAlt: "",
    quelleName: "SWR Fernsehen – Eisenbahn-Romantik",
    quelleUrl: "https://www.swr.de/video/sendungen-a-z/eisenbahn-romantik/folgen/broadcastcontrib-swr-36164.html"
  }
];
