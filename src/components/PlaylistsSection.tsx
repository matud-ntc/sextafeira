'use client';

import Link from 'next/link';

interface Playlist {
  id: string;
  title: string;
  url: string;
}

export default function PlaylistsSection({ playlists }: { playlists: Playlist[] }) {
  return (
    <section className="space-y-8 mt-12">
      <h2 className="text-xl sm:text-2xl font-extrabold bg-[#fff8e6] text-black px-4 py-2 rounded-xl inline-block mb-8 border-4 border-black">
        PLAYLISTS
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {playlists.slice(0, 2).map((playlist) => (
          <div key={playlist.id}>
            <h3 className="text-lg font-semibold mb-2">{playlist.title}</h3>
            <iframe
              src={playlist.url}
              width="100%"
              height="152"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>

      <div className="mt-6">
        <Link
          href="/playlists"
          className="btn-accent inline-block py-2 px-6 rounded-full text-white font-semibold bg-red-600 hover:bg-red-700 transition"
        >
          Escucha más acá
        </Link>
      </div>
    </section>
  );
}
