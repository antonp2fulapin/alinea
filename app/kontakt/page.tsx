export const metadata = {
  title: 'Kontakt | Alinea Immobilien GmbH',
  description: 'Kontaktieren Sie Alinea Immobilien GmbH in Frankfurt am Main für Ankauf, Verkauf und Verwaltung.',
};

export default function KontaktPage() {
  return (
    <div className="section bg-gray-50 dark:bg-black/10">
      <div className="mx-auto max-w-6xl px-4 grid gap-10 lg:grid-cols-2">
        <div>
          <h1 className="font-serif text-3xl font-semibold text-charcoal dark:text-white">Kontakt</h1>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            Wir freuen uns auf Ihre Anfrage. Schreiben Sie uns für eine vertrauliche Erstberatung oder rufen Sie uns direkt an.
            Termine sind nach Vereinbarung auch kurzfristig möglich.
          </p>
          <div className="mt-6 space-y-3 text-gray-700 dark:text-gray-300">
            <p>
              <strong>Alinea Immobilien GmbH</strong><br />
              Markgrafenstraße 15<br />
              60487 Frankfurt am Main
            </p>
            <p>
              Telefon: <a href="tel:+4969348798450" className="text-gold font-semibold">+49 69 348 798 450</a><br />
              E-Mail: <a href="mailto:info@alinea-ffm.de" className="text-gold font-semibold">info@alinea-ffm.de</a><br />
              Website: <a href="https://alinea-ffm.de" className="text-gold font-semibold">https://alinea-ffm.de</a>
            </p>
            <p>Geschäftszeiten: Montag–Freitag 9:00–18:00 Uhr</p>
          </div>
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold text-charcoal dark:text-white">Kontaktformular</h2>
          <form className="mt-4 space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">Name</label>
              <input
                type="text"
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-800 focus:border-gold focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
                placeholder="Ihr Name"
                required
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">E-Mail</label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-800 focus:border-gold focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
                  placeholder="name@domain.de"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">Telefon</label>
                <input
                  type="tel"
                  className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-800 focus:border-gold focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
                  placeholder="Optional"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">Nachricht</label>
              <textarea
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-800 focus:border-gold focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
                rows={4}
                placeholder="Wie können wir helfen?"
                required
              />
            </div>
            <button type="submit" className="btn-primary">Absenden</button>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß unserer Datenschutzerklärung zu.
            </p>
          </form>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-6xl px-4">
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <iframe
            title="Anfahrt Alinea Immobilien GmbH"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2521.179600638422!2d8.647998076778984!3d50.1233931129269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0a5cfb9c6c87%3A0x8bc5727f54d87b78!2sMarkgrafenstra%C3%9Fe%2015%2C%2060487%20Frankfurt%20am%20Main!5e0!3m2!1sde!2sde!4v1725200000000!5m2!1sde!2sde"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
