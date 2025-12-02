import Image from 'next/image';

const portrait = 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80';
const skyline = 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1400&q=80';

export const metadata = {
  title: 'Über uns | Alinea Immobilien GmbH',
  description: 'Lernen Sie die Alinea Immobilien GmbH und Geschäftsführer Carl-Christoph Schiller kennen.',
};

export default function UeberUnsPage() {
  return (
    <div className="section">
      <div className="mx-auto max-w-6xl px-4 space-y-12">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="font-serif text-3xl font-semibold text-charcoal dark:text-white">Alinea Immobilien GmbH</h1>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              Wir sind eine inhabergeführte Immobiliengesellschaft mit Sitz in Frankfurt am Main. Unser Fokus liegt auf dem
              Ankauf, Verkauf, der Verwaltung und Vermittlung hochwertiger Wohn- und Gewerbeimmobilien im Rhein-Main-Gebiet.
              Wir verbinden datenbasierte Analysen mit persönlicher Betreuung.
            </p>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              Unsere Mandanten profitieren von klaren Entscheidungsgrundlagen, belastbaren Bewertungen und transparenten
              Prozessen. Wir verstehen die Dynamik der Frankfurter Stadtteile – von Bockenheim und Westend bis Sachsenhausen –
              und stellen sicher, dass jedes Projekt zur Lage und zum Markt passt.
            </p>
          </div>
          <div className="relative h-80 overflow-hidden rounded-2xl shadow-xl">
            <Image src={skyline} alt="Frankfurt am Main" fill className="object-cover" />
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[{ title: 'Präzision', text: 'Wir arbeiten strukturiert, dokumentiert und nachvollziehbar – vom Erstgespräch bis zur Übergabe.' },
            { title: 'Vertraulichkeit', text: 'Diskrete Prozesse, direkte Ansprechpartner und höchste Sorgfalt im Umgang mit sensiblen Informationen.' },
            { title: 'Partnerschaft', text: 'Wir denken langfristig und begleiten Eigentümer wie Investoren über den Abschluss hinaus.' }].map((item) => (
            <div key={item.title} className="card">
              <h3 className="text-lg font-semibold text-charcoal dark:text-white">{item.title}</h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="relative h-80 overflow-hidden rounded-2xl shadow-xl">
            <Image src={portrait} alt="Geschäftsführer" fill className="object-cover" />
          </div>
          <div>
            <h2 className="font-serif text-2xl font-semibold text-charcoal dark:text-white">Geschäftsführer Carl-Christoph Schiller</h2>
            <p className="mt-3 text-gray-700 dark:text-gray-300">
              Carl-Christoph Schiller (geb. 17.12.1986 in Frankfurt am Main) führt die Alinea Immobilien GmbH als
              einzelvertretungsberechtigter Geschäftsführer. Seine Erfahrung in Transaktionsberatung, Standortanalysen und
              Portfolioentwicklung bildet die Grundlage für die strukturierte Arbeitsweise des Unternehmens.
            </p>
            <p className="mt-3 text-gray-700 dark:text-gray-300">
              Er legt Wert auf transparente Kommunikation, kaufmännische Genauigkeit und eine verbindliche Begleitung bis zur
              notariellen Beurkundung. Für Mandanten bedeutet das: ein Ansprechpartner, klare Schritte und messbare Resultate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
