'use client';

import Link from 'next/link';

const playlists = [
  {
    id: '0XpzfoxTcfUvZ8P3dURjE2',
    title: 'Hora de La Bestia',
    color: 'bg-[#a93013]',
  },
  {
    id: '1Uots3v7RvnnyPOAlDnj2u',
    title: 'Playlists Inexpertas',
    color: 'bg-[#165f3f]',
  },
];

export default function PlaylistPreview() {
  return (
    <section className="mt-12 px-4 sm:px-6 xl:px-0 max-w-6xl xl:max-w-[1200px] mx-auto">
      <h2 className="text-xl sm:text-2xl font-extrabold bg-black text-white px-4 py-2 rounded-xl inline-block mb-8">
        PLAYLISTS
      </h2>

      <div className="flex flex-wrap gap-6">
        {playlists.map((playlist) => (
          <div
            key={playlist.id}
            className={`rounded-lg overflow-hidden ${playlist.color} max-w-[380px] w-full`}
          >
            <iframe
              src={`https://open.spotify.com/embed/playlist/${playlist.id}?utm_source=generator`}
              width="100%"
              height="352"
              allow="encrypted-media"
              loading="lazy"
            ></iframe>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/playlists"
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition"
        >
          ESCUCHÁ MÁS AQUÍ
        </Link>
      </div>
    </section>
  );
}
