import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-gray-50 px-4 text-center dark:bg-black/10">
      <div className="max-w-xl space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-gray-500">404</p>
        <h1 className="font-serif text-4xl font-semibold text-charcoal dark:text-white">Seite nicht gefunden</h1>
        <p className="text-gray-700 dark:text-gray-300">
          Die angeforderte Seite existiert nicht oder wurde verschoben. Kehren Sie zur Startseite zurück oder kontaktieren Sie
          uns für Unterstützung.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/" className="btn-primary">
            Zur Startseite
          </Link>
          <Link href="/kontakt" className="btn-secondary">
            Kontakt
          </Link>
        </div>
      </div>
    </div>
  );
}
