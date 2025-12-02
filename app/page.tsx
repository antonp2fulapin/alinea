import Image from 'next/image';
import Link from 'next/link';

const heroImage = 'https://images.unsplash.com/photo-1505692069463-5e3405e3e7ee?auto=format&fit=crop&w=1600&q=80';
const skylineImage = 'https://images.unsplash.com/photo-1529429617124-aee7a16f8bb5?auto=format&fit=crop&w=1400&q=80';
const interiorImage = 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80';
const consultingImage = 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80';

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-charcoal text-white">
        <Image
          src={heroImage}
          alt="Frankfurter Luxusimmobilie"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="relative mx-auto flex max-w-6xl flex-col items-start px-4 py-24 md:py-32">
          <div className="rounded-full border border-white/40 px-4 py-2 text-xs uppercase tracking-[0.2em] text-gray-100">
            Frankfurt am Main · Premium Immobilien
          </div>
          <h1 className="mt-6 max-w-3xl font-serif text-4xl font-semibold leading-tight md:text-5xl">
            Alinea Immobilien – Ihr Partner für exklusive Immobilien in Frankfurt am Main
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-gray-100">
            Wir begleiten Sie beim Ankauf, Verkauf, der Verwaltung und Vermittlung von hochwertigen Wohn- und
            Gewerbeimmobilien. Diskret, verbindlich und mit tiefem Marktverständnis.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/leistungen" className="btn-primary">
              Objekte entdecken
            </Link>
            <Link href="/kontakt" className="btn-secondary">
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50 dark:bg-black/10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-charcoal dark:text-white">Unsere Leistungen</h2>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                Wir verbinden fundierte Marktkenntnis mit klarer Kommunikation und sorgen dafür, dass jede Transaktion sicher
                und zielgerichtet verläuft. Alinea Immobilien steht für passgenaue Strategien, transparente Abläufe und ein
                Netzwerk starker Partner in Rhein-Main.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  'Immobilienankauf',
                  'Immobilienverkauf',
                  'Immobilienverwaltung',
                  'Vermittlung',
                  'Immobilienberatung',
                ].map((item) => (
                  <div key={item} className="card">
                    <h3 className="font-semibold text-charcoal dark:text-white">{item}</h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                      Maßgeschneiderte Konzepte, klare Prozesse und persönliche Begleitung in jeder Phase.
                    </p>
                  </div>
                ))}
              </div>
              <Link href="/leistungen" className="mt-6 inline-block text-gold font-semibold hover:underline">
                Mehr erfahren →
              </Link>
            </div>
            <div className="relative h-96 overflow-hidden rounded-2xl shadow-xl">
              <Image src={skylineImage} alt="Frankfurt Skyline" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-6xl px-4 grid gap-10 md:grid-cols-2 md:items-center">
          <div className="relative h-96 overflow-hidden rounded-2xl shadow-xl">
            <Image src={interiorImage} alt="Stilvolles Interieur" fill className="object-cover" />
          </div>
          <div>
            <h2 className="font-serif text-3xl font-semibold text-charcoal dark:text-white">Über uns</h2>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              Alinea Immobilien GmbH verbindet hanseatische Verbindlichkeit mit Frankfurter Dynamik. Wir arbeiten diskret,
              analytisch und mit dem Anspruch, nachhaltige Werte für Eigentümer und Investoren zu schaffen. Unser Team kennt
              die Quartiere, die Mikrolagen und die Anforderungen anspruchsvoller Käufer.
            </p>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              Geschäftsführer Carl-Christoph Schiller verantwortet das Unternehmen mit klarer Handschrift: transparente
              Kommunikation, strukturierte Prozesse und ein Höchstmaß an Professionalität – von der Marktsondierung bis zum
              Notartermin.
            </p>
            <Link href="/ueber-uns" className="mt-6 inline-block text-gold font-semibold hover:underline">
              Team kennenlernen →
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50 dark:bg-black/10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {[{ title: 'Warum Alinea', text: 'Lokale Marktkenntnis, strukturierte Prozesse und absolute Verlässlichkeit in jeder Phase der Transaktion.' },
              { title: 'Werteorientiert', text: 'Transparente Beratung, kaufmännische Sorgfalt und langfristiges Denken für Eigentümer und Anleger.' },
              { title: 'Frankfurt Fokus', text: 'Mikrolagenkenntnis von Westend bis Sachsenhausen, ergänzt um starke Partner im Rhein-Main-Gebiet.' }].map((item) => (
              <div key={item.title} className="card">
                <h3 className="font-semibold text-charcoal dark:text-white">{item.title}</h3>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-6xl px-4 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-charcoal dark:text-white">Beratung auf Augenhöhe</h2>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              Wir analysieren Ihr Objekt, strukturieren Entscheidungsgrundlagen und entwickeln Vermarktungsstrategien mit
              klaren Meilensteinen. Diskrete Direktansprache, digitale Präsentationen und verlässliche Due-Diligence-Prozesse
              sichern reibungslose Abschlüsse.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-gray-700 dark:text-gray-300">
              <span className="rounded-full bg-gray-100 px-3 py-1 dark:bg-gray-800">Standortanalysen</span>
              <span className="rounded-full bg-gray-100 px-3 py-1 dark:bg-gray-800">Investment-Exposés</span>
              <span className="rounded-full bg-gray-100 px-3 py-1 dark:bg-gray-800">Off-Market Mandate</span>
              <span className="rounded-full bg-gray-100 px-3 py-1 dark:bg-gray-800">Nachhaltige Verwaltung</span>
            </div>
          </div>
          <div className="relative h-96 overflow-hidden rounded-2xl shadow-xl">
            <Image src={consultingImage} alt="Beratungsszene" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="section bg-charcoal text-white">
        <div className="mx-auto max-w-6xl px-4 flex flex-col items-start md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-serif text-3xl font-semibold">Bereit für den nächsten Schritt?</h2>
            <p className="mt-3 text-gray-200 max-w-xl">
              Vereinbaren Sie einen Gesprächstermin für eine vertrauliche Einschätzung Ihres Immobilienprojekts in Frankfurt
              am Main.
            </p>
          </div>
          <div className="mt-6 flex gap-4 md:mt-0">
            <Link href="/kontakt" className="btn-primary bg-white text-charcoal hover:bg-gray-200">
              Kontakt aufnehmen
            </Link>
            <Link href="tel:+4969348798450" className="btn-secondary border-white text-white hover:bg-white hover:text-charcoal">
              +49 69 348 798 450
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
