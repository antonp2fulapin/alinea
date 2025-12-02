'use client';

import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { href: '/', label: 'Startseite' },
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/ueber-uns', label: 'Über uns' },
  { href: '/kontakt', label: 'Kontakt' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-gray-200 bg-white/90 backdrop-blur dark:border-gray-800 dark:bg-charcoal/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="text-2xl font-serif font-semibold text-charcoal dark:text-white">
            Alinea <span className="text-gold">Immobilien</span>
          </div>
        </Link>
        <nav className="hidden items-center space-x-6 text-sm font-semibold text-gray-700 dark:text-gray-200 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-gold">
              {item.label}
            </Link>
          ))}
          <Link href="/impressum" className="hover:text-gold">
            Impressum
          </Link>
          <ThemeToggle />
        </nav>
        <button
          className="md:hidden"
          aria-label="Menü"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="block h-0.5 w-6 bg-charcoal dark:bg-white"></span>
          <span className="mt-1 block h-0.5 w-6 bg-charcoal dark:bg-white"></span>
          <span className="mt-1 block h-0.5 w-6 bg-charcoal dark:bg-white"></span>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white dark:border-gray-700 dark:bg-charcoal">
          <div className="flex flex-col space-y-3 px-4 py-4 text-gray-800 dark:text-gray-100">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-gold" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href="/impressum" className="hover:text-gold" onClick={() => setOpen(false)}>
              Impressum
            </Link>
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
