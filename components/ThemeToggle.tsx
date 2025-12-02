'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    const prefersDark = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored === 'dark' || (!stored && prefersDark) ? 'dark' : 'light';
    setTheme(initial);
    document.documentElement.classList.toggle('dark', initial === 'dark');
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', nextTheme);
      document.documentElement.classList.toggle('dark', nextTheme === 'dark');
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="ml-4 rounded-full border border-gold px-3 py-2 text-sm font-semibold text-gold hover:bg-gold hover:text-white"
      aria-label="Darstellung wechseln"
    >
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
}
