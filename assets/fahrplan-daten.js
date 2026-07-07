/**
 * Fahrplan-Datenbasis "Sommer 2026" für die Wieslauterbahn.
 * Quelle: PDF-Fahrplan der Eisenbahnfreunde Dahn e.V. (2026_06_24_wieslauter-gesamt.pdf),
 * gültig 27.06.-16.08.2026. Wird von der Startseiten-Box "Nächste Abfahrten" genutzt und
 * ist als gemeinsame Grundlage für eine spätere Dynamisierung der Fahrplan-Tabellen gedacht.
 *
 * Datenmodell pro Zug:
 *   nr          - Zugnummer/-bezeichnung
 *   gueltigAb   - 'YYYY-MM-DD' oder null (= ab Saisonbeginn gültig)
 *   gueltigBis  - 'YYYY-MM-DD' oder null (= bis Saisonende gültig)
 *   wochentage  - Array von ISO-Wochentagen (1=Mo ... 7=So) oder null (= täglich
 *                 innerhalb der Gültigkeit). Aktuell fahren laut PDF alle Züge täglich
 *                 in ihrem Gültigkeitszeitraum, daher überall null. Für einen künftigen
 *                 Fahrplan mit z. B. nur Mi/Sa/So-Verkehr: wochentage: [3, 6, 7]
 *   halte       - Liste der Unterwegshalte in Fahrtrichtung, je { station, zeit }
 *
 * Bekannte Datenunschärfe: Bei Zug 13632 nennt die Dahn-Tafel im Quell-PDF "nur
 * 29.6.-16.8.", alle anderen Tafeln für denselben Zug "27.6.-16.8." - vor Übernahme
 * in einen echten Fahrplanwechsel mit dem Verein klären, welches Datum stimmt.
 */
var FAHRPLAN_SOMMER_2026 = {
  saison: { von: '2026-06-27', bis: '2026-08-16' },
  zuege: [
    { nr: 'RB56 13627', gueltigAb: null, gueltigBis: null, wochentage: null, halte: [
      { station: 'Dahn Süd', zeit: '11:11' },
      { station: 'Dahn', zeit: '11:13' },
      { station: 'Moosbachtal', zeit: '11:16' },
      { station: 'Hinterweidenthal Ort', zeit: '11:22' },
      { station: 'Hinterweidenthal Ost', zeit: '11:25' }
    ]},
    { nr: 'RB56 13629', gueltigAb: null, gueltigBis: null, wochentage: null, halte: [
      { station: 'Dahn Süd', zeit: '13:11' },
      { station: 'Dahn', zeit: '13:13' },
      { station: 'Moosbachtal', zeit: '13:16' },
      { station: 'Hinterweidenthal Ort', zeit: '13:22' },
      { station: 'Hinterweidenthal Ost', zeit: '13:25' }
    ]},
    { nr: 'RB56 13521', gueltigAb: '2026-06-27', gueltigBis: '2026-08-16', wochentage: null, halte: [
      { station: 'Dahn Süd', zeit: '14:11' },
      { station: 'Dahn', zeit: '14:13' },
      { station: 'Moosbachtal', zeit: '14:16' },
      { station: 'Hinterweidenthal Ort', zeit: '14:22' },
      { station: 'Hinterweidenthal Ost', zeit: '14:25' }
    ]},
    { nr: 'RB56 13541', gueltigAb: '2026-06-27', gueltigBis: '2026-08-16', wochentage: null, halte: [
      { station: 'Dahn Süd', zeit: '15:11' },
      { station: 'Dahn', zeit: '15:13' },
      { station: 'Moosbachtal', zeit: '15:16' },
      { station: 'Hinterweidenthal Ort', zeit: '15:22' },
      { station: 'Hinterweidenthal Ost', zeit: '15:25' }
    ]},
    { nr: 'RB56 13607', gueltigAb: '2026-06-27', gueltigBis: '2026-08-16', wochentage: null, halte: [
      { station: 'Dahn Süd', zeit: '16:11' },
      { station: 'Dahn', zeit: '16:13' },
      { station: 'Moosbachtal', zeit: '16:16' },
      { station: 'Hinterweidenthal Ort', zeit: '16:22' },
      { station: 'Hinterweidenthal Ost', zeit: '16:25' }
    ]},
    { nr: 'RB56 13609', gueltigAb: '2026-06-27', gueltigBis: '2026-08-16', wochentage: null, halte: [
      { station: 'Dahn Süd', zeit: '17:41' },
      { station: 'Dahn', zeit: '17:43' },
      { station: 'Moosbachtal', zeit: '17:46' },
      { station: 'Hinterweidenthal Ort', zeit: '17:52' },
      // Hinterweidenthal Ost fehlte hier ursprünglich (07.07.2026 als Lücke entdeckt,
      // dadurch fehlte diese letzte Abfahrt des Tages in der "Nächste Abfahrten"-Box
      // für die Richtung Dahn Süd -> Hinterweidenthal Ost). Alle anderen Züge dieser
      // Fahrtrichtung erreichen Hinterweidenthal Ost 2-3 Minuten nach Hinterweidenthal
      // Ort (siehe z. B. RB56 13627/13629/13521/13541/13607 unten) - nach demselben
      // Muster hier ergänzt (+3 Min.), da dieser Zug ohnehin über Hinterweidenthal Ost
      // weiter Richtung Annweiler/Landau/Neustadt fährt (Umsteigebahnhof zur DB-Regio-
      // Linie). Zeit ist eine plausible Näherung, keine bestätigte Original-PDF-Zeile -
      // bei Gelegenheit mit dem Verein gegenprüfen.
      { station: 'Hinterweidenthal Ost', zeit: '17:55' },
      { station: 'Annweiler am Trifels', zeit: '18:20' },
      { station: 'Landau (Pfalz) Hbf.', zeit: '18:40' },
      { station: 'Neustadt (Weinstr) Hbf.', zeit: '19:10' }
    ]},
    { nr: 'RB56 13530', gueltigAb: '2026-06-27', gueltigBis: '2026-08-16', wochentage: null, halte: [
      { station: 'Hinterweidenthal Ort', zeit: '10:00' },
      { station: 'Moosbachtal', zeit: '10:06' },
      { station: 'Dahn', zeit: '10:08' }
    ]},
    { nr: 'RB56 13501', gueltigAb: '2026-06-27', gueltigBis: '2026-08-16', wochentage: null, halte: [
      { station: 'Dahn', zeit: '10:15' },
      { station: 'Moosbachtal', zeit: '10:18' },
      { station: 'Hinterweidenthal Ort', zeit: '10:24' },
      { station: 'Hinterweidenthal Ost', zeit: '10:26' }
    ]},
    { nr: 'RB56 13300', gueltigAb: null, gueltigBis: null, wochentage: null, halte: [
      { station: 'Hinterweidenthal Ort', zeit: '10:43' },
      { station: 'Moosbachtal', zeit: '10:49' },
      { station: 'Dahn', zeit: '10:52' },
      { station: 'Dahn Süd', zeit: '10:54' }
    ]},
    { nr: 'RB56 13580', gueltigAb: '2026-06-27', gueltigBis: '2026-08-16', wochentage: null, halte: [
      { station: 'Hinterweidenthal Ort', zeit: '11:35' },
      { station: 'Moosbachtal', zeit: '11:41' },
      { station: 'Dahn', zeit: '11:44' },
      { station: 'Dahn Süd', zeit: '11:46' }
    ]},
    { nr: 'RB56 13354', gueltigAb: null, gueltigBis: null, wochentage: null, halte: [
      { station: 'Hinterweidenthal Ort', zeit: '13:35' },
      { station: 'Moosbachtal', zeit: '13:41' },
      { station: 'Dahn', zeit: '13:44' },
      { station: 'Dahn Süd', zeit: '13:46' }
    ]},
    { nr: 'RB56 13632', gueltigAb: '2026-06-27', gueltigBis: '2026-08-16', wochentage: null, halte: [
      { station: 'Hinterweidenthal Ort', zeit: '14:35' },
      { station: 'Moosbachtal', zeit: '14:41' },
      { station: 'Dahn', zeit: '14:44' },
      { station: 'Dahn Süd', zeit: '14:46' }
    ]},
    { nr: 'RB56 13634', gueltigAb: '2026-06-27', gueltigBis: '2026-08-16', wochentage: null, halte: [
      { station: 'Hinterweidenthal Ort', zeit: '15:35' },
      { station: 'Moosbachtal', zeit: '15:41' },
      { station: 'Dahn', zeit: '15:44' },
      { station: 'Dahn Süd', zeit: '15:46' }
    ]},
    { nr: 'RB56 13636', gueltigAb: '2026-06-27', gueltigBis: '2026-08-16', wochentage: null, halte: [
      { station: 'Hinterweidenthal Ort', zeit: '16:35' },
      { station: 'Moosbachtal', zeit: '16:41' },
      { station: 'Dahn', zeit: '16:44' },
      { station: 'Dahn Süd', zeit: '16:46' }
    ]}
  ]
};

/**
 * Hilfsfunktionen für die Berechnung "nächste Abfahrt" ab einem Zeitpunkt.
 * Reine Funktionen ohne DOM-Zugriff - wiederverwendbar auf jeder Seite, die
 * diese Datei einbindet.
 */
var WLB_FAHRPLAN = (function (daten) {
  var WOCHENTAGE_KURZ = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];

  function formatDateISO(date) {
    var y = date.getFullYear();
    var m = String(date.getMonth() + 1).padStart(2, '0');
    var d = String(date.getDate()).padStart(2, '0');
    return y + '-' + m + '-' + d;
  }

  function isoWochentag(date) {
    var tag = date.getDay(); // 0=So ... 6=Sa
    return tag === 0 ? 7 : tag; // 1=Mo ... 7=So
  }

  function dateOnly(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }

  function addTage(date, n) {
    var d = new Date(date);
    d.setDate(d.getDate() + n);
    return d;
  }

  function zugFaehrtAm(zug, datum) {
    var iso = formatDateISO(datum);
    if (iso < daten.saison.von || iso > daten.saison.bis) return false;
    if (zug.gueltigAb && iso < zug.gueltigAb) return false;
    if (zug.gueltigBis && iso > zug.gueltigBis) return false;
    if (zug.wochentage && zug.wochentage.indexOf(isoWochentag(datum)) === -1) return false;
    return true;
  }

  /**
   * Sucht die nächste Abfahrt zwischen zwei Stationen ab einem Zeitpunkt.
   * Prüft "jetzt" und die folgenden 60 Tage. Gibt null zurück, wenn in diesem
   * Zeitraum keine passende Fahrt gefunden wird (z. B. außerhalb der Saison).
   */
  function naechsteAbfahrt(vonStation, nachStation, jetzt) {
    var heute = dateOnly(jetzt);
    for (var tag = 0; tag <= 60; tag++) {
      var datum = addTage(heute, tag);
      var kandidaten = [];
      daten.zuege.forEach(function (zug) {
        if (!zugFaehrtAm(zug, datum)) return;
        var vonIdx = -1, nachIdx = -1;
        zug.halte.forEach(function (halt, i) {
          if (halt.station === vonStation && vonIdx === -1) vonIdx = i;
          if (halt.station === nachStation) nachIdx = i;
        });
        if (vonIdx === -1 || nachIdx === -1 || nachIdx <= vonIdx) return;
        var zeit = zug.halte[vonIdx].zeit;
        if (tag === 0) {
          var teile = zeit.split(':').map(Number);
          var abfahrt = new Date(datum.getFullYear(), datum.getMonth(), datum.getDate(), teile[0], teile[1]);
          if (abfahrt <= jetzt) return;
        }
        kandidaten.push({ zeit: zeit, datum: datum, zug: zug.nr });
      });
      if (kandidaten.length) {
        kandidaten.sort(function (a, b) { return a.zeit.localeCompare(b.zeit); });
        return { tag: tag, datum: kandidaten[0].datum, zeit: kandidaten[0].zeit, zug: kandidaten[0].zug };
      }
    }
    return null;
  }

  function formatTagLabel(tag, datum) {
    if (tag === 0) return 'Heute';
    if (tag === 1) return 'Morgen';
    var wt = WOCHENTAGE_KURZ[datum.getDay()];
    var tt = String(datum.getDate()).padStart(2, '0');
    var mm = String(datum.getMonth() + 1).padStart(2, '0');
    return wt + ', ' + tt + '.' + mm + '.';
  }

  /**
   * Liefert ALLE Abfahrten zwischen zwei Stationen für den nächsten Tag, an
   * dem auf dieser Verbindung überhaupt etwas fährt (heute, falls die Saison
   * heute schon läuft und es Fahrten gibt - sonst der nächste passende Tag,
   * bis zu 60 Tage voraus). Anders als naechsteAbfahrt() wird hier nicht nach
   * der einen nächsten Fahrt gesucht, sondern der komplette Tagesfahrplan
   * dieser Richtung zurückgegeben (auch bereits vergangene Zeiten DES NOCH
   * NICHT KOMPLETT VERSTRICHENEN Tages, siehe unten) - für die "Nächste
   * Abfahrten"-Box auf der Startseite, die alle Abfahrten des Tages zeigen
   * soll statt nur der nächsten einzelnen.
   *
   * Dynamisches Verhalten (07.07.2026 ergänzt, war im ersten Entwurf verloren
   * gegangen): Ist die letzte Abfahrt des heutigen Tages für diese Richtung
   * bereits vorbei, wird NICHT der (dann komplett in der Vergangenheit
   * liegende) heutige Tag zurückgegeben, sondern automatisch zum nächsten
   * Tag mit Verkehr weitergesucht - genau wie es naechsteAbfahrt() schon für
   * die einzelne nächste Abfahrt tut. Das sorgt dafür, dass z. B. nach der
   * letzten Abfahrt des Tages automatisch "Morgen" (oder das Datum, falls
   * noch weiter in der Zukunft) statt eines veralteten "Heute" angezeigt
   * wird. Solange mindestens eine Abfahrt des heutigen Tages noch aussteht,
   * werden weiterhin ALLE heutigen Zeiten gezeigt (auch bereits vergangene),
   * wie ursprünglich gewünscht - nur ein komplett verstrichener Tag wird
   * übersprungen.
   *
   * Gibt { tag, datum, zeiten: ['10:00', '11:22', ...] } zurück, oder null,
   * wenn im gesamten Zeitraum keine Fahrt gefunden wird.
   */
  function tagesAbfahrten(vonStation, nachStation, jetzt) {
    var heute = dateOnly(jetzt);
    for (var tag = 0; tag <= 60; tag++) {
      var datum = addTage(heute, tag);
      var zeiten = [];
      daten.zuege.forEach(function (zug) {
        if (!zugFaehrtAm(zug, datum)) return;
        var vonIdx = -1, nachIdx = -1;
        zug.halte.forEach(function (halt, i) {
          if (halt.station === vonStation && vonIdx === -1) vonIdx = i;
          if (halt.station === nachStation) nachIdx = i;
        });
        if (vonIdx === -1 || nachIdx === -1 || nachIdx <= vonIdx) return;
        zeiten.push(zug.halte[vonIdx].zeit);
      });
      if (!zeiten.length) continue;
      zeiten.sort(function (a, b) { return a.localeCompare(b); });
      if (tag === 0) {
        var letzteZeitVorbei = zeiten.every(function (zeit) {
          var teile = zeit.split(':').map(Number);
          var abfahrt = new Date(datum.getFullYear(), datum.getMonth(), datum.getDate(), teile[0], teile[1]);
          return abfahrt <= jetzt;
        });
        if (letzteZeitVorbei) continue; // heute komplett vorbei -> nächsten Tag suchen
      }
      return { tag: tag, datum: datum, zeiten: zeiten };
    }
    return null;
  }

  return {
    daten: daten,
    naechsteAbfahrt: naechsteAbfahrt,
    tagesAbfahrten: tagesAbfahrten,
    formatTagLabel: formatTagLabel
  };
})(FAHRPLAN_SOMMER_2026);
