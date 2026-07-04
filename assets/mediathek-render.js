/**
 * ============================================================================
 *  MEDIATHEK-RENDER — liest assets/mediathek-daten.js aus und baut daraus die
 *  Filter-Knöpfe (Container #yearFilters) und die Foto-Galerie (Container
 *  #gallery) auf mediathek.html. Öffnet Fotos über die gemeinsame
 *  assets/galerie-lightbox.js (mit Vor-/Zurück-Navigation bei mehreren Bildern
 *  pro Eintrag). Diese Datei musst du normalerweise NICHT anfassen — neue
 *  Fotos werden in mediathek-daten.js eingetragen, nicht hier.
 * ============================================================================
 */
(function () {
  if (typeof WLB_MEDIATHEK_BILDER === "undefined") return;
  var escapeHtml = (window.WLB_Lightbox && window.WLB_Lightbox.escapeHtml) || function (s) { return s; };

  // Die Kachel-Ansicht zeigt jedes Foto nur klein (ca. 192px hoch) -- dafuer
  // gibt es vorab erzeugte kleine Vorschaubilder unter assets/bilder/thumbs/
  // (gleicher Dateiname wie das Original, nur verkleinert). Das spart bei
  // vielen Fotos erheblich Ladezeit, da nicht jede Kachel das volle
  // Originalbild laden muss. Die Lightbox (Vergroesserung) nutzt weiterhin
  // immer das Original aus "bilder" in mediathek-daten.js, davon unberuehrt.
  // Falls zu einem Foto (noch) kein Thumbnail existiert -- z. B. weil es
  // gerade erst per Hand in mediathek-daten.js ergaenzt wurde -- springt das
  // Bild beim Laden automatisch auf das Original zurueck (siehe onerror unten).
  function thumbPfad(pfad) {
    var idx = pfad.lastIndexOf("/");
    if (idx === -1) return pfad;
    return pfad.slice(0, idx) + "/thumbs" + pfad.slice(idx);
  }

  var filterContainer = document.getElementById("yearFilters");
  if (filterContainer) {
    var alleJahre = ["Alle"].concat(WLB_MEDIATHEK_JAHRE || []);
    var filterHtml = "";
    alleJahre.forEach(function (jahr) {
      filterHtml += "<button data-year=\"" + escapeHtml(jahr) + "\" class=\"year-filter px-4 py-1.5 rounded-full border border-[#D9CFB8] text-sm hover:border-[#1F3A2E] transition-colors\">" + escapeHtml(jahr) + "</button>";
    });
    filterContainer.innerHTML = filterHtml;
  }

  var gallery = document.getElementById("gallery");
  if (gallery) {
    var galleryHtml = "";
    WLB_MEDIATHEK_BILDER.forEach(function (foto, index) {
      var erstesBild = (foto.bilder && foto.bilder[0]) || "";
      var thumbBild = erstesBild ? thumbPfad(erstesBild) : "";
      var unterzeile = [foto.datum, foto.urheber].filter(Boolean).join(" · ");
      galleryHtml += "<figure class=\"gallery-item rounded-2xl overflow-hidden shadow-sm bg-white\" data-year=\"" + escapeHtml(foto.jahr) + "\">" +
        "<button type=\"button\" class=\"gallery-trigger\" data-index=\"" + index + "\" aria-label=\"Foto vergrößern: " + escapeHtml(foto.titel) + "\">" +
        "<img src=\"" + escapeHtml(thumbBild) + "\" data-original=\"" + escapeHtml(erstesBild) + "\" onerror=\"this.onerror=null;this.src=this.dataset.original;\" alt=\"" + escapeHtml(foto.alt || foto.titel) + "\" loading=\"lazy\" class=\"w-full h-48 object-cover\"></button>" +
        "<figcaption class=\"p-4\"><p class=\"text-sm font-medium\">" + escapeHtml(foto.titel) + "</p>" +
        (unterzeile ? "<p class=\"text-xs text-[#6b7a6e] mt-1\">" + escapeHtml(unterzeile) + "</p>" : "") +
        "</figcaption></figure>";
    });
    gallery.innerHTML = galleryHtml;

    gallery.querySelectorAll(".gallery-trigger").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var index = parseInt(btn.getAttribute("data-index"), 10);
        if (window.WLB_Lightbox) window.WLB_Lightbox.oeffnen(WLB_MEDIATHEK_BILDER, index, btn);
      });
    });
  }
})();
