export const metadata = {
  title: 'Datenschutzerklärung | Alinea Immobilien GmbH',
  description: 'Datenschutzhinweise der Alinea Immobilien GmbH für Website, Hosting, Kontaktformular und Kommunikation.',
};

export default function DatenschutzPage() {
  return (
    <div className="section bg-gray-50 dark:bg-black/10">
      <div className="mx-auto max-w-5xl px-4 space-y-6 text-gray-700 dark:text-gray-300">
        <h1 className="font-serif text-3xl font-semibold text-charcoal dark:text-white">Datenschutzerklärung</h1>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-charcoal dark:text-white">1. Verantwortlicher</h2>
          <p>
            Alinea Immobilien GmbH<br />
            Markgrafenstraße 15, 60487 Frankfurt am Main<br />
            Telefon: +49 69 348 798 450 · E-Mail: info@alinea-ffm.de
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-charcoal dark:text-white">2. Hosting</h2>
          <p>
            Diese Website wird bei Vercel (Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA) gehostet. Beim Aufruf
            der Seiten werden serverseitig Logfiles (IP-Adresse, Datum, Uhrzeit, Browsertyp, Referrer) gespeichert, um einen
            sicheren Betrieb zu gewährleisten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; das berechtigte Interesse liegt
            in der technischen Bereitstellung und Sicherheit des Webangebots. Die Daten werden in der Regel nach 14 Tagen
            gelöscht.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-charcoal dark:text-white">3. Zugriffsdaten & Logfiles</h2>
          <p>
            Bei jedem Zugriff werden automatisch technische Informationen erfasst. Dazu gehören IP-Adresse, Datum und Uhrzeit
            der Anfrage, aufgerufene URL, HTTP-Statuscode, übertragene Datenmenge sowie Browser- und Betriebssysteminformationen.
            Eine Zusammenführung mit anderen Daten erfolgt nicht.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-charcoal dark:text-white">4. Cookies</h2>
          <p>
            Die Website verwendet lediglich technisch notwendige Cookies für Sicherheitsfunktionen und ggf. die Speicherung
            Ihrer Darstellungspräferenzen (z. B. Dark-Mode). Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Sie können Cookies
            über Ihre Browsereinstellungen löschen oder blockieren.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-charcoal dark:text-white">5. Kontaktformular und E-Mail</h2>
          <p>
            Wenn Sie uns über das Formular oder per E-Mail kontaktieren, verarbeiten wir Ihre Angaben (Name, E-Mail, optional
            Telefonnummer, Inhalt der Nachricht) zur Bearbeitung der Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO,
            soweit es um vorvertragliche Maßnahmen geht, ansonsten Art. 6 Abs. 1 lit. f DSGVO. Die Daten werden gelöscht,
            sobald Ihre Anfrage abschließend beantwortet ist, sofern keine gesetzlichen Aufbewahrungsfristen entgegenstehen.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-charcoal dark:text-white">6. Datenkategorien</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>Stammdaten: Name, Kontaktdaten</li>
            <li>Kommunikationsdaten: E-Mails, Nachrichteninhalte, Telefonnotizen</li>
            <li>Nutzungsdaten: IP-Adresse, Zugriffszeit, aufgerufene Seiten</li>
            <li>Metadaten: Browsertyp, Betriebssystem, Referrer</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-charcoal dark:text-white">7. Weitergabe von Daten</h2>
          <p>
            Eine Weitergabe an Dritte erfolgt nur, wenn dies zur Vertragserfüllung erforderlich ist (z. B. Notare, Behörden),
            eine gesetzliche Verpflichtung besteht oder Sie eingewilligt haben. Dienstleister wie Hosting-Anbieter handeln als
            Auftragsverarbeiter nach Art. 28 DSGVO.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-charcoal dark:text-white">8. Drittanbieter-Inhalte</h2>
          <p>
            Die Website bindet Google Maps (Google Ireland Limited) zur Standortanzeige sowie Bilder von Unsplash/Pexels über
            HTTPS ein. Beim Laden können IP-Adresse und technische Daten an die Anbieter übertragen werden. Rechtsgrundlage ist
            Art. 6 Abs. 1 lit. f DSGVO; das berechtigte Interesse liegt in der nutzerfreundlichen Darstellung unseres Standorts
            und der visuellen Aufbereitung unserer Leistungen.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-charcoal dark:text-white">9. SSL/TLS-Verschlüsselung</h2>
          <p>
            Unsere Website nutzt SSL/TLS-Verschlüsselung. Sie erkennen dies an „https“ in der Adresszeile des Browsers. Daten,
            die Sie an uns übermitteln, können dadurch nicht von Dritten mitgelesen werden.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-charcoal dark:text-white">10. Speicherdauer</h2>
          <p>
            Wir verarbeiten personenbezogene Daten nur so lange, wie es für die genannten Zwecke erforderlich ist oder
            gesetzliche Aufbewahrungsfristen bestehen. Danach werden die Daten gelöscht oder anonymisiert.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-charcoal dark:text-white">11. Ihre Rechte</h2>
          <p>
            Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertrag
            barkeit sowie Widerspruch gegen die Verarbeitung (Art. 15–21 DSGVO). Zudem besteht ein Beschwerderecht bei einer
            Datenschutzaufsichtsbehörde.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-charcoal dark:text-white">12. Widerruf von Einwilligungen</h2>
          <p>
            Soweit wir Daten auf Basis Ihrer Einwilligung verarbeiten, können Sie diese jederzeit mit Wirkung für die Zukunft
            widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt unberührt.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-charcoal dark:text-white">13. Pflicht zur Bereitstellung</h2>
          <p>
            Die Bereitstellung personenbezogener Daten ist nicht gesetzlich vorgeschrieben. Für die Nutzung des
            Kontaktformulars sind jedoch Name und E-Mail-Adresse erforderlich, um eine Antwort zu ermöglichen.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-charcoal dark:text-white">14. Stand</h2>
          <p>Stand: Dezember 2025. Wir aktualisieren diese Datenschutzerklärung bei Bedarf.</p>
        </section>
      </div>
    </div>
  );
}
