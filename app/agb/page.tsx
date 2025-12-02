export const metadata = {
  title: 'AGB | Alinea Immobilien GmbH',
  description: 'Allgemeine Geschäftsbedingungen der Alinea Immobilien GmbH für Makler- und Beratungsleistungen.',
};

export default function AgbPage() {
  return (
    <div className="section">
      <div className="mx-auto max-w-5xl px-4 space-y-6 text-gray-700 dark:text-gray-300">
        <h1 className="font-serif text-3xl font-semibold text-charcoal dark:text-white">Allgemeine Geschäftsbedingungen</h1>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-charcoal dark:text-white">1. Geltungsbereich</h2>
          <p>
            Diese AGB gelten für alle Makler-, Beratungs- und Verwaltungsleistungen der Alinea Immobilien GmbH gegenüber
            Auftraggebern und Interessenten. Abweichende Bedingungen erkennen wir nur an, wenn wir ihrer Geltung schriftlich
            zustimmen.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-charcoal dark:text-white">2. Maklervertrag und Vergütung</h2>
          <p>
            Ein Maklervertrag kommt zustande, wenn der Auftraggeber ein Objektangebot annimmt oder unsere Dienste in Anspruch
            nimmt. Die Courtage wird individuell vereinbart; sofern nichts anderes vereinbart ist, gilt die ortsübliche
            Provision bei Zustandekommen eines notariellen Kauf- oder Mietvertrags. Der Anspruch entsteht mit Vertragsabschluss
            und wird 10 Tage nach Rechnungsstellung fällig.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-charcoal dark:text-white">3. Pflichten des Auftraggebers</h2>
          <p>
            Der Auftraggeber informiert uns unverzüglich über bereits geführte Verhandlungen, Vorkenntnisse sowie Änderungen
            der Objekt- oder Preisangaben. Er verpflichtet sich, uns Vertragsabschlüsse unverzüglich mitzuteilen und auf Anfrage
            eine Vertragsabschrift bereitzustellen.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-charcoal dark:text-white">4. Haftung</h2>
          <p>
            Wir haften bei Vorsatz und grober Fahrlässigkeit unbeschränkt. Bei einfacher Fahrlässigkeit haften wir nur bei
            Verletzung wesentlicher Vertragspflichten, begrenzt auf den vorhersehbaren, vertragstypischen Schaden. Eine Haftung
            für Informationen, die uns von Dritten übermittelt wurden, übernehmen wir nur, soweit wir deren Richtigkeit grob
            fahrlässig verkannt haben.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-charcoal dark:text-white">5. Nutzungsrechte an Inhalten</h2>
          <p>
            Inhalte, Exposés, Bilder und Texte dieser Website sind urheberrechtlich geschützt. Eine Nutzung, Vervielfältigung
            oder Weitergabe ist nur mit vorheriger schriftlicher Zustimmung der Alinea Immobilien GmbH zulässig.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-charcoal dark:text-white">6. Datenschutz</h2>
          <p>
            Wir verarbeiten personenbezogene Daten im Einklang mit der Datenschutzerklärung auf dieser Website. Auftraggeber
            bestätigen, diese zur Kenntnis genommen zu haben.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-charcoal dark:text-white">7. Schlussbestimmungen</h2>
          <p>
            Es gilt deutsches Recht. Gerichtsstand für Kaufleute ist Frankfurt am Main. Sollten einzelne Bestimmungen dieser
            AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Regelungen unberührt; anstelle der unwirksamen Klausel tritt
            die gesetzliche Regelung.
          </p>
        </section>
      </div>
    </div>
  );
}
