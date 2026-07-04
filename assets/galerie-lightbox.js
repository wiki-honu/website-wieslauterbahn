/**
 * ============================================================================
 *  GALERIE-LIGHTBOX — wiederverwendbare Bild-Vergrößerung mit Vor-/Zurück-
 *  Navigation, wenn ein Eintrag mehrere Fotos hat. Wird von mediathek.html
 *  und die-strecke.html (Landschafts-Galerie) gemeinsam genutzt.
 *
 *  Diese Datei musst du normalerweise NICHT anfassen — sie enthält keine
 *  Inhalte, nur die Technik dahinter. Fotos/Texte werden in den jeweiligen
 *  *-daten.js-Dateien gepflegt (mediathek-daten.js, landschaft-daten.js).
 * ============================================================================
 */
var WLB_Lightbox = (function () {
  var lightbox, imgEl, captionEl, zaehlerEl, prevBtn, nextBtn;
  var liste = [];
  var eintragIndex = 0;
  var bildIndex = 0;
  var lastTrigger = null;

  function escapeHtml(text) {
    return String(text == null ? "" : text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function getFocusable(container) {
    return Array.prototype.slice
      .call(container.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'))
      .filter(function (el) { return !el.disabled && el.offsetParent !== null; });
  }

  function onKeydown(e) {
    if (e.key === "Escape") { schliessen(); return; }
    if (e.key === "ArrowLeft") { vorheriges(); return; }
    if (e.key === "ArrowRight") { naechstes(); return; }
    if (e.key === "Tab") {
      var focusable = getFocusable(lightbox.querySelector(".lightbox-dialog"));
      if (focusable.length === 0) { e.preventDefault(); return; }
      var first = focusable[0];
      var last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }

  function aktuellerEintrag() {
    return liste[eintragIndex] || {};
  }

  function render() {
    var eintrag = aktuellerEintrag();
    var bilder = eintrag.bilder || [];
    var quelle = bilder[bildIndex] || bilder[0] || "";

    imgEl.src = quelle;
    imgEl.alt = eintrag.alt || eintrag.titel || "";

    var teile = [];
    if (eintrag.titel) teile.push(eintrag.titel);
    if (eintrag.datum) teile.push(eintrag.datum);
    if (eintrag.urheber) teile.push(eintrag.urheber);
    captionEl.textContent = teile.join(" · ");

    var mehrereBilder = bilder.length > 1;
    if (prevBtn) prevBtn.hidden = !mehrereBilder;
    if (nextBtn) nextBtn.hidden = !mehrereBilder;
    if (zaehlerEl) zaehlerEl.textContent = mehrereBilder ? (bildIndex + 1) + " / " + bilder.length : "";
  }

  function vorheriges() {
    var bilder = aktuellerEintrag().bilder || [];
    if (bilder.length < 2) return;
    bildIndex = (bildIndex - 1 + bilder.length) % bilder.length;
    render();
  }

  function naechstes() {
    var bilder = aktuellerEintrag().bilder || [];
    if (bilder.length < 2) return;
    bildIndex = (bildIndex + 1) % bilder.length;
    render();
  }

  function schliessen() {
    lightbox.hidden = true;
    document.removeEventListener("keydown", onKeydown);
    if (lastTrigger) lastTrigger.focus();
  }

  // Öffnet die Lightbox für datenListe[index]. "trigger" ist das angeklickte
  // Element, damit der Fokus beim Schließen dorthin zurückspringt.
  function oeffnen(datenListe, index, trigger) {
    if (!lightbox) init();
    if (!lightbox) return;
    liste = datenListe || [];
    eintragIndex = index || 0;
    bildIndex = 0;
    lastTrigger = trigger || null;
    render();
    lightbox.hidden = false;
    var closeBtn = lightbox.querySelector(".lightbox-close");
    if (closeBtn) closeBtn.focus();
    document.addEventListener("keydown", onKeydown);
  }

  function init() {
    lightbox = document.getElementById("lightbox");
    if (!lightbox) return;
    imgEl = document.getElementById("lightboxImg");
    captionEl = document.getElementById("lightboxCaption");
    zaehlerEl = document.getElementById("lightboxZaehler");
    prevBtn = document.getElementById("lightboxPrev");
    nextBtn = document.getElementById("lightboxNext");

    lightbox.querySelectorAll("[data-lightbox-close]").forEach(function (el) {
      el.addEventListener("click", schliessen);
    });
    if (prevBtn) prevBtn.addEventListener("click", vorheriges);
    if (nextBtn) nextBtn.addEventListener("click", naechstes);
  }

  init();

  return { oeffnen: oeffnen, escapeHtml: escapeHtml };
})();
