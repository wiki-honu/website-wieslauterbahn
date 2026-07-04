/**
 * ============================================================================
 *  LANDSCHAFT-RENDER — liest assets/landschaft-daten.js aus und baut daraus
 *  die Foto-Galerie (Container #landschaftGallery) auf die-strecke.html.
 *  Öffnet Fotos über die gemeinsame assets/galerie-lightbox.js (mit
 *  Vor-/Zurück-Navigation bei mehreren Bildern pro Eintrag). Diese Datei
 *  musst du normalerweise NICHT anfassen — neue Fotos werden in
 *  landschaft-daten.js eingetragen, nicht hier.
 * ============================================================================
 */
(function () {
  if (typeof WLB_LANDSCHAFT_BILDER === "undefined") return;
  var escapeHtml = (window.WLB_Lightbox && window.WLB_Lightbox.escapeHtml) || function (s) { return s; };

  var gallery = document.getElementById("landschaftGallery");
  if (!gallery) return;

  var galleryHtml = "";
  WLB_LANDSCHAFT_BILDER.forEach(function (foto, index) {
    var erstesBild = (foto.bilder && foto.bilder[0]) || "";
    var unterzeile = [foto.datum, foto.urheber].filter(Boolean).join(" · ");
    galleryHtml += "<figure class=\"gallery-item rounded-2xl overflow-hidden shadow-sm bg-white\">" +
      "<button type=\"button\" class=\"gallery-trigger\" data-index=\"" + index + "\" aria-label=\"Foto vergrößern: " + escapeHtml(foto.titel) + "\">" +
      "<img src=\"" + escapeHtml(erstesBild) + "\" alt=\"" + escapeHtml(foto.alt || foto.titel) + "\" loading=\"lazy\" class=\"w-full h-48 object-cover\"></button>" +
      "<figcaption class=\"p-4\"><p class=\"text-sm font-medium\">" + escapeHtml(foto.titel) + "</p>" +
      (unterzeile ? "<p class=\"text-xs text-[#6b7a6e] mt-1\">" + escapeHtml(unterzeile) + "</p>" : "") +
      "</figcaption></figure>";
  });
  gallery.innerHTML = galleryHtml;

  gallery.querySelectorAll(".gallery-trigger").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var index = parseInt(btn.getAttribute("data-index"), 10);
      if (window.WLB_Lightbox) window.WLB_Lightbox.oeffnen(WLB_LANDSCHAFT_BILDER, index, btn);
    });
  });
})();
