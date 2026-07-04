/**
 * ============================================================================
 *  LANDSCHAFTS-GALERIE — die Bilderreihe "Die Landschaft der Südwestpfalz"
 *  auf der Seite die-strecke.html.
 * ============================================================================
 *
 * SO FÜGST DU EIN NEUES FOTO HINZU:
 *   1. Bilddatei in den assets-Ordner legen (z. B. assets/landschaft/).
 *   2. Ein neues { ... } - Objekt in WLB_LANDSCHAFT_BILDER weiter unten
 *      einfügen, Komma nicht vergessen, wenn danach noch weitere Einträge
 *      folgen. Die Reihenfolge hier bestimmt die Reihenfolge auf der Seite.
 *
 * DIE FELDER IM EINZELNEN:
 *   bilder   Liste von Bild-Pfaden — auch bei nur einem Foto in eckigen
 *            Klammern schreiben:
 *              bilder: ["assets/landschaft/mein-foto.jpg"]                  ein Bild
 *              bilder: ["assets/landschaft/foto-1.jpg", "assets/landschaft/foto-2.jpg"]  mehrere Bilder
 *            In der Übersicht wird nur das ERSTE Bild gezeigt. Bei mehreren
 *            Bildern erscheinen beim Öffnen Pfeil-Schaltflächen links/rechts,
 *            um zwischen allen Bildern dieses Eintrags zu wechseln.
 *   titel    Beschreibung des Fotos/Ausflugsziels.
 *   datum    Optionales Datum, meist bei diesen Landschaftsfotos leer ("").
 *   urheber  Name des Fotografen/der Quelle, z. B. "Privat" oder
 *            "Tourist-Info Dahner Felsenland". Wird neben dem Datum angezeigt
 *            (bzw. allein, wenn kein Datum gesetzt ist).
 *   alt      Alt-Text für Screenreader — meist einfach derselbe Text wie "titel".
 *
 * WICHTIG BEI ZWEI DESIGN-VARIANTEN:
 *   Diese Datei muss identisch in prototyp/assets/ UND prototyp-rot/assets/
 *   vorliegen (siehe Hinweis in status-daten.js).
 * ============================================================================
 */

var WLB_LANDSCHAFT_BILDER = [
  { bilder: ["assets/landschaft/image.jpg"], titel: "Viel zu entdecken gibt's auf dem Baumwipfelpfad", datum: "", urheber: "Biosphärenhaus", alt: "Viel zu entdecken gibt's auf dem Baumwipfelpfad" },
  { bilder: ["assets/landschaft/image-2.jpg"], titel: "Höchstgelegene Burgruine der Pfalz: Die Wegelnburg bei Nothweiler (572 m ü.d.M.) Gehzeit ab Bf Bundenthal ca. 1 1/2 Std., 380 Höhenmeter", datum: "", urheber: "P. Zimmermann, Tourist-Info Dahner Felsenland", alt: "Höchstgelegene Burgruine der Pfalz: Die Wegelnburg bei Nothweiler (572 m ü.d.M.) Gehzeit ab Bf Bundenthal ca. 1 1/2 Std., 380 Höhenmeter" },
  { bilder: ["assets/landschaft/image-3.jpg"], titel: "Wilde Maiglöckchen am Gr. Eyberg bei Dahn", datum: "", urheber: "Privat", alt: "Wilde Maiglöckchen am Gr. Eyberg bei Dahn" },
  { bilder: ["assets/landschaft/image-4.jpg"], titel: "Die Fladensteine bei Bundenthal. Mit interessantem Geo-Pfad. Gehzeit ab Bf Bundenthal ca. 1 Std.", datum: "", urheber: "P. Zimmermann, Tourist-Info Dahner Felsenland", alt: "Die Fladensteine bei Bundenthal. Mit interessantem Geo-Pfad. Gehzeit ab Bf Bundenthal ca. 1 Std." },
  { bilder: ["assets/landschaft/image-5.jpg"], titel: "Auswaschungen im Buntsandstein", datum: "", urheber: "Privat", alt: "Auswaschungen im Buntsandstein" },
  { bilder: ["assets/landschaft/image-6.jpg"], titel: "Burg Drachenfels bei Busenberg. Gehzeit ab Hp Bärenbach ca. 45 min.", datum: "", urheber: "P. Zimmermann, Tourist-Info Dahner Felsenland", alt: "Burg Drachenfels bei Busenberg. Gehzeit ab Hp Bärenbach ca. 45 min." },
  { bilder: ["assets/landschaft/image-7.jpg"], titel: "Blick vom Winterberg (461 m ü.d.M.) auf die Pfälzer Berge. Unten eingebettet liegt Hauenstein", datum: "", urheber: "Privat", alt: "Blick vom Winterberg (461 m ü.d.M.) auf die Pfälzer Berge. Unten eingebettet liegt Hauenstein" },
  { bilder: ["assets/landschaft/image-8.jpg"], titel: "Burgruine Neudahn, etwa 2 km nördlich von Dahn. Leicht zu erreichen ab Hp Moosbachtal. Gehzeit max. 10 min.", datum: "", urheber: "P. Zimmermann, Tourist-Info Dahner Felsenland", alt: "Burgruine Neudahn, etwa 2 km nördlich von Dahn. Leicht zu erreichen ab Hp Moosbachtal. Gehzeit max. 10 min." },
  { bilder: ["assets/landschaft/image-9.jpg"], titel: "Der Teufelstisch in Hinterweidenthal ist wohl der markanteste Felsen im Pfälzerwald. Direkt unterhalb liegt der gleichnamige Abenteuer-Spielplatz, der vom Bf Hinterweidenthal Ort in gut 5 min erreichbar ist", datum: "", urheber: "Tourist-Information Hauenstein", alt: "Der Teufelstisch in Hinterweidenthal ist wohl der markanteste Felsen im Pfälzerwald. Direkt unterhalb liegt der gleichnamige Abenteuer-Spielplatz, der vom Bf Hinterweidenthal Ort in gut 5 min erreichbar ist" },
  { bilder: ["assets/landschaft/image-10.jpg"], titel: "Macht Frauen glücklich: Ein Besuch der Schuhmeile in Hauenstein. Diese liegt direkt am Hp Hauenstein (Pfalz), ab Hauenstein Mitte ca. 10 min Gehzeit. Von April bis Oktober auch sonntags geöffnet.", datum: "", urheber: "Kuntz-Verlag, Gleiszellen", alt: "Macht Frauen glücklich: Ein Besuch der Schuhmeile in Hauenstein. Diese liegt direkt am Hp Hauenstein (Pfalz), ab Hauenstein Mitte ca. 10 min Gehzeit. Von April bis Oktober auch sonntags geöffnet." },
  { bilder: ["assets/landschaft/image-11.jpg"], titel: "Das Biosphärenhaus ist an Sonn- und Feiertagen (1.Mai - Ende Oktober) leicht ab Bf Bundenthal erreichbar. Die Abfahrtszeiten der Busse am Bf sind auf die Züge abgestimmt", datum: "", urheber: "Biosphärenhaus", alt: "Das Biosphärenhaus ist an Sonn- und Feiertagen (1.Mai - Ende Oktober) leicht ab Bf Bundenthal erreichbar. Die Abfahrtszeiten der Busse am Bf sind auf die Züge abgestimmt" },
  { bilder: ["assets/landschaft/image-12.jpg"], titel: "Deutschlands ersten Baumwipfelpfad kann man am Biosphärenhaus in Fischbach bei Dahn erkunden", datum: "", urheber: "Biosphärenhaus", alt: "Deutschlands ersten Baumwipfelpfad kann man am Biosphärenhaus in Fischbach bei Dahn erkunden" },
  { bilder: ["assets/landschaft/image-13.jpg"], titel: "Der Barfußpfad in Ludwigswinkel. Ab Bf Bundenthal den Bus zum Biosphärenhaus in Fischbach nehmen, dann weiter zu Fuß in ca. 30 min erreichbar.", datum: "", urheber: "P. Zimmermann, Tourist-Info Dahner Felsenland", alt: "Der Barfußpfad in Ludwigswinkel. Ab Bf Bundenthal den Bus zum Biosphärenhaus in Fischbach nehmen, dann weiter zu Fuß in ca. 30 min erreichbar." },
  { bilder: ["assets/landschaft/image-14.jpg"], titel: "Blick vom Aussichtsturm auf dem Gr. Eyberg in die Südpfälzer Berge", datum: "", urheber: "Privat", alt: "Blick vom Aussichtsturm auf dem Gr. Eyberg in die Südpfälzer Berge" },
  { bilder: ["assets/landschaft/image-15.jpg"], titel: "Braut und Bräutigam in Dahn. Erreichbar ab Hp Dahn-Süd in ca. 5 min. Nicht begehbar.", datum: "", urheber: "P. Zimmermann, Tourist-Info Dahner Felsenland", alt: "Braut und Bräutigam in Dahn. Erreichbar ab Hp Dahn-Süd in ca. 5 min. Nicht begehbar." },
  { bilder: ["assets/landschaft/image-16.jpg"], titel: "Rast auf dem Gr. Eyberg bei Dahn (514 m ü.d.M.) Gehzeit ab Hp Dahn-Süd ca. 1 Std. 310 Höhenmeter.", datum: "", urheber: "Privat", alt: "Rast auf dem Gr. Eyberg bei Dahn (514 m ü.d.M.) Gehzeit ab Hp Dahn-Süd ca. 1 Std. 310 Höhenmeter." },
  { bilder: ["assets/landschaft/image-17.jpg"], titel: "Schillerfelsen in Dahn. Erreichbar ab Hp Dahn-Süd in ca. 5 min. Nicht begehbar.", datum: "", urheber: "P. Zimmermann, Tourist-Info Dahner Felsenland", alt: "Schillerfelsen in Dahn. Erreichbar ab Hp Dahn-Süd in ca. 5 min. Nicht begehbar." },
  { bilder: ["assets/landschaft/image-18.jpg"], titel: "Der herbstliche Pfälzerwald lädt zum Wandern ein", datum: "", urheber: "Privat", alt: "Der herbstliche Pfälzerwald lädt zum Wandern ein" },
  { bilder: ["assets/landschaft/image-19.jpg"], titel: "Auf dem Hochstein. Gehzeit ab Hp Dahn-Süd ca. 30 min.", datum: "", urheber: "P. Zimmermann, Tourist-Info Dahner Felsenland", alt: "Auf dem Hochstein. Gehzeit ab Hp Dahn-Süd ca. 30 min." },
  { bilder: ["assets/landschaft/image-20.jpg"], titel: "Der Jungfernsprung ist das Wahrzeichen von Dahn. Er überragt die Kurstadt mit 75 Meter senkrecht aufsteigender Felswand. Vom Bf Dahn ist der Felsen in gut 20 min \"bezwingbar\". Grandiose Aussicht!", datum: "", urheber: "P. Zimmermann, Tourist-Info Dahner Felsenland", alt: "Der Jungfernsprung ist das Wahrzeichen von Dahn. Er überragt die Kurstadt mit 75 Meter senkrecht aufsteigender Felswand. Vom Bf Dahn ist der Felsen in gut 20 min \"bezwingbar\". Grandiose Aussicht!" },
  { bilder: ["assets/landschaft/image-21.jpg"], titel: "Größte Burgenanlage der Pfalz: Altdahn, Grafendahn u. Tannstein. Gehzeit ab Hp Dahn-Süd ca. 30 min.", datum: "", urheber: "P. Zimmermann, Tourist-Info Dahner Felsenland", alt: "Größte Burgenanlage der Pfalz: Altdahn, Grafendahn u. Tannstein. Gehzeit ab Hp Dahn-Süd ca. 30 min." },
  { bilder: ["assets/landschaft/image-22.jpg"], titel: "Blick vom Jungfernsprung auf die Stadt Dahn. Im Hintergrund Hochstein u. St. Michaelskapelle mit Ehrenfriedhof", datum: "", urheber: "Privat", alt: "Blick vom Jungfernsprung auf die Stadt Dahn. Im Hintergrund Hochstein u. St. Michaelskapelle mit Ehrenfriedhof" }
];
