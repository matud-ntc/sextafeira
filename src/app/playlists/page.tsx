export default function PlaylistsPage() {
  const playlists = [
    {
      id: '0XpzfoxTcfUvZ8P3dURjE2',
      color: 'bg-[#a93013]',
    },
    {
      id: '1Uots3v7RvnnyPOAlDnj2u',
      color: 'bg-[#165f3f]',
    },
  ];

  return (
    <main className="min-h-screen px-4 sm:px-6 xl:px-0 py-12 flex flex-col items-center">
      <div className="w-full max-w-6xl xl:max-w-[1200px] space-y-10">
        <h1 className="text-2xl font-extrabold bg-black text-white px-4 py-2 rounded-xl inline-block">
          PLAYLISTS
        </h1>

        <div className="flex flex-wrap gap-6">
          {playlists.map((playlist) => (
            <div
              key={playlist.id}
              className={`rounded-lg overflow-hidden ${playlist.color} max-w-[500px] w-full`}
            >
              <iframe
                src={`https://open.spotify.com/embed/playlist/${playlist.id}?utm_source=generator`}
                width="100%"
                height="380"
                allow="encrypted-media"
                loading="lazy"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
