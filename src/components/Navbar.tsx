'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useState } from 'react';
import {
  FaInstagram,
  FaTwitch,
  FaTiktok,
  FaYoutube,
  FaSearch,
} from 'react-icons/fa';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Playlists', href: '/playlists' },
  { label: 'Noticias', href: '/noticias' },
  { label: 'Podcasts', href: '/podcasts' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
<nav className="navbar sticky top-0 z-50 border-b border-black px-4 pt-3 pb-6">
      <div className="relative flex items-center justify-between max-w-screen-xl mx-auto">
        {/* Izquierda: links */}
        <ul className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={clsx(
                  'text-sm font-black uppercase transition-colors',
                  pathname === item.href
                    ? 'text-[var(--color-primary)]'
                    : 'text-black hover:text-[var(--color-primary-hover)]'
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Logo centrado sobresaliendo */}
        <div className=" left-1/2 -translate-x-1/2 -top-6 z-20">
  <Link href="/">
    <Image
      src="/logo.png"
      alt="Sextafeira Logo"
      width={120}
      height={120}
      className="drop-shadow-xl"
      priority
    />
  </Link>
</div>


        {/* Derecha: íconos sociales */}
        <div className="hidden md:flex gap-4 items-center text-black text-xl">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://twitch.tv" target="_blank" rel="noopener noreferrer">
            <FaTwitch />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <FaTiktok />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
          <FaSearch className="cursor-pointer" />
        </div>

        {/* Botón hamburguesa mobile */}
        <button
          className="md:hidden text-black text-2xl z-30"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Menú mobile desplegable */}
      {menuOpen && (
        <ul className="mt-3 flex flex-col gap-2 md:hidden bg-[#fff8e6] border-t border-black py-2 px-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={clsx(
                  'block text-sm font-bold uppercase px-2 py-1 rounded transition-colors',
                  pathname === item.href
                    ? 'text-[var(--color-primary)]'
                    : 'text-black hover:text-[var(--color-primary-hover)]'
                )}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <div className="flex gap-4 text-xl pt-2">
            <FaInstagram />
            <FaTwitch />
            <FaTiktok />
            <FaYoutube />
            <FaSearch />
          </div>
        </ul>
      )}
    </nav>
  );
}
