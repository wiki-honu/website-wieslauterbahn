/**
 * ============================================================================
 *  STATUS-RENDER — liest assets/status-daten.js aus und befüllt damit die
 *  Status-Leiste auf der aktuellen Seite. Diese Datei musst du normalerweise
 *  NICHT anfassen — Inhalte werden in status-daten.js geändert, nicht hier.
 * ============================================================================
 */
(function () {
  var banner = document.getElementById("statusBanner");
  if (!banner || typeof WLB_STATUS === "undefined") {
    return; // Sicherheitsnetz: fehlt status-daten.js oder der Banner im HTML, einfach nichts tun.
  }

  if (!WLB_STATUS.aktiv) {
    banner.style.display = "none";
    return;
  }

  // Feste Farbwerte je Ampel-Zustand (unabhängig vom Grün- oder Rot-Design der Website,
  // damit "Achtung/Gelb" und "Störung/Rot" auf beiden Design-Varianten gleich aussehen).
  var FARBEN = {
    gruen: { hintergrund: "#E3EFE1", rand: "#8FBF9A", textDunkel: "#1F3A2E", textHell: "#33513f" },
    gelb: { hintergrund: "#FCEFCB", rand: "#E9B44C", textDunkel: "#8A5A00", textHell: "#5c4a1f" },
    rot: { hintergrund: "#FBE2E1", rand: "#E2A6A3", textDunkel: "#7A1F1B", textHell: "#7a2a26" }
  };
  var farbe = FARBEN[WLB_STATUS.ampel] || FARBEN.gelb;

  banner.style.backgroundColor = farbe.hintergrund;
  banner.style.borderBottomColor = farbe.rand;

  var dot = document.getElementById("statusDot");
  if (dot) dot.setAttribute("fill", farbe.textDunkel);

  var kurzSpan = document.getElementById("statusKurzSpan");
  if (kurzSpan) kurzSpan.style.color = farbe.textDunkel;

  var kurztextEl = document.getElementById("statusKurztext");
  if (kurztextEl) kurztextEl.textContent = "Status: " + WLB_STATUS.kurztext;

  var langtextEl = document.getElementById("statusLangtext");
  if (langtextEl) {
    langtextEl.style.color = farbe.textHell;
    langtextEl.textContent = WLB_STATUS.langtext || "";
    langtextEl.style.display = WLB_STATUS.langtext ? "" : "none";
  }
})();
