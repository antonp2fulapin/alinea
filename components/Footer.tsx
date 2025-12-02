import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-charcoal border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="text-xl font-serif font-semibold text-charcoal dark:text-white">Alinea Immobilien GmbH</div>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
            Markgrafenstraße 15<br />
            60487 Frankfurt am Main
          </p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Telefon: +49 69 348 798 450<br />
            E-Mail: info@alinea-ffm.de
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-charcoal dark:text-gray-100">Rechtliches</h4>
          <div className="mt-3 flex flex-col space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <Link href="/impressum" className="hover:text-gold">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-gold">Datenschutzerklärung</Link>
            <Link href="/agb" className="hover:text-gold">AGB</Link>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-charcoal dark:text-gray-100">Gesellschaftsangaben</h4>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
            Gegenstand: Ankauf, Verkauf, Verwaltung und Vermittlung von Immobilien.<br />
            Stammkapital: 25.000,00 EUR<br />
            Geschäftsführer: Carl-Christoph Schiller (einzelvertretungsberechtigt)<br />
            USt-IdNr.: DE496071812
          </p>
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-black/20">
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-gray-500 dark:text-gray-400 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Alinea Immobilien GmbH – Frankfurt am Main.</span>
          <span>Website: https://alinea-ffm.de</span>
        </div>
      </div>
    </footer>
  );
}
