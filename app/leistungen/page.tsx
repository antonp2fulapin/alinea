import Image from 'next/image';

const services = [
  {
    title: 'Immobilienankauf',
    description:
      'Wir identifizieren renditestarke Wohn- und Gewerbeimmobilien in Frankfurt und prüfen Substanz, Mietverträge sowie Entwicklungspotenziale, bevor wir ein Angebot abgeben.',
    image: 'https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Immobilienverkauf',
    description:
      'Von der marktfähigen Bewertung über die Erstellung aussagekräftiger Exposés bis zur Käuferauswahl – wir orchestrieren den Verkauf diskret und verbindlich.',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Immobilienverwaltung',
    description:
      'Technische und kaufmännische Verwaltung aus einer Hand: Kostenkontrolle, Instandhaltungsplanung, Mieterkommunikation und rechtssichere Abrechnungen.',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Vermittlung',
    description:
      'Wir verbinden seriöse Käufer und Verkäufer, moderieren Verhandlungen und sorgen für klare Entscheidungsgrundlagen inklusive Due-Diligence-Unterstützung.',
    image: 'https://images.unsplash.com/photo-1529429617124-aee7a16f8bb5?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Immobilienberatung',
    description:
      'Standortanalysen, Investment-Strategien und Portfolio-Optimierung mit Fokus auf nachhaltige Erträge im Rhein-Main-Gebiet.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80',
  },
];

export const metadata = {
  title: 'Leistungen | Alinea Immobilien GmbH',
  description: 'Überblick über Ankauf, Verkauf, Verwaltung, Vermittlung und Beratung von Alinea Immobilien in Frankfurt.',
};

export default function LeistungenPage() {
  return (
    <div className="section bg-gray-50 dark:bg-black/10">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="font-serif text-3xl font-semibold text-charcoal dark:text-white">Unsere Leistungen</h1>
        <p className="mt-3 text-gray-700 dark:text-gray-300">
          Alinea Immobilien GmbH begleitet Eigentümer, Investoren und Projektentwickler entlang des gesamten Lebenszyklus
          einer Immobilie. Wir arbeiten analytisch, transparent und mit klaren Strukturen, damit Entscheidungen belastbar
          und Ergebnisse nachhaltig sind.
        </p>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="card grid gap-4 md:grid-cols-5 md:items-center">
              <div className="relative h-40 overflow-hidden rounded-lg md:col-span-2">
                <Image src={service.image} alt={service.title} fill className="object-cover" />
              </div>
              <div className="md:col-span-3">
                <h2 className="text-xl font-semibold text-charcoal dark:text-white">{service.title}</h2>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
