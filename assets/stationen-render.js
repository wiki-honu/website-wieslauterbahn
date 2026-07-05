/**
 * ============================================================================
 *  STATIONEN-RENDER — verknüpft die Foto-Buttons auf die-stationen.html
 *  (Container #stationenGallerie) mit der gemeinsamen assets/galerie-
 *  lightbox.js, damit sich die 2 Fotos je Station per Klick vergrößern
 *  und mit den Pfeil-Schaltflächen bzw. den Pfeiltasten der Tastatur
 *  durchblättern lassen. Diese Datei musst du normalerweise NICHT anfassen
 *  — neue Fotos werden in stationen-daten.js eingetragen, nicht hier.
 * ============================================================================
 */
(function () {
  if (typeof WLB_STATIONEN_BILDER === "undefined") return;

  var gallerie = document.getElementById("stationenGallerie");
  if (!gallerie) return;

  gallerie.querySelectorAll(".gallery-trigger").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var index = parseInt(btn.getAttribute("data-index"), 10);
      if (window.WLB_Lightbox) window.WLB_Lightbox.oeffnen(WLB_STATIONEN_BILDER, index, btn);
    });
  });
})();
