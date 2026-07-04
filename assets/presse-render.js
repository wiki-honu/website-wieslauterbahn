/**
 * ============================================================================
 *  PRESSE-RENDER — liest assets/presse-daten.js aus und baut daraus:
 *    - auf presse.html: die komplette Liste aller Meldungen (Container #presseListe)
 *    - auf index.html:  eine Vorschau der 3 neuesten Meldungen (Container #presseIndexListe)
 *  Diese Datei musst du normalerweise NICHT anfassen — neue Meldungen werden
 *  in presse-daten.js eingetragen, nicht hier.
 * ============================================================================
 */
(function () {
  if (typeof WLB_PRESSE === "undefined") return;

  // Datum "TT.MM.JJJJ" in ein vergleichbares Date-Objekt umwandeln, damit wir
  // zuverlässig nach "neueste zuerst" sortieren können.
  function parseDatum(text) {
    var teile = text.split(".");
    return new Date(parseInt(teile[2], 10), parseInt(teile[1], 10) - 1, parseInt(teile[0], 10));
  }

  // Kopie der Liste, sortiert nach Datum absteigend (neueste zuerst). Bei
  // gleichem Datum bleibt die Reihenfolge aus presse-daten.js erhalten.
  var sortiert = WLB_PRESSE.slice().sort(function (a, b) {
    return parseDatum(b.datum) - parseDatum(a.datum);
  });

  // ---- Variante A: volle Liste auf presse.html -----------------------------
  var presseListe = document.getElementById("presseListe");
  if (presseListe) {
    var html = "";
    sortiert.forEach(function (eintrag) {
      html += "<article class=\"flex flex-col sm:flex-row gap-6 border-b border-[#D9CFB8] pb-8\">";

      if (eintrag.scanBild) {
        // Sonderfall: eingescannter Zeitungsausschnitt mit aufklappbarer Abschrift.
        html += "<button type=\"button\" class=\"gallery-trigger press-scan-thumb h-32 flex-shrink-0 rounded-xl overflow-hidden\" " +
          "data-full=\"" + eintrag.scanBild + "\" data-caption=\"" + eintrag.titel + "\" " +
          "aria-label=\"Zeitungsscan vergrößern: " + eintrag.titel + "\">" +
          "<img src=\"" + eintrag.scanBild + "\" alt=\"" + eintrag.scanBildAlt + "\" loading=\"lazy\" class=\"w-full h-full object-cover object-top\"></button>";
      } else if (eintrag.bild) {
        html += "<img src=\"" + eintrag.bild + "\" alt=\"" + (eintrag.bildAlt || "") + "\" loading=\"lazy\" class=\"w-full sm:w-48 h-32 object-cover rounded-xl flex-shrink-0\">";
      }
      // Kein Bild und kein Scan → einfach gar kein Bild-Element einfügen (Meldung "ohne Bild").

      html += "<div><p class=\"text-xs text-[#8A5A00] font-semibold uppercase tracking-wide mb-1\">" + eintrag.kategorie + " · " + eintrag.datum + "</p>";
      html += "<h2 class=\"font-semibold text-lg mb-1\">" + eintrag.titel + "</h2>";
      html += "<p class=\"text-sm text-[#5b6b5f]\">" + eintrag.teaser + "</p>";

      if (eintrag.quelleUrl) {
        html += "<p class=\"text-sm mt-2\"><a href=\"" + eintrag.quelleUrl + "\" target=\"_blank\" rel=\"noopener\" class=\"underline text-[#1F3A2E] font-medium\">" + eintrag.quelleName + " →</a></p>";
      }

      if (eintrag.volltext) {
        html += "<details class=\"mt-3 rounded-xl border border-[#D9CFB8] p-4\">" +
          "<summary class=\"cursor-pointer font-medium text-sm\">Artikeltext lesen (abgeschrieben aus dem Zeitungsscan)</summary>" +
          "<div class=\"mt-3 text-sm text-[#3c4a3f] leading-relaxed\">";
        eintrag.volltext.forEach(function (absatz, i) {
          html += "<p class=\"" + (i < eintrag.volltext.length - 1 ? "mb-3" : "") + "\">" + absatz + "</p>";
        });
        html += "<p class=\"text-xs text-[#6b7a6e] mt-3\">" + eintrag.scanHinweis + "</p></div></details>";
      }

      html += "</div></article>";
    });
    presseListe.innerHTML = html;
  }

  // ---- Variante B: Top-3-Vorschau auf index.html ---------------------------
  var presseIndex = document.getElementById("presseIndexListe");
  if (presseIndex) {
    var top3 = sortiert.slice(0, 3);
    var html2 = "";
    top3.forEach(function (eintrag) {
      html2 += "<article class=\"bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow\">";
      if (eintrag.bild) {
        html2 += "<img src=\"" + eintrag.bild + "\" alt=\"\" loading=\"lazy\" class=\"w-full h-44 object-cover\">";
      }
      html2 += "<div class=\"p-5\"><p class=\"text-xs text-[#8A5A00] font-semibold uppercase tracking-wide mb-1\">" + eintrag.kategorie + " · " + eintrag.datum + "</p>";
      html2 += "<h3 class=\"font-semibold leading-snug mb-2\">" + eintrag.titel + "</h3>";
      html2 += "<p class=\"text-sm text-[#5b6b5f]\">" + eintrag.teaser + "</p>";
      if (eintrag.quelleUrl) {
        html2 += "<p class=\"text-sm mt-2\"><a href=\"" + eintrag.quelleUrl + "\" target=\"_blank\" rel=\"noopener\" class=\"underline text-[#1F3A2E] font-medium\">" + eintrag.quelleName + " →</a></p>";
      }
      html2 += "</div></article>";
    });
    presseIndex.innerHTML = html2;
  }
})();
