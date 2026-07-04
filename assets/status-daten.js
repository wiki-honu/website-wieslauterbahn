/**
 * ============================================================================
 *  STATUS-BANNER — die schmale Hinweisleiste, die auf JEDER Seite der Website
 *  direkt unter dem Menü erscheint (z. B. "Status: Eingeschränkter Betrieb").
 * ============================================================================
 *
 * SO ÄNDERST DU DEN STATUS VON HAND:
 *   1. Diese Datei mit einem einfachen Texteditor öffnen (z. B. Editor/Notepad).
 *   2. Nur die Werte HINTER dem Doppelpunkt ändern, die Anführungszeichen und
 *      Kommas bitte so lassen wie sie sind.
 *   3. Datei speichern — fertig. Beim nächsten Öffnen einer Seite im Browser
 *      erscheint automatisch der neue Text auf ALLEN 9 Seiten der Website.
 *
 * DIE FELDER IM EINZELNEN:
 *   aktiv      true  = Leiste wird angezeigt.
 *              false = Leiste wird komplett ausgeblendet (z. B. wenn gerade
 *                      nichts Besonderes mitzuteilen ist).
 *
 *   ampel      Bestimmt die Farbe des kleinen Punkts und der Leiste:
 *                "gruen" = Normalbetrieb / alles läuft wie geplant
 *                "gelb"  = Achtung / Einschränkung (z. B. Bauarbeiten, Ersatzverkehr)
 *                "rot"   = kein Betrieb / wichtige Störung
 *              Bitte GENAU eines dieser drei Wörter verwenden (klein geschrieben,
 *              in Anführungszeichen).
 *
 *   kurztext   Kurzer, fett gedruckter Status-Name, z. B. "Eingeschränkter Betrieb"
 *              oder "Planmäßiger Betrieb". Wird automatisch mit "Status: " davor
 *              angezeigt — das Wort "Status:" hier also NICHT selbst eintippen.
 *
 *   langtext   Der ausführlichere Satz daneben, z. B. mit Datum/Grund. Kann auch
 *              ein leerer Text "" sein, wenn der Kurztext schon alles sagt.
 *
 * WICHTIG BEI ZWEI DESIGN-VARIANTEN:
 *   Es gibt aktuell zwei parallele Design-Versionen der Website (Ordner
 *   "prototyp" = Grün/Gold und "prototyp-rot" = Rot). Diese Datei muss in
 *   BEIDEN Ordnern (jeweils unter assets/status-daten.js) denselben Inhalt
 *   haben. Am einfachsten: Änderung einmal machen, dann die Datei in den
 *   jeweils anderen assets-Ordner kopieren (überschreiben).
 * ============================================================================
 */

var WLB_STATUS = {
  aktiv: true,
  ampel: "gelb",
  kurztext: "Eingeschränkter Betrieb",
  langtext: "Bauarbeiten zwischen Dahn Süd und Bundenthal-Rumbach – Schienenersatzverkehr eingerichtet, gültig bis 04.10.2026."
};
